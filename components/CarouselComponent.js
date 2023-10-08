'use client';
import {useState} from "react";
import {
    BsArrowLeft,
    BsArrowLeftSquare,
    BsArrowRight,
    BsArrowRightSquare,
    BsChevronCompactLeft,
    BsChevronCompactRight
} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";

function CarouselComponent(props) {
    const slides = [
        {"url": "./img/slide-1.jpg"},
        {"url": "./img/slide-2.jpg"},
        {"url": "./img/slide-3.jpg"},
        {"url": "./img/slide-4.jpg"},
        {"url": "./img/slide-5.jpg"},
        {"url": "./img/slide-6.jpg"},

    ];
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        const isFirstIndex = index === 0;
        const newIndex = isFirstIndex ? slides.length - 1 : index - 1;
        setIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastIndex = index === slides.length - 1;
        const newIndex = isLastIndex ? 0 : index + 1;
        setIndex(newIndex);
    }

    const gotoSlide = (slideIndex) => {
        setIndex(slideIndex);
    }

    return (
        <div
            className="w-full w-[100%] h-[400px] md:h-[650px] sm:h-[500px] lg:h-[750px] relative ring-amber-500 group overflow-x-hidden">
            <div className="w-full h-full w-[100%] bg-cover bg-center bg-no-repeat duration-500 bg-gradient-to-r shadow-pink-500 bg-blue-950"
                 style={{backgroundImage: `url('${slides[index].url}')`}}></div>
            <div className="absolute lg:bottom-1/4 lg:left-28 bottom-[7%] sm:bottom-[15%] left-16">
                <h1 className="font-extrabold text-2xl lg:text-5xl text-purple-700">Welcome!!</h1>
                <h1 className=" font-extrabold text-2xl lg:text-5xl text-purple-700 ">
                    To Sun Rise Higher Secondary School
                </h1>
                <p className="text-orange-500 font-medium mt-2">Our service area includes Engineering, Basic class from 1-10, +2 Engineering, Science, Management,
                    Humanities & Education</p>
                <button className="bg-blue-800 text-slate-50 p-1 mt-3 w-36 rounded-lg text-1 mb-4 hidden">Contact Us</button>
            </div>
            <div
                className="hidden group-hover:block absolute top-[50%] left-5 text-sm rounded-md p-1 m-2 bg-purple-500/40 text-white cursor-pointer">
                <BsArrowLeft size={40} onClick={prevSlide}/>
            </div>
            <div
                className="hidden group-hover:block absolute top-[50%] right-5 text-sm rounded-md p-1 m-2 bg-purple-500/40 text-white cursor-pointer">
                <BsArrowRight size={40} onClick={nextSlide}/>
            </div>
            <div className="lg:flex justify-center py-4 absolute bottom-2 items-center w-full hidden">
                {
                    slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="text-2xl cursor-pointer text-slate-50" onClick={() => gotoSlide(slideIndex)}>
                            <RxDotFilled size={30}/>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

export default CarouselComponent;