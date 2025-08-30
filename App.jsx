import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Newspaper, Trophy, BarChart } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("tournois");
  const [riotId, setRiotId] = useState("");
  const [trackerUrl, setTrackerUrl] = useState("");

  const handleTrackerSearch = () => {
    if (riotId.trim() !== "") {
      setTrackerUrl(
        `https://tracker.gg/valorant/profile/riot/${encodeURIComponent(
          riotId
        )}/overview`
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-red-600 p-6 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">
          VALORANT AMATEUR FRANCE
        </h1>
        <nav className="flex gap-6">
          <button onClick={() => setActiveTab("tournois")}>Tournois</button>
          <button onClick={() => setActiveTab("equipes")}>Équipes</button>
          <button onClick={() => setActiveTab("news")}>Actus</button>
          <button onClick={() => setActiveTab("guides")}>Guides</button>
          <button onClick={() => setActiveTab("stats_tournoi")}>
            Stats Tournoi
          </button>
          <button onClick={() => setActiveTab("tracker")}>Mes Stats</button>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-gradient-to-b from-red-600 to-black"
      >
        <h2 className="text-5xl font-extrabold mb-4">
          La Scène Amateur Valorant en France
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Tournois, équipes, actualités et guides pour tous les passionnés de
          Valorant qui veulent se lancer dans la compétition.
        </p>
        <button className="mt-6 text-lg px-6 py-3 rounded-2xl bg-white text-black hover:bg-gray-200">
          Rejoindre la Communauté
        </button>
      </motion.section>

      {/* Main Content */}
      <main className="p-10 grid md:grid-cols-3 gap-6">
        {activeTab === "tournois" && (
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
            <Calendar className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Tournois à venir</h3>
            <p className="text-gray-300 mb-2">🔥 Cup Paris – 12 Septembre</p>
            <p className="text-gray-300 mb-2">⚡ Lyon Amateur League – 20 Septembre</p>
          </div>
        )}

        {activeTab === "equipes" && (
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
            <Users className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Équipes en Vue</h3>
            <p className="text-gray-300 mb-2">Team Phoenix – Top 1 France Amateur</p>
            <p className="text-gray-300 mb-2">Shadow Hunters – Montée récente</p>
          </div>
        )}

        {activeTab === "news" && (
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
            <Newspaper className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Dernières Actus</h3>
            <p className="text-gray-300 mb-2">Patch 8.05 – Changements Agents</p>
            <p className="text-gray-300 mb-2">Nouveau partenariat ESL France</p>
          </div>
        )}

        {activeTab === "guides" && (
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Guides pour progresser</h3>
            <p className="text-gray-300 mb-2">🎯 Optimiser son Crosshair</p>
            <p className="text-gray-300 mb-2">💡 Trouver une équipe rapidement</p>
          </div>
        )}

        {activeTab === "stats_tournoi" && (
          <div className="bg-gray-900 rounded-2xl shadow-lg col-span-3 p-6">
            <Trophy className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Stats Spike Tour 2025 – Stage 3
            </h3>
            <ul className="list-disc list-inside text-gray-300 text-left">
              <li>🥇 NFM</li>
              <li>🥈 Kombuciao</li>
              <li>🥉 Valiant Legacy</li>
              <li>4ᵉ AquaPoney</li>
            </ul>
            <button
              className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
              onClick={() =>
                window.open(
                  "https://liquipedia.net/valorant/Spike_Tour/2025/Stage_3/Playoffs",
                  "_blank"
                )
              }
            >
              Voir le bracket complet
            </button>
          </div>
        )}

        {activeTab === "tracker" && (
          <div className="bg-gray-900 rounded-2xl shadow-lg col-span-3 p-6 text-center">
            <BarChart className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Voir tes stats Valorant</h3>
            <input
              type="text"
              placeholder="Ex: MonPseudo#EUW"
              value={riotId}
              onChange={(e) => setRiotId(e.target.value)}
              className="p-2 rounded-lg text-black w-80"
            />
            <button
              onClick={handleTrackerSearch}
              className="ml-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
            >
              Rechercher
            </button>
            {trackerUrl && (
              <iframe
                src={trackerUrl}
                title="Tracker.gg Valorant Profile"
                className="w-full h-96 rounded-lg border border-gray-700 mt-6"
              />
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center p-6 mt-10">
        <p>© 2025 Valorant Amateur France - Site communautaire non officiel</p>
      </footer>
    </div>
  );
}
