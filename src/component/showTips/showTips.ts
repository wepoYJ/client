import { createContext } from "react";

const ShowTips = createContext({setTipsTexFN:(text:string)=>{console.log(text)}})


export default ShowTips