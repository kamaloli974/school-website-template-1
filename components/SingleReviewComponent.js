import {BiSolidQuoteAltLeft} from "react-icons/bi";

function SingleReviewComponent(props){
    return(
        <div className="h-full rounded-lg bg-slate-50 shadow-md shadow-slate-300 p-8">
            <span className="text-yellow-500 font-extrabold text-8xl"><BiSolidQuoteAltLeft/></span>
            <div className="flex flex-col items-center">
                <h3 className="text-lg font-extrabold">Excellent Institute</h3>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged.</p>
                <img className="rounded-full border-2 border-yellow-600 p-1 bg-cover h-28 w-28 mt-2" src={props.image}/>
                <p className="font-extrabold text-lg mt-2">{props.name}</p>
            </div>
        </div>
    );
}

export default SingleReviewComponent;
