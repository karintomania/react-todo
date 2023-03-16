import { useState } from "react";

function AddItem(props) {
    const [value, setValue] = useState('')
    return (
        <>
            <br/>
            <input
                type="text"
                value={value}
                onChange={(event)=>{setValue(event.target.value)}}
                ></input>
            <button onClick={()=>{
                props.handleSubmit(value)
                setValue("")
                }}>add</button>
        </>
    )
}

export default AddItem;