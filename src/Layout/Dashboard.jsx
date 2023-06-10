import { FaBook, FaHome, FaUsers, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
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


                    <li>
                        <NavLink to="/dashboard/home">
                            <FaHome /> Admin Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/adminmanageclass">
                            <FaWallet /> Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/history">
                            <FaBook /> Manage Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allusers">
                            <FaUsers /> All Users
                        </NavLink>
                    </li>





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

                    <hr className="my-4" />
                    <li>
                        <NavLink to="/">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classes"> All Classes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/classes">Enroll classes</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;