import { SiTailwindcss, SiSharp } from "react-icons/si";
import {
  FaBootstrap,
  FaJava,
  FaLaravel,
  FaLinux,
  FaMicrosoft,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase
} from 'react-icons/fa';
export default function Skill(){
  const skill_data = [
    {
      icon: FaHtml5,
      name: 'HTML5',
      description: "HTML5 & semantic markup for accessible, SEO-friendly websites Integrating HTML with CSS, JavaScript, and frontend frameworks Forms, tables, multimedia, responsive layouts Interactive user-friendly interfaces",
    },
    {
      icon: FaBootstrap,
      name: 'Boostrap5',
      description: "Responsive, mobile-first interfaces with Bootstrap 5 Grids, cards, modals, forms, navigation components Bootstrap theme customization & utility classes Integration with React, HTML, CSS Cross-browser compatibility & accessibility",
    },
    {
      icon: SiTailwindcss,
      name: 'CSS3 / Tailwind CSS',
      description: 'Expert in responsive, performant styling. I use Tailwind CSS daily to create clean, maintainable, and highly customizable user interfaces quickly.',
    },
    {
      icon: FaJsSquare,
      name: 'JavaScript (ES6+)',
      description: 'Strong command of modern JavaScript — from DOM manipulation and async patterns to functional programming and clean, modular code architecture.',
    },
    {
      icon: FaReact,
      name: 'React',
      description: "React.js development: components, hooks, reusable UI REST API integration & state management (Context, Redux) Responsive web apps & performance optimization Tailwind CSS, HTML5, JavaScript (ES6+)",
    },
    {
      icon: FaNodeJs,
      name: 'Node.js',
      description: 'Developing scalable backend services, RESTful APIs, authentication systems, and server-side logic using Express and modern Node.js patterns.',
    },
    {
      icon: FaDatabase,
      name: 'Databases',
      description: "Proficient in MySQL, PostgreSQL, and Microsoft SQL Server Experience with database design, including ER diagrams and normalization Writing efficient SQL queries, stored procedures, and triggers Data migration, backup, and recovery Knowledge of database performance optimization and indexing Familiar with integrating databases with PHP, Laravel, and Flutter applicationsBasic experience with NoSQL databases (e.g., MongoDB)",
    },
    {
      icon: FaLinux,
      name: 'Linux',
      description: "Linux server setup & configuration (Ubuntu, CentOS) Command-line, shell scripting, file & permission management Web server setup (Nginx, Apache) System administration: drivers, printers, updates Basic server monitoring & security",
    },
    {
      icon: FaMicrosoft,
      name: 'Power app',
      description: "Linux server setup & configuration (Ubuntu, CentOS) Command-line, shell scripting, file & permission management Web server setup (Nginx, Apache) System administration: drivers, printers, updates Basic server monitoring & security",
    },
    {
      icon: FaJava,
      name: 'Java',
      description: "Java programming and object-oriented development Application development and debugging Database integration (MySQL, SQL Server) Implementation of data structures and algorithms Software testing and maintenance",
    },
    {
      icon: SiSharp,
      name: 'C#',
      description: "C# programming with .NET Framework / .NET Core Object-Oriented Programming (OOP) principles SQL Server database integration Application development, debugging, and maintenance API and backend service development",
    },
    {
      icon: FaLaravel,
      name: 'Laravel',
      description: "Laravel (PHP) web application development RESTful API development and integration MySQL database management with Eloquent ORM Authentication & role-based access control Admin dashboards and management systems MVC architecture and scalable backend design",
    }
  ];
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl md:w-full text-whilt ">
          <div className="header text-center p-5">
            <h1 className='p-2'>
              សមត្ថភាពបច្ចេកទេស និងការអភិវឌ្ឍជំនាញ
            </h1>
            <p className='p-2'>
              បង្ហាញពីជំនាញបច្ចេកទេស និងសមត្ថភាពដែលខ្ញុំបានអភិវឌ្ឍក្នុងវិស័យបច្ចេកវិទ្យា
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10 p-2">
            {skill_data.map((item, index) => (
              <div key={index} className="group bg-white  text-black dark:text-white 
             rounded-2xl shadow-md hover:shadow-2xl 
             border border-gray-200 dark:border-gray-700 
             hover:border-emerald-500
             overflow-hidden 
             transition-all duration-500 
             hover:-translate-y-3 hover:scale-[1.02]"
              >
                {/* Icon & Name */}
                <div className="p-8 pb-0 text-center">
                  <div className="inline-flex items-center justify-center  w-20 h-20 rounded-full   bg-emerald-100 dark:bg-emerald-950  text-emerald-600 dark:text-emerald-400   mb-6    transition-all duration-500">
                    <item.icon className="text-5xl transition-transform duration-500 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-black text-2xl font-bold mb-3  transition-colors duration-300   group-hover:text-emerald-600" >
                    {item.name}
                  </h3>
                </div>
                <div className="px-8 pb-8">
                  <p className="leading-relaxed text-black transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};