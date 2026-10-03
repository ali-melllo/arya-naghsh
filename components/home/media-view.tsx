"use client"

export function MediaView() {
  return (
    <section className="border-b-2 border-dashed border-border ">
      <div className="flex h-svh relative">
        <div className="h-32 md:h-56 bg-gradient-to-b z-30 scale-105 top-0 absolute inset-x-0 dark:from-black from-white to-transparent"/>
        <div className="h-32 md:h-56 bg-gradient-to-b z-30 scale-105 top-0 absolute inset-x-0 dark:from-black from-white to-transparent"/>
        <div className="h-32 md:h-56 bg-gradient-to-b z-30 scale-105 top-0 absolute inset-x-0 dark:from-black from-white to-transparent"/>
        <div className="h-32 md:h-56 bg-gradient-to-b z-30 scale-105 top-0 absolute inset-x-0 dark:from-black from-white to-transparent"/>

        <div className="hidden md:flex md:w-32 bg-gradient-to-l z-30 scale-105 top-0 absolute right-0 h-full inset-y-0 dark:from-black from-white to-transparent"/>
        <div className="hidden md:flex md:w-32 bg-gradient-to-l z-30 scale-105 top-0 absolute right-0 h-full inset-y-0 dark:from-black from-white to-transparent"/>
        <div className="hidden md:flex md:w-32 bg-gradient-to-l z-30 scale-105 top-0 absolute right-0 h-full inset-y-0 dark:from-black from-white to-transparent"/>
        <div className="hidden md:flex md:w-32 bg-gradient-to-l z-30 scale-105 top-0 absolute right-0 h-full inset-y-0 dark:from-black from-white to-transparent"/>

        <div className="h-32 md:h-48 bg-gradient-to-t z-30 scale-105 bottom-0 absolute inset-x-0 dark:from-black from-white to-transparent"/>
        <div className="h-32 md:h-48 bg-gradient-to-t z-30 scale-105 bottom-0 absolute inset-x-0 dark:from-black from-white to-transparent"/>
        <div className="h-32 md:h-48 bg-gradient-to-t z-30 scale-105 bottom-0 absolute inset-x-0 dark:from-black from-white to-transparent"/>
        <div className="h-32 md:h-48 bg-gradient-to-t z-30 scale-105 bottom-0 absolute inset-x-0 dark:from-black from-white to-transparent"/>

        <div className="hidden md:flex md:w-32 bg-gradient-to-r z-30 scale-105 top-0 absolute left-0 h-full inset-y-0 dark:from-black from-white to-transparent"/>
        <div className="hidden md:flex md:w-32 bg-gradient-to-r z-30 scale-105 top-0 absolute left-0 h-full inset-y-0 dark:from-black from-white to-transparent"/>
        <div className="hidden md:flex md:w-32 bg-gradient-to-r z-30 scale-105 top-0 absolute left-0 h-full inset-y-0 dark:from-black from-white to-transparent"/>
        <div className="hidden md:flex md:w-32 bg-gradient-to-r z-30 scale-105 top-0 absolute left-0 h-full inset-y-0 dark:from-black from-white to-transparent"/>

        <div>

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute z-0 h-dvh inset-x-0 w-full object-cover blur-[2px]"
          >
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        
      </div>
    </section>
  );
}