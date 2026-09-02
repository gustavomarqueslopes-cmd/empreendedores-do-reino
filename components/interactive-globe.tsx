'use client';

import { useEffect, useRef } from 'react';

const nodes = [
  [-15.8,-47.9],[-23.5,-46.6],[-22.9,-43.2],[-12.9,-38.5],[-3.7,-38.5],[-30,-51.2],
  [40.7,-74],[37.8,-122.4],[51.5,-.1],[48.9,2.3],[52.5,13.4],[25.2,55.3],
  [1.3,103.8],[35.7,139.7],[19.1,72.9],[-33.9,151.2],[-1.3,36.8],[6.5,3.4],
];

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotation = useRef({ x: -0.22, y: -0.55 });
  const pointer = useRef({ active: false, x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    let last = performance.now();
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 2);
      width = rect.width; height = rect.height;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (latDeg: number, lonDeg: number, radius: number, cx: number, cy: number) => {
      const lat = latDeg * Math.PI / 180;
      const lon = lonDeg * Math.PI / 180 + rotation.current.y;
      let x = Math.cos(lat) * Math.sin(lon);
      let y = -Math.sin(lat);
      let z = Math.cos(lat) * Math.cos(lon);
      const cos = Math.cos(rotation.current.x), sin = Math.sin(rotation.current.x);
      const ry = y * cos - z * sin;
      const rz = y * sin + z * cos;
      return { x: cx + x * radius, y: cy + ry * radius, z: rz };
    };

    const drawCurve = (points: Array<{x:number;y:number;z:number}>, color: string, lineWidth: number) => {
      let drawing = false;
      ctx.beginPath();
      for (const p of points) {
        if (p.z > -0.02) { if (!drawing) { ctx.moveTo(p.x,p.y); drawing=true; } else ctx.lineTo(p.x,p.y); }
        else drawing=false;
      }
      ctx.strokeStyle=color; ctx.lineWidth=lineWidth; ctx.stroke();
    };

    const render = (now: number) => {
      const delta = Math.min(32, now-last); last=now;
      if (!pointer.current.active && !reduceMotion) rotation.current.y += delta * 0.000075;
      ctx.clearRect(0,0,width,height);
      const cx = width*.54, cy = height*.47, radius = Math.min(width,height)*.34;

      const glow = ctx.createRadialGradient(cx,cy,radius*.05,cx,cy,radius*1.45);
      glow.addColorStop(0,'rgba(71,145,202,.18)'); glow.addColorStop(.55,'rgba(36,97,148,.09)'); glow.addColorStop(1,'rgba(36,97,148,0)');
      ctx.fillStyle=glow; ctx.beginPath(); ctx.arc(cx,cy,radius*1.45,0,Math.PI*2); ctx.fill();

      const sphere = ctx.createRadialGradient(cx-radius*.3,cy-radius*.35,radius*.05,cx,cy,radius);
      sphere.addColorStop(0,'rgba(63,128,177,.28)'); sphere.addColorStop(.72,'rgba(13,48,78,.18)'); sphere.addColorStop(1,'rgba(3,17,31,.12)');
      ctx.fillStyle=sphere; ctx.beginPath(); ctx.arc(cx,cy,radius,0,Math.PI*2); ctx.fill();

      for(let lon=0;lon<360;lon+=20){const pts=[];for(let lat=-90;lat<=90;lat+=3)pts.push(project(lat,lon,radius,cx,cy));drawCurve(pts,'rgba(137,195,232,.20)',.7)}
      for(let lat=-75;lat<=75;lat+=15){const pts=[];for(let lon=0;lon<=360;lon+=3)pts.push(project(lat,lon,radius,cx,cy));drawCurve(pts,'rgba(137,195,232,.16)',.65)}

      ctx.save(); ctx.shadowBlur=14; ctx.shadowColor='rgba(239,182,103,.85)';
      for (const [lat,lon] of nodes) { const p=project(lat,lon,radius,cx,cy); if(p.z>0){const size=1.7+p.z*2.2;ctx.fillStyle=`rgba(248,197,125,${.35+p.z*.6})`;ctx.beginPath();ctx.arc(p.x,p.y,size,0,Math.PI*2);ctx.fill();} }
      ctx.restore();

      const orbit = (tilt:number,scale:number,speed:number,offset:number) => {
        ctx.save(); ctx.translate(cx,cy); ctx.rotate(tilt); ctx.strokeStyle='rgba(239,182,103,.24)';ctx.lineWidth=.8;ctx.beginPath();ctx.ellipse(0,0,radius*scale,radius*.34*scale,0,0,Math.PI*2);ctx.stroke();
        const a=now*speed+offset, sx=Math.cos(a)*radius*scale, sy=Math.sin(a)*radius*.34*scale;
        ctx.shadowBlur=18;ctx.shadowColor='#efb667';ctx.fillStyle='#f6d39e';ctx.beginPath();ctx.arc(sx,sy,3.2,0,Math.PI*2);ctx.fill();ctx.restore();
      };
      orbit(-.38,1.22,.00042,0); orbit(.62,1.12,.00032,2.1);
      frame=requestAnimationFrame(render);
    };

    const down=(e:PointerEvent)=>{pointer.current={active:true,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId)};
    const move=(e:PointerEvent)=>{if(!pointer.current.active)return;rotation.current.y+=(e.clientX-pointer.current.x)*.007;rotation.current.x=Math.max(-.8,Math.min(.8,rotation.current.x+(e.clientY-pointer.current.y)*.004));pointer.current.x=e.clientX;pointer.current.y=e.clientY};
    const up=()=>{pointer.current.active=false};
    const observer=new ResizeObserver(resize); observer.observe(canvas); resize();
    canvas.addEventListener('pointerdown',down); canvas.addEventListener('pointermove',move); canvas.addEventListener('pointerup',up); canvas.addEventListener('pointercancel',up);
    frame=requestAnimationFrame(render);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();canvas.removeEventListener('pointerdown',down);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerup',up);canvas.removeEventListener('pointercancel',up)};
  },[]);

  return <div className="relative size-full"><canvas ref={canvasRef} className="size-full cursor-grab touch-none active:cursor-grabbing" aria-label="Globo interativo com conexões e satélites em órbita" role="img"/><span className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#0b1d2d]/60 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-white/45 backdrop-blur">arraste para explorar</span></div>;
}
