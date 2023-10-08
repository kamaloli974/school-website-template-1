import {AiOutlineDown} from "react-icons/ai";

export default function H3Component(props){
    return(
        <h3 id={"hide"} className="font-extrabold text-lg text-slate-50 text-center p-2 block" >Sunrise
            <span className="inline-block lg:hidden md:hidden text-sm pl-4" onClick={props.handleVisibility}><AiOutlineDown/></span></h3>
    );
}