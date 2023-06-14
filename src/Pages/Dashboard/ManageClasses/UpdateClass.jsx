import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const UpdateClass = ({ handleCloseModal, item }) => {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
        console.log(data);
        if (user) {
            const formData = new FormData();
            formData.append("image", data.image[0]);

            fetch(img_hosting_url, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((imgResponse) => {
                    if (imgResponse.success) {
                        const imgURL = imgResponse.data.display_url;
                        const { name, instructor, email, status, price, seats, category, details } = data;
                        const newItem = {
                            name,
                            instructor,
                            email,
                            status,
                            price: parseFloat(price),
                            seats: parseFloat(seats),
                            category,
                            details,
                            image: imgURL,
                        };
                        console.log(newItem);
                        axiosSecure.put(`/classes/${item._id}`, newItem).then((data) => {
                            console.log("after updating class ", data.data);
                            if (data.data.modifiedCount) {
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Class updated successfully",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            }
                        });
                    }
                });
        }
    };

    const handleClose = () => {
        handleCloseModal();
    };
    return (
        <div className="p-4  bg-slate-200">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Course Name*</span>
                    </label>
                    <input
                        defaultValue={item.name}
                        type="text"
                        placeholder="Course Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full "
                    />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Course Image*</span>
                    </label>
                    <input
                        type="file"
                        {...register("image")}
                        className="file-input  file-input-bordered w-full "
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={user?.displayName}
                        {...register("instructor", { required: true })}
                        className="input input-bordered w-full"
                        readOnly
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={user?.email}
                        {...register("email", { required: true })}
                        className="input input-bordered w-full"
                        readOnly
                    />
                </div>
                <div className="form-control w-full mb-4 hidden ">
                    <label className="label">
                        <span className="label-text font-semibold">Status*</span>
                    </label>
                    <input
                        defaultValue={item.status}
                        type="text"
                        {...register("status", { required: true })}
                        className="input input-bordered w-full"
                        readOnly
                    />
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select
                        defaultValue={item.category}
                        {...register("category", { required: true })}
                        className="select select-bordered"
                    >
                        <option disabled>Pick One</option>
                        <option>Logo Design</option>
                        <option>Photo editing</option>
                        <option>Ad image design</option>
                        <option>Banner design</option>
                        <option>Certificate Desin</option>
                        <option>Pakaging Desin</option>
                    </select>
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Course Price*</span>
                    </label>
                    <input
                        defaultValue={item.price}
                        type="number"
                        {...register("price", { required: true })}
                        placeholder="Type here"
                        className="input input-bordered w-full "
                    />
                </div>

                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">
                            Available seats*
                        </span>
                    </label>
                    <input
                        defaultValue={item.seats}
                        type="number"
                        {...register("seats", { required: true })}
                        placeholder="Type here"
                        className="input input-bordered w-full "
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Details</span>
                    </label>
                    <textarea
                        defaultValue={item.details}
                        {...register("details", { required: true })}
                        className="textarea textarea-bordered h-24"
                        placeholder="Write about your course"
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    {" "}
                    <input
                        className="btn mt-4  bg-blue-900 text-white hover:bg-blue-500"
                        type="submit"
                        value="Update Course"
                    />
                </div>
            </form>

        </div>
    );
};

export default UpdateClass;