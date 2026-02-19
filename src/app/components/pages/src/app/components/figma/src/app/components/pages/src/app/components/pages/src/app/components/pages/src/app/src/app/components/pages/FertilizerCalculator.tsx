import { useState } from "react";
import { Calculator } from "lucide-react";

export function FertilizerCalculator() {
  const [formData, setFormData] = useState({
    crop: "",
    area: "",
    soilType: "",
    targetYield: "",
  });
  const [result, setResult] = useState<any>(null);

  const crops = ["Wheat", "Rice", "Maize", "Cotton", "Sugarcane", "Potato", "Tomato", "Onion"];
  const soilTypes = ["Sandy", "Loamy", "Clay", "Black Soil", "Red Soil", "Alluvial"];

  const calculateFertilizer = () => {
    if (!formData.crop || !formData.area || !formData.soilType) {
      alert("Please fill all fields");
      return;
    }

    const area = parseFloat(formData.area);
    
    // Mock calculation based on crop type
    const fertilizers: Record<string, any> = {
      Wheat: { n: 120, p: 60, k: 40 },
      Rice: { n: 100, p: 50, k: 50 },
      Maize: { n: 150, p: 75, k: 50 },
      Cotton: { n: 120, p: 60, k: 60 },
      Sugarcane: { n: 150, p: 60, k: 80 },
      Potato: { n: 180, p: 80, k: 100 },
      Tomato: { n: 150, p: 100, k: 100 },
      Onion: { n: 100, p: 50, k: 75 },
    };

    const base = fertilizers[formData.crop] || { n: 100, p: 50, k: 50 };
    
    const nitrogen = (base.n * area).toFixed(1);
    const phosphorus = (base.p * area).toFixed(1);
    const potassium = (base.k * area).toFixed(1);

    // Calculate commercial fertilizers
    const urea = ((parseFloat(nitrogen) / 0.46)).toFixed(1); // Urea is 46% N
    const dap = ((parseFloat(phosphorus) / 0.46)).toFixed(1); // DAP is 46% P2O5
    const mop = ((parseFloat(potassium) / 0.60)).toFixed(1); // MOP is 60% K2O

    setResult({
      nutrients: { nitrogen, phosphorus, potassium },
      fertilizers: { urea, dap, mop },
      applicationSchedule: [
        { stage: "Basal (At sowing)", urea: (parseFloat(urea) * 0.33).toFixed(1), dap: dap, mop: mop },
        { stage: "First top dressing (3-4 weeks)", urea: (parseFloat(urea) * 0.33).toFixed(1), dap: "0", mop: "0" },
        { stage: "Second top dressing (6-8 weeks)", urea: (parseFloat(urea) * 0.34).toFixed(1), dap: "0", mop: "0" },
      ],
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-600 p-3 rounded-lg">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Fertilizer Calculator</h1>
            <p className="text-gray-600">Calculate exact fertilizer requirements for your crop</p>
          </div>
        </div>

        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Crop *
            </label>
            <select
              value={formData.crop}
              onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              <option value="">Choose crop</option>
              {crops.map((crop) => (
                <option key={crop} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Area (Hectares) *
            </label>
            <input
              type="number"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              placeholder="Enter area in hectares"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Soil Type *
            </label>
            <select
              value={formData.soilType}
              onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              <option value="">Choose soil type</option>
              {soilTypes.map((soil) => (
                <option key={soil} value={soil}>
                  {soil}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Target Yield (Optional)
            </label>
            <input
              type="number"
              value={formData.targetYield}
              onChange={(e) => setFormData({ ...formData, targetYield: e.target.value })}
              placeholder="Expected yield (quintals)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
        </div>

        <button
          onClick={calculateFertilizer}
          className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
        >
          Calculate Fertilizer Requirement
        </button>

        {/* Results */}
        {result && (
          <div className="mt-8 space-y-6">
            {/* Nutrient Requirements */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Nutrient Requirements (kg)</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Nitrogen (N)</p>
                  <p className="text-3xl font-bold text-blue-600">{result.nutrients.nitrogen}</p>
                  <p className="text-xs text-gray-500">kg/area</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Phosphorus (P₂O₅)</p>
                  <p className="text-3xl font-bold text-orange-600">{result.nutrients.phosphorus}</p>
                  <p className="text-xs text-gray-500">kg/area</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Potassium (K₂O)</p>
                  <p className="text-3xl font-bold text-purple-600">{result.nutrients.potassium}</p>
                  <p className="text-xs text-gray-500">kg/area</p>
                </div>
              </div>
            </div>

            {/* Commercial Fertilizers */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Commercial Fertilizers Required</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Urea (46% N)</p>
                  <p className="text-2xl font-bold text-gray-800">{result.fertilizers.urea} kg</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">DAP (46% P₂O₅)</p>
                  <p className="text-2xl font-bold text-gray-800">{result.fertilizers.dap} kg</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">MOP (60% K₂O)</p>
                  <p className="text-2xl font-bold text-gray-800">{result.fertilizers.mop} kg</p>
                </div>
              </div>
            </div>

            {/* Application Schedule */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-800">📅 Application Schedule</h3>
              <div className="space-y-3">
                {result.applicationSchedule.map((schedule: any, index: number) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{schedule.stage}</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Urea: </span>
                        <span className="font-semibold">{schedule.urea} kg</span>
                      </div>
                      <div>
                        <span className="text-gray-600">DAP: </span>
                        <span className="font-semibold">{schedule.dap} kg</span>
                      </div>
                      <div>
                        <span className="text-gray-600">MOP: </span>
                        <span className="font-semibold">{schedule.mop} kg</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">⚠️ Important Notes:</h4>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• These are general recommendations. Conduct soil testing for precise requirements.</li>
                <li>• Adjust dosage based on previous crop and organic manure application.</li>
                <li>• Apply fertilizers at proper depth and moisture for best results.</li>
                <li>• Avoid over-application to prevent environmental damage.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
