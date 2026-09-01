CREATE TABLE `entrepreneurs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`city` text NOT NULL,
	`state` text NOT NULL,
	`company` text NOT NULL,
	`role` text NOT NULL,
	`segment` text NOT NULL,
	`company_size` text NOT NULL,
	`business_model` text NOT NULL,
	`challenge` text NOT NULL,
	`ai_maturity` text NOT NULL,
	`seeks` text NOT NULL,
	`offers` text NOT NULL,
	`website` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `entrepreneurs_email_unique` ON `entrepreneurs` (`email`);