import { Newspaper, Clock, TrendingUp, FileText } from "lucide-react";

export function News() {
  const featuredNews = {
    title: "Government Announces 20% Increase in MSP for Wheat",
    category: "Policy Update",
    date: "Feb 18, 2026",
    summary: "The central government has announced a significant increase in Minimum Support Price (MSP) for wheat to ₹2,275 per quintal, benefiting millions of farmers across the country.",
    image: "🌾",
  };

  const newsArticles = [
    {
      id: 1,
      title: "New Drought-Resistant Rice Variety Released",
      category: "Technology",
      date: "Feb 17, 2026",
      summary: "Scientists develop new rice variety that can survive 21 days without water, promising relief for rain-fed areas.",
      views: "15K",
      image: "🔬",
    },
    {
      id: 2,
      title: "Organic Farming Subsidy Scheme Extended",
      category: "Policy Update",
      date: "Feb 16, 2026",
      summary: "Government extends organic farming subsidy by another year, increasing support to ₹50,000 per hectare.",
      views: "22K",
      image: "🌱",
    },
    {
      id: 3,
      title: "Cotton Prices Hit 5-Year High in Market",
      category: "Market News",
      date: "Feb 15, 2026",
      summary: "Cotton prices surge to ₹7,500 per quintal due to strong export demand and lower production.",
      views: "18K",
      image: "📈",
    },
    {
      id: 4,
      title: "Monsoon Forecast: Normal Rainfall Expected",
      category: "Weather",
      date: "Feb 14, 2026",
      summary: "IMD predicts normal monsoon this year with 96-104% of long-period average rainfall.",
      views: "31K",
      image: "🌧️",
    },
    {
      id: 5,
      title: "New App for Direct Farmer-Buyer Connection",
      category: "Technology",
      date: "Feb 13, 2026",
      summary: "Government launches e-NAM 2.0 app enabling farmers to sell directly to buyers across India.",
      views: "12K",
      image: "📱",
    },
    {
      id: 6,
      title: "Pesticide Residue Testing Made Mandatory",
      category: "Policy Update",
      date: "Feb 12, 2026",
      summary: "Food safety authority mandates pesticide residue testing for all vegetables entering wholesale markets.",
      views: "9K",
      image: "🧪",
    },
    {
      id: 7,
      title: "Solar Pump Subsidy: Apply Before March 31",
      category: "Schemes",
      date: "Feb 11, 2026",
      summary: "Deadline approaching for solar pump subsidy applications. Farmers can get up to 90% subsidy.",
      views: "27K",
      image: "☀️",
    },
    {
      id: 8,
      title: "Locust Alert Issued for Rajasthan",
      category: "Alert",
      date: "Feb 10, 2026",
      summary: "Agriculture department issues locust alert for western Rajasthan. Farmers advised to remain vigilant.",
      views: "14K",
      image: "⚠️",
    },
    {
      id: 9,
      title: "Record Wheat Production Expected This Year",
      category: "Agriculture",
      date: "Feb 9, 2026",
      summary: "India expected to produce 112 million tonnes of wheat, highest ever production in history.",
      views: "20K",
      image: "🏆",
    },
    {
      id: 10,
      title: "Crop Insurance Claims Settlement Improved",
      category: "Policy Update",
      date: "Feb 8, 2026",
      summary: "Government announces faster crop insurance claim settlement process, target 30 days from loss assessment.",
      views: "16K",
      image: "💰",
    },
    {
      id: 11,
      title: "Vertical Farming: Future of Urban Agriculture",
      category: "Innovation",
      date: "Feb 7, 2026",
      summary: "Entrepreneurs showcase successful vertical farming models that use 95% less water than traditional farming.",
      views: "11K",
      image: "🏢",
    },
    {
      id: 12,
      title: "Free Soil Testing Camps Across Rural India",
      category: "Schemes",
      date: "Feb 6, 2026",
      summary: "Government organizes free soil health testing camps in 5000+ villages this month.",
      views: "13K",
      image: "🔬",
    },
  ];

  const categories = ["All", "Policy Update", "Market News", "Technology", "Weather", "Schemes", "Agriculture"];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-slate-600 p-3 rounded-lg">
            <Newspaper className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">News & Updates</h1>
            <p className="text-gray-600">Stay updated with latest agricultural news</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-slate-600 hover:text-white transition-colors text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured News */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-8 text-white mb-6 shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
            {featuredNews.category}
          </span>
          <div className="flex items-center gap-1 text-sm text-blue-100">
            <Clock className="w-4 h-4" />
            <span>{featuredNews.date}</span>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-3">{featuredNews.title}</h2>
            <p className="text-lg text-blue-100 mb-4">{featuredNews.summary}</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Read Full Article
            </button>
          </div>
          <div className="text-8xl hidden md:block">{featuredNews.image}</div>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer">
            {/* Image/Icon */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
              {article.image}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
              </div>

              <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">{article.summary}</p>

              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4" />
                  <span>{article.views} views</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Important Announcements */}
      <div className="mt-8 bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <FileText className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg text-orange-900 mb-2">📢 Important Announcements</h3>
            <ul className="space-y-2 text-orange-800">
              <li>• PM-KISAN 16th installment to be released on February 28, 2026</li>
              <li>• Kharif crop sowing target set at 110 million hectares</li>
              <li>• New agricultural credit policy to be announced next month</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mt-6 bg-green-600 text-white rounded-xl p-8 text-center">
        <Newspaper className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Never Miss an Update</h2>
        <p className="text-green-100 mb-4">Subscribe to get daily agricultural news directly on your phone</p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
          />
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
