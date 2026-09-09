export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative flex max-w-4xl flex-col items-center">
        <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          ความท้าทายในวัย 17 ปี กับการแข่งขันพัฒนาสถาปัตยกรรม
          E-Commerce ภายในเวลาเพียง 6 ชั่วโมง
        </p>

        {/* Award */}
        <div className="group relative mt-10 w-full max-w-2xl">
          {/* Glow */}
          <div className="absolute -inset-3 rounded-3xl bg-primary/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-3xl border bg-background/80 p-2 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={`${import.meta.env.BASE_URL}ecommerce-award.jpg`}
                alt="E-Commerce Competition 1st Place"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Award badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/20 bg-black/50 px-4 py-3 text-left text-white backdrop-blur-md">
                <div className="text-2xl">🏆</div>
                <div>
                  <p className="text-xs text-white/60">E-Commerce Competition</p>
                  <p className="font-semibold">1st Place</p>
                </div>
              </div>

              {/* Score */}
              <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-black/50 px-4 py-3 text-right text-white backdrop-blur-md">
                <p className="text-2xl font-bold leading-none">95.5</p>
                <p className="mt-1 text-[10px] text-white/60">OUT OF 100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <p className="mt-8 max-w-2xl text-sm leading-7 text-muted-foreground">
          ต้องแข่งขันกับพี่ ๆ ระดับ ปวส. อายุ 19 ปี อีก 15 ทีม
          จากทั่วภูมิภาค แต่สามารถคว้า
          <span className="font-semibold text-foreground">
            {" "}
            รางวัลชนะเลิศอันดับ 1
          </span>{" "}
          ด้วยคะแนน
          <span className="font-semibold text-foreground"> 95.5/100</span>
          ได้สำเร็จ
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
          >
            View Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#skills"
            className="inline-flex h-10 items-center justify-center rounded-lg border bg-background/70 px-5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted"
          >
            Explore Skills
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#projects"
          className="mt-14 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="flex h-8 w-5 justify-center rounded-full border">
            <span className="mt-1.5 h-1.5 w-0.5 animate-bounce rounded-full bg-current" />
          </span>
        </a>
      </div>
    </section>
  );
}
