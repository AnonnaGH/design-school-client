import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useBookedClass = () => {


    const { user, loading } = useAuth();


    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: bookedClasses = [] } = useQuery({
        queryKey: ['bookedClasses', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),

        queryFn: async () => {
            const res = await axiosSecure(`/booked?email=${user?.email}`)

            return res.data;
        },
    })

    return [bookedClasses, refetch]
}

export default useBookedClass;