// import React from 'react';
// import Banner from './HomeComponents/Banner';
// import HomepageServices from './HomeComponents/HomepageServices';
// import HomePopularCategories from './HomeComponents/HomePopularCategories';
// import PopularProducts from './HomeComponents/PopularProducts';
// import OfferSlider from './HomeComponents/OfferSlider';
// import CommonButton from '../../Shared/CommonButton/CommonButton';

// const Home = () => {
//     return (
//         <div className='mx-auto mt-6 all-container'>

//             {/* Banner component */}
//             <Banner />

//             {/* Services banner */}
//             <HomepageServices />

//             {/* Popular categories */}
//             <HomePopularCategories />


//             {/* Popular Products */}
//             <PopularProducts />


//             {/* Offer slides */}
//             <OfferSlider />



//             {/* Offer Card Banner */}
//             <div className='bg-[url("https://i.postimg.cc/76c4FyGL/offercard.png")] min-h-[360px] bg-no-repeat bg-contain mt-16 flex justify-end items-center pr-16'>
//                 <div className='space-y-2'>
//                     <p className='font-semibold text-white uppercase'>Summer Sale</p>
//                     <h2 className='text-[56px] text-white'><span className='font-bold text-[#ff8a00]'>37%</span> OFF</h2>
//                     <p className='footer-text'>Free on all your order, Free Shipping and  30 <br /> days money-back guarantee</p>

//                     <CommonButton btnText={"Shop Now"} customStyle={"bg-[#0bb419] text-white "}/>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Home;
import HomePopularCategories from "../HomeComponent/HomePopularCategories";
import HomeServices from "../HomeComponent/HomeService";
import PopularProducts from "../HomeComponent/PopularProducts";
import HeroSlider from "../HomeComponent/HeroSlider";
import OfferSlider from "../HomeComponent/OfferSlider";
import PromoCard from "../HomeComponent/PromoCard";
import Sidebar from "../HomeComponent/Sidebar";
import Newsletter from "../HomeComponent/Newsletter";
import Testimonials from "../HomeComponent/Testimonials";

const Home = () => {
  return (
    <section className="max-w-[1800px] mx-auto px-4 sm:px-6 pt-6 pb-10">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-3 py-6 lg:grid-cols-12 h-[620px] lg:h-[620px] items-stretch">
        <div className="hidden h-full lg:block lg:col-span-2">
          <Sidebar />
        </div>
        <div className="h-full lg:col-span-7">
          <HeroSlider />
        </div>
        <div className="h-full lg:col-span-3">
          <PromoCard />
        </div>
      </div>

      <div className="my-12">
        <HomeServices />
      </div>

      <div className="my-12">
        <HomePopularCategories />
      </div>

      <div className="my-12">
        <PopularProducts />
      </div>

      <div className="my-12">
        <OfferSlider />
      </div>

      <div className="my-12">
        <Testimonials />
      </div>

      <div className="my-12">
        <Newsletter />
      </div>
    </section>
  );
};

export default Home;
