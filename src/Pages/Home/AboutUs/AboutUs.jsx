
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";






const AboutUs = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row" data-aos="fade-right">

                <div className="md:w-1/2">
                    <img src="https://i.ibb.co/8DpyGsR/5.jpg" alt="Image" className="w-full" />
                </div>
                <div className="md:w-1/2 p-8">

                    <h2 className="text-2xl font-bold mb-4">Welcome to the Online Learning Center</h2>
                    <p>
                        Our school is dedicated to providing aspiring graphic designers with a comprehensive and interactive online learning experience. Whether you are a beginner looking to develop fundamental skills or a seasoned professional seeking to enhance your expertise, our courses cater to individuals at all skill levels.
                    </p>
                </div>
            </div>
        </div>
    )


};

export default AboutUs;