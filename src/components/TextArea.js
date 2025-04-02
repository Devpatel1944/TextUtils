import React,{useState} from 'react'

export default function TextArea(props) {

  
    const[text,setText] = useState("")
    const ToUpperCase =()=>{
       let newText = text.toUpperCase();
       setText(newText)
       props.showalert("success","UpperCase")
    }

    const ToHandler =(event) =>{
        setText(event.target.value)
    }
    const ToClear=()=>{
        setText("")
        props.showalert("success","Clear")
        
    }
    const ToRemoveSpace=()=>{
       let newText= text.replaceAll(/\s+/g, '');
       setText(newText);
       props.showalert("success","RemoveSpace")
    }
 
  return (
    <div className="container my-5"  >
        <h3 >Text Here</h3>
         <div className="form-floating">
  <textarea className="form-control " placeholder="Enter Text here" value={text} onChange={ToHandler} id="floatingTextarea"></textarea>
</div>
<div className='pt-2'>
  <button disabled={text.length===0} type="button" className="btn btn-primary me-2 mb-2" onClick={ToUpperCase}>ToUpperCase</button> 
  <button  disabled={text.length===0} type="button" className="btn btn-primary me-2 mb-2" onClick={ToClear}>ToClear</button> 
  <button  disabled={text.length===0} type="button" className="btn btn-primary me-2 mb-2" onClick={ToRemoveSpace}>ToRemoveSpace</button> 
</div>
<div className="container my-3" > 
     <h3>Summery</h3>
     <h3>{text.split(" ").length-1}Words and {text.length} Characters</h3>
</div>
</div>
  )
}
