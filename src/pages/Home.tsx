import profileImage1 from '../assets/images/somveha1.jpg';
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import About from '../pages/About'
import {
  FaGithub,
  FaTelegram,
  FaFacebook,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLaravel,
  FaLinux,
  FaMicrosoft,
  FaHeadset,
  FaEnvelope
} from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
const Home = () => {
  const skills = [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3 / Tailwind" },
    { icon: FaCss3Alt, name: "Boostrap5" },
    { icon: FaJsSquare, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaLaravel, name: "Laravel" },
    { icon: FaLinux, name: "Linux" },
    { icon: SiFlutter, name: "Flutter" },
    { icon: FaHeadset, name: "IT Support" },
    { icon: FaMicrosoft, name: "Power app" },
    { icon: FaDatabase, name: "Databases" },
  ];
  return (
    <div>
      <div className="w-full bg-gray-50 min-h-screen text-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

              {/* Left - Text */}
              <div className="lg:w-3/5 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                  Hello, I'm <span className="text-emerald-600">Som Veha</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-10">
                  <TypeAnimation
                    sequence={[
                      "Developer and IT Support Specialist Web Developer (React & Node.js)",
                      2000,
                      "System Maintenance & Troubleshooting Expert I build clean and efficient web applications",
                      2000,
                    ]}
                    wrapper="p"
                    speed={50}
                    repeat={Infinity}
                    className="text-gray-600 text-lg mb-8"
                  />
                </p>

                <div className="flex justify-center lg:justify-start gap-6 text-3xl">
                  <a
                    href="https://www.facebook.com/share/1CWeEqKkqE/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://t.me/som_veha112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    <FaTelegram />
                  </a>
                  <a
                    href="https://twitter.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://twitter.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* Right - Profile Image */}
              <div className="lg:w-2/5 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20 -z-10"></div>
                  <img
                    src={profileImage1}
                    alt="Som Veha"
                    className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 
                           object-cover border-4 border-white shadow-2xl 
                           ring-1 ring-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              My Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <div key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300"  >
                  <skill.icon className="text-5xl md:text-6xl mx-auto mb-4 text-emerald-600  group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-medium text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <About/>
        {/* Optional: Quick About / Call to Action */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to work together?
            </h3>
            <p className="text-lg text-gray-700 mb-10">
              Whether it's building a web application, fixing technical issues,
              or improving systems — I'm here to help.
            </p>
            <Link
              to="/about"
              className="inline-block px-10 py-4 bg-emerald-600 text-white font-medium 
                     rounded-lg shadow-lg hover:bg-emerald-700 transition duration-300"
            >
              Get in Touch →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
