export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string; // ISO date string YYYY-MM-DD
  description: string;
  scripture: string;
  series?: string;
  audioUrl?: string;
  videoUrl?: string;
  duration?: string;
}
