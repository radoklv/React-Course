import Card from '../UI/Card'
import ListItem from './ListItem'

const List = ({items}) => {
    const list = items.map(item => <ListItem item={item} key={item.id}/>)

    return (
        <Card>
            <ul>
                {list}
            </ul>
        </Card>
    )
}

export default List
