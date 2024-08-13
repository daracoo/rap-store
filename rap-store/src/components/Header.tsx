import { ShoppingCart } from "phosphor-react"
import './style.css'

const Header: React.FC = () => {
    return (
        <div className="navbar">
            <span className="title">Rap Store</span>
            <div className="links">
                <button><ShoppingCart size={32} /></button>
            </div>
        </div>
    )
}

export default Header;