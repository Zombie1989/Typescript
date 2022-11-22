const ProductDetails = ({product}:any) => {
  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <img src={product.imageName} />
    </div>
  )
}

export default ProductDetails