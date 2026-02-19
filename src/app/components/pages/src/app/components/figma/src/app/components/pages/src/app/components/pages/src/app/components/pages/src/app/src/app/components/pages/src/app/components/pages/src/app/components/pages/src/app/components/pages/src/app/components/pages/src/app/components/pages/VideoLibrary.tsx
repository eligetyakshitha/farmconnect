import { Video, Play, Clock, Eye, Search } from "lucide-react";
import { useState } from "react";

export function VideoLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Crop Management", "Pest Control", "Irrigation", "Harvesting", "Modern Techniques", "Success Stories"];

  const videos = [
    {
      id: 1,
      title: "Modern Wheat Farming Techniques",
      category: "Crop Management",
      duration: "15:30",
      views: "125K",
      thumbnail: "🌾",
      description: "Learn advanced wheat cultivation methods for higher yield",
    },
    {
      id: 2,
      title: "Drip Irrigation Setup Guide",
      category: "Irrigation",
      duration: "12:45",
      views: "89K",
      thumbnail: "💧",
      description: "Complete guide to install and maintain drip irrigation system",
    },
    {
      id: 3,
      title: "Organic Pest Control Methods",
      category: "Pest Control",
      duration: "18:20",
      views: "210K",
      thumbnail: "🐛",
      description: "Natural and eco-friendly pest management solutions",
    },
    {
      id: 4,
      title: "Tomato Harvesting Best Practices",
      category: "Harvesting",
      duration: "10:15",
      views: "67K",
      thumbnail: "🍅",
      description: "When and how to harvest tomatoes for best quality",
    },
    {
      id: 5,
      title: "Precision Agriculture with Drones",
      category: "Modern Techniques",
      duration: "20:00",
      views: "156K",
      thumbnail: "🚁",
      description: "Using drone technology for crop monitoring and spraying",
    },
    {
      id: 6,
      title: "Rice Cultivation Complete Guide",
      category: "Crop Management",
      duration: "25:40",
      views: "298K",
      thumbnail: "🌾",
      description: "From seed selection to harvesting - complete rice farming",
    },
    {
      id: 7,
      title: "Soil Health Management",
      category: "Crop Management",
      duration: "14:30",
      views: "102K",
      thumbnail: "🌱",
      description: "Maintaining and improving soil fertility naturally",
    },
    {
      id: 8,
      title: "From Zero to Success - A Farmer's Story",
      category: "Success Stories",
      duration: "22:15",
      views: "445K",
      thumbnail: "🏆",
      description: "Inspiring journey of a farmer who transformed his farm",
    },
    {
      id: 9,
      title: "Integrated Pest Management",
      category: "Pest Control",
      duration: "16:50",
      views: "178K",
      thumbnail: "🛡️",
      description: "IPM strategies for sustainable pest control",
    },
    {
      id: 10,
      title: "Smart Irrigation Scheduling",
      category: "Irrigation",
      duration: "11:20",
      views: "93K",
      thumbnail: "📱",
      description: "Use technology to optimize water usage",
    },
    {
      id: 11,
      title: "Vertical Farming Basics",
      category: "Modern Techniques",
      duration: "19:30",
      views: "201K",
      thumbnail: "🏢",
      description: "Introduction to vertical farming and urban agriculture",
    },
    {
      id: 12,
      title: "Post-Harvest Management",
      category: "Harvesting",
      duration: "13:40",
      views: "87K",
      thumbnail: "📦",
      description: "Proper storage and handling after harvest",
    },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-pink-600 p-3 rounded-lg">
            <Video className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Video Library</h1>
            <p className="text-gray-600">Watch & learn from expert farmers and scientists</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
            {/* Thumbnail */}
            <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 aspect-video flex items-center justify-center">
              <div className="text-6xl">{video.thumbnail}</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="bg-pink-600 text-white rounded-full p-4 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all">
                  <Play className="w-8 h-8" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views}</span>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{video.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Video className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No videos found matching your search</p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-sm text-pink-100">Total Videos</div>
          </div>
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm text-pink-100">Expert Tutors</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm text-pink-100">Languages</div>
          </div>
          <div>
            <div className="text-3xl font-bold">Free</div>
            <div className="text-sm text-pink-100">Always Free</div>
          </div>
        </div>
      </div>
    </div>
  );
}
