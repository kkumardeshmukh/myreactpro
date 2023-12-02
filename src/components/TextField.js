import React, { useState } from 'react'



export default function TextField(props) {

    let [text, setText] = useState("")

    // in text box adding a text is a event and also gives a target method to user then call to value then it gives current text field value
    
    const textAdd = (event) => {
        // console.log(event.target.value)
        setText(event.target.value)
    }

    const clicked = () => {
        // console.log("clicked on buton")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to UPPERCASE !", "success")

    }
    const clicked2 = () => {
        // console.log("clicked on buton")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowercase !", "success")

    }
    const clicked3 = () => {
        // console.log("clicked on buton")
        setText("")
        props.showAlert("Text cleared !", "success")

    }

    return (
        <div className='container' style={{marginTop:'70px'}} 
        
        // style={{backgroundColor:props.mode==="dark"?"grey":"white"}}
        >
            <div>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={textAdd} value={text} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
                </div>
                <button disabled={text.length===0} type="button" className={`btn btn-${props.mode} mx-1 my-1`} on onClick={clicked}>UPPERCASE</button>
                <button disabled={text.length===0} type="button"  className={`btn btn-${props.mode} mx-1 my-1`} on onClick={clicked2}>lowercase</button>
                <button disabled={text.length===0} type="button" className={`btn btn-${props.mode} mx-1 my-1`} on onClick={clicked3}>Clear Text</button>
            </div>

            <div className='container my-3' >

                <h4>summery of your text</h4>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
                {/* above paragraph is very interesting method to count taxt lenth and spcing in bet them */}

            </div>


        </div>
    )
}
