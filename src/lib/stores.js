import { writable } from "svelte/store";

export const selectedChapter = writable(undefined);
export const verses = writable([]);
export const loading = writable(false);
export const error = writable("");
export const fontSize = writable(18);
export const projectorMode = writable(false);

// 👇 IMPORTANT: SHOW GRID FIRST on launch
export const showChapterGrid = writable(true);
