import type { Sermon } from '../types/sermon';

export const sermons: Sermon[] = [
  {
    id: '1',
    title: 'The Healing Waters',
    speaker: 'Pastor James Okafor',
    date: '2025-01-05',
    description:
      'An exploration of the story of Bethesda and how God\'s healing grace is available to all who seek Him. We examine the paralysed man who waited for 38 years and the transforming power of an encounter with Jesus.',
    scripture: 'John 5:1-15',
    series: 'Encounters with Jesus',
    duration: '48 min',
  },
  {
    id: '2',
    title: 'Walking by Faith, Not by Sight',
    speaker: 'Pastor James Okafor',
    date: '2025-01-12',
    description:
      'Faith is not the absence of doubt, but the decision to trust God despite uncertainty. This message encourages believers to keep walking even when the path ahead is unclear.',
    scripture: '2 Corinthians 5:7',
    series: 'Faith Foundations',
    duration: '42 min',
  },
  {
    id: '3',
    title: 'Grace Sufficient',
    speaker: 'Deacon Ruth Mensah',
    date: '2025-01-19',
    description:
      'Paul\'s thorn in the flesh teaches us that God\'s grace is not the removal of hardship but the strength to endure it. A powerful word for those going through difficult seasons.',
    scripture: '2 Corinthians 12:7-10',
    series: 'Faith Foundations',
    duration: '39 min',
  },
  {
    id: '4',
    title: 'The Prodigal Father',
    speaker: 'Pastor James Okafor',
    date: '2025-01-26',
    description:
      'We often focus on the prodigal son, but this sermon shifts the lens to the father — a portrait of extravagant, unconditional love that reflects the heart of God towards us.',
    scripture: 'Luke 15:11-32',
    series: 'Parables of the Kingdom',
    duration: '51 min',
  },
  {
    id: '5',
    title: 'Praying Without Ceasing',
    speaker: 'Minister Abena Asante',
    date: '2025-02-02',
    description:
      'Prayer is the lifeblood of the believer. This message unpacks what it truly means to pray without ceasing and offers practical guidance for building a vibrant prayer life.',
    scripture: '1 Thessalonians 5:16-18',
    series: 'Spiritual Disciplines',
    duration: '45 min',
  },
  {
    id: '6',
    title: 'Be Still and Know',
    speaker: 'Deacon Ruth Mensah',
    date: '2025-02-09',
    description:
      'In a world that never stops moving, God calls us to be still. A meditative message on finding peace and experiencing God\'s presence in the midst of life\'s storms.',
    scripture: 'Psalm 46:10',
    series: 'Spiritual Disciplines',
    duration: '37 min',
  },
  {
    id: '7',
    title: 'Love Your Neighbour',
    speaker: 'Pastor James Okafor',
    date: '2025-02-16',
    description:
      'The parable of the Good Samaritan challenges us to re-examine who our neighbour is and what love in action looks like in everyday life.',
    scripture: 'Luke 10:25-37',
    series: 'Parables of the Kingdom',
    duration: '44 min',
  },
  {
    id: '8',
    title: 'A New Thing',
    speaker: 'Minister Abena Asante',
    date: '2025-02-23',
    description:
      'God is always doing something new. This message calls us to let go of past seasons, embrace renewal, and step confidently into the new things God is doing in our lives.',
    scripture: 'Isaiah 43:18-19',
    series: 'Encounters with Jesus',
    duration: '46 min',
  },
];

export const speakers = [...new Set(sermons.map((s) => s.speaker))].sort();
