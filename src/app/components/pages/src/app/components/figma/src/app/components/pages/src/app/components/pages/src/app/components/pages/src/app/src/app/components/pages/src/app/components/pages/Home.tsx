import { Link } from "react-router";
import { 
  MessageCircle, Camera, TrendingUp, Cloud, Calculator, Bug, 
  Video, Phone, Newspaper, AlertTriangle, Lightbulb
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  const features = [
    {
      path: "/ask-expert",
      titleKey: "askExpert",
      descKey: "askExpertDesc",
      icon: MessageCircle,
      color: "from-purple-500 to-purple-600",
    },
    {
      path: "/crop-doctor",
      titleKey: "cropDoctor",
      descKey: "cropDoctorDesc",
      icon: Camera,
      color: "from-pink-500 to-pink-600",
    },
    {
      path: "/market-price",
      titleKey: "marketPrice",
      descKey: "marketPriceDesc",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
    },
    {
      path: "/weather",
      titleKey: "weather",
      descKey: "weatherDesc",
      icon: Cloud,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      path: "/fertilizer-calculator",
      titleKey: "fertilizerCalc",
      descKey: "fertilizerDesc",
      icon: Calculator,
      color: "from-teal-500 to-teal-600",
    },
    {
      path: "/pest-alert",
      titleKey: "pestAlert",
      descKey: "pestAlertDesc",
      icon: Bug,
      color: "from-red-500 to-red-600",
    },
    {
      path: "/video-library",
      titleKey: "videoLibrary",
      descKey: "videoLibraryDesc",
      icon: Video,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      path: "/expert-connect",
      titleKey: "expertConnect",
      descKey: "expertConnectDesc",
      icon: Phone,
      color: "from-green-500 to-green-600",
    },
    {
      path: "/news",
      titleKey: "news",
      descKey: "newsDesc",
      icon: Newspaper,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      path: "/emergency-help",
      titleKey: "emergencyHelp",
      descKey: "emergencyDesc",
      icon: AlertTriangle,
      color: "from-rose-500 to-rose-600",
    },
  ];

  const dailyTip = {
    title: "Today's Farming Tip",
    content: "Water your crops early in the morning to reduce water loss through evaporation and help prevent fungal diseases.",
    icon: Lightbulb,
  };

  return (
    <div className="relative">
      {/* Blurred Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1651981350249-6173caeeb660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjBmaWVsZCUyMGZhcm1pbmclMjBncmVlbnxlbnwxfHx8fDE3NzE0NzQwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white mb-8 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t("welcomeTitle")}</h2>
          <p className="text-lg md:text-xl opacity-95 mb-1">{t("welcomeSubtitle")}</p>
          <p className="text-sm md:text-base opacity-90">{t("welcomeDesc")}</p>
        </div>

        {/* Daily Tip */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-8 shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 p-3 rounded-full">
              <Lightbulb className="w-6 h-6 text-yellow-900" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-yellow-900 mb-2">{dailyTip.title}</h3>
              <p className="text-yellow-800">{dailyTip.content}</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.path}
                to={feature.path}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(feature.descKey)}</p>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-green-600">1M+</div>
            <div className="text-sm text-gray-600">Active Farmers</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Expert Scientists</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600">10K+</div>
            <div className="text-sm text-gray-600">Video Tutorials</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}
