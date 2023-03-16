
function Item(props) {
    
    return (
        <div>
            <input 
                className="inline-edit"
                type="text" 
                value={props.value} 
                onChange={(event)=>{props.handleChange(props.index, event.target.value)}}
                ></input>
                <button 
                    onClick={()=>{props.handleDeleteClick(props.index)}}>X</button>
        </div>
    )
}

export default Item;