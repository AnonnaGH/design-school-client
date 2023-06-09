import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import StudentsReview from "../Pages/Home/StudentsReview/StudentsReview";




const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <StudentsReview></StudentsReview>
            <Footer></Footer>
        </div>
    );
};
export default Main;