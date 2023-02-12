import React from 'react'
// const [] = useState()
// const {} = useState()
import './Button.css'
const Button = ({butonunIcindekiYazi, icon}) => {
   
       {/* jsx de deyishenler {} icerisinde yazilir */}
  return (
 
     <a className="my-custom-btn">{icon && <img src={icon} className="ucbucaq" />}{butonunIcindekiYazi}</a>
  )
}

export default Button