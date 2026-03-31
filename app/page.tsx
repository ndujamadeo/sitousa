import Link from "next/link";
import NdujaHero from "@/components/NdujaHero";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-orange-700 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80')",
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-orange-700/90" />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Authentic Calabrian 'Nduja
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Experience the fiery passion of Southern Italy, now in America
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Explore Our Products
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* What is 'Nduja Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What is 'Nduja?
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                'Nduja is a spreadable, spicy pork salumi from Calabria, Southern Italy.
                Made with premium cuts of pork, Calabrian hot peppers, salt, and traditional spices,
                it's a culinary treasure that has conquered the hearts of food lovers worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Crafted following centuries-old recipes, using only the finest
                ingredients and traditional fermentation methods. Every jar captures the authentic
                taste of Calabria's rich gastronomic heritage.
              </p>
              <Link
                href="/about"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Discover Our Story
              </Link>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-50 to-orange-50">
              <NdujaHero />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Our 'Nduja?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🇮🇹</div>
              <h3 className="text-xl font-bold mb-3">Authentic Italian</h3>
              <p className="text-gray-200">
                Made in Calabria following traditional methods
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-3">100% Natural</h3>
              <p className="text-gray-200">
                No artificial additives or preservatives
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍🌾</div>
              <h3 className="text-xl font-bold mb-3">Artisan Crafted</h3>
              <p className="text-gray-200">
                Small-batch production by master salumieri
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-3">Direct Import</h3>
              <p className="text-gray-200">
                Fresh from Calabria to your table
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Heat
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From mild to extra hot, we have the perfect 'nduja for every palate.
            Discover our collection of authentic Calabrian flavors.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🌶️🌶️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mild</h3>
              <p className="text-gray-600 text-sm">Gentle warmth, full flavor</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-500">
              <div className="text-4xl mb-3">🌶️🌶️🌶️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Classic</h3>
              <p className="text-gray-600 text-sm">Perfect balance, most popular</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🌶️🌶️🌶️🌶️🌶️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Extra Hot</h3>
              <p className="text-gray-600 text-sm">For true heat seekers</p>
            </div>
          </div>
          <Link
            href="/products"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Taste Tradition?
          </h2>
          <p className="text-xl mb-8">
            Bring the authentic flavors of Calabria to your kitchen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-red-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-full text-lg font-bold border-2 border-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
