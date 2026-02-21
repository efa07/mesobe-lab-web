"use client"

import { MapPin, Users, Zap, Shield } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const values = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Every solution we deliver is optimized for speed and reliability.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "We design intuitive experiences that put your users first.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Built with industry-standard security practices from the ground up.",
  },
  {
    icon: MapPin,
    title: "Based in Ethiopia",
    description: "Local expertise with a global perspective on digital excellence.",
  },
]

export function About() {
  const { ref: leftRef, isVisible: leftVisible } = useAnimateOnScroll(0.15)
  const { ref: rightRef, isVisible: rightVisible } = useAnimateOnScroll(0.15)

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${leftVisible ? "animate-slide-right" : "opacity-0"}`}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary drop-shadow-[0_0_8px_oklch(0.75_0.18_55/0.4)] mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              About Mesob Lab
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <p className="text-muted-foreground leading-relaxed">
                At Mesob Lab, we bridge the gap between complex technology and user-friendly digital experiences. Based in Ethiopia, our team specializes in crafting high-performance desktop applications and responsive websites designed to scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every startup and independent professional deserves a digital presence that is as professional, reliable, and innovative as the work they do.
              </p>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`grid grid-cols-2 gap-6 transition-all duration-700 ${rightVisible ? "animate-slide-left" : "opacity-0"}`}
          >
            {values.map((value, i) => (
              <div
                key={value.title}
                className="group relative flex flex-col gap-3 rounded-2xl border border-primary/10 bg-card/40 backdrop-blur-xl p-5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                  <value.icon className="size-5" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
