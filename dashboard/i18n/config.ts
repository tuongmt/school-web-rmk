export const locales = ["vi", "en", "ko"] as const;

export const defaultLocale = "vi";

export type Locale = (typeof locales)[number];
