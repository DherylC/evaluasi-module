// Replace with your published CSV URL from Google Sheets (File > Share > Publish to web > CSV)
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdjhHy_iHdgQzPCgI89JXcrzIq4KmTqqrQJcDApucEBMxjnIYBWp6IIpe-Gl-nV3ngrCPclD5e9c6i/pub?gid=143457421&single=true&output=csv";

const CACHE_KEY = "modulehub_latest_news";
const CACHE_TIME_KEY = "modulehub_latest_news_timestamp";
const CACHE_DURATION_MS = 2 * 60 * 1000;

export async function getLatestNews() {
  const now = Date.now();
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cachedTimestamp = localStorage.getItem(CACHE_TIME_KEY);

  // 1. Return valid cache if younger than 15 mins
  if (
    cachedData &&
    cachedTimestamp &&
    now - Number(cachedTimestamp) < CACHE_DURATION_MS
  ) {
    try {
      return JSON.parse(cachedData);
    } catch (e) {
      console.warn("Failed to parse cache, fetching fresh data...", e);
    }
  }

  try {
    const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
    const csvText = await res.text();

    // 2. Proper CSV line and column parser
    const rows = parseCSV(csvText);
    if (rows.length <= 1) return [];

    // Header row (e.g., ["title"])
    const headers = rows[0].map((h) => h.toLowerCase().trim());

    // Data rows
    const newsData = rows.slice(1).map((row) => {
      const rowData = {};
      headers.forEach((header, i) => {
        rowData[header] = row[i] ? row[i].trim() : "";
      });
      return rowData;
    });

    // 3. Save to localStorage cache
    localStorage.getItem(CACHE_KEY) && localStorage.removeItem(CACHE_KEY);
    localStorage.setItem(CACHE_KEY, JSON.stringify(newsData));
    localStorage.setItem(CACHE_TIME_KEY, now.toString());

    return newsData;
  } catch (error) {
    console.error("Failed to fetch news from Google Sheets:", error);
    if (cachedData) return JSON.parse(cachedData);
    return [];
  }
}

// Robust CSV Parsing Function
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  return lines.map((line) => {
    const result = [];
    let start = 0;
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      if (line[i] === '"') {
        inQuotes = !inQuotes;
      } else if (line[i] === "," && !inQuotes) {
        let field = line.substring(start, i).trim();
        // Remove surrounding quotes if present
        if (field.startsWith('"') && field.endsWith('"')) {
          field = field.slice(1, -1).replace(/""/g, '"');
        }
        result.push(field);
        start = i + 1;
      }
    }
    // Push the last field
    let lastField = line.substring(start).trim();
    if (lastField.startsWith('"') && lastField.endsWith('"')) {
      lastField = lastField.slice(1, -1).replace(/""/g, '"');
    }
    result.push(lastField);

    return result;
  });
}
