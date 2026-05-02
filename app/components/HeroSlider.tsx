"use client";
import photo1 from '@/assets/main_church2.png';
import photo2 from '@/assets/bethesda_service_2.jpg';
import photo4 from '@/assets/easter_conv.jpg';
import photo3 from '@/assets/lechturm.png';

import { useState, useEffect, useCallback } from "react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  ctaLabel?: string;
  ctaHref?: string;
  gradient: string;
  backgroundImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Sunday Morning Worship",
    subtitle: "Come and experience the presence of God in our weekly worship gathering.",
    date: "Every Sunday · 1:30 PM",
    location: "Lange Str. 19A, 49080 Osnabrück",
    ctaLabel: "Plan Your Visit",
    ctaHref: "/contact",
    gradient: "from-amber-900/80 via-orange-800/70 to-yellow-900/60",
    backgroundImage: photo1.src,
  },
  {
    id: 2,
    title: "Easter Camp Meeting 2026",
    subtitle: "Greater love hath no man than this, that a man lay down his life for his friends - John 15:13",
    date: "April 3rd - 5th, 2026",
    location: "International Believers Convent, Berlin",
    ctaLabel: "Register Now",
    ctaHref: "/contact",
    gradient: "from-rose-900/80 via-red-800/70 to-orange-900/60",
    backgroundImage: photo4.src,
  },
  {
    id: 3,
    title: "Jugendgottesdienst",
    subtitle: "Join us for an inspiring youth service with a focus on teaching the word, prayer, community and discipleship.",
    date: "Every other Sunday · 11:00 AM",
    location: "Lange Str. 19A, 49080 Osnabrück",
    ctaLabel: "Learn More",
    ctaHref: "/contact",
    gradient: "from-stone-900/80 via-amber-800/70 to-yellow-800/60",
    backgroundImage: photo3.src,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "600px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero image carousel"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== current}
        >
          {/* Background gradient (warm church tones) */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
            style={{
              backgroundImage: `url('${slide.backgroundImage}'), linear-gradient(to bottom right, #78350f, #92400e)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6 py-24">
            {/* Date & Location badge */}
            <div className="inline-flex items-center gap-3 bg-amber-600/80 text-amber-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span>{slide.date}</span>
              <span className="w-1 h-1 rounded-full bg-amber-300" />
              <span>{slide.location}</span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight mb-5 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
              {slide.subtitle}
            </p>

            {slide.ctaLabel && slide.ctaHref && (
              <a
                href={slide.ctaHref}
                className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
              >
                {slide.ctaLabel}
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-11 h-11 flex items-center justify-center transition-colors"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-11 h-11 flex items-center justify-center transition-colors"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 h-3 bg-amber-400"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
