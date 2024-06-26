import { create } from 'zustand';

interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  isOpen: boolean;
  totalItems: number;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  removeItem: (id: number) => void;
  toggleDrawer: () => void;
}

export const useStore = create<CartState>((set) => ({
  cart: [],
  isOpen: false,
  totalItems: 0,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          totalItems: state.totalItems + 1,
        };
      }
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
        totalItems: state.totalItems + 1,
      };
    }),
  incrementItem: (id) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
      totalItems: state.totalItems + 1,
    })),
  decrementItem: (id) =>
    set((state) => ({
      cart: state.cart
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
      totalItems: state.totalItems - 1,
    })),
  removeItem: (id) =>
    set((state) => ({
      totalItems:
        state.totalItems - state.cart.find((i) => i.id === id)!.quantity,
      cart: state.cart.filter((i) => i.id !== id),
    })),
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
}));
