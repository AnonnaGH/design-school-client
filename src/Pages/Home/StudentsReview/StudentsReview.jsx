
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './StudentsReview.css';

const StudentsReview = () => {
    const studentReviews = [
        {
            id: 1,
            name: 'John Doe',
            review: 'The heart and soul of our graphic design class lies in our expert instructors. With their extensive experience in the industry, they bring a wealth of knowledge and real-world insights to the classroom.',
            photo: 'https://i.ibb.co/sjFPRzk/1.png',
        },
        {
            id: 2,
            name: 'Jane Smith',
            review: 'Our graphic design class offers a comprehensive curriculum that covers the foundations of design, advanced techniques, and industry-relevant skills.',
            photo: 'https://i.ibb.co/jb73F5C/2.png',
        },
        {
            id: 3,
            name: 'David Johnson',
            review: 'Creating a supportive and inclusive learning environment is of utmost importance to us.',
            photo: 'https://i.ibb.co/Mc59JvW/3.png',
        },
    ];

    const renderReviews = () => {
        return studentReviews.map((review) => (
            <div key={review.id} className='border  shadow-lg'>
                <div className="p-4 ">
                    <img src={review.photo} alt={review.name} className="w-12 h-12 rounded-full mb-4" />
                    <div className="flex items-center mb-2">
                        <h3 className="text-lg font-bold">{review.name}</h3>
                    </div>
                    <p className="text-gray-700">{review.review}</p>
                </div>
            </div>
        ));
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">What Our Students Say About Us</h2>
                <p>
                    Our students are very happy with the outstanding graphic design class! Our commitment to providing an exceptional learning experience in graphic design has left our students overjoyed and fulfilled. Let us delve into the reasons why our class has garnered such outstanding reviews:
                </p>
            </div>
            <div className="md:w-1/2 p-8">

                <Slider {...settings}>{renderReviews()}</Slider>
            </div>
        </div>
    );
};

export default StudentsReview;
