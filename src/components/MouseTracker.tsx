import React,{useState, useEffect} from 'react'

const MouseTracker:React.FC = () => {
    let [position, setPosition] = useState({x:0,y:0})
    useEffect(() =>{
        const updateMouse = (e: MouseEvent)=>{
            setPosition({x: e.clientX,y:e.clientY})
        }
        document.addEventListener('click', updateMouse)
        return ()=>{
            document.removeEventListener('click', updateMouse)
        }
    })
    return (
        <div>X: {position.x}, Y:{position.y}</div>
    )
}
export default MouseTracker  ;
