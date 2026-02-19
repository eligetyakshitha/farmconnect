import { Cloud, Droplets, Wind, Eye, ThermometerSun } from "lucide-react";

export function Weather() {
  const currentWeather = {
    temp: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    rainfall: 0,
    location: "Your Location",
  };

  const forecast = [
    { day: "Today", high: 32, low: 24, condition: "Partly Cloudy", rain: 10, icon: "⛅" },
    { day: "Tomorrow", high: 31, low: 23, condition: "Sunny", rain: 5, icon: "☀️" },
    { day: "Wed", high: 29, low: 22, condition: "Rainy", rain: 80, icon: "🌧️" },
    { day: "Thu", high: 28, low: 21, condition: "Rainy", rain: 70, icon: "🌧️" },
    { day: "Fri", high: 30, low: 23, condition: "Cloudy", rain: 30, icon: "☁️" },
    { day: "Sat", high: 33, low: 25, condition: "Sunny", rain: 0, icon: "☀️" },
    { day: "Sun", high: 34, low: 26, condition: "Sunny", rain: 0, icon: "☀️" },
  ];

  const farmingAdvice = [
    { activity: "Irrigation", recommendation: "Good time for irrigation. Low rainfall expected.", status: "good" },
    { activity: "Spraying", recommendation: "Avoid spraying on Wednesday and Thursday due to rain.", status: "warning" },
    { activity: "Harvesting", recommendation: "Ideal conditions for harvesting today and tomorrow.", status: "good" },
    { activity: "Sowing", recommendation: "Wait for rain to subside. Best time: Friday onwards.", status: "warning" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Current Weather */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg p-8 text-white mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-blue-100 mb-1">{currentWeather.location}</p>
            <h1 className="text-5xl font-bold mb-2">{currentWeather.temp}°C</h1>
            <p className="text-xl text-blue-100">{currentWeather.condition}</p>
          </div>
          <Cloud className="w-24 h-24 opacity-80" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/20 rounded-lg p-4">
            <Droplets className="w-6 h-6 mb-2" />
            <p className="text-sm text-blue-100">Humidity</p>
            <p className="text-2xl font-bold">{currentWeather.humidity}%</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <Wind className="w-6 h-6 mb-2" />
            <p className="text-sm text-blue-100">Wind Speed</p>
            <p className="text-2xl font-bold">{currentWeather.windSpeed} km/h</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <Eye className="w-6 h-6 mb-2" />
            <p className="text-sm text-blue-100">Visibility</p>
            <p className="text-2xl font-bold">{currentWeather.visibility} km</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <ThermometerSun className="w-6 h-6 mb-2" />
            <p className="text-sm text-blue-100">Rainfall</p>
            <p className="text-2xl font-bold">{currentWeather.rainfall} mm</p>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">7-Day Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {forecast.map((day, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center">
              <p className="font-semibold text-gray-700 mb-2">{day.day}</p>
              <div className="text-4xl mb-2">{day.icon}</div>
              <p className="text-sm text-gray-600 mb-2">{day.condition}</p>
              <div className="flex justify-center gap-2 mb-2">
                <span className="font-bold text-red-600">{day.high}°</span>
                <span className="text-gray-400">/</span>
                <span className="font-bold text-blue-600">{day.low}°</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-sm">
                <Droplets className="w-4 h-4 text-blue-500" />
                <span className="text-blue-600">{day.rain}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Farming Advice */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🌾 Farming Advice Based on Weather</h2>
        <div className="space-y-3">
          {farmingAdvice.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                item.status === "good"
                  ? "bg-green-50 border-green-500"
                  : "bg-yellow-50 border-yellow-500"
              }`}
            >
              <h3 className="font-semibold text-gray-800 mb-1">{item.activity}</h3>
              <p className={item.status === "good" ? "text-green-700" : "text-yellow-700"}>
                {item.recommendation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Alert */}
      <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="bg-orange-500 p-2 rounded-full">
            <Cloud className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-orange-900 mb-1">⚠️ Weather Alert</h3>
            <p className="text-orange-800">
              Moderate to heavy rainfall expected on Wednesday and Thursday. Secure your crops and equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
