import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import Nav_Banner from "../Shared/Nav_Banner";
import Details from "../Shop/components/Details";
import ProductDetailsCenter from "./components/ProductDetailsCenter";
import RelatedProduct from "./components/RelatedProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <Nav_Banner name="Product Not Found" path="/shop" />
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
          <h2 className="text-2xl font-bold dark:text-white">Product not found</h2>
          <Link
            to="/shop"
            className="px-6 py-2 text-white bg-amber-700 rounded-full hover:bg-amber-800"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav_Banner name={product.name} path="/shop" nameS="Details" pathS={`/product/${id}`} />

      <div className="mt-10 mx-auto w-full px-4 max-w-[1280px]">
        <Details product={product} />
      </div>

      <div className="mt-14 mx-auto w-full px-4 max-w-[1280px]">
        <ProductDetailsCenter product={product} />
      </div>

      <div className="mt-14 mx-auto w-full px-4 max-w-[1280px]">
        <RelatedProduct currentProduct={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
