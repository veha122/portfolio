import farmer from '../assets/images/farmer.webp'
import { Link } from 'react-router-dom';
const Project = () => {
  const title = 'គម្រោងរបស់ខ្ញុំ';
  const subtitle = 'ការប្រមូលផ្តុំនៃគម្រោងដែលខ្ញុំបានបង្កើត ដើម្បីបង្ហាញពីជំនាញ បទពិសោធន៍ និងការច្នៃប្រឌិតរបស់ខ្ញុំ';
  const featuredCrops = [
    {
      title: "កសិកម្មស្រុកមេមត់",
      description: 'ផ្តល់កម្មវិធី អេប និងធនធានជំនួយតាមឌីជីថលសម្រាប់កសិករ',
      img: farmer,
      slug: "srov-vossa",
      link: 'https://farmmer-khmer.web.app'
    },
    {
      title: "ភាពយន្ត",
      description: "ដំណាំឧស្សាហកម្ម ចំណូលរឹងមាំ នាំចេញធំ",
      img: "https://c8.alamy.com/comp/E7D5GB/latex-sap-is-collected-on-a-rubber-plantation-in-cambodia-E7D5GB.jpg",
      slug: "kau-sou",
      link: ''
    },
    {
      title: "ស្វាយចន្ទី",
      description: "ដំណាំសាច់ប្រាក់ តម្រូវការខ្ពស់ទីផ្សារអន្តរជាតិ",
      img: "https://c8.alamy.com/comp/MD8KCT/cashew-nuts-grow-on-a-tree-branch-cashew-anacardium-occidentale-fruits-nuts-and-leaves-in-a-garden-in-prachuap-khiri-khan-city-thailand-MD8KCT.jpg",
      slug: "svay-chanh",
      link: ''
    },
  ];

  return (
    <div className="div">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
          {/* Project */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredCrops.map((crop) => (
              <Link
                key={crop.slug}
                to={crop.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                      group rounded-xl overflow-hidden bg-white 
                      border border-gray-200 shadow-sm 
                      hover:shadow-xl hover:border-green-400/50 
                      hover:scale-[1.03] transition-all duration-300
                    "
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={crop.img}
                    alt={crop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                    {crop.title}
                  </h3>
                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {crop.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/crops"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow transition"
            >
              មើលដំណាំទាំងអស់ →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
