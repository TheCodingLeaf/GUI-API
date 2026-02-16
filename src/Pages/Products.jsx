import { ProductCard } from "../Components/ProductCard/ProductCard"
import { useProductsDATA } from "../Components/Data/ProductDATA"

export const Products = () => {
  const { data, error, isLoading } = useProductsDATA();

  if (isLoading) return <p>Indlæser produkter...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <h1>Products</h1>
        {data?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}