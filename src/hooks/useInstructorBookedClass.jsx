
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructorBookedClass = () => {


    const { user, loading } = useAuth();


    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: instructorBookedClass = [] } = useQuery({
        queryKey: ['instructorBookedClass', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),

        queryFn: async () => {
            const res = await axiosSecure(`/booked/instructor?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [instructorBookedClass, refetch]
}

export default useInstructorBookedClass;