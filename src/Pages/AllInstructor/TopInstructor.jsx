import { useEffect, useState } from 'react';

import TopInstructorCard from './TopInstructorCard';

const TopInstructors = () => {
    const [topInstructors, setTopInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/topInstructors')
            .then(response => response.json())
            .then(data => {
                setTopInstructors(data);
            })
            .catch(error => {
                console.log('Error:', error);

            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto my-40">
            <div>
                <h2 className='text-3xl my-10 text-center'>Top Instructors</h2>
                <div className='grid md:grid-cols-3 gap-4'>
                    {topInstructors?.map((instructor, index) => (
                        <TopInstructorCard
                            key={index}
                            instructor={instructor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopInstructors;
