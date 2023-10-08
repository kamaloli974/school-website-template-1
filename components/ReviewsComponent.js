import SingleReviewComponent from "@/components/SingleReviewComponent";
import {GoHorizontalRule} from "react-icons/go";

function ReviewsComponent(){
    return(
        <div className="p-8 bg-slate-200">
            <h1 className="text-center font-extrabold text-2xl lg:text-3xl spacing tracking-wide mt-4">What our students say about us</h1>
            <p className="text-yellow-500 font-extrabold text-3xl text-center mb-6">-------------</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 justify-center gap-8">
                <SingleReviewComponent name={"Piyush Hamal"} image={"./img/slide-4.jpg"}/>
                <SingleReviewComponent name={"Prakash Shrestha"} image={"./img/slide-5.jpg"}/>
                <SingleReviewComponent name={"Priyanka Sakya"} image={"./img/slide-6.jpg"}/>
            </div>
            <div className="flex justify-center sm:justify-end md:justify-end lg:justify-end">
                <button className="bg-slate-950 text-slate-50 w-48 h-12 rounded-full border-yellow-400 cursor-pointer border-2 p-2 mt-8">View All</button>
            </div>
        </div>
    );
}
export default ReviewsComponent;