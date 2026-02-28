export async function fetchWithCache(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Fetch failed, trying cache...", err);

    // fallback to Workbox cache
    if ("caches" in window) {
      const cache = await caches.open("api-cache");
      const cachedRes = await cache.match(url);
      if (cachedRes) {
        const data = await cachedRes.json();
        return data;
      }
    }

    // final fallback
    return []
  }
}
