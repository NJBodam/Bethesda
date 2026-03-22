export interface MinistryMember {
  id: string;
  ministryId: string;
  name: string;
  imageUrl?: string;
  location: string;
}

export interface MinistryBulletPoint {
  id: string;
  ministryId: string;
  text: string;
}

export interface Ministry {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  cardImage: string;
  contactEmail: string;
  bulletPoints: MinistryBulletPoint[];
  members: MinistryMember[];
  membersTitle?: string;
}
