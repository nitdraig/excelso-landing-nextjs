import React from "react";

const AboutHero = () => {
  return (
    <section className="w-full relative py-12 md:py-24 lg:py-2 lg:pb-10 border-b">
      <video
        src="/videos/bg4.webm"
        autoPlay
        playsInline
        loop
        muted
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-lg z-10" />

      <div className="relative mt-20 z-20 container px-4 md:px-6">
        <h1 className="text-3xl text-center text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
          About Excelso
        </h1>

        <div>
          <div className="mt-8 px-10 space-y-8">
            <div className="space-y-2 text-gray-200">
              <h2 className="text-2xl font-bold">Mission</h2>
              <p className="text-gray-100">
                To develop high-quality IT solutions that positively impact
                lives, fostering digital transformation, cybersecurity,
                innovation, and sustainable development.
              </p>
            </div>
            <div className="space-y-2 text-gray-200">
              <h2 className="text-2xl font-bold">Vision</h2>
              <p className="text-gray-100">
                To be a leader in innovation, ethics, and sustainability within
                the IT sector, empowering individuals, organizations, and
                communities towards a more modern, secure, and inclusive future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
