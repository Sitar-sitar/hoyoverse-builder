CREATE TABLE `site_display_settings` (
	`settingKey` varchar(64) NOT NULL,
	`variant` varchar(32) NOT NULL,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `site_display_settings_settingKey` PRIMARY KEY(`settingKey`)
);
