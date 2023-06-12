
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/users');
                if (!res.ok) {
                    throw new Error('Failed to fetch users');
                }
                return res.json();
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
    });

    return [users, loading, refetch];
};

export default useUsers;