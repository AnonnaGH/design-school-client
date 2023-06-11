
import { MdPayment } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import useInstructor from "../../hooks/useInstructor";
import useBookedClass from "../../hooks/useBookedClass";
import useAdmin from "../../hooks/useAdmin";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({ singleClass }) => {




    const { _id, name, email, image, seats, instructor, price, details, category } = singleClass;

    const { user } = useAuth();
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin()
    const [, refetch] = useBookedClass();


    const navigate = useNavigate();
    const location = useLocation();

    const handleBookClass = singleClass => {
        console.log(singleClass)
        if (user && user.email) {
            const bookedClass = { bookedClassId: _id, name, user_name: user.displayName, image, instructor, category, price, email, user_email: user.email }
            fetch('http://localhost:5000/booked', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class booked',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to book class.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (


        <div className="card w-96 bg-base-100 shadow-xl mx-auto border border-white">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}

                </h2>
                <p className="font-semibold">{instructor}</p>
                <p>{details}</p>


                <div className="card-actions justify-between pb-6">

                    <div className="flex">

                        <MdPayment className="text-2xl"></MdPayment>

                        <div className=" ms-4">${price}</div>
                    </div>

                    <div className="flex">
                        <BsFillPeopleFill className="text-2xl"></BsFillPeopleFill>
                        <div className=" ms-4">  {seats}</div>
                    </div>
                </div>

                <button
                    disabled={isInstructor || isAdmin}
                    onClick={() => handleBookClass(singleClass)}


                    className="btn  bg-blue-900 text-white hover:bg-blue-500"
                >
                    Enroll now
                </button>
            </div>
        </div >
    );
};


export default ClassCard;

