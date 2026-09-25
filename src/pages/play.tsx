import video1 from '../assets/videos/video1.mp4';
import video01 from '../assets/videos/IMG_0020.mp4';
import video02 from '../assets/videos/IMG_0026.mp4';
import video03 from '../assets/videos/IMG_0025.mp4';
import video04 from '../assets/videos/IMG_0028.mp4';
import video05 from '../assets/videos/video1.mp4';
import video06 from '../assets/videos/IMG_0020.mp4';
import video07 from '../assets/videos/IMG_0026.mp4';
import video08 from '../assets/videos/IMG_0025.mp4';
import video09 from '../assets/videos/IMG_0028.mp4';
const VideoPlay = () => {
  const videos = [
    { description: "", type: "youtube", link: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=0" }, // 4K-ready YouTube URL
    { description: "", type: "local", link: video1 },
    { description: "", type: "local", link: video01 },
    { description: "", type: "local", link: video02 },
    { description: "", type: "local", link: video03 },
    { description: "", type: "local", link: video04 },
    { description: "", type: "local", link: video05 },
    { description: "", type: "local", link: video06 },
    { description: "", type: "local", link: video07 },
    { description: "", type: "local", link: video08 },
    { description: "", type: "local", link: video09 },
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Video Player
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Watch these videos (YouTube 4K and local MP4 – fully responsive)
          </p>
        </div>

        {/* Responsive Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={item.link}
                  controls
                />
              </div>
            </div>
          ))}
        </div>


















        {/* Notes */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Responsive 16:9 aspect ratio • Fullscreen supported • No extra packages needed</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;