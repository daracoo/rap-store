import { AlbumItem } from "../dummy-products"
import { currencyFormatter } from "../util/formatting.ts"
interface Props {
    item: AlbumItem
}

const AlbumItemComponent: React.FC<Props> = ({ item }) => {
    return (
        <li className="album-item">
            <article>
                <img src={item.imageUrl} alt={item.name}/>
                <div>
                    <h3>{item.name}</h3>
                    <p><b>{item.artist}</b></p>
                    <p className="album-item-price">{currencyFormatter.format(item.price)}</p>
                    <p className="album-item-description">{item.description}</p>
                </div>
                <p className="album-item-actions">
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}

export default AlbumItemComponent;