"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import Silk from "@/components/Silk";

export function Hero() {
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
   <section className="relative min-h-screen overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
  
  {/* background */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="relative aspect-square w-full">
      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
  </div>

  <div
    ref={ref}
    className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center"
  >

    {/* LEFT SIDE */}
    <div
      className={`transition-all duration-700 ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
    >
      <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
        Software Development Agency
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        Digital Excellence for{" "}
        <span className="text-primary">
          Startups & Professionals
        </span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
        Building high-performance desktop applications and bespoke websites
        tailored to your vision.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="gap-2">
          Get Started
          <ArrowRight className="size-4" />
        </Button>

        <Button variant="outline" size="lg">
          Our Services
        </Button>
      </div>
    </div>


    {/* RIGHT SIDE */}
    <div
      className={`relative transition-all duration-700 delay-200 ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
    >

      <div className="
        rounded-3xl
        backdrop-blur-xl
        border border-white/10
        bg-white/5
        shadow-2xl
        p-6
      ">

        {/* fake code window */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 bg-red-400 rounded-full"/>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"/>
          <div className="w-3 h-3 bg-green-400 rounded-full"/>
        </div>

        <pre className="text-sm text-green-400 font-mono leading-relaxed">
{`const buildStartup = () => {
  return {
    frontend: "Next.js",
    backend: "Node.js",
    database: "PostgreSQL",
    performance: "⚡ blazing fast",
  };
};



`}
        </pre>

      </div>

      {/* floating stats */}
      <div className="absolute -bottom-8 -left-6 bg-green/100 backdrop-blur-lg border border-white/10 rounded-xl px-6 py-4">
        <p className="text-2xl font-bold text-primary">100+</p>
        <p className="text-sm text-mute -foreground">Projects Built</p>
      </div>

      <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl px-6 py-4">
        <p className="text-2xl font-bold text-primary">24/7</p>
        <p className="text-sm text-mute -foreground">Support</p>
      </div>

    </div>

  </div>
</section>
  );
}
