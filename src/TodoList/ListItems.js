import React from 'react'
import { ContextApi } from './Context'

function ListItems() {
    return (
        <ContextApi.Consumer>
            {(item) => {
                return (<div className="btn-style">
                    <button onClick={() => { item.delet(item.id) }
                    }>Del</button>
                    <span>{item.item}</span>
                </div>)
            }}
        </ContextApi.Consumer>

        // <div className="btn-style">
        //     <button  onClick={()=>
        //         {props.delete(props.id)} 
        //     }>Del</button>
        //     <span>{props.item}</span>
        // </div>
    )
}

export default ListItems