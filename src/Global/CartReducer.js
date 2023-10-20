
export const initialState = {
  shoppingCart: [], 
  totalPrice: 0, 
  message: '', 
  qty: 0
};


export const CartReducer = (state, action) => {

  let {shoppingCart, totalPrice, qty} = state;
  let product;
  let updatedPrice;
  let updatedQty;
  
  console.log(action);

  switch(action.type) {
    case "ADD_TO_CART":

      const check = shoppingCart.find((cart) => cart.id === action.id);
      product = action.products;
      if(check) {
        
        product.qty = product.qty + 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;

        return {
          shoppingCart: [...shoppingCart], 
          totalPrice: updatedPrice,
          message: 'Product is already in the cart!', 
          qty: updatedQty
        }

      } else {

        product['qty'] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;

        return {
          shoppingCart: [
            ...shoppingCart,
            product
          ],
          totalPrice: updatedPrice,
          message: '',
          qty: updatedQty
        }
      }

    case "INC":
      product = action.product;
      product.qty = product.qty + 1;
      updatedQty = qty + 1;
      updatedPrice = totalPrice + product.price;

      return {
        shoppingCart: [
          ...shoppingCart,
        ],
        totalPrice: updatedPrice,
        message: '',
        qty: updatedQty
      }

    case "DEC":
      product = action.product;
      product.qty = product.qty - 1;
      updatedQty = qty - 1;
      updatedPrice = totalPrice - product.price;

      return {
        shoppingCart: [
          ...shoppingCart,
        ],
        totalPrice: updatedPrice,
        message: '',
        qty: updatedQty
      }

    case "DELETE_PRODUCT":
      const allCartProductsExpectThis = shoppingCart.filter((product) => product.id !== action.id);
      product = action.product;
      updatedQty = qty - product.qty;
      updatedPrice = totalPrice - product.price;

      return {
        shoppingCart: [
          ...allCartProductsExpectThis
        ],
        totalPrice: updatedPrice,
        message: `${product.id} Product remove from Cart`,
        qty: updatedQty,
      }

    default:
      return state;
  }
}
