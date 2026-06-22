import bannerImage from "../../assets/home-assets/banner/coffee-banner.png";

const CoffeeBanne
r = () => {
  return (
    <section className="py-6">
      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#7A4A2B] via-[#A07250] to-[#D8C7AA] min-h-[220px]">
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-between px-10 md:px-16">
          <div>
            <h1 className="text-6xl font-extrabold text-white md:text-8xl">
              Coffee
            </h1>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src={bannerImage}
              alt="Coffee Products"
              className="h-[220px] object-contain"
            />
          </div>
        </div>

        {/* Decorative Coffee Beans */}
        <img
          src="/image/bean.png"
          alt=""
          className="absolute w-16 top-2 left-1/3 opacity-80"
        />

        <img
          src="/image/bean.png"
          alt=""
          className="absolute w-20 rotate-45 bottom-4 left-6 opacity-80"
        />
      </div>
    </section>
  );
};

export default CoffeeBanne
r;