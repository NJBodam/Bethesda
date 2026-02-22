interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function HeroBanner({
  title,
  subtitle,
  backgroundImage,
}: HeroBannerProps) {
  return (
    <section
      className="relative flex items-center justify-center min-h-[600px] text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-xl text-gray-200">{subtitle}</p>
      </div>
    </section>
  );
}
