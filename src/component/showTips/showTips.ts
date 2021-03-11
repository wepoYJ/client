import { createContext } from "react";

let ShowTips = createContext({setTipsTexFN:(text:string)=>{console.log(text)}})


export default ShowTips