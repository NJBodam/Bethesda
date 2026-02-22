export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
  videoUrl?: string;
  audioUrl?: string;
  scripture?: string;
  series?: string;
}
