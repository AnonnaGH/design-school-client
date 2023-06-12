import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useEnrolledClass = () => {


    const { user, loading } = useAuth();


    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)

            return res.data;
        },
    })

    return [enrolledClasses, refetch]
}

export default useEnrolledClass;