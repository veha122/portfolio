const Experience = () => {
  const exsperience = [
    {
      title: "DP Bank Cambodia",
      description: "Internship in  development at Bank  (6 months)",
      data: [
        { subtitle: "អភិវឌ្ឍន៍វេបដោយប្រើ Laravel (Backend), Dart & Flutter (Mobile)" },
        { subtitle: "ប្រព័ន្ធគ្រប់គ្រងព័ត៌មាន និងការអភិរក្សទិន្នន័យ (Conservation)" },
        { subtitle: "ប្រតិបត្តិការលើ server (Windows, Linux), DigitalOcean (Ubuntu), Microsoft 365" },
        { subtitle: "ប្រព័ន្ធបណ្តាញ និងកម្មវិធីធនាគារ (ឧ. PPBank ឬប្រព័ន្ធស្រដៀងគ្នា)" },
      ]
    },
    {
      title: "DP Bank Cambodia",
      description: "Internship for IT Support and development (one Year) Internship and Consultant at Organization ",
      data: [
        { subtitle: "Install drivers and set up printers on Windows and Linux systems" },
        { subtitle: "Configure Linux servers and public web servers (Nginx)" },
        { subtitle: "Host websites publicly on Linux servers using DigitalOcean" },
        { subtitle: "Microsoft 365 support (SharePoint, OneDrive, Outlook, Teams – troubleshooting and issue resolution)" },
        { subtitle: "Connect and configure network cables" },
        { subtitle: "Basic Canvas design" },
        { subtitle: "Set up and configure projectors and printers" },
        { subtitle: "Upgrade RAM and storage for laptops and desktop computers" },
        { subtitle: "Microsoft 365 development (OneDrive, SharePoint, Power Apps, Model-Driven Apps)" },
        { subtitle: "Administrative system development using Laravel (PHP)" },
        { subtitle: "Flutter mobile application development for employees" },
        { subtitle: "System development using Power Apps under Microsoft 365, including Dataverse and Power Automate, with Canva mobile integration" },
      ]
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl md:w-full text-whilt p-4 ">
        <div className="header text-center p-5">
          <h1 className='p-2'>
            បទពិសោធន៍ការងារ និងជំនាញ
          </h1>
          <p className='p-2'>
            បង្ហាញពីជំនាញ និងបទពិសោធន៍ដែលខ្ញុំបានអភិវឌ្ឍតាមដំណើរការសិក្សា និងការងារ
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 pb-5">
          {exsperience.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center md:text-left">
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
  );
};

export default Experience;