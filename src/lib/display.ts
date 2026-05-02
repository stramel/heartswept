import { jp } from "./i18n";

export function sectionTitle(key: string): string {
  return `${key} · ${jp(key)}`;
}
