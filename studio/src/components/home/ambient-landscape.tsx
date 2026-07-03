export function AmbientLandscape() {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] border border-white/70 bg-[#f5efff] sm:min-h-[390px]">
      <div className="absolute left-1/2 top-16 size-40 -translate-x-1/2 rounded-full bg-[#ffd8cb] blur-[1px] sm:size-52" />

      <div className="soft-float absolute left-[16%] top-[22%] size-3 rounded-full bg-[#d5baff]" />
      <div className="soft-float absolute right-[20%] top-[18%] size-2 rounded-full bg-[#f0a9b8]" />
      <div className="soft-float absolute right-[29%] top-[31%] size-1.5 rounded-full bg-[#b4a0ed]" />

      <div className="absolute inset-x-0 bottom-0 h-[62%]">
        <div className="absolute inset-x-[-8%] bottom-[-25%] h-[82%] rounded-[50%] bg-[#d1c0f3]" />
        <div className="absolute inset-x-[-4%] bottom-[-36%] h-[88%] rounded-[50%] bg-[#b7a2dc]" />
        <div className="absolute left-[-8%] top-[15%] h-[78%] w-[62%] rounded-[50%] bg-[#aa95d0]/75" />
        <div className="absolute right-[-12%] top-[24%] h-[78%] w-[72%] rounded-[50%] bg-[#c9b6e8]/85" />

        <div className="absolute bottom-[-12%] left-[36%] h-[88%] w-[34%] rotate-[18deg] rounded-[50%] bg-[#fff4ef]/95" />
        <div className="absolute bottom-[-8%] left-[42%] h-[76%] w-[16%] rounded-[50%] bg-[#fff9f7]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fbf9f7]/70 to-transparent" />

      <div className="absolute left-8 top-8 text-[#7051b8]/65">
        <span className="font-display text-4xl">✦</span>
      </div>

      <div className="absolute bottom-7 left-7 rounded-full border border-white/70 bg-white/45 px-4 py-2 text-xs font-medium text-[#564a77] backdrop-blur-md">
        Your space to reset
      </div>
    </div>
  );
}