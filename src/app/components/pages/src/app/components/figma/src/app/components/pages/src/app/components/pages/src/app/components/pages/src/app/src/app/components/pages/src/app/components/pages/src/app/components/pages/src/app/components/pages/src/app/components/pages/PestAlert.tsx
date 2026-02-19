import { Bug, AlertTriangle, MapPin, Calendar } from "lucide-react";

export function PestAlert() {
  const activeAlerts = [
    {
      pest: "Fall Armyworm",
      crop: "Maize",
      severity: "High",
      region: "Punjab, Haryana",
      date: "2 days ago",
      description: "Heavy infestation reported in maize fields. Immediate action required.",
      action: "Apply Chlorantraniliprole 18.5% SC @ 0.3 ml/liter. Scout fields every 2-3 days.",
    },
    {
      pest: "Brown Planthopper",
      crop: "Rice",
      severity: "Moderate",
      region: "West Bengal, Bihar",
      date: "5 days ago",
      description: "Population increasing in rice fields. Monitor closely.",
      action: "Use light traps and spray Buprofezin 25% SC @ 1.5-2.0 ml/liter if threshold exceeded.",
    },
    {
      pest: "Whitefly",
      crop: "Cotton",
      severity: "Low",
      region: "Gujarat, Maharashtra",
      date: "1 week ago",
      description: "Isolated cases detected. Preventive measures recommended.",
      action: "Install yellow sticky traps. Spray neem oil 0.03% if population increases.",
    },
  ];

  const upcomingRisks = [
    {
      pest: "Aphids",
      crop: "Wheat",
      riskLevel: "Medium",
      expectedWeek: "Next week",
      reason: "Weather conditions favorable for aphid multiplication.",
    },
    {
      pest: "Fruit Borer",
      crop: "Tomato",
      riskLevel: "High",
      expectedWeek: "In 2 weeks",
      reason: "Flowering stage approaching, peak infestation period.",
    },
  ];

  const preventionTips = [
    "Regular field monitoring (at least twice a week)",
    "Maintain field hygiene - remove crop residues",
    "Use pheromone traps for early detection",
    "Practice crop rotation to break pest cycles",
    "Maintain proper plant spacing for air circulation",
    "Apply organic manures to strengthen plant immunity",
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-600 p-3 rounded-lg">
            <Bug className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Pest Alert</h1>
            <p className="text-gray-600">Local warnings and pest management guidance</p>
          </div>
        </div>
      </div>

      {/* Active Alerts */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🚨 Active Pest Alerts</h2>
        <div className="space-y-4">
          {activeAlerts.map((alert, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                alert.severity === "High"
                  ? "border-red-500"
                  : alert.severity === "Moderate"
                  ? "border-yellow-500"
                  : "border-blue-500"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{alert.pest}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        alert.severity === "High"
                          ? "bg-red-100 text-red-700"
                          : alert.severity === "Moderate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {alert.severity} Risk
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Crop:</span> {alert.crop}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {alert.region}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {alert.date}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-gray-700">{alert.description}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">✅ Recommended Action:</h4>
                <p className="text-green-800">{alert.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Risks */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">⚠️ Upcoming Risks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingRisks.map((risk, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-5">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-500 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{risk.pest}</h3>
                  <p className="text-sm text-gray-600">{risk.crop}</p>
                </div>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm font-semibold">
                  {risk.riskLevel}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">Expected:</span> {risk.expectedWeek}
              </p>
              <p className="text-sm text-gray-600">{risk.reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prevention Tips */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🛡️ Prevention Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {preventionTips.map((tip, index) => (
            <div key={index} className="flex items-start gap-2 bg-white rounded-lg p-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-700 text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Subscription */}
      <div className="mt-6 bg-green-600 text-white rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Get Instant Pest Alerts</h3>
        <p className="mb-4">Subscribe to receive SMS and notifications for your region</p>
        <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
