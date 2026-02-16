export function ProductCard({ product }){

    return(
        <div className="product-card">
        <img src={product.thumbnail} alt={product.title} />
        <h1>{product.title}</h1>
        <p><strong>Price:</strong> ${product.price}</p>
        <p>{product.description}</p>
        </div>
    )
}