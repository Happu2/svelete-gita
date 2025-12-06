const BASE_URL = "/geeta-api";

export async function getChapter(chapter) {
  const res = await fetch(`${BASE_URL}?q=${chapter}`);

  if (!res.ok) throw new Error("API error");

  const data = await res.json();
  return data.data;
}
