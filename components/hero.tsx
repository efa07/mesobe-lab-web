"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import Silk from "@/components/Silk"

export function Hero() {
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="relative aspect-square  w-full">
          <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
        </div>
      </div>


      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium tracking-widest uppercase text-primary drop-shadow-[0_0_8px_oklch(0.75_0.18_55/0.4)] mb-4">
            Software Development Agency
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance text-foreground">
            Digital Excellence for{" "}
            <span className="text-primary drop-shadow-[0_0_20px_oklch(0.75_0.18_55/0.4)]">
              Startups & Professionals.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl text-pretty">
            Building high-performance desktop applications and bespoke websites tailored to your vision.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <a href="#contact">
                Get Started
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
