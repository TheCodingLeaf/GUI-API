import { useParams } from "react-router-dom"
import { useProductsDATA } from "../Components/Data/ProductDATA"

export const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useProductsDATA();

  const product = data?.products?.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} style={{ width: '400px' }} />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  )
}