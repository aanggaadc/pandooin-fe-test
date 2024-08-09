import ButtonCTA from "./cta-button";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen px-4 w-full bg-[url('/images/bg-hero-mobile.jpg')] bg-center bg-no-repeat bg-cover bg-fixed md:bg-[url('/images/bg-hero-desktop.jpg')] xl:px-0"
    >
      <div className="w-full h-full wrapper flex items-center justify-center md:pb-[8%] md:items-end md:justify-start">
        <div className="max-w-[370px] mx-auto md:max-w-[708px] md:m-0">
          <h2 className="font-theSignature text-gold text-[80px] leading-[25px] md:text-[128px] md:leading-[70px]">
            Premium Travel
          </h2>
          <h3 className="text-center font-unbounded leading-[normal] text-[#FAF9F5] text-xl font-semibold mb-2 md:text-left md:text-[54px]">
            Beyond Expectation
          </h3>

          <p className="font-albertSans text-sm text-center text-white font-medium mb-6 md:text-left md:text-2xl">
            Experience the finest that Indonesia has to offer with our curated
            selection of premium trips, ensuring comfort every step of the way
          </p>

          <ButtonCTA />
        </div>
      </div>
    </section>
  );
};

export default Hero;
