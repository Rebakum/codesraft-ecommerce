import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import Nav_Banner from "../../Shared/Nav-Banner/Nav_Banner";
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
          <h2 className="text-2xl font-bold">Product not found</h2>
          <Link
            to="/shop"
            className="px-6 py-2 text-white bg-red-600 rounded-full hover:bg-red-700"
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

      <div className="mt-10 max-w-7xl mx-auto w-full px-4">
        <Details product={product} />
      </div>

      <div className="mt-14 max-w-7xl mx-auto w-full px-4">
        <ProductDetailsCenter product={product} />
      </div>

      <div className="mt-14 max-w-7xl mx-auto w-full px-4">
        <RelatedProduct currentProduct={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
