// Hardcode the clean published ID & GID directly to avoid URL string concatenation issues
const PUBLISHED_ID =
  "2PACX-1vRdjhHy_iHdgQzPCgI89JXcrzIq4KmTqqrQJcDApucEBMxjnIYBWp6IIpe-Gl-nV3ngrCPclD5e9c6i";
const GID = "504101614";

// Clean base endpoint without query parameters
const BASE_URL = `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_ID}/pub`;

// --- CACHE SETUP ---
let cachedEvents = null;
let lastFetchTime = 0;
const CACHE_DURATION_MS = 30 * 60 * 1000; // 30 minutes in milliseconds

export async function getTimelineEvents() {
  const now = Date.now();

  // Return cached data if it exists and hasn't expired
  if (cachedEvents && now - lastFetchTime < CACHE_DURATION_MS) {
    console.log("Serving timeline events from cache");
    return cachedEvents;
  }

  try {
    // Construct query parameters cleanly
    const url = new URL(BASE_URL);
    url.searchParams.set("gid", GID);
    url.searchParams.set("single", "true");
    url.searchParams.set("output", "csv");
    // Removed Date.now() timestamp to allow CDN/HTTP caching

    console.log("Fetching fresh timeline from URL:", url.toString());

    const res = await fetch(url.toString());

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const text = await res.text();

    if (
      text.trim().startsWith("<!DOCTYPE html>") ||
      text.trim().startsWith("<html")
    ) {
      throw new Error(
        "Received HTML response instead of CSV. Check sheet permissions.",
      );
    }

    const lines = text.trim().split(/\r?\n/);
    if (lines.length <= 1) return [];

    const headers = parseCSVLine(lines[0]).map((h) => h.toLowerCase());
    const eventIdx = headers.indexOf("event");
    const dateIdx = headers.indexOf("date");
    const descIdx = headers.indexOf("desc");
    const pictureIdx = headers.indexOf("picture");

    const parsedEvents = lines.slice(1).map((line) => {
      const cols = parseCSVLine(line);
      return {
        event: cols[eventIdx] || "",
        date: cols[dateIdx] || "",
        desc: cols[descIdx] || "",
        picture: cols[pictureIdx] || "",
      };
    });

    // Update cache state
    cachedEvents = parsedEvents;
    lastFetchTime = now;

    return parsedEvents;
  } catch (err) {
    console.error("Error fetching timeline events:", err);
    // Return stale cache if available on error, otherwise empty array
    return cachedEvents || [];
  }
}

function parseCSVLine(line) {
  const pattern = /(?!\s*$)(?:^|,)("(?:[^"]|"")*"|[^,]*)/g;
  const cols = [];
  let match;
  while ((match = pattern.exec(line)) !== null) {
    let val = match[1] ? match[1].trim() : "";
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.slice(1, -1).replace(/""/g, '"');
    }
    cols.push(val);
  }
  return cols;
}
