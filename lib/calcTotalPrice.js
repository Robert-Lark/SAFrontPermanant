export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    //this accounts for items that sell out while still in a users cart
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
