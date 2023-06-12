import { useState } from "react";
import useBookedClass from "../../hooks/useBookedClass";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";


const MyBookedClasses = () => {
    const [bookedClass, refetch] = useBookedClass();
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booked/${item._id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        }
                    });
            }
        });
    };

    const handleCloseModal = () => {
        setSelectedItemId(null);
    };
    return (
        <div>
            <h1 className="text-3xl p-4 text-center">My Booked classes: {bookedClass.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Instructor Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedClass.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.instructor}</td>
                                <td>{item.category}</td>
                                <td className="text-end">${item.price}</td>
                                <td>

                                    <button
                                        className="btn btn-accent"
                                        onClick={() => setSelectedItemId(item._id)}
                                    >
                                        Pay
                                    </button>
                                </td>


                                <td>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-ghost bg-red-600  text-white"
                                    >
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>

                                {selectedItemId === item._id && (
                                    <dialog
                                        id={item._id}
                                        className="modal modal-bottom sm:modal-middle"
                                        open
                                    >
                                        <div method="dialog" className="modal-box">
                                            <div className="flex justify-end">  <button
                                                type="button"
                                                className="btn btn-ghost"
                                                onClick={handleCloseModal}
                                            >
                                                <AiFillCloseCircle className="text-5xl"></AiFillCloseCircle>
                                            </button></div>
                                            <div className="mb-4">
                                                <h3 className="font-bold text-lg">
                                                    Course name: {item.name}
                                                </h3>
                                                <p>Instructor: {item.instructor}</p>
                                                <p>Category: {item.category}</p>
                                                <p>Number of Module: {item.module}</p>
                                                <p>Price: $ {item.price}</p>
                                            </div>


                                            <div className="modal-action">


                                            </div>
                                        </div>
                                    </dialog>
                                )}
                            </tr>


                        ))}
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default MyBookedClasses;