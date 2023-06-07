import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png'

const Footer = () => {
    return (
        <div>
            <footer
                className="footer p-10 bg-[#2B2669] text-base-content text-white"
            // style={{
            //     // backgroundImage: 'url(https://i.ibb.co/bbQQ1Dg/footer.jpg)',
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            // }}
            >
                <div >
                    <img src={logo} alt="" />
                    <p>Graphic Design School Industries Ltd.<br />Providing reliable tech since </p>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/' className="link link-hover">Instructors</Link>
                    <Link to='/' className="link link-hover">Classes</Link>


                </div>
                <div>
                    <span className="footer-title">CONTACT INFORMATION</span>
                    <Link to='/' className="link link-hover">Kuril,Dhaka-1229</Link>
                    <Link to='/blogs' className="link link-hover">018 456 779</Link>
                    <Link to='/blogs' className="link link-hover">graphicDesign123@gmail.com</Link>

                </div>
                <div>
                    <span className="footer-title">SOCIAL MEDIA</span>
                    <Link to='/' className="link link-hover">Facebook</Link>
                    <Link to='/' className="link link-hover">LinkIn</Link>
                    <Link to='/' className="link link-hover">Twitter</Link>
                </div>

            </footer>
            <div className="bg-[#eceded] footer footer-center p-4 font-bold text-[#838F97]-content">
                <p>Copyright © 2023 - All right reserved by Graphic Design School Ltd</p>
            </div>
        </div>
    );
};


export default Footer;
