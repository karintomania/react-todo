import Item from "./Item";

function List(props) {
    
    return props.list.map((item, index) => (
        <Item
            value={item}
            index={index}
            handleChange={props.handleChange}
            handleDeleteClick={props.handleDeleteClick} />
    ))
}

export default List;