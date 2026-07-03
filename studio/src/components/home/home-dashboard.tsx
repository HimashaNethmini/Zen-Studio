"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronRight,
  Droplets,
  Heart,
  Moon,
  Play,
  Sparkles,
  Sunrise,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AmbientLandscape } from "@/components/home/ambient-landscape";
import { useWellnessStore, type FocusArea } from "@/store/wellness-store";

const categories = [
  {
    title: "Mind" as FocusArea,
    subtitle: "Calm & Clarity",
    icon: Brain,
    accent: "bg-[#eee7ff]",
    iconColor: "text-[#7051b8]",
  },
  {
    title: "Body" as FocusArea,
    subtitle: "Move & Energize",
    icon: Droplets,
    accent: "bg-[#ffe7dd]",
    iconColor: "text-[#e76f51]",
  },
  {
    title: "Balance" as FocusArea,
    subtitle: "Rest & Restore",
    icon: Heart,
    accent: "bg-[#e4f3eb]",
    iconColor: "text-[#32846b]",
  },
];

const recommendations = [
  {
    title: "Evening Reset",
    description: "Relax your body and wind down your mind.",
    duration: "15 min",
    icon: Moon,
    background: "bg-[#4b3f82]",
  },
  {
    title: "Breath Focus",
    description: "A gentle practice to center your day.",
    duration: "8 min",
    icon: Sparkles,
    background: "bg-[#f2adbc]",
  },
];

export function HomeDashboard() {
  const shouldReduceMotion = useReducedMotion();
  const activeFocus = useWellnessStore((state) => state.activeFocus);
  const setActiveFocus = useWellnessStore((state) => state.setActiveFocus);

  const motionProps = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: shouldReduceMotion ? 0 : 0.55 },
  };

  return (
    <main className="min-h-screen pb-14">
      <section className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 lg:px-12 lg:pt-12">
        <div className="luma-grid relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/35 px-6 py-9 sm:px-10 lg:px-12 lg:py-14">
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-[#e9ddff]/65 blur-3xl" />
          <div className="absolute -right-24 top-12 size-72 rounded-full bg-[#ffe1d8]/70 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <motion.div
              {...motionProps}
              className="space-y-5 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e2d9f1] bg-white/65 px-3 py-1.5 text-xs font-semibold text-[#695e89] backdrop-blur">
                <Sparkles className="size-3.5 text-[#8d68ce]" />
                A softer way to feel better
              </div>

              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#827697]">
                  Wednesday, June 26
                </p>

                <h1 className="font-display text-5xl leading-[0.95] text-[#2c245d] sm:text-6xl lg:text-7xl">
                  Good morning,
                  <br />
                  Alex <span className="text-[#c291bd]">✦</span>
                </h1>

                <p className="mt-6 max-w-lg text-base leading-7 text-[#706b81] sm:text-lg">
                  Your wellness journey is built one small, intentional moment
                  at a time.
                </p>
              </div>

              <Button
                className="h-12 rounded-full bg-[#5c419b] px-6 text-sm font-semibold text-white shadow-lg shadow-[#7051b8]/20 transition-transform hover:scale-[1.02] hover:bg-[#4c3584]"
              >
                Begin your ritual
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </motion.div>

            <motion.div
              {...motionProps}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.65,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="lg:col-span-5"
            >
              <AmbientLandscape />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <motion.div {...motionProps} className="lg:col-span-7">
          <div className="luma-card rounded-[2rem] p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#2f2850]">
                  Today&apos;s focus
                </p>
                <p className="mt-1 text-sm text-[#777187]">
                  One small practice, a meaningful difference.
                </p>
              </div>

              <span className="rounded-full bg-[#eee7ff] px-3 py-1 text-xs font-semibold text-[#7051b8]">
                Mind
              </span>
            </div>

            <div className="group relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#d9c9ff] via-[#efd6f2] to-[#ffcfc9] p-5 sm:p-6">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/30 blur-2xl transition-transform duration-500 group-hover:scale-125" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-full bg-white/80 text-[#7051b8] shadow-sm">
                    <Sunrise className="size-7" />
                  </div>

                  <div>
                    <h2 className="font-display text-3xl text-[#33265e]">
                      Mindful Start
                    </h2>
                    <p className="mt-1 text-sm text-[#594e74]">
                      10 min · Morning routine
                    </p>
                  </div>
                </div>

                <Button className="h-11 rounded-full bg-white px-5 font-semibold text-[#503d88] shadow-sm hover:bg-[#faf7ff]">
                  Begin
                  <Play className="ml-2 size-4 fill-current" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-display text-3xl text-[#2c245d]">
                  Explore Luma
                </h2>
                <p className="mt-1 text-sm text-[#777187]">
                  Choose the energy you need today.
                </p>
              </div>

              <button className="text-sm font-semibold text-[#7051b8] transition-colors hover:text-[#4e3889]">
                See all
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isActive = activeFocus === category.title;

                return (
                  <motion.button
                    key={category.title}
                    type="button"
                    onClick={() => setActiveFocus(category.title)}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={
                      shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.45,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    }}
                    whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                    className={`luma-card rounded-[1.5rem] p-5 text-left transition-all ${
                      isActive
                        ? "ring-2 ring-[#9b7ddd] ring-offset-2"
                        : "hover:border-[#d7c8ef]"
                    }`}
                  >
                    <div
                      className={`grid size-12 place-items-center rounded-2xl ${category.accent} ${category.iconColor}`}
                    >
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-[#332b55]">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#777187]">
                      {category.subtitle}
                    </p>

                    {isActive && (
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#7051b8]">
                        <Check className="size-3.5" />
                        Selected for today
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.aside {...motionProps} className="lg:col-span-5">
          <div className="luma-card h-full rounded-[2rem] p-5 sm:p-7">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="font-display text-3xl text-[#2c245d]">
                  Recommended for you
                </p>
                <p className="mt-1 text-sm text-[#777187]">
                  Based on your recent rhythm.
                </p>
              </div>

              <button className="text-sm font-semibold text-[#7051b8] transition-colors hover:text-[#4e3889]">
                See all
              </button>
            </div>

            <div className="space-y-4">
              {recommendations.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 15 }}
                    whileInView={
                      shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    }}
                    whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                    className="group flex items-center gap-4 rounded-[1.35rem] border border-[#eee8f4] bg-white/70 p-4 transition-shadow hover:shadow-md"
                  >
                    <div
                      className={`grid size-14 shrink-0 place-items-center rounded-2xl text-white ${item.background}`}
                    >
                      <Icon className="size-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-[#342b58]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-5 text-[#777187]">
                        {item.description}
                      </p>

                      <p className="mt-2 text-xs font-semibold text-[#8d839c]">
                        {item.duration}
                      </p>
                    </div>

                    <ChevronRight className="size-5 shrink-0 text-[#9d91b3] transition-transform group-hover:translate-x-1" />
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#e7dced] bg-gradient-to-br from-[#faf4ff] to-[#fff4ef] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8d6a9d]">
                Today&apos;s reminder
              </p>

              <p className="font-display mt-3 text-2xl leading-tight text-[#3e3068]">
                Rest is not a reward.
                <br />
                It is part of the work.
              </p>
            </div>
          </div>
        </motion.aside>
      </section>
    </main>
  );
}