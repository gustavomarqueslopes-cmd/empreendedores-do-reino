import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const sourceUrl = process.argv[2] ?? 'http://127.0.0.1:4174/';
const repositoryName = 'empreendedores-do-reino';
const basePath = `/${repositoryName}`;
const projectDirectory = process.cwd();
const outputDirectory = path.resolve(projectDirectory, 'docs');
const expectedOutputDirectory = path.join(projectDirectory, 'docs');

if (outputDirectory !== expectedOutputDirectory) {
  throw new Error('Refusing to export outside the project docs directory.');
}

const response = await fetch(sourceUrl);
if (!response.ok) {
  throw new Error(`Could not render the homepage: ${response.status}`);
}

let html = await response.text();

// GitHub Pages serves project sites from /<repository>/, while the production
// server emits root-relative asset URLs. Rewrite both HTML attributes and the
// escaped URLs embedded in the RSC bootstrap payload.
html = html
  .replaceAll('="/', `="${basePath}/`)
  .replaceAll('\\"/', `\\"${basePath}/`);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(path.join(projectDirectory, 'dist', 'client'), outputDirectory, {
  recursive: true,
});
await writeFile(path.join(outputDirectory, 'index.html'), html, 'utf8');
await writeFile(path.join(outputDirectory, '404.html'), html, 'utf8');
await writeFile(path.join(outputDirectory, '.nojekyll'), '', 'utf8');

console.log(`GitHub Pages export created at ${outputDirectory}`);
