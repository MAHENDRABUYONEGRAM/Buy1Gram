import { useState } from "react"

interface ProductItemProps {
  srNo: number
  productName: string
  category: string[]
  productDetails: {
    price: {
      Price1: number
      Price500?: number | undefined
    }
    productImage: {
      Image1: string
      Image500?: string | undefined
    }
  }
}

type ProductsDataProps = Array<ProductItemProps>

const ProductItem = ({ product }: { product: ProductItemProps }) => {
  const [quantity, setQuantity] = useState("1kg")
  const productImage =
    quantity === "1kg"
      ? product.productDetails.productImage.Image1 || "/placeholder-hero.jpg"
      : product.productDetails.productImage.Image500 || "/placeholder-hero.jpg"
  return (
    <div
      className="flex flex-col justify-between border p-2"
      key={product.srNo}
    >
      <div>
        <img src={productImage} alt="" loading="lazy" />
      </div>
      <div>
        <span>{product.productName}: </span>
        <span>{quantity}</span>
        <select
          className="w-full rounded-sm p-4 outline-4"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        >
          <option value="1kg">
            1kg ({product.productDetails.price.Price1}rs)
          </option>
          <option value="500gm">
            500gm ({product.productDetails.price.Price500}rs)
          </option>
        </select>
      </div>
    </div>
  )
}

const ProductGrid = ({ productsData }: { productsData: ProductsDataProps }) => {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 sm:grid-cols-3 md:grid-cols-4">
      {productsData.map((product, key) => (
        <ProductItem product={product} key={key} />
      ))}
    </div>
  )
}

export default ProductGrid
