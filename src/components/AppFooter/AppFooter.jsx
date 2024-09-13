import { Layout, Input } from "antd";
import { InstagramOutlined, MailOutlined, TwitterOutlined } from "@ant-design/icons";
import { RiFacebookLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const AppFooter = () => {
   return (
      <Footer className="bg-black text-white py-10 mt-10">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Exclusive Subscribe Section */}
            <div>
               <h1 className="text-xl font-semibold mb-4">Exclusive</h1>
               <h1 className="text-base font-semibold mb-4">Subscribe</h1>
               <p className="mb-2">Get 10% off your first order</p>
               <Input
                  placeholder="Enter your email"
                  prefix={<MailOutlined />}
                  className="bg-transparent text-white border border-white placeholder-white"
               />
            </div>

            {/* Support Section */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Support</h3>
               <p className="mb-2">111 Bijoy sarani, Dhaka, Bangladesh.</p>
               <p className="mb-2">exclusive@gmail.com</p>
               <p className="mb-2">+88015-88888-9999</p>
            </div>

            {/* Account Section */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Account</h3>
               <ul>
                  <li className="mb-2">
                     <Link to="/my_account">My Account</Link>
                  </li>
                  <li className="mb-2">
                     <Link to="/login">Login</Link> / <Link to={"/register"}>Register</Link>
                  </li>
                  <li className="mb-2">
                     <Link to="/cart">Cart</Link>
                  </li>
                  <li className="mb-2">
                     <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li className="mb-2">
                     <Link to="/Shop">Shop</Link>
                  </li>
               </ul>
            </div>

            {/* Quick Links Section */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
               <ul>
                  <li className="mb-2">
                     {" "}
                     <Link to="/privacy_policy">Privacy Policy</Link>
                  </li>
                  <li className="mb-2">
                     {" "}
                     <Link to={"/terms_of_use"}>Terms of Use</Link>
                  </li>
                  <li className="mb-2">
                     {" "}
                     <Link to={"/faq"}>FAQ</Link>
                  </li>
                  <li className="mb-2">
                     {" "}
                     <Link to={"/contact"}>Contact</Link>
                  </li>
               </ul>
            </div>

            {/* Download App Section */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Download App</h3>
               <p className="mb-4">Save $3 with App New User Only</p>
               <div className="flex gap-2">
                  <img src="" alt="Google Play" className="w-24" />
                  <img src="" alt="App Store" className="w-24" />
               </div>
               <div className="flex items-center text-2xl gap-x-5 mt-4">
                  <Link to={"/facebook"}>
                     <RiFacebookLine />
                  </Link>
                  <Link to={"/twitter"}>
                     <TwitterOutlined />
                  </Link>
                  <Link to={"/instagram"}>
                     <InstagramOutlined />
                  </Link>
                  <Link to={"/linkedin"}>
                     <FaLinkedinIn />
                  </Link>
               </div>
            </div>
         </div>
         <div className="text-center mt-10 text-sm">
            &copy; Copyright Rimel 2022. All rights reserved.
         </div>
      </Footer>
   );
};

export default AppFooter;
