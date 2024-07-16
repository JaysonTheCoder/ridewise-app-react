import React from 'react'
import '../css/components/Input.css'
function Input({ type, placeholderName, name }) {
  const [ textInputMode, setTextInputMode ] = React.useState(true)
  const [ borderColor, setBorderColor ] = React.useState('#000')
  const validate = function () {
    return type == 'text' || type == 'password'
  }
  function handleFocus() {
    setBorderColor('#7A84F1')
  }
  function handleBlur(e) {
    if(e.target.value == '') {
      setBorderColor('#000')
    }
  }
  React.useEffect(()=> {
    if( !validate ) {
      setTextInputMode(false)
    }else{
      setTextInputMode(true)
    }
  }, [ type ])

  return (
    <div style={{
      borderColor: borderColor
    }} className="input-div">
      <input name={ name } onBlur={ handleBlur } onFocus={ handleFocus } type={ type } required/>
      { textInputMode ? <span>Enter your { placeholderName }</span>:'' }
    </div>
  )
}

export default Input
