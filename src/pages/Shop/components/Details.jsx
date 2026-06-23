import { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useCart } from "../../../Cart/CartContext";
import { useWishlist } from "../../../Wishlist/WishlistContext";

import img1 from "../../../assets/home-assets/banner/coffe01.webp";
import img2 from "../../../assets/home-assets/banner/coffee02.webp";
import img3 from "../../../assets/home-assets/banner/coffe03.webp";
import img4 from "../../../assets/home-assets/banner/coffe04.webp";
import img5 from "../../../assets/home-assets/banner/coffe05.webp";

const galleryImages = [img1, img2, img3, img4, img5];

const Details = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [toast, setToast] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(product.id);

  const thumbnails = [product.image, ...galleryImages.filter((img) => img !== product.image).slice(0, 4)];
  const hasDiscount = product.offerPrice && product.discount > 0;
  const price = hasDiscount ? product.offerPrice : product.regularPrice;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row dark:text-coffee-100">
      {/* Toast */}
      {toast && (
        <div className="fixed z-50 flex items-center gap-3 px-5 py-3 text-sm font-medium text-white rounded-lg shadow-lg top-24 right-6 bg-emerald-600 animate-[fadeIn_0.3s_ease]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Added to cart!
        </div>
      )}

      {/* Image Gallery */}
      <div className="w-full md:w-1/2">
        <div className="overflow-hidden border-2 border-coffee-100 dark:border-coffee-700 rounded-2xl">
          <img
            src={thumbnails[selectedImage]}
            alt={product.name}
            className="object-cover w-full h-[350px] sm:h-[420px] transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex gap-3 mt-4">
          {thumbnails.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={`relative w-16 h-16 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                selectedImage === i
                  ? "border-amber-600 ring-2 ring-amber-200"
                  : "border-coffee-200 dark:border-coffee-600 hover:border-amber-400 opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="object-cover w-full h-full" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold sm:text-3xl">{product.name}</h1>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < product.rating ? "text-amber-400" : "text-coffee-200 dark:text-coffee-700"}
              />
            ))}
          </div>
          <span className="text-sm text-coffee-500 dark:text-coffee-400">
            {product.rating} Review{product.rating !== 1 && "s"}
          </span>
          <span className="text-sm text-coffee-300 dark:text-coffee-600">|</span>
          <span className="text-sm text-coffee-500 dark:text-coffee-400">SKU: {product.sku}</span>
        </div>

        <div className="flex items-center gap-3 mt-4">
          {hasDiscount && (
            <span className="text-lg font-semibold text-coffee-400 dark:text-coffee-500 line-through">
              ${product.regularPrice.toFixed(2)}
            </span>
          )}
          <span className="text-2xl font-bold text-amber-700">
            ${price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-amber-700">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-coffee-600 dark:text-coffee-400">
          {product.description}
        </p>

        <div className="mt-4">
          <h3 className="mb-2 text-sm font-bold tracking-wide uppercase text-coffee-700 dark:text-coffee-300">Key Features</h3>
          <ul className="space-y-1.5">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-coffee-600 dark:text-coffee-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-0 border-2 border-coffee-200 rounded-full dark:border-coffee-600 w-fit">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="flex items-center justify-center w-10 h-10 text-lg transition-colors rounded-l-full hover:bg-coffee-100 dark:hover:bg-coffee-800 dark:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <TiMinus />
            </button>
            <span className="w-10 font-bold text-center dark:text-white">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="flex items-center justify-center w-10 h-10 text-lg transition-colors rounded-r-full hover:bg-coffee-100 dark:hover:bg-coffee-800 dark:text-white"
            >
              <TiPlus />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white transition-all rounded-full bg-amber-700 hover:bg-amber-800 active:scale-95"
          >
            Add to Cart
            <HiOutlineShoppingBag className="text-lg" />
          </button>

          <button
            onClick={() => toggleWishlist(product)}
            data-tooltip-id="wishlist"
            data-tooltip-content={liked ? "Remove from Wishlist" : "Add To Wishlist"}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all active:scale-90 ${
              liked
                ? "bg-amber-700 text-white"
                : "text-amber-700 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 hover:bg-amber-700 hover:text-white"
            }`}
          >
            {liked ? <FaHeart className="text-xl" /> : <FaRegHeart className="text-xl" />}
          </button>
          <Tooltip id="wishlist" className="text-sm text-white bg-amber-700" />
        </div>

        <div className="pt-4 mt-4 text-sm border-t border-coffee-100 dark:border-coffee-800">
          <span className="font-medium text-coffee-700 dark:text-coffee-300">Category:</span>{" "}
          <span className="text-amber-700 dark:text-amber-400">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
