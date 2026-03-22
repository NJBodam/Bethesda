import { NextResponse } from "next/server";
import { Ministry } from "@/types/ministry";

export const ministriesContent = {
  hero: {
    title: "Our Ministries",
    subtitle:
      "Discover the various ways we serve God and build community together",
  },
  data: [
  {
    id: "1",
    title: "Main Church",
    slug: "main-church",
    shortDescription:
      "Our main congregation gathers every Sunday for worship, teaching, and fellowship.",
    fullDescription:
      "The Main Church is the heart of Bethesda House of Grace. We come together every Sunday to worship God, hear His Word, and encourage one another in faith. Our services are open to everyone — whether you are a long-time believer or exploring faith for the first time.",
    heroImage: "/hero-bg.jpg",
    cardImage: "/hero-bg.jpg",
    contactEmail: "office@bethesda.de",
    membersTitle: "House Groups in Düsseldorf + Surroundings",
    bulletPoints: [
      { id: "1-1", ministryId: "1", text: "Ponder God's Word together" },
      { id: "1-2", ministryId: "1", text: "Share experiences of faith" },
      { id: "1-3", ministryId: "1", text: "Pray together" },
      { id: "1-4", ministryId: "1", text: "Encourage one another" },
    ],
    members: [
      {
        id: "m1",
        ministryId: "1",
        name: "Jeremy + Noemi",
        location: "Dormagen",
      },
      {
        id: "m2",
        ministryId: "1",
        name: "David + Sarah",
        location: "Düsseldorf",
      },
      {
        id: "m3",
        ministryId: "1",
        name: "Michael",
        location: "Neuss",
      },
      {
        id: "m4",
        ministryId: "1",
        name: "Anna + Paul",
        location: "Meerbusch",
      },
      {
        id: "m5",
        ministryId: "1",
        name: "Lisa + Thomas",
        location: "Krefeld",
      },
      {
        id: "m6",
        ministryId: "1",
        name: "Samuel",
        location: "Düsseldorf",
      },
    ],
  },
  {
    id: "2",
    title: "Women's Ministry",
    slug: "womens-ministry",
    shortDescription:
      "A safe and uplifting space for women to grow in faith, build friendships, and serve together.",
    fullDescription:
      "The Women's Ministry at Bethesda House of Grace is a vibrant community where women of all ages come together to deepen their faith and support one another. Through Bible study, prayer, and fellowship events, we help each woman discover her God-given gifts and purpose.",
    heroImage: "/hero-bg.jpg",
    cardImage: "/hero-bg.jpg",
    contactEmail: "women@bethesda.de",
    membersTitle: "Women's Group Leaders",
    bulletPoints: [
      { id: "2-1", ministryId: "2", text: "Study God's Word in community" },
      { id: "2-2", ministryId: "2", text: "Grow in faith and sisterhood" },
      { id: "2-3", ministryId: "2", text: "Serve the local community" },
      {
        id: "2-4",
        ministryId: "2",
        text: "Equip women for their God-given purpose",
      },
    ],
    members: [
      {
        id: "m7",
        ministryId: "2",
        name: "Grace + Mary",
        location: "Düsseldorf",
      },
      {
        id: "m8",
        ministryId: "2",
        name: "Esther",
        location: "Ratingen",
      },
      {
        id: "m9",
        ministryId: "2",
        name: "Ruth + Hannah",
        location: "Langenfeld",
      },
    ],
  },
  {
    id: "3",
    title: "Youth Ministry",
    slug: "youth-ministry",
    shortDescription:
      "Empowering the next generation to encounter God and live boldly for Christ.",
    fullDescription:
      "Our Youth Ministry is dedicated to helping young people aged 13–25 encounter the living God and build a strong foundation of faith. Through energetic worship nights, relevant Bible teaching, and fun activities, we create an environment where youth can belong, believe, and become everything God intended.",
    heroImage: "/hero-bg.jpg",
    cardImage: "/hero-bg.jpg",
    contactEmail: "youth@bethesda.de",
    membersTitle: "Youth Group Leaders",
    bulletPoints: [
      { id: "3-1", ministryId: "3", text: "Encounter God through dynamic worship" },
      { id: "3-2", ministryId: "3", text: "Learn to apply God's Word to real life" },
      {
        id: "3-3",
        ministryId: "3",
        text: "Build genuine Christ-centered friendships",
      },
      {
        id: "3-4",
        ministryId: "3",
        text: "Discover and develop spiritual gifts",
      },
    ],
    members: [
      {
        id: "m10",
        ministryId: "3",
        name: "Joshua + Rachel",
        location: "Düsseldorf",
      },
      {
        id: "m11",
        ministryId: "3",
        name: "Daniel",
        location: "Erkrath",
      },
      {
        id: "m12",
        ministryId: "3",
        name: "Miriam",
        location: "Hilden",
      },
    ],
  },
  {
    id: "4",
    title: "Prayer Ministry",
    slug: "prayer-ministry",
    shortDescription:
      "Interceding for our church, city, and world through faithful and fervent prayer.",
    fullDescription:
      "The Prayer Ministry is the spiritual backbone of Bethesda House of Grace. We believe that prayer changes things and that God moves in response to the cries of His people. Our prayer teams intercede for the church, the sick, the lost, and the nations — standing in the gap with faith and persistence.",
    heroImage: "/hero-bg.jpg",
    cardImage: "/hero-bg.jpg",
    contactEmail: "prayer@bethesda.de",
    membersTitle: "Prayer Team Leaders",
    bulletPoints: [
      {
        id: "4-1",
        ministryId: "4",
        text: "Intercede for the church and community",
      },
      { id: "4-2", ministryId: "4", text: "Pray for healing and breakthrough" },
      { id: "4-3", ministryId: "4", text: "Stand in the gap for the nations" },
      {
        id: "4-4",
        ministryId: "4",
        text: "Cultivate a lifestyle of prayer and worship",
      },
    ],
    members: [
      {
        id: "m13",
        ministryId: "4",
        name: "Elijah + Deborah",
        location: "Düsseldorf",
      },
      {
        id: "m14",
        ministryId: "4",
        name: "Caleb",
        location: "Mönchengladbach",
      },
      {
        id: "m15",
        ministryId: "4",
        name: "Priscilla + Aquila",
        location: "Wuppertal",
      },
    ],
  },
  ]};

export const ministriesData = ministriesContent.data;
export const ministriesHero = ministriesContent.hero;
export async function GET() {
  return NextResponse.json(ministriesData);
}
