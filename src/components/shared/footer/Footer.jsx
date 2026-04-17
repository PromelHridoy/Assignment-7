import React from 'react';
import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/instagram.png'
import twitter from '../../../assets/twitter.png'
import logo from '../../../assets/logo-xl.png'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6 px-6">
      <div className="container mx-auto flex flex-col items-center">
        
        <div className="text-center">
          <div className="flex justify-center items-center w-full"> 
           <img src={logo} alt="logo" />
          </div>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto p-4">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        <div className="flex flex-col items-center mb-16">
          <h3 className="text-lg font-medium mb-5 text-gray-200">Social Links</h3>
          <div className="flex gap-5">

            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 shadow-lg">
               <img src={instagram} alt="instagram" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 shadow-lg">
               <img src={facebook} alt="facebook" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 shadow-lg">
               <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>


        <div className="w-full border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
          <p className="text-gray-400 text-xs md:text-sm order-2 md:order-1">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400 order-1 md:order-2">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;