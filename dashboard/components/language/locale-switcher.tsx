"use client";

import { useLocale, useTranslations } from "next-intl";
import { SelectGroup, SelectItem } from "../ui/select";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { locales } from "@/i18n/config";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      <SelectGroup>
        {locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </SelectItem>
        ))}
      </SelectGroup>
    </LocaleSwitcherSelect>
  );
}
