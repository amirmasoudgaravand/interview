import { useEffect, useRef } from "react";

export function UsePreviousState(value: any) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    }, [value]); 
    return ref.current; 
  }