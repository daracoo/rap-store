import { albumItems } from '../dummy-products'
import  AlbumItemComponent from '../components/AlbumItem'

const Albums: React.FC = () => {
    return(
        <ul id='albums'>{albumItems.map(item => (
            <AlbumItemComponent key={item.id} item={item}/>
        ))}</ul>
    )
}

export default Albums;