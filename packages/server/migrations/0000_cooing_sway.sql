CREATE TABLE `cars` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`make` text NOT NULL,
	`model` text NOT NULL,
	`year` integer NOT NULL,
	`price` integer NOT NULL,
	`description` text,
	`imageUrl` text
);
