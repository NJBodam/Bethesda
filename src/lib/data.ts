import fs from "fs";
import path from "path";
import { Sermon, Event, HomepageContent } from "./types";

const dataDir = path.join(process.cwd(), "src/data");

function readJSON<T>(filename: string): T {
  const filePath = path.join(dataDir, filename);
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as T;
  } catch (err) {
    throw new Error(
      `Failed to read data file "${filename}": ${err instanceof Error ? err.message : String(err)}`
    );
  }
}

function writeJSON<T>(filename: string, data: T): void {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Sermons
export function getSermons(): Sermon[] {
  return readJSON<Sermon[]>("sermons.json");
}

export function getSermon(id: string): Sermon | undefined {
  return getSermons().find((s) => s.id === id);
}

export function createSermon(sermon: Omit<Sermon, "id" | "createdAt" | "updatedAt">): Sermon {
  const sermons = getSermons();
  const newSermon: Sermon = {
    ...sermon,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  sermons.push(newSermon);
  writeJSON("sermons.json", sermons);
  return newSermon;
}

export function updateSermon(id: string, updates: Partial<Sermon>): Sermon | null {
  const sermons = getSermons();
  const idx = sermons.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  sermons[idx] = { ...sermons[idx], ...updates, updatedAt: new Date().toISOString() };
  writeJSON("sermons.json", sermons);
  return sermons[idx];
}

export function deleteSermon(id: string): boolean {
  const sermons = getSermons();
  const filtered = sermons.filter((s) => s.id !== id);
  if (filtered.length === sermons.length) return false;
  writeJSON("sermons.json", filtered);
  return true;
}

// Events
export function getEvents(): Event[] {
  return readJSON<Event[]>("events.json");
}

export function getEvent(id: string): Event | undefined {
  return getEvents().find((e) => e.id === id);
}

export function createEvent(event: Omit<Event, "id" | "createdAt" | "updatedAt">): Event {
  const events = getEvents();
  const newEvent: Event = {
    ...event,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  events.push(newEvent);
  writeJSON("events.json", events);
  return newEvent;
}

export function updateEvent(id: string, updates: Partial<Event>): Event | null {
  const events = getEvents();
  const idx = events.findIndex((e) => e.id === id);
  if (idx === -1) return null;
  events[idx] = { ...events[idx], ...updates, updatedAt: new Date().toISOString() };
  writeJSON("events.json", events);
  return events[idx];
}

export function deleteEvent(id: string): boolean {
  const events = getEvents();
  const filtered = events.filter((e) => e.id !== id);
  if (filtered.length === events.length) return false;
  writeJSON("events.json", filtered);
  return true;
}

// Homepage
export function getHomepage(): HomepageContent {
  return readJSON<HomepageContent>("homepage.json");
}

export function updateHomepage(updates: Partial<HomepageContent>): HomepageContent {
  const current = getHomepage();
  const updated: HomepageContent = {
    ...current,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  writeJSON("homepage.json", updated);
  return updated;
}
