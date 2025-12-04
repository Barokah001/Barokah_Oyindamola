import { Mail, PhoneCall } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "alimibarabarakat001@gmail.com",
      link: "mailto:alimibarabarakat001@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: PhoneCall,
      title: "Phone",
      value: "+243 90 600 109 82",
      link: "tel:+243906001098",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/barokah-oyindamola",
      color: "hover:text-blue-600",
    },
    {
      icon: FaXTwitter,
      url: "https://x.com/BarokahOyin",
      color: "hover:text-gray-900",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/barokah_oyin/",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <section id="contacts" ref={sectionRef} className="py-24 bg-white ">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1.5 bg-gray-900  mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2 text-center">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-center break-words">
                    {method.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-white rounded-full flex items-center justify-center text-white ${social.color} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <Icon className="text-2xl" />
                </a>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start a Project?
          </h3>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life with modern,
            efficient web solutions
          </p>
          <a href="mailto:alimibarabarakat001@gmail.com">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contacts