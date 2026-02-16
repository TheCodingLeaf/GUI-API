export function ProductCard({ product }){

    return(
        <>
        <img src={product.thumbnail} alt={product.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
        <h1>{product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        </>
    )
}