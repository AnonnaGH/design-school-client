

import useUsers from "../../hooks/useUsers";
import InstructorCard from "./InstructorCard";


const AllInstructor = () => {
    const [users] = useUsers();
    const instructors = users.filter(user => user.role === 'instructor')
    return (
        <section className="max-w-screen-xl mx-auto my-10">

            <div className="grid md:grid-cols-3 gap-4">
                {
                    instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}>
                    </InstructorCard>)
                }
            </div>
        </section>
    );
};

export default AllInstructor;