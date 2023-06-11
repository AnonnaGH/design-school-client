
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <img
                src="https://i.ibb.co/vqzQG5d/2-removebg-preview.png"
                alt="Error"
                className="w-96 h-96 mb-8"
            />
            <h1 className="text-4xl font-bold text-red-500 mb-4">Error!</h1>
            <p className="text-lg text-gray-700 mb-8">The page you requested does not exist.</p>
            <Link to="/" className="bg-[#2A276C] text-white py-2 px-4 rounded hover:bg-blue-600">
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;