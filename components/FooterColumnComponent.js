import H3Component from "@/components/H3Component";
import ListComponent from "@/components/ListComponent";
import {useState} from "react";

export default function FooterColumnComponent() {
    const [visibility,setVisibility]=useState("block");

    function handleVisibility(){
        if (visibility==="block"){
            setVisibility("hidden")
        }else{
            setVisibility("block")
        }
    }

    return(
        <div className="col-span-4 lg:col-span-1 md:col-span-1 flex items-center ">
            <div>
            <H3Component handleVisibility={handleVisibility}/>
            <ul className={"lg:block md:block duration-700 "+visibility}>
                <ListComponent/>
                <ListComponent/>
                <ListComponent/>
                <ListComponent/>
            </ul>
        </div>
        </div>
    );
}