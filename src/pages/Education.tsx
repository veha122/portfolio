const Education = () => {
  const exsperience = [
    {
      title: "Bachelor of Information Technology Royal University of Phnom Penh",
      description: "Internship in  development at Bank  (6 months)",
      data: [
        { subtitle: "Program C,C++,Java ,PHP,C#" },
        { subtitle: "Linux is Basic Linux Commands " },
        { subtitle: "Laravel , PHP framework for building web applications. Known for its elegant syntax, MVC architecture" },
        { subtitle: "Networking Basic   (Router ,Switch )" },
        { subtitle: "Database (MySQL Server and MySQL) and MIS for Analyst Database" },
        { subtitle: "JavaC# Programing Language  for Create Desktop Platform Application" },
      ]
    },
    {
      title: "Online Courses & Certifications Udemy / Coursera / LinkedIn Learning",
      description: "Internship for IT Support and development (one Year) Internship and Consultant at Organization ",
      data: [
        { subtitle: "Dart Programing Language  for Create Desktop Platform Application" },
        { subtitle: "Laravel , PHP framework for building web applications. Known for its elegant syntax, MVC architecture" },
        { subtitle: "Ubuntu Linux System" },
        { subtitle: "Hosting Website on Digital Ocean" },
        { subtitle: "Node js Programing Language  for Create Desktop Platform Application" },
        { subtitle: "PHP Programing Language  for Create Desktop Platform Application" },
      ]
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl md:w-full text-whilt p-4">
          <div className="header text-center p-5">
            <h1 className='p-2'>
              ប្រវត្តិការសិក្សា និងការអភិវឌ្ឍជំនាញ
            </h1>
            <p className='p-2'>
              ប្រវត្តិការសិក្សា បង្ហាញពីដំណើរការអប់រំ និងការបណ្តុះបណ្តាល ដែលបានរួមចំណែកបង្កើតជំនាញ និងចំណេះដឹងរបស់ខ្
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exsperience.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl  p-8 md:p-10  border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all duration-500 
             hover:-translate-y-3 hover:scale-[1.02] ">
                <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center md:text-left transition-colors duration-300   group-hover:text-emerald-600">
                  {item.title}
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-gray-800 dark:text-gray-200">
                  <p>
                    {item.description}
                  </p>
                  <p className="mt-4">
                    ជំនាញសំខាន់ៗ៖
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    {item.data.map((data, index) => (
                      <li key={index}>{data.subtitle}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;