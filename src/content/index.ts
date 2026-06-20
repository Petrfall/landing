import { ru } from "./ru";
import { en } from "./en";
import type { Content, Lang } from "./types";

export const dict: Record<Lang, Content> = { ru, en };
export type { Content, Lang };
