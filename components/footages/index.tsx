import GalleryMobile from "./gallery-mobile";
import GalleryDesktop from "./gallery-desktop";

const Footages = () => {
  return (
    <section className="p-9 bg-gold md:p-[72px]">
      <div className="wrapper">
        <h2 className="text-[54px] leading-[55.89px] text-secondary font-theSignature mb-6 md:text-[72px]">
          Luxury Footages
        </h2>

        <GalleryMobile />
        <GalleryDesktop />
      </div>
    </section>
  );
};

export default Footages;
