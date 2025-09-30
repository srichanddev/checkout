import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';

export interface CartItemWithDiscount {
  product: Product;
  quantity: number;
  subtotal: number;
  itemDiscount: number;
}

export interface CartSummary {
  items: CartItemWithDiscount[];
  totalPrice: number;
  totalDiscount: number;
}

export async function calculateCart(cartItems: CartItem[]): Promise<CartSummary> {
  // Group CartItems by Product
  const itemsByProduct: { [name: string]: { product: Product, quantity: number }} = {};
  for (const item of cartItems) {
    const product = (item as any).product as Product;
    if (!itemsByProduct[product.name]) {
      itemsByProduct[product.name] = { product, quantity: 0 };
    }
    itemsByProduct[product.name].quantity += item.quantity;
  }

  let total = 0;
  let discount = 0;
  const resultItems: CartItemWithDiscount[] = [];
  
  for (const { product, quantity } of Object.values(itemsByProduct)) {
    let itemSubtotal = product.price * quantity;
    let itemDiscount = 0;

    // Promotions for A: buy 3 for 85
    if (product.name === 'A' && quantity >= 3) {
      const sets = Math.floor(quantity / 3);
      const remainder = quantity % 3;
      itemSubtotal = sets * 85 + remainder * product.price;
      itemDiscount = sets * (3 * product.price - 85);
    }
    // Promotions for B: buy 2 for 35
    else if (product.name === 'B' && quantity >= 2) {
      const sets = Math.floor(quantity / 2);
      const remainder = quantity % 2;
      itemSubtotal = sets * 35 + remainder * product.price;
      itemDiscount = sets * (2 * product.price - 35);
    }
    // No specific promo for C, D

    total += itemSubtotal;
    discount += itemDiscount;

    resultItems.push({
      product,
      quantity,
      subtotal: itemSubtotal,
      itemDiscount
    });
  }

  // Basket-level discount
  let basketDiscount = 0;
  if (total > 150) {
    basketDiscount = 20;
    discount += basketDiscount;
    total -= basketDiscount;
  }

  return {
    items: resultItems,
    totalPrice: total,
    totalDiscount: discount
  };
}
