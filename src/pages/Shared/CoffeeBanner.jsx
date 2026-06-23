import bannerImage from "../../assets/home-assets/banner/bannar-01.jpg";

const CoffeeBanner = () => {
  return (
    <section className="py-6">
      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#7A4A2B] via-[#A07250] to-[#D8C7AA] min-h-[220px]">
        <div className="absolute inset-0 flex items-center justify-between px-10 md:px-16">
          <div>
            <h1 className="text-6xl font-extrabold text-white md:text-8xl">
              Coffee
            </h1>
          </div>
          <div className="hidden md:block">
            <img
              src={bannerImage}
              alt="Coffee Products"
              className="h-[220px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeBanner;
