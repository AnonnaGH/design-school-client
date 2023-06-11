import { useLoaderData } from "react-router-dom";
import ClassCard from "./ClassCard";


const AllClasses = () => {
    const classes = useLoaderData();
    const approved = classes.filter(singleClass => singleClass.status === 'approved')
    return (
        <section>

            <div className="grid md:grid-cols-3 gap-4">
                {
                    approved.map(singleClass => <ClassCard
                        key={singleClass._id}
                        singleClass={singleClass}>
                    </ClassCard>)
                }
            </div>
        </section>
    );
};

export default AllClasses;