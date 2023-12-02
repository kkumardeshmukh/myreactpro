import React from 'react'

export default function Alert(props) {

    const capitalize=(word)=>{

        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)

    }
    return (
        <div style={{height:'10px'}}>
            {/* this work as a logical and operator 
            means if alert came then show the html part  */}
        {props.Alert && <div>
             <div class={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.Alert.type)}:</strong>{props.Alert.msg}
            </div>
        </div>}
        </div>
    )
}
