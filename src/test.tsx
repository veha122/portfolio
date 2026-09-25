// import { useState } from "react";
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// interface FormData {
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// }
// const About = () => {
//   const title = 'អំពីខ្ញុំ';
//   const subtitle = 'សូមបំពេញព័ត៌មានខាងក្រោមដើម្បីទំនាក់ទំនងមកខ្ញុំ';
//   const [loading, setLoading] = useState(false);
//   const about = [
//     { title: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ", description: "ខ្ញុំឈ្មោះ  ស៊ំុវេហាហើយខ្ញុំមកពីខេត្តត្បូងឃ្មុំ ខ្ញុំទើបនឹងបញ្ចប់ការសិក្សាបរិញ្ញាបត្រផ្នែកវិទ្យាសាស្រ្តកុំព្យូទ័រ​២០២៥ ពីសាកលវិទ្យាល័យរាជធានីភ្នំពេញ (RUPP) ក្នុងឆ្នាំ ២០២៥។ ខ្ញុំបានបញ្ចប់ការបណ្ដុះបណ្ដាលរយៈពេល៦ខែ នៅធនាគារ BPBank ផ្នែកអភិវឌ្ឍន៍ និងគាំទ្រត្រព័ត៌ស្ថានភាពប្រព័ន្ធ។ បន្ថែមពីនេះ ខ្ញុំបានបណ្ដុះបណ្ដាលរយៈពេល១ឆ្នាំ នៅអង្គការការពារបរិស្ថាន (Conservation) ដែលខ្ញុំបានធ្វើការអភិវឌ្ឍប្រព័ន្ធវេបសាយប្រើ Laravel, អភិវឌ្ឍកម្មវិធីទូរស័ព្ទដៃប្រើ Dart និង Flutter, និងផ្តល់ការគាំទ្រ IT ដូចជា ការតំឡើងកម្មវិធីបើកបរ (drivers), ការតំឡើងប្រព័ន្ធប្រតិបត្តិការ (Windows, Linux), ការកំណត់ម៉ាស៊ីនបោះពុម្ព, ការផ្ដល់សេវាកម្មបង្ហោះវេបសាយលើ DigitalOcean ប្រើ Ubuntu, និងការគ្រប់គ្រង Microsoft 365។" },
//     { title: "ចូលចិត្តបច្ចេកវិទ្យា", description: "ខ្ញុំមានចំណូលចិត្តក្នុងការសិក្សា និងអនុវត្តបច្ចេកវិទ្យាទំនើបៗ ដូចជា កម្មវិធីវេបសាយ, កម្មវិធីទូរស័ព្ទដៃ, និងប្រព័ន្ធ IT ជាទូទៅ។ ខ្ញុំរីករាយក្នុងការរកស៊ី និងដោះស្រាយបញ្ហាតាមបច្ចេកវិទ្យា។ ខ្ញុំចូលចិត្តរៀនភាសាកម្មវិធីថ្មីៗ និងបច្ចេកវិទ្យាថ្មីៗ ដើម្បីធ្វើឱ្យការងាររបស់ខ្ញុំមានប្រសិទ្ធភាព និងទាន់សម័យ។ ខ្ញុំក៏មានចំណាប់អារម្មណ៍ក្នុងការរួមចំណែកក្នុងគម្រោងឌីជីថល និងការអភិវឌ្ឍប្រព័ន្ធដែលអាចផ្លាស់ប្តូរនិងឱ្យប្រយោជន៍សម្រាប់សង្គម" },
//   ];
//   const formRef = useRef<HTMLFormElement>(null); // ✅ Declare formRef
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [submitted, setSubmitted] = useState(false);

//   // handleChange function
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // handleSubmit function with EmailJS (from previous step)
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newErrors: { [key: string]: string } = {};

//     if (!formData.name.trim()) newErrors.name = 'សូមបញ្ចូលឈ្មោះ';
//     if (!formData.email.trim()) newErrors.email = 'សូមបញ្ចូលអ៊ីមែល';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'អ៊ីមែលមិនត្រឹមត្រូវ';
//     if (!formData.message.trim()) newErrors.message = 'សូមបញ្ចូលសាររបស់អ្នក';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Send via EmailJS
//     if (formRef.current) {
//       emailjs
//         .sendForm(
//           "YOUR_SERVICE_ID",
//           "YOUR_TEMPLATE_ID",
//           formRef.current,
//           "YOUR_PUBLIC_KEY"
//         )
//         .then(
//           () => {
//             alert("Email sent successfully!");
//             setSubmitted(true);
//             setFormData({ name: '', email: '', subject: '', message: '' });
//             setTimeout(() => setSubmitted(false), 5000);
//           },
//           (error) => {
//             console.error(error);
//             alert("Error sending email: " + error.text);
//           }
//         );
//     }
//   };
  

//   return (
//     <div className="w-full flex justify-center">
//       <div className="w-full max-w-7xl md:w-full text-whilt p-5">
//         {/* Header */}
//         <div className="header text-center p-5">
//           <h1 className="p-2 text-black">{title}</h1>
//           <p className="p-2 text-black">{subtitle}</p>
//         </div>
//         {/* About */}
//         <div className="grid grid-cols-1 gap-4 pb-5">
//           {about.map((item, index) => (
//             <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
//               <h4 className="text-lg font-semibold text-green-800 mb-3">
//                 {item.title}
//               </h4>
//               <p className="text-gray-700 mb-4">{item.description}</p>
//               <a
//                 href="/contact"
//                 className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
//               >
//                 ទាក់ទងឥឡូវ
//               </a>
//             </div>
//           ))}
//         </div>
//         {/* Contact */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-5">
//           {/* Card 1: Contact Form */}
//           <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
//             <div className="bg-green-700 text-white px-6 py-5">
//               <h3 className="text-xl font-semibold">ផ្ញើសារមកយើង</h3>
//             </div>
//             <div className="p-6 md:p-8">
//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     ឈ្មោះ
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
//                     placeholder="ឈ្មោះរបស់អ្នក"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     អ៊ីមែល ឬ លេខទូរសព្ទ
//                   </label>
//                   <input
//                     type="text"
//                     id="email"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
//                     placeholder="example@email.com ឬ 012 345 678"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     សាររបស់អ្នក
//                   </label>
//                   <textarea
//                     id="message"
//                     rows={5}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
//                     placeholder="ឧ. ខ្ញុំមកពីស្រុក... ចង់សួរអំពីការដាំស្រូវ..."
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
         
//                   className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md"
//                 >
//                   ផ្ញើសារ
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Card 2: Contact Info / Map / Quick Links */}
//           <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
//             <div className="bg-green-700 text-white px-6 py-5">
//               <h3 className="text-xl font-semibold">ព័ត៌មានទំនាក់ទំនង</h3>
//             </div>
//             <div className="p-6 md:p-8 flex-1 space-y-6">
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <span className="text-green-700 text-xl mr-3">📍</span>
//                   <div>
//                     <p className="font-medium">អាសយដ្ឋាន</p>
//                     <p className="text-gray-600">ភ្នំពេញ / ស្រុកកំណើតខ្មែរ (Online)</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <span className="text-green-700 text-xl mr-3">📱</span>
//                   <div>
//                     <p className="font-medium">ទូរសព្ទ</p>
//                     <p className="text-gray-600">+855 15 618 463</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <span className="text-green-700 text-xl mr-3">✉️</span>
//                   <div>
//                     <p className="font-medium">អ៊ីមែល</p>
//                     <p className="text-gray-600">somveha.122@gmail.com</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Placeholder សម្រាប់ Google Map ឬរូបភាព */}
//               <div className="mt-4 rounded-lg overflow-hidden shadow-inner bg-gray-200 h-48 flex items-center justify-center">
//                 <p className="text-gray-500 text-center">
//                   (បញ្ចូល Google Maps ឬរូបភាពស្រុកកំណើតនៅទីនេះ)
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
