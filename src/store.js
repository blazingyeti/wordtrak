import { writable } from "svelte/store";

const itemName = "wordStore";
const stored = localStorage.getItem(itemName);
const parsed = stored ? JSON.parse(stored) : "{}";

let uniqueWords = [];
parsed.forEach((c) => {
  if (!uniqueWords.includes(c)) {
    uniqueWords.push(c);
  }
});

export let wordStore = writable(
  uniqueWords === null ? [] : uniqueWords.sort((a, b) => a.localeCompare(b)),
);

wordStore.subscribe((value) => localStorage.setItem(itemName, JSON.stringify(value)));
