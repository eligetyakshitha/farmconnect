import { AlertTriangle, Shield, Phone, FileText, CreditCard, Umbrella } from "lucide-react";

export function EmergencyHelp() {
  const emergencyContacts = [
    {
      title: "Farmer Helpline",
      number: "1800-180-1551",
      description: "24/7 assistance for agricultural queries",
      icon: Phone,
    },
    {
      title: "Crop Insurance Helpline",
      number: "1800-200-7710",
      description: "PMFBY claims and support",
      icon: Umbrella,
    },
    {
      title: "KCC Loan Helpline",
      number: "1800-270-0224",
      description: "Kisan Credit Card queries",
      icon: CreditCard,
    },
    {
      title: "Suicide Prevention",
      number: "1800-599-0019",
      description: "Emotional support & counseling",
      icon: Shield,
    },
  ];

  const insuranceSchemes = [
    {
      name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      coverage: "Crop loss due to natural calamities",
      premium: "2% for Kharif, 1.5% for Rabi",
      claim: "Within 72 hours of loss",
      benefits: ["Covers all stages", "Quick settlement", "Low premium"],
    },
    {
      name: "Restructured Weather Based Crop Insurance (RWBCI)",
      coverage: "Weather parameters affecting crops",
      premium: "Based on location and crop",
      claim: "Automatic trigger-based",
      benefits: ["No loss assessment needed", "Fast payout", "Weather-based"],
    },
  ];

  const loanSchemes = [
    {
      name: "Kisan Credit Card (KCC)",
      purpose: "Short term credit for farming",
      amount: "Up to ₹3 lakhs",
      interest: "4% (with subsidy)",
      features: ["Simple documentation", "Flexible repayment", "ATM withdrawal"],
    },
    {
      name: "Agricultural Term Loan",
      purpose: "Purchase of equipment, land development",
      amount: "Up to ₹25 lakhs",
      interest: "7-9% per annum",
      features: ["Long repayment period", "Subsidy available", "Asset creation"],
    },
    {
      name: "PM-KISAN",
      purpose: "Income support",
      amount: "₹6,000 per year",
      interest: "N/A (Direct benefit)",
      features: ["No repayment", "Direct bank transfer", "Three installments"],
    },
  ];

  const documents = [
    "Aadhaar Card",
    "Land Records (7/12, Khasra)",
    "Bank Account Details",
    "Passport Size Photos",
    "Income Certificate",
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-rose-600 p-3 rounded-lg">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Emergency Help</h1>
            <p className="text-gray-600">Access crop insurance, loans, and emergency support</p>
          </div>
        </div>
      </div>

      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white rounded-xl p-6 mb-6 shadow-xl">
        <div className="flex items-center gap-4">
          <AlertTriangle className="w-12 h-12 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-bold mb-2">Need Immediate Help?</h2>
            <p className="text-red-100">If you're facing a crisis, please reach out to our helplines immediately. We're here to help 24/7.</p>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📞 Emergency Helpline Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{contact.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{contact.description}</p>
                    <a
                      href={`tel:${contact.number}`}
                      className="inline-flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors font-semibold"
                    >
                      <Phone className="w-4 h-4" />
                      {contact.number}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Crop Insurance */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🛡️ Crop Insurance Schemes</h2>
        <div className="space-y-4">
          {insuranceSchemes.map((scheme, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4 mb-4">
                <Umbrella className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{scheme.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Coverage</p>
                      <p className="font-semibold text-gray-800">{scheme.coverage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Premium</p>
                      <p className="font-semibold text-green-600">{scheme.premium}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Claim Period</p>
                      <p className="font-semibold text-gray-800">{scheme.claim}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {scheme.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Apply for Insurance
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Loan Schemes */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💰 Loan Schemes for Farmers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loanSchemes.map((loan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{loan.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{loan.purpose}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Loan Amount:</span>
                  <span className="font-semibold text-gray-800">{loan.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Interest Rate:</span>
                  <span className="font-semibold text-green-600">{loan.interest}</span>
                </div>
              </div>

              <div className="border-t pt-3 mb-4">
                <p className="text-xs text-gray-600 mb-2">Key Features:</p>
                <ul className="space-y-1">
                  {loan.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-700 flex items-start gap-1">
                      <span className="text-green-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 mb-6">
        <div className="flex items-start gap-3 mb-4">
          <FileText className="w-8 h-8 text-orange-600" />
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">📄 Documents Required</h2>
            <p className="text-gray-600 mb-4">Keep these documents ready for insurance and loan applications:</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm">
              <p className="text-sm font-semibold text-gray-800">{doc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Government Schemes Info */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">🏛️ Important Government Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-1">PM-KISAN</h3>
            <p className="text-sm text-gray-600">Direct income support of ₹6,000/year</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-1">Soil Health Card</h3>
            <p className="text-sm text-gray-600">Free soil testing and recommendations</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-1">PMFBY</h3>
            <p className="text-sm text-gray-600">Comprehensive crop insurance</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-gray-800 mb-1">Paramparagat Krishi Vikas Yojana</h3>
            <p className="text-sm text-gray-600">Support for organic farming</p>
          </div>
        </div>
      </div>

      {/* Support Message */}
      <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 mb-2">💙 You're Not Alone</h3>
            <p className="text-blue-800">
              Remember, challenges are temporary. Help is available 24/7. Reach out to our helplines, 
              connect with fellow farmers, or speak to our experts. Together, we can overcome any difficulty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
