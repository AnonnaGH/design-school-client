import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import StudentsReview from "../StudentsReview/StudentsReview";
import TopInstructors from "../../AllInstructor/TopInstructor";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Graphic Design School| Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <StudentsReview></StudentsReview>
            <TopInstructors></TopInstructors>
        </div>
    );
};


export default Home;
