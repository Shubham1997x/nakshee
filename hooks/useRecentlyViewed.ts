"use client";

import { useEffect, useState } from "react";

const KEY = "nakshee:recently-viewed";
const LIMIT = 6;

export function useRecordRecentlyViewed(slug: string) {
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      const slugs: string[] = raw ? JSON.parse(raw) : [];
      const next = [slug, ...slugs.filter((s) => s !== slug)].slice(0, LIMIT);
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      // localStorage unavailable — recently-viewed is a soft feature, safe to skip
    }
  }, [slug]);
}

export function useRecentlyViewed(excludeSlug?: string): string[] {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      const stored: string[] = raw ? JSON.parse(raw) : [];
      setSlugs(stored.filter((s) => s !== excludeSlug));
    } catch {
      setSlugs([]);
    }
  }, [excludeSlug]);

  return slugs;
}
