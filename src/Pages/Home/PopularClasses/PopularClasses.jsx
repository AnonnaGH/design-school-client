
import { useEffect, useState } from 'react';

import useAxiosSecure from '../../../hooks/useAxiosSecure';

function PopularClasses() {
    const [popularClasses, setPopularClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    console.log(popularClasses);
    useEffect(() => {
        fetchPopularClasses();
    }, []);

    async function fetchPopularClasses() {
        try {
            const response = await axiosSecure.get('/paymentsPopular?sort=desc&limit=6');
            const data = response.data;
            setPopularClasses(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <h1>Popular Classes: {popularClasses?.length}</h1>
            <ul>
                {popularClasses?.map((classItem) => (
                    <li key={classItem._id}>{classItem.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PopularClasses;
