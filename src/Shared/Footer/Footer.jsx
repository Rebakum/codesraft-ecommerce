import React from 'react';
import { Link } from 'react-router-dom';
import applePay from '../../assets/icons/apple-pay.png'
import visaPay from '../../assets/icons/visa-cart.png'
import discoverPay from '../../assets/icons/discover.png'
import masterCart from '../../assets/icons/master-cart.png'
import securePay from '../../assets/icons/secure.png'




const Footer = () => {
    return (

        <footer className="bg-[var(--nav-bg)] text-[var(--text)] transition-colors">
            <div className="p-6 mx-auto all-container">
                <div className="lg:flex gap-9">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6 space-y-4">
                            <h2 className="text-3xl font-semibold flex items-center gap-2 text-[var(--text)]"><img src="/fav.png" alt="" /> Coffee Brand</h2>
                            <p className='footer-text'>Premium coffee roasted fresh for your morning ritual. Discover beans, brewers, and barista tools crafted for every cup.</p>

                            <p className='footer-text'><span className='text-[var(--text)]'>(+880) 01XXXX</span> or <span className='text-[var(--text)]'>test@gmail.com</span></p>

                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className='flex flex-col gap-3 footer-text'>
                                <h2 className='text-[var(--text)]'>My Account</h2>
                                <Link to={"/my-account"} className='text-sm hover:underline'>My Account</Link>
                                <Link to={"/order-history"} className='text-sm hover:underline'>Order History</Link>
                                <Link to={"/shopping-cart"} className='text-sm hover:underline'>Shopping Cart</Link>
                                <Link to={"/wishlist"} className='text-sm hover:underline'>Wishlist</Link>

                            </div>
                            <div className='flex flex-col gap-3 footer-text'>
                                <h2 className='text-[var(--text)]'>Helps</h2>
                                <Link to={"/contact-us"} className='text-sm hover:underline'>Contact</Link>
                                <Link to={"/faqs"} className='text-sm hover:underline'>Faqs</Link>
                                <Link to={"/terms"} className='text-sm hover:underline'>Terms & Condition</Link>
                                <Link to={"/privacy"} className='text-sm hover:underline'>Privacy Policy</Link>

                            </div>
                            <div className='flex flex-col gap-3 footer-text'>
                                <h2 className='text-[var(--text)]'>Proxy</h2>
                                <Link to={"/about"} className='text-sm hover:underline'>About</Link>
                                <Link to={"/shop"} className='text-sm hover:underline'>Shop</Link>
                                <Link to={"/product"} className='text-sm hover:underline'>Product</Link>
                                <Link to={"/track-order"} className='text-sm hover:underline'>Track Order</Link>

                            </div>
                            <div className='flex flex-col gap-3 footer-text'>
                                <h2 className='text-[var(--text)]'>Categories</h2>
                                <Link to={"/coffee-beans"} className='text-sm hover:underline'>Single Origin</Link>
                                <Link to={"/cold-brew"} className='text-sm hover:underline'>Cold Brew</Link>
                                <Link to={"/coffee-gear"} className='text-sm hover:underline'>Coffee Gear</Link>
                                <Link to={"/subscriptions"} className='text-sm hover:underline'>Subscriptions</Link>

                            </div>




                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 border-none theme-border" />

                <div className='flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0'>
                    <p className=" footer-text">Coffee Brand © 2026. All Rights Reserved</p>

                    {/* footer icons */}
                    <div className='flex items-center gap-2'>
                        <img src={applePay} alt="" />
                        <img src={visaPay} alt="" />
                        <img src={discoverPay} alt="" />
                        <img src={masterCart} alt="" />
                        <img src={securePay} alt="" />
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;