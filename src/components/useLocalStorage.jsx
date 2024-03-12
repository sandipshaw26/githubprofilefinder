import { useEffect, useState } from "react";


export default function useLocalStorage(key, defaultValue){
    const[value, setValue] = useState(()=>{
        let currentVal;

        try{
           currentVal = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        }catch(error){
            console.log(error);
            currentVal = defaultValue;
        }
        return currentVal; 
     });
    useEffect( () => {
       localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
}