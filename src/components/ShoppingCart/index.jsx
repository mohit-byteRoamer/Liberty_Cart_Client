import CartSummary from "./CartSummary"
import ProductList from "./productList"

function shoppingCart() {
  return (
    <div className="flex justify-between p-8 bg-gray-50">
      <div className="w-3/5 bg-white shadow-md rounded-md p-4">
        <ProductList />
      </div>
      <div className="w-1/3 ml-4">
        <CartSummary />
      </div>
    </div>
  )
}

export default shoppingCart