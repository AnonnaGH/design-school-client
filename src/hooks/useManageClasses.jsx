
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useManageClasses = () => {
    const { user } = useAuth();
    const { data: classes = [], isLoading, refetch } = useQuery(
        ["classes", user?.email],
        async () => {
            const res = await fetch(`https://design-school-server.vercel.app/classes?email=${user?.email}`);
            return res.json();
        },
        {
            enabled: !!user?.email && !!localStorage.getItem('access-token'),
        }
    );

    return [classes, isLoading, refetch];
};

export default useManageClasses;