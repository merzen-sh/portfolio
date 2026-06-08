export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <img
        src={`${import.meta.env.BASE_URL}ecommerce-award.jpg`}
        alt="E-Commerce Competition 1st Place"
        className="w-full max-w-md rounded-2xl object-cover shadow-lg"
      />

      <p className="max-w-md text-sm text-muted-foreground">
        ความท้าทายในวัย 17 ปี กับการลงแข่งพัฒนาสถาปัตยกรรม E-Commerce
        ภายในเวลาจำกัดเพียง 6 ชั่วโมง ต้องแข่งกับพี่ๆ ระดับ ปวส. อายุ 19 ปี อีก
        15 ทีมจากทั่วภูมิภาค แต่ในที่สุดก็สามารถคว้า รางวัลชนะเลิศอันดับ 1
        ด้วยคะแนน 95.5/100 มาครองได้สำเร็จ
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
