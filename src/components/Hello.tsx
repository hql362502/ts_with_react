import React from 'react'
interface MyProps{
    message?: string
}
const Hello :React.FC<MyProps> = (props)=>{
  return (
    <h2>{props.message}</h2>
  )
}
Hello.defaultProps = {
    message: '123'
}
export default Hello;
