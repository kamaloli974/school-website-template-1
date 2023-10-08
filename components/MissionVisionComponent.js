export default function MissionVisionComponent() {
    return (
        <section className="bg-slate-100 py-6 px-4">
            <div className="grid grid-cols-4 justify-items-center gap-8">
                <div
                    className="col-span-4 lg:col-span-2 md:col-span-2 font-extrabold text-5xl lg:text-6xl md:text-6xl text-slate-700 flex justify-start items-start">
                    <div>
                        <h1>Our Mission </h1>
                        <h1 className="italic">& Our Vision</h1>
                        <div className="w-1/3 bg-purple-400 h-0.5 mt-4"></div>
                        <div className="w-1/3 bg-yellow-500 h-0.5 mt-2 border-dotted"></div>
                        <span className="text-2xl text-yellow-600"></span>
                    </div>
                </div>
                <div className="col-span-4 lg:col-span-2 md:col-span-2 relative flex items-center">
                    <div className="rounded-l-full
                         bg-slate-300 shadow-slate-500 shadow-md h-44 pl-48 pt-4 pb-4 overflow-hidden ">
                        <h3 className="font-extrabold text-3xl text-slate-950 ml-2">Mission</h3>
                        <p className="text-slate-800 text-md font-medium pb-2 ml-2 overflow-hidden"> To create a happy,
                            The mission of our school is to provide an exemplary learning community that nurtures and
                            inspires boys and girls to become men and women who: think boldly, mindfully,
                            and creatively; act with honor and moral courage; lead with distinction; serve with a
                            generous spirit. </p>
                    </div>
                    <img className="absolute left-0 -top-2 rounded-full h-48
                    w-48 bg-cover bg-center border-2 rounded-full border-yellow-500 z-10 p-1" src="./img/slide-2.jpg"/>
                </div>

                <div className="col-span-4 lg:col-span-2 md:col-span-2 relative flex items-center ">
                    <div className="rounded-r-full
                         bg-slate-300 shadow-slate-500 shadow-md h-44 pr-48 pt-4 pb-4 overflow-hidden text-right">
                        <h3 className="font-extrabold text-3xl text-slate-950 mr-2">Vision</h3>
                        <p className="text-slate-800 text-md font-medium pb-2 mr-2 overflow-hidden">
                            As a community, we want to develop a culture where all children feel loved, respected,
                            and encouraged to reach their full potential.
                            develop their full potential </p>
                    </div>
                    <img className="absolute right-0 -top-2 bottom-4 rounded-full h-48
                    w-48 bg-cover bg-center border-2 rounded-full border-yellow-500 z-10 p-1" src="./img/slide-3.jpg"/>
                </div>
            </div>
        </section>
    );

}