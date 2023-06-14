
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



const TopInstructorCard = ({ instructor }) => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    const { name, email, totalPayments, image } = instructor;

    return (
        <div className="flex flex-col justify-center  px-5 " data-aos="zoom-in-down">
            <div className="card card-compact py-10  shadow-xl rounded-3xl  z-10 bg-[#2B2669]  pb-10">
                <figure className="hover:scale-110 transition-transform ">
                    <div className="h-52 rounded-full "> <img className="h-48 mb-10 rounded-full object-cover" src={image} alt="Instructor" /></div>
                </figure>

                <h2 className="text-2xl text-orange-500 mt-5 font-bold text-center"> {name}</h2>
                <h2 className="text-lg text-white text-center mb-8">{email}</h2>
            </div>
            <div className="w-3/4 py-6 mx-auto rounded-full bg-orange-400 pz-10  text-center -mt-8 z-20">


                <p className="text-center ">Total Enrolled Students: {totalPayments}</p>
            </div>
        </div>
    );
};

export default TopInstructorCard;
