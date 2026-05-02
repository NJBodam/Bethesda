import { NextResponse } from "next/server";

export interface AboutContent {
  title: string;
  subtitle: string;
  history: string;
  mission: string;
  vision: string;
  values: { title: string; description: string }[];
  pastor: {
    name: string;
    title: string;
    bio: string;
  };
}

const aboutContent: AboutContent = {
  title: "About Bethesda House of Grace",
  subtitle:
    "A vibrant Christian community rooted in faith, love, and service since 1995.",
  history:
    "We are a loving and welcoming Church. Our community is passionate about God and people. No matter where you come from or what your past looks like, you are welcome here.",
  mission:
    "Our mission is to make disciples of Jesus Christ who love God, love people, and make a difference in the world.",
  vision:
    "We envision a community where every person is known, loved, and equipped to live out their God-given purpose.",
  values: [
    {
      title: "Faith",
      description:
        "We trust God completely and step out boldly in obedience to His Word.",
    },
    {
      title: "Community",
      description:
        "We believe life is better together and pursue authentic relationships.",
    },
    {
      title: "Worship",
      description:
        "We honour God in everything we do — in song, in service, and in daily life.",
    },
    {
      title: "Service",
      description:
        "We are called to serve our church, our city, and the nations.",
    },
  ],
  pastor: {
    name: "Pastor Stephen Essah",
    title: "Resident Pastor",
    bio: "Pastor Stephen Essah has been leading Bethesda House of Grace since its founding in 1995. With a heart for people and a passion for the Word, he is dedicated to helping every member discover their purpose in Christ.",
  },
};

export async function GET() {
  return NextResponse.json(aboutContent);
}
