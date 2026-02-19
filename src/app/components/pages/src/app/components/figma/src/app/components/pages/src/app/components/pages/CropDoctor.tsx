import { useState } from "react";
import { Camera, Upload, AlertCircle, CheckCircle, Loader } from "lucide-react";

export function CropDoctor() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setDiagnosis(null);
        analyzeCrop();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeCrop = () => {
    setLoading(true);
    // Simulate AI analysis
    setTimeout(() => {
      const diagnoses = [
        {
          disease: "Early Blight",
          confidence: 87,
          severity: "Moderate",
          treatment: "Apply Mancozeb fungicide @ 2.5g/liter water. Spray every 10-12 days. Remove infected leaves.",
          prevention: "Ensure proper spacing, avoid overhead irrigation, practice crop rotation."
        },
        {
          disease: "Leaf Curl Virus",
          confidence: 92,
          severity: "High",
          treatment: "Remove infected plants immediately. Control whitefly vectors with neem oil or imidacloprid.",
          prevention: "Use disease-free seeds, install yellow sticky traps, maintain field hygiene."
        },
        {
          disease: "Nutrient Deficiency (Nitrogen)",
          confidence: 78,
          severity: "Low",
          treatment: "Apply urea @ 100 kg/hectare or spray 2% urea solution on leaves.",
          prevention: "Regular soil testing and balanced fertilization."
        },
        {
          disease: "Healthy Plant",
          confidence: 95,
          severity: "None",
          treatment: "No treatment needed. Continue regular care.",
          prevention: "Maintain current practices: proper watering, fertilization, and pest monitoring."
        }
      ];
      
      setDiagnosis(diagnoses[Math.floor(Math.random() * diagnoses.length)]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-600 p-3 rounded-lg">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Crop Doctor</h1>
            <p className="text-gray-600">Upload a photo for instant crop disease diagnosis</p>
          </div>
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6">
          <input
            type="file"
            id="crop-image"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <label
            htmlFor="crop-image"
            className="cursor-pointer flex flex-col items-center gap-4"
          >
            <div className="bg-purple-100 p-6 rounded-full">
              <Upload className="w-12 h-12 text-purple-600" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">
                Click to upload crop photo
              </p>
              <p className="text-sm text-gray-500">
                Supports: JPG, PNG (Max 5MB)
              </p>
            </div>
          </label>
        </div>

        {/* Image Preview */}
        {selectedImage && (
          <div className="mb-6">
            <img
              src={selectedImage}
              alt="Uploaded crop"
              className="w-full max-h-96 object-contain rounded-lg border-2 border-gray-200"
            />
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center gap-4 py-8">
            <Loader className="w-12 h-12 text-purple-600 animate-spin" />
            <p className="text-gray-600">Analyzing your crop image...</p>
          </div>
        )}

        {/* Diagnosis Result */}
        {diagnosis && !loading && (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg border-l-4 ${
              diagnosis.severity === "None" 
                ? "bg-green-50 border-green-500" 
                : diagnosis.severity === "High"
                ? "bg-red-50 border-red-500"
                : "bg-yellow-50 border-yellow-500"
            }`}>
              <div className="flex items-start gap-3">
                {diagnosis.severity === "None" ? (
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                ) : (
                  <AlertCircle className={`w-6 h-6 mt-1 ${
                    diagnosis.severity === "High" ? "text-red-600" : "text-yellow-600"
                  }`} />
                )}
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{diagnosis.disease}</h3>
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <span>Confidence: {diagnosis.confidence}%</span>
                    <span className={`px-2 py-1 rounded ${
                      diagnosis.severity === "None" 
                        ? "bg-green-200 text-green-800" 
                        : diagnosis.severity === "High"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}>
                      {diagnosis.severity} Severity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">💊 Treatment</h4>
              <p className="text-blue-800">{diagnosis.treatment}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">🛡️ Prevention</h4>
              <p className="text-green-800">{diagnosis.prevention}</p>
            </div>

            <button
              onClick={() => {
                setSelectedImage(null);
                setDiagnosis(null);
              }}
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Analyze Another Image
            </button>
          </div>
        )}

        {/* Tips */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">📸 Photo Tips for Best Results:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Take photos in good natural lighting</li>
            <li>• Capture close-up of affected area</li>
            <li>• Include leaves, stems, or fruits showing symptoms</li>
            <li>• Keep the background simple</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
