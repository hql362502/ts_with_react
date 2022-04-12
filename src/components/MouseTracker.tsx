import React,{useState, useEffect} from 'react'
import useMousePosition from '../hooks/useMousePosition';

const MouseTracker:React.FC = () => {
    const position = useMousePosition()
    return (
        <div>X: {position.x}, Y:{position.y}</div>
    )
}
export default MouseTracker  ;
