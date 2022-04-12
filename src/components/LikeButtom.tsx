import React,{useState, useEffect, useRef, useContext} from 'react'
import {ThemeContext} from '../App'
const LikeButtom:React.FC = () => {
    const theme = useContext(ThemeContext)
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    const domRef = useRef<HTMLInputElement>(null)
    const style={
        background: theme.background,
        color: theme.color
    }
    useEffect(() =>{
        document.title = `点击了${like}次`
    },[like])
    useEffect(()=>{
        if(domRef && domRef.current){
            domRef.current.focus()
        }
    })
    return (
        <>
        <input type="text" ref={domRef}></input>
        <button style={style}onClick={()=>{setLike(like+1)}}>👍{like}</button>
        <button onClick={()=>{setOn(!on)}}>{on? 'on':'off'}</button></>
    )
}
export default LikeButtom