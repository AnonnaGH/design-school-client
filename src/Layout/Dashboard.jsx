import { FaBook, FaHome, FaUsers, FaWallet } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";



const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const isUser = !isAdmin && !isInstructor;

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#DCDFF0]">

                    {/* Sidebar content here */}


                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/home">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/adminmanageclass">
                                    <FaWallet /> Manage classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymenthistory">
                                    <FaBook /> Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers">
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                        </>
                    )}

                    {isInstructor && (
                        <>
                            <li>
                                <NavLink to="/dashboard/home">
                                    <FaHome /> Instructor Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addclass">
                                    Add new class
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageclasses">
                                    Manage Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/managebooking">
                                    Manage Booking
                                </NavLink>
                            </li>
                        </>
                    )}

                    {isUser && (
                        <>
                            <li>
                                <NavLink to="/dashboard/home">
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/mybookedclasses">
                                    My booked classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myenrolledclasses">
                                    My Enrolled Classes
                                </NavLink>
                            </li>
                        </>
                    )}



                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/allclasses"> All Classes</NavLink></li>
                    <li><NavLink to="/instructors">Instructors</NavLink></li>
                    <li>
                        <Link onClick={handleLogOut} >  Logout</Link>
                    </li>
                </ul>


            </div>
        </div>

    );
};

export default Dashboard;