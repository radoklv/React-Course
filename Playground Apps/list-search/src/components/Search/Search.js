import Card from '../UI/Card'

const Search = ({onType}) => {

    return (
        <Card>
            <input type="text" onChange={(e) => onType(e)}/>
        </Card>
    )
}

export default Search
