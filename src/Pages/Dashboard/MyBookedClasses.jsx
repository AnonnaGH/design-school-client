import useBookedClass from "../../hooks/useBookedClass";


const MyBookedClasses = () => {
    const [bookedClass, refetch] = useBookedClass();
    return (
        <div>
            <h1>Booked classes: {bookedClass.length}</h1>

        </div>
    );
};

export default MyBookedClasses;