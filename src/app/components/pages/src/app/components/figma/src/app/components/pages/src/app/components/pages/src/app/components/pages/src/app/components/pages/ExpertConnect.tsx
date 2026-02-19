import { Phone, Video, Calendar, User, Star, Award } from "lucide-react";

export function ExpertConnect() {
  const experts = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialization: "Soil Science & Crop Nutrition",
      qualification: "Ph.D. Agriculture",
      experience: "15 years",
      rating: 4.9,
      reviews: 245,
      languages: ["Hindi", "English"],
      availability: "Available Now",
      image: "👨‍🔬",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Plant Pathology & Disease Management",
      qualification: "Ph.D. Plant Pathology",
      experience: "12 years",
      rating: 4.8,
      reviews: 198,
      languages: ["Hindi", "English", "Punjabi"],
      availability: "Available Today",
      image: "👩‍🔬",
    },
    {
      id: 3,
      name: "Dr. Anil Verma",
      specialization: "Integrated Pest Management",
      qualification: "M.Sc. Entomology",
      experience: "10 years",
      rating: 4.7,
      reviews: 167,
      languages: ["Hindi", "English"],
      availability: "Available Tomorrow",
      image: "👨‍🌾",
    },
    {
      id: 4,
      name: "Dr. Sunita Patel",
      specialization: "Horticulture & Vegetable Production",
      qualification: "Ph.D. Horticulture",
      experience: "18 years",
      rating: 4.9,
      reviews: 312,
      languages: ["Hindi", "English", "Gujarati"],
      availability: "Available Now",
      image: "👩‍🌾",
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      specialization: "Agricultural Engineering & Mechanization",
      qualification: "Ph.D. Ag. Engineering",
      experience: "14 years",
      rating: 4.6,
      reviews: 142,
      languages: ["Hindi", "English"],
      availability: "Available Today",
      image: "👨‍💼",
    },
    {
      id: 6,
      name: "Dr. Meena Reddy",
      specialization: "Organic Farming & Sustainability",
      qualification: "Ph.D. Organic Agriculture",
      experience: "11 years",
      rating: 4.8,
      reviews: 201,
      languages: ["Hindi", "English", "Telugu"],
      availability: "Available Now",
      image: "👩‍💼",
    },
  ];

  const upcomingWebinars = [
    {
      title: "Modern Wheat Cultivation Techniques",
      expert: "Dr. Rajesh Kumar",
      date: "Feb 22, 2026",
      time: "3:00 PM",
      registered: 450,
    },
    {
      title: "Organic Pest Control Methods",
      expert: "Dr. Meena Reddy",
      date: "Feb 25, 2026",
      time: "4:00 PM",
      registered: 380,
    },
    {
      title: "Precision Agriculture with IoT",
      expert: "Dr. Vikram Singh",
      date: "Feb 28, 2026",
      time: "2:00 PM",
      registered: 520,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-teal-600 p-3 rounded-lg">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Expert Connect</h1>
            <p className="text-gray-600">Talk to agricultural scientists and get expert guidance</p>
          </div>
        </div>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {experts.map((expert) => (
          <div key={expert.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="text-6xl mb-3">{expert.image}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{expert.name}</h3>
              <p className="text-sm text-teal-600 font-semibold mb-2">{expert.specialization}</p>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-gray-700">{expert.rating}</span>
                <span className="text-sm text-gray-500">({expert.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-4 h-4" />
                <span>{expert.qualification}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="w-4 h-4" />
                <span>{expert.experience} experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>🗣️</span>
                <span>{expert.languages.join(", ")}</span>
              </div>
              <div className={`inline-flex px-2 py-1 rounded text-xs font-semibold ${
                expert.availability === "Available Now" 
                  ? "bg-green-100 text-green-700" 
                  : "bg-yellow-100 text-yellow-700"
              }`}>
                {expert.availability}
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Video className="w-4 h-4" />
                <span>Video</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Webinars */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📺 Upcoming Webinars</h2>
        <div className="space-y-4">
          {upcomingWebinars.map((webinar, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{webinar.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{webinar.expert}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{webinar.date} • {webinar.time}</span>
                    </div>
                    <div>
                      <span className="text-green-600 font-semibold">{webinar.registered} registered</span>
                    </div>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Register Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">💡 How Expert Connect Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">
              1
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Choose Expert</h3>
            <p className="text-sm text-gray-600">Select expert based on your need</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">
              2
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Book Session</h3>
            <p className="text-sm text-gray-600">Schedule call or video consultation</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">
              3
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Get Guidance</h3>
            <p className="text-sm text-gray-600">Discuss your farming challenges</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">
              4
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Implement</h3>
            <p className="text-sm text-gray-600">Apply expert advice on your farm</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-teal-600 text-white rounded-xl p-6 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm text-teal-100">Expert Scientists</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-sm text-teal-100">Consultations</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm text-teal-100">Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold">15</div>
            <div className="text-sm text-teal-100">Languages</div>
          </div>
        </div>
      </div>
    </div>
  );
}
