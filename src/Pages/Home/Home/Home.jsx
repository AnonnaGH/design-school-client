import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import StudentsReview from "../StudentsReview/StudentsReview";
import TopInstructors from "../../AllInstructor/TopInstructor";
import PopularClasses from "../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Graphic Design School| Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <TopInstructors></TopInstructors>
            <PopularClasses></PopularClasses>
            <StudentsReview></StudentsReview>
        </div>
    );
};


export default Home;
