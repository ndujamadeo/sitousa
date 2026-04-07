import Link from "next/link";
import Image from "next/image";
import ProductOrderForm from "@/components/ProductOrderForm";

export const metadata = {
  title: "Our Products - NdujaLovers",
  description: "Explore our range of authentic Calabrian 'nduja from Filiera Madeo. From Mild to Extra Hot, find your perfect level of spice. Premium quality, traditional recipes from San Demetrio Corone.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our 'Nduja Collection
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Authentic Calabrian 'nduja in three levels of heat.
            Find your perfect match.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Small Bucket - Mild */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80 bg-gradient-to-br from-orange-50 to-amber-50">
                <Image
                  src="/products/secchiello-piccolo.jpg"
                  alt="Small Bucket - Mild 'Nduja"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Small Bucket</h3>
                <div className="flex items-center mb-4">
                  <span className="text-red-600 font-bold text-xl">🌶️🌶️</span>
                  <span className="ml-2 text-gray-600">Mild Heat</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Perfect for families and those new to 'nduja. This small bucket format preserves
                  all the rich, savory flavors of traditional Calabrian salumi with a gentle warming
                  sensation. Ideal for introducing friends to this Italian treasure.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Perfect For:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Family-friendly pasta dishes</li>
                    <li>• Sandwich spread instead of mayo</li>
                    <li>• Cheese board centerpiece</li>
                    <li>• Baked potato or sweet potato topper</li>
                  </ul>
                </div>

                <div className="border-t pt-4 text-sm text-gray-600">
                  <p><strong>Ingredients:</strong> Pork, mild Calabrian peppers, sea salt, natural spices</p>
                  <p className="mt-2"><strong>Origin:</strong> San Demetrio Corone, Calabria, Italy</p>
                </div>
              </div>
            </div>

            {/* 'Nduja Jar - Classic */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80 bg-gradient-to-br from-red-50 to-orange-50">
                <Image
                  src="/products/vasetto-nduja.jpg"
                  alt="'Nduja Jar - Classic"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">'Nduja Jar</h3>
                <div className="flex items-center mb-4">
                  <span className="text-red-600 font-bold text-xl">🌶️🌶️🌶️</span>
                  <span className="ml-2 text-gray-600">Classic Heat</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our flagship format delivers authentic Calabrian heat with rich, savory notes
                  of premium pork and sun-dried peppers. The traditional jar preserves the artisanal
                  quality. Perfect for those seeking genuine Italian flavor. Aged for optimal taste.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Perfect For:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Spreading on crusty sourdough with honey</li>
                    <li>• Swirling into risotto for instant depth</li>
                    <li>• Melting over pizza or flatbread</li>
                    <li>• Mixing into pasta sauces</li>
                  </ul>
                </div>

                <div className="border-t pt-4 text-sm text-gray-600">
                  <p><strong>Ingredients:</strong> Pork, Calabrian hot peppers, sea salt, natural spices</p>
                  <p className="mt-2"><strong>Origin:</strong> San Demetrio Corone, Calabria, Italy</p>
                </div>
              </div>
            </div>

            {/* Medium Bucket - Medium-Hot */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80 bg-gradient-to-br from-red-50 to-pink-50">
                <Image
                  src="/products/secchiello-medio.jpg"
                  alt="Medium Bucket - Medium-Hot 'Nduja"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Medium Bucket</h3>
                <div className="flex items-center mb-4">
                  <span className="text-red-600 font-bold text-xl">🌶️🌶️🌶️🌶️</span>
                  <span className="ml-2 text-gray-600">Medium-Hot</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our medium bucket offers the perfect balance of heat and flavor. Ideal for
                  families who love bold taste and regular 'nduja enthusiasts. The larger format
                  ensures you never run out during dinner parties.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Perfect For:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Bold pasta dishes and sauces</li>
                    <li>• Grilling season marinades</li>
                    <li>• Dinner parties and gatherings</li>
                    <li>• Regular 'nduja enthusiasts</li>
                  </ul>
                </div>

                <div className="border-t pt-4 text-sm text-gray-600">
                  <p><strong>Ingredients:</strong> Pork, Calabrian hot peppers, sea salt, natural spices</p>
                  <p className="mt-2"><strong>Origin:</strong> San Demetrio Corone, Calabria, Italy</p>
                </div>
              </div>
            </div>

            {/* Small Squeeze - Hot */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80 bg-gradient-to-br from-red-100 to-orange-50">
                <Image
                  src="/products/squeeze-piccolo.jpg"
                  alt="Small Squeeze - Hot 'Nduja"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Small Squeeze</h3>
                <div className="flex items-center mb-4">
                  <span className="text-red-600 font-bold text-xl">🌶️🌶️🌶️🌶️</span>
                  <span className="ml-2 text-gray-600">Hot</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The convenient squeeze format meets serious heat. Perfect for precise application
                  and everyday use. This portable size is ideal for spice lovers who want authentic
                  Calabrian fire on demand. Keep it in your kitchen arsenal.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Perfect For:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Precise pizza topping application</li>
                    <li>• Quick pasta sauce enhancement</li>
                    <li>• Take to BBQs and picnics</li>
                    <li>• Everyday spice enthusiasts</li>
                  </ul>
                </div>

                <div className="border-t pt-4 text-sm text-gray-600">
                  <p><strong>Ingredients:</strong> Pork, extra Calabrian hot peppers, sea salt, natural spices</p>
                  <p className="mt-2"><strong>Origin:</strong> San Demetrio Corone, Calabria, Italy</p>
                </div>
              </div>
            </div>

            {/* Large Squeeze - Extra Hot */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border-2 border-red-600">
              <div className="bg-red-600 text-white text-center py-2 font-bold">
                🔥 EXTREME HEAT ALERT 🔥
              </div>
              <div className="relative h-80 bg-gradient-to-br from-red-100 to-red-50">
                <Image
                  src="/products/squeeze-grande.jpg"
                  alt="Large Squeeze - Extra Hot 'Nduja"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Large Squeeze</h3>
                <div className="flex items-center mb-4">
                  <span className="text-red-600 font-bold text-xl">🌶️🌶️🌶️🌶️🌶️</span>
                  <span className="ml-2 text-gray-600">Extra Hot</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For true heat warriors! Our largest squeeze bottle packs maximum Calabrian pepper
                  punch while maintaining rich, meaty complexity. Made with additional peperoncino
                  for thrill-seekers. The convenient format meets extreme heat. Not for the faint of heart!
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Perfect For:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Extreme spice challenges</li>
                    <li>• Bold pasta arrabbiata</li>
                    <li>• Bloody Mary garnish</li>
                    <li>• Heat enthusiast's pantry staple</li>
                  </ul>
                </div>

                <div className="border-t pt-4 text-sm text-gray-600">
                  <p><strong>Ingredients:</strong> Pork, extra extra Calabrian hot peppers, sea salt, natural spices</p>
                  <p className="mt-2"><strong>Origin:</strong> San Demetrio Corone, Calabria, Italy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            How to Enjoy 'Nduja
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            'Nduja is incredibly versatile. Here are just a few ways to unleash its flavor.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-5xl">🍕</span>
              </div>
              <h3 className="text-xl font-bold mb-2">On Pizza</h3>
              <p className="text-gray-600">
                Dot over pizza before baking. The heat melts it into a spicy, flavorful oil.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-5xl">🍝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">With Pasta</h3>
              <p className="text-gray-600">
                Stir into hot pasta with a splash of pasta water. Instant restaurant-quality sauce.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-5xl">🥖</span>
              </div>
              <h3 className="text-xl font-bold mb-2">On Bread</h3>
              <p className="text-gray-600">
                Simply spread on crusty bread. Add a drizzle of honey for sweet-heat perfection.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-5xl">🍳</span>
              </div>
              <h3 className="text-xl font-bold mb-2">In Cooking</h3>
              <p className="text-gray-600">
                Add to soups, stews, sauces, eggs, burgers—anywhere you want bold flavor.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pro Tips</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold mb-2">🧈 Room Temperature</h4>
                <p className="text-sm">Let 'nduja sit at room temp for 10 minutes before using. It becomes beautifully spreadable.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">🍯 Sweet Pairing</h4>
                <p className="text-sm">Pair with honey, fig jam, or balsamic glaze. The sweetness balances the heat perfectly.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">❄️ Freezer Friendly</h4>
                <p className="text-sm">Freeze in small portions. Thaws quickly and maintains all its flavor and texture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Safety */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Storage & Handling
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-red-600">Storage</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Unopened: Refrigerate, lasts 6 months</li>
                  <li>✓ Opened: Keep refrigerated, use within 2-3 weeks</li>
                  <li>✓ Freezing: Freezes perfectly for up to 6 months</li>
                  <li>✓ Always use clean utensils to prevent contamination</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-red-600">Allergen Info</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Contains: Pork</li>
                  <li>✓ Gluten-Free: Yes</li>
                  <li>✓ Dairy-Free: Yes</li>
                  <li>✓ Nitrate-Free: Yes (traditional curing only)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-3xl mx-auto">
          <ProductOrderForm />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions or Special Orders?
          </h2>
          <p className="text-xl mb-8">
            Contact us for wholesale orders or additional information
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Contact Page
          </Link>
          <p className="mt-6 text-sm text-white/80">
            Wholesale inquiries welcome • Ships to all 50 states
          </p>
        </div>
      </section>
    </main>
  );
}
