"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/lib/locale";
import { Select, SelectContent, SelectTrigger } from "../ui/select";

interface LocaleSwitcherSelectProps {
  children: React.ReactNode;
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: LocaleSwitcherSelectProps) {
  async function onSelectChange(nextLocale: Locale) {
    await setUserLocale(nextLocale);
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger>{label}</SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
}
