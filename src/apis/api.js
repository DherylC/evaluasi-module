// src/lib/api.js

const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds (Note: 5 * 60 * 1000 is 5 mins)

// Helper: Get cached data if it's still fresh
function getFromCache(key) {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  try {
    const { timestamp, data } = JSON.parse(cached);
    const isExpired = Date.now() - timestamp > CACHE_TTL;
    if (isExpired) {
      localStorage.removeItem(key);
      return null;
    }
    return data;
  } catch (err) {
    localStorage.removeItem(key);
    return null;
  }
}

// Helper: Save data to cache with current timestamp
function saveToCache(key, data) {
  localStorage.setItem(
    key,
    JSON.stringify({
      timestamp: Date.now(),
      data,
    }),
  );
}

// Helper: Clear specific or all cache entries (useful after writes/POSTs)
export function clearApiCache(key = null) {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.removeItem("cache_codes");
    localStorage.removeItem("cache_assignments");
    localStorage.removeItem("cache_events");
    localStorage.removeItem("cache_notes");
  }
}

// --- FETCH FUNCTIONS WITH CACHING ---

// Low-level helper for handling POST payloads & response parsing
// Updated signature to accept password and payload, merging them together
export async function postAction(password, payload = {}) {
  const bodyData = {
    password,
    ...payload,
  };

  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(bodyData),
  });

  const responseData = await res.json();
  if (!res.ok || responseData.error) {
    throw new Error(responseData.error ?? "Request failed");
  }
  return responseData;
}

export async function getCodes(forceRefresh = false) {
  if (!forceRefresh) {
    const cached = getFromCache("cache_codes");
    if (cached) return cached;
  }

  const res = await fetch(`${SCRIPT_URL}?type=codes`);
  const data = await res.json();
  const result = data.codes ?? [];

  saveToCache("cache_codes", result);
  return result;
}

export async function getAssignments(forceRefresh = false) {
  if (!forceRefresh) {
    const cached = getFromCache("cache_assignments");
    if (cached) return cached;
  }

  const res = await fetch(`${SCRIPT_URL}?type=assignments`);
  const data = await res.json();
  const result = data.assignments ?? [];

  saveToCache("cache_assignments", result);
  return result;
}

export async function getEvents(forceRefresh = false) {
  if (!forceRefresh) {
    const cached = getFromCache("cache_events");
    if (cached) return cached;
  }

  const res = await fetch(`${SCRIPT_URL}?type=events`);
  const data = await res.json();
  const result = data.events ?? [];

  saveToCache("cache_events", result);
  return result;
}

export async function getNotes(forceRefresh = false) {
  if (!forceRefresh) {
    const cached = getFromCache("cache_notes");
    if (cached) return cached;
  }

  const res = await fetch(`${SCRIPT_URL}?type=notes`);
  const data = await res.json();
  const result = data.notes ?? [];

  saveToCache("cache_notes", result);
  return result;
}

// --- POST FUNCTIONS (AUTOMATICALLY CLEAR CACHE) ---

export async function addEvent(password, name, date) {
  const res = await postAction(password, { action: "addEvent", name, date });
  clearApiCache("cache_events");
  return res;
}

export async function addCode(password, category, code, note) {
  const res = await postAction(password, {
    action: "addCode",
    category,
    code,
    note,
  });
  clearApiCache("cache_codes");
  return res;
}

export async function saveAssignment(
  password,
  simulation,
  group,
  codes,
  notes = "",
) {
  const res = await postAction(password, {
    action: "saveAssignment",
    simulation,
    group,
    codes,
    notes,
  });
  clearApiCache("cache_assignments");
  return res;
}
