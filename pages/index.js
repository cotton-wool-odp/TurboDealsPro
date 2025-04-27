import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Casque Bluetooth Sony WH-1000XM4",
    price: "249,99€",
    link: "https://www.amazon.fr/dp/B0863TXGM3",
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
  },
  {
    id: 2,
    title: "Montre connectée Fitbit Charge 5",
    price: "129,95€",
    link: "https://www.amazon.fr/dp/B09BXQX5XJ",
    image: "https://m.media-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    title: "Robot aspirateur Xiaomi Vacuum Mop 2S",
    price: "199,00€",
    link: "https://www.amazon.fr/dp/B09V3M17H7",
    image: "https://m.media-amazon.com/images/I/61OwZttGxzL._AC_SL1500_.jpg"
  },
  {
    id: 4,
    title: "Clavier Mécanique Logitech G915",
    price: "209,99€",
    link: "https://www.amazon.fr/dp/B07W7J3C4P",
    image: "https://m.media-amazon.com/images/I/81iJkuP22SL._AC_SL1500_.jpg"
  },
  {
    id: 5,
    title: "TV Samsung 55\" Crystal UHD",
    price: "499,00€",
    link: "https://www.amazon.fr/dp/B09X1X42TK",
    image: "https://m.media-amazon.com/images/I/91PIefUlu3L._AC_SL1500_.jpg"
  },
  {
    id: 6,
    title: "Kindle Paperwhite (11ème génération)",
    price: "139,99€",
    link: "https://www.amazon.fr/dp/B08N36XNTT",
    image: "https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_SL1500_.jpg"
  }
];

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Merci pour votre inscription : " + email);
    setEmail("");
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Bienvenue sur TurboDeals</h1>
        <p className="text-xl">Vos meilleures offres Amazon en un éclair ⚡</p>
        <a href="#promos" className="mt-6 inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition">Découvrir les Offres</a>
      </section>

      {/* Produits Section */}
      <section id="promos" className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos meilleures sélections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img src={product.image} alt={product.title} className="object-cover h-64 w-full" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-blue-600 font-bold text-xl mb-4">{product.price}</p>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
                  Voir sur Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Recevez nos meilleures offres directement par email</h2>
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Votre email"
            className="border p-3 rounded-md w-72"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md">
            S'inscrire
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p>TurboDeals © 2025. Tous droits réservés.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline">Mentions légales</a> | <a href="#" className="hover:underline">Politique de confidentialité</a>
        </p>
      </footer>
    </div>
  );
}
