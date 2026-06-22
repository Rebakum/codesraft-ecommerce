import { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useCart } from "../../../Cart/CartContext";

const Details = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const images = [product.image];

  const hasDiscount = product.offerPrice && product.discount > 0;
  const price = hasDiscount ? product.offerPrice : product.regularPrice;

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {/* Image Gallery */}
      <div className="w-full md:w-1/2">
        <div className="overflow-hidden border rounded-lg">
          <img
            src={images[selectedImage]}
            alt={product.name}
            className="object-cover w-full h-[400px]"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2">
        {/* Title & Stock */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-700">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Rating & SKU */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {product.rating} Review{product.rating !== 1 && "s"}
          </span>
          <span className="text-sm text-gray-500">
            SKU: {product.sku}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          {hasDiscount && (
            <span className="text-xl font-semibold text-gray-400 line-through">
              ${product.regularPrice.toFixed(2)}
            </span>
          )}
          <span className="text-2xl font-bold text-red-600">
            ${price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="px-3 py-1 text-sm text-red-600 bg-red-100 rounded-full">
              {product.discount}% Off
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {product.description}
        </p>

        {/* Features */}
        <div className="mt-4">
          <h3 className="mb-2 font-semibold">Key Features:</h3>
          <ul className="space-y-1">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center">
          {/* Quantity Selector */}
          <div className="flex items-center gap-3 border rounded-full w-fit">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="flex items-center justify-center w-10 h-10 text-lg transition-colors rounded-full hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <TiMinus />
            </button>
            <span className="w-8 font-semibold text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="flex items-center justify-center w-10 h-10 text-lg transition-colors rounded-full hover:bg-gray-100"
            >
              <TiPlus />
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => {
              for (let i = 0; i < quantity; i++) {
                addToCart(product);
              }
              setQuantity(1);
            }}
            className="flex items-center justify-center gap-2 px-8 py-3 text-white transition-colors bg-red-600 rounded-full hover:bg-red-700"
          >
            Add to Cart
            <HiOutlineShoppingBag className="text-lg" />
          </button>

          {/* Wishlist */}
          <button
            data-tooltip-id="wishlist"
            data-tooltip-content="Add To Wishlist"
            className="flex items-center justify-center w-12 h-12 text-red-600 transition-colors bg-red-100 rounded-full hover:bg-red-600 hover:text-white"
          >
            <FaRegHeart className="text-xl" />
          </button>
          <Tooltip id="wishlist" className="bg-red-600 text-white text-sm" />
        </div>

        {/* Category & Tags */}
        <div className="mt-4 text-sm">
          <p>
            <span className="font-medium">Category:</span>{" "}
            <span className="text-gray-500">{product.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
