import React from 'react'
import { Mail, PhoneCall, Mails,  } from "lucide-react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contacts</h2>
          <div className="w-16 h-1 bg-gray-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">E-mail</h3>
              <a href="mailto:alimibarabarakat001@gmail.com">
                <p className="text-gray-600">alimibarabarakat001@gmail.com</p>
              </a>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Telephone number
              </h3>
              <a href="tel:+243 90 600 109 82">
                <p className="text-gray-600">+243 90 600 109 82</p>
              </a>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mails className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Social media</h3>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-gray-500 text-gray-300 rounded-full flex items-center justify-center">
                  <a href="https://www.linkedin.com/in/barokah-oyindamola">
                    <FaLinkedin />
                  </a>
                </div>
                <div className="w-8 h-8 bg-gray-500 text-gray-300 rounded-full flex items-center justify-center">
                  <a href="https://x.com/BarokahOyin">
                    <FaXTwitter />
                  </a>
                </div>
                <div className="w-8 h-8 bg-gray-500 text-gray-300 rounded-full flex items-center justify-center">
                  <a href="https://www.instagram.com/barokah_oyin/">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts