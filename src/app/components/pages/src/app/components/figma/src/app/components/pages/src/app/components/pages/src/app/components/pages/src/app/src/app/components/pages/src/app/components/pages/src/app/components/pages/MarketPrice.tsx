import { useState } from "react";
import { TrendingUp, TrendingDown, Search } from "lucide-react";

export function MarketPrice() {
  const [searchQuery, setSearchQuery] = useState("");

  const marketData = [
    { crop: "Wheat", mandi: "Delhi Azadpur", price: 2150, change: 2.5, unit: "per quintal" },
    { crop: "Rice (Basmati)", mandi: "Karnal", price: 4500, change: -1.2, unit: "per quintal" },
    { crop: "Cotton", mandi: "Adilabad", price: 6800, change: 3.8, unit: "per quintal" },
    { crop: "Sugarcane", mandi: "Muzaffarnagar", price: 350, change: 0.5, unit: "per quintal" },
    { crop: "Potato", mandi: "Agra", price: 1200, change: -5.3, unit: "per quintal" },
    { crop: "Onion", mandi: "Nashik", price: 2500, change: 8.2, unit: "per quintal" },
    { crop: "Tomato", mandi: "Bangalore", price: 1800, change: 12.5, unit: "per quintal" },
    { crop: "Soybean", mandi: "Indore", price: 4200, change: 1.8, unit: "per quintal" },
    { crop: "Mustard", mandi: "Jaipur", price: 5500, change: -0.8, unit: "per quintal" },
    { crop: "Groundnut", mandi: "Rajkot", price: 5800, change: 2.1, unit: "per quintal" },
    { crop: "Maize", mandi: "Davangere", price: 1950, change: 0.3, unit: "per quintal" },
    { crop: "Turmeric", mandi: "Erode", price: 7200, change: 4.5, unit: "per quintal" },
    { crop: "Chilli", mandi: "Guntur", price: 15000, change: -2.3, unit: "per quintal" },
    { crop: "Garlic", mandi: "Indore", price: 8000, change: 6.7, unit: "per quintal" },
  ];

  const filteredData = marketData.filter(
    (item) =>
      item.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mandi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-600 p-3 rounded-lg">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Market Prices</h1>
            <p className="text-gray-600">Live mandi rates updated today</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by crop or mandi name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {/* Price Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{item.crop}</h3>
                <p className="text-sm text-gray-500">{item.mandi}</p>
              </div>
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded ${
                  item.change > 0
                    ? "bg-green-100 text-green-700"
                    : item.change < 0
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {item.change > 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : item.change < 0 ? (
                  <TrendingDown className="w-4 h-4" />
                ) : null}
                <span className="text-sm font-semibold">
                  {item.change > 0 ? "+" : ""}
                  {item.change}%
                </span>
              </div>
            </div>
            <div className="border-t pt-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-green-600">₹{item.price}</span>
                <span className="text-sm text-gray-500">{item.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Market Insights */}
      <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4 text-gray-800">📊 Today's Market Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Top Gainer</p>
            <p className="font-bold text-lg text-green-600">Tomato +12.5%</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Most Traded</p>
            <p className="font-bold text-lg text-blue-600">Wheat</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Average Change</p>
            <p className="font-bold text-lg text-gray-700">+2.3%</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-center text-sm text-gray-500">
        Prices are indicative and may vary. Please verify with your local mandi before trading.
      </div>
    </div>
  );
}
