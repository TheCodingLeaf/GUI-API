import { ProductCard } from "../Components/ProductCard/ProductCard"
import { useProductsDATA } from "../Components/Data/ProductDATA"
import { Link } from "react-router-dom";

export const Products = () => {
  const { data, error, isLoading } = useProductsDATA();

  if (isLoading) return <p>Indlæser produkter...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="products-container">
        <h1>Products</h1>
        {data?.products?.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
    </div>
  )
}