

import useClasses from "../../../hooks/useClasses";
import ClassCard from "../../AllClasses/ClassCard";

const PopularClasses = () => {

    const [classes] = useClasses();
    const popular = classes.filter(singleClass => singleClass.category === 'popular')



    return (
        <section className="my-8 max-w-screen-xl  mx-auto">
            <h1 className="text-5xl text-center font-bold mb-10">Popular Classes</h1>

            {popular.length}
            <div className="grid md:grid-cols-3 gap-4">
                {
                    popular.map(singleClass => <ClassCard
                        key={singleClass._id}
                        singleClass={singleClass}>
                    </ClassCard>)
                }
            </div>
        </section>
    );
};

export default PopularClasses;





