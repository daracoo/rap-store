import { createContext, useReducer, ReactNode } from "react";
import { AlbumItem } from "../../dummy-products";

interface CartState{
    items: (AlbumItem & { quantity: number })[];
}

interface CartContextType {
    items: (AlbumItem & { quantity: number })[];
    addItem: (item: AlbumItem) => void;
    removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextType>({
    items: [],
    addItem: () => {},
    removeItem: () => {}
});

type CartAction = 
    | { type: 'ADD_ITEM'; item: AlbumItem}
    | { type: 'REMOVE_ITEM'; id: number};

function cartReducer(state: CartState, action: CartAction): CartState {
    if(action.type === 'ADD_ITEM'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updatedItems};
    }

    if(action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if(existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        
        return {...state, items: updatedItems}
    }

    return state;

}

interface CartContextProviderProps{
    children: ReactNode;
}

export function CartContextProvider({children}: CartContextProviderProps){
    const[cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

    function addItem(item: AlbumItem){
        dispatchCartAction({type: 'ADD_ITEM', item});
    }

    function removeItem(id: number){
        dispatchCartAction({type: 'REMOVE_ITEM', id});
    }

    const cartContext: CartContextType = {
        items: cart.items,
        addItem,
        removeItem
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;