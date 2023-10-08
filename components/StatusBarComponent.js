import {BiLogoFacebook} from "react-icons/bi";
import {BsFillTelephoneFill, BsPhone, BsTwitter} from "react-icons/bs";
import {AiFillInstagram, AiFillInsurance} from "react-icons/ai";
import {ImLocation2} from "react-icons/im";

function StatusBarComponent(props){
    return(
        <section className="status-bar hidden lg:block md:hidden">
            <div className=" grid grid-cols-3 justify-center bg-purple-500">
                <div className="social col-span-1 justify-self-center w-full flex justify-center">
                    <span className="inline-block border-l-2 border-r-2 border-l-slate-50/20 border-r-slate-50/20 mr-2 ml-2 p-2 text-sm text-slate-50"><BiLogoFacebook/></span>
                    <span className="inline-block border-l-2 border-r-2 border-l-slate-50/20 border-r-slate-50/20 mr-2 ml-2 p-2 text-sm text-slate-50"><BsTwitter/></span>
                    <span className="inline-block border-l-2 border-r-2 border-l-slate-50/20 border-r-slate-50/20 mr-2 ml-2 p-2 text-sm text-slate-50"><AiFillInstagram/></span>
                </div>
                <div className="social col-span-2 justify-self-center flex justify-start ml-4">
                    <div className="flex items-center mr-2">
                        <span className="inline-block mr-2 ml-2 p-2 text-sm text-slate-50"><BsFillTelephoneFill/></span>
                        <p className="text-slate-50 text-center">099-0987987</p>
                    </div>
                    <div className="flex items-center ml-2">
                        <span className="inline-block mr-2 ml-2 p-2 text-sm text-slate-50"><ImLocation2/></span>
                        <p className="text-slate-50 text-center">Dodhara Chandani-7, Kanchanpur, Nepal</p>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default StatusBarComponent;