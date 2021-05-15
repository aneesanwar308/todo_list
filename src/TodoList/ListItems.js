import React from 'react'

function  ListItems(props){
    return(
        <div className="btn-style">
            <button  onClick={()=>
                {props.delete(props.id)}
            }>Del</button>
            <span>{props.item}</span>
        </div>
    )
}

export default ListItems