import React,{useEffect, useState} from "react";

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        };
    });
    return position;
}
export default useMousePosition;