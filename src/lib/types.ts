export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
  videoUrl?: string;
  audioUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface HomepageContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutText: string;
  serviceTimesTitle: string;
  serviceTimes: ServiceTime[];
  welcomeMessage: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  updatedAt: string;
}

export interface ServiceTime {
  day: string;
  time: string;
  name: string;
}
