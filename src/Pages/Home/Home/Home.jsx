import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import StudentsReview from "../StudentsReview/StudentsReview";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Graphic Design School| Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <StudentsReview></StudentsReview>
        </div>
    );
};


export default Home;
