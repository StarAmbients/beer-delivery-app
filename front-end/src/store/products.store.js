import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import makeRequest from '../helpers/axios.integration';

const productsStore = create(devtools(
  // eslint-disable-next-line react-func/max-lines-per-function
  (set, get) => ({
    products: [],
    cart: [],
    id: 0,
    name: '',
    volume: '',
    price: '',
    image: '',
    mode: 'cadastrar',
    fetchProducts: async (token) => {
      const response = await makeRequest('customer/products', 'get', {}, token);
      set({ products: await response }, false, 'fetchProducts');
    },
    handleChange: ({ target: { name, value } }) => set(() => (
      { [name]: value }
    ), false, 'handleChange'),
    removeFromCart: (id) => set(produce((draft) => {
      const newCart = get().cart.filter((item) => item.id !== id);
      draft.cart = newCart;
    }), false, 'remove'),
    updateCart: (id, item) => {
      const cartItemIndex = get().cart.findIndex((p) => p.id === id);
      if (item.quantity === 0) {
        return get().removeFromCart(id);
      }
      return set(produce((state) => {
        state.cart[cartItemIndex] = item;
      }), false, 'update');
    },
    insertOnCart: (item) => set(produce((state) => {
      state.cart.push(item);
    }), false, 'insert'),
    emptyCart: () => {
      set({ cart: [] }, false, 'emptyCart');
    },
    clearAllState: () => set(() => (
      {
        name: '',
        volume: '',
        price: '',
        image: '',
      }), false, 'clearAllState'),
    modifyAllState: (id, name, price, image) => set(() => (
      {
        id,
        name,
        price,
        image,
      }), false, 'modifyAllState'),
    setMode: () => set(() => (
      { mode: 'editar' }
    ), false, 'setMode'),
  }),
));

export default productsStore;
