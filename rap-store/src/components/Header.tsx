import { ShoppingCart } from "phosphor-react"
import './style.css'
import { useContext } from "react"
import CartContext from "./store/CartContext"

const Header: React.FC = () => {
    const cartCtx = useContext(CartContext);
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0)

    return (
        <div className="navbar">
            <span className="title">Rap Store</span>
            <div className="links">
                <button><ShoppingCart size={32} />{totalCartItems}</button>
            </div>
        </div>
    )
}

export default Header;