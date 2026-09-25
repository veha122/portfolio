import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
type FooterProps = {};
const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <footer className="w-full bg-[#263B6A] text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-5 py- lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 p-5">
            {/* Column 1: About */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-green-400">
                គេហទំព័រ
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {/* គេហទំព័រមួយដែលផ្តល់សេវាលក់ផលិតផលកសិកម្មគ្រប់ប្រភេទ និងជួយបណ្តុះបណ្តាលកសិករឲ្យមានជំនាញ ចំណេះដឹង និងបច្ចេកទេសទំនើបទាក់ទងនឹងកសិកម្ម។ */}
              </p>
            </div>

            {/* Column 3: Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-green-400">
                ទំនាក់ទំនង
              </h3>
              <ul className="space-y-5 text-gray-300">
                <li className="flex items-start">
                  <FaPhoneAlt className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                  <p>លេខទូរស័ព្ទ៖ (+855) 15 618 463 / 71 630 7354</p>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                  <p>អ៊ីមែល៖ somveha.122@gmail.com</p>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                  <p> Sangkat Chbar Ampov 1</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-[#228B22] py-5 text-center text-white text-sm md:text-base">
          <p>
            © 2026 Som Veh. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;