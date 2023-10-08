function StripComponent(props){
    return(
        <section className="strip h-48 w-full grid grid-cols-4 bg-yellow-400">
            <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-3 flex justify-center items-center">
                <h1 className="font-extrabold md:text-2xl lg:text-3xl text-lg  text-slate-800 ml-8 mr-8 text-center">We value the quality of education we provide to the student</h1>
            </div>

            <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 justify-self-center flex justify-start items-center">
                <button className="pl-4 pr-4 pt-2 pb-2 rounded-full text-black bg-black text-slate-50 text-sm">Know More</button>
            </div>

        </section>
    );

}
export default StripComponent;