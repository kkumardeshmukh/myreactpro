import React, { useState } from 'react'



export default function TextField(props) {

    let [text, setText] = useState("")

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
        <div className='container my-3' 
        
        // style={{backgroundColor:props.mode==="dark"?"grey":"white"}}
        >
            <div>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={textAdd} value={text} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
                </div>
                <button type="button" className={`btn btn-${props.mode} mx-3`} on onClick={clicked}>UPPERCASE</button>
                <button type="button" className={`btn btn-${props.mode} mx-3`} on onClick={clicked2}>lowercase</button>
                <button type="button" className={`btn btn-${props.mode} mx-3`} on onClick={clicked3}>Clear Text</button>
            </div>

            <div className='container my-3' >

                <h4>summery of your text</h4>
                <p>{(text.split(" ").length)-1} and {text.length} characters</p>

            </div>


        </div>
    )
}
