// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      let totalItems = 0
      cartList.forEach(each => {
        totalAmount += each.price * each.quantity
        totalItems += 1
      })
      return (
        <div className="summary-card">
          <div className="inside-card">
            <h1 className="card-summary-para">
              Order Total: <span className="amount">Rs {totalAmount}</span>/-
            </h1>
            <p className="card-summary-para">{totalItems} items in cart</p>
            <button type="button" className="checkout-button">
              CheckOut
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
