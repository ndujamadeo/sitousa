import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Story - NdujaLovers",
  description: "Discover the authentic tradition of Calabrian 'nduja from Filiera Madeo. Founded by Ernesto Madeo in 1984 in San Demetrio Corone, our story is one of passion, heritage, and family tradition.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Story of 'Nduja
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              A centuries-old tradition from the heart of Calabria,
              now bringing authentic Italian flavors to America.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Born in the Hills of Calabria
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                'Nduja's story begins in the small hilltop village of Spilinga, nestled in the
                mountains of Calabria, Southern Italy. For over a century, this unique spreadable
                salumi has been the pride of Calabrian culinary tradition.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Born from necessity and ingenuity, 'nduja was originally created by resourceful
                farmers who wanted to preserve every part of the pig, blending the finest cuts
                with the region's famous Calabrian hot peppers—the peperoncino rosso.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What emerged was not just a preservation technique, but a gastronomic masterpiece:
                a spreadable, spicy, intensely flavorful salumi that would become the beating
                heart of Calabrian cuisine.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏔️</div>
                  <p className="text-gray-700 font-semibold">The Hills of Spilinga</p>
                  <p className="text-gray-600 text-sm mt-2">Calabria, Southern Italy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Family Story */}
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Story: A Family, A Business, A Deep Love for the Land
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-5xl mb-3">👨‍👩‍👦‍👦</div>
                  <h3 className="font-bold text-gray-900">A Family</h3>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">🏭</div>
                  <h3 className="font-bold text-gray-900">A Business</h3>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">🌄</div>
                  <h3 className="font-bold text-gray-900">Love for the Land</h3>
                </div>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our journey began on the rolling Jonian hills of Calabria, in the ancient town
                  of San Demetrio Corone. It was here, in 1984, that a young entrepreneur named
                  <strong> Ernesto Madeo</strong> had a vision that would change everything. He established
                  the first pig farm in the Presilan hills, creating what would become Filiera
                  Agroalimentare Madeo—a name that would come to represent excellence in traditional
                  Calabrian 'nduja production.
                </p>

                <p>
                  But this wasn't just about starting a business. This was about honoring a legacy
                  that stretched back generations. The passion for creating authentic 'nduja was
                  born from the wisdom passed down from our parents and grandparents before them.
                  We are breeders by heritage, by blood, by tradition—this craft runs through our veins.
                </p>

                <p>
                  For the Madeo family, Filiera Agroalimentare is far more than a workplace.
                  <strong> It's our home. It's our daily life. It's where we gather, where we create,
                  where we live and breathe the traditions of our ancestors.</strong> Every morning,
                  we wake up not to go to work, but to continue a story that began long before us—
                  a story of dedication to the land, respect for the animals, and an unwavering
                  commitment to quality.
                </p>

                <p>
                  The Presilan hills of San Demetrio Corone provide the perfect terroir for our
                  craft. The Mediterranean climate, the pure mountain air, the rich volcanic soil—
                  everything comes together to create ideal conditions for raising pigs and
                  cultivating the fiery Calabrian peppers that give 'nduja its distinctive character.
                  Our connection to this land isn't just geographical; it's spiritual, emotional,
                  deeply rooted in centuries of agricultural tradition.
                </p>

                <p>
                  From that pioneering farm established in 1984, the Madeo family has built something
                  extraordinary: a complete agricultural supply chain dedicated to preserving the
                  authentic taste of Calabrian 'nduja. We control every step of the process, from
                  raising the pigs with care and respect, to selecting the perfect peppers, to
                  crafting each batch of 'nduja using methods that have remained unchanged for
                  generations.
                </p>

                <p>
                  This is <strong>famiglia</strong>—family—in its truest sense. Multiple generations
                  working side by side: grandparents sharing ancient techniques, parents refining
                  the craft, children learning and preparing to carry the torch forward. At Filiera
                  Madeo, we don't just make 'nduja; we preserve a way of life, a cultural heritage,
                  a piece of Calabrian soul.
                </p>

                <p className="text-xl font-semibold text-red-800 text-center pt-4">
                  And now, we bring this family tradition—this love for the land, this dedication
                  to quality—directly from the hills of Calabria to tables across America.
                </p>
              </div>
            </div>
          </div>

          {/* The Tradition */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👨‍🌾</div>
                  <p className="text-gray-700 font-semibold">Generational Knowledge</p>
                  <p className="text-gray-600 text-sm mt-2">Passed from nonna to nipote</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tradition Passed Through Generations
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The passion for 'nduja comes from knowledge passed down through generations.
                For Calabrian families, the craft of making 'nduja isn't just work—it's heritage,
                it's home, it's daily life.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Each master salumiere learned from their grandparents, who learned from theirs.
                The recipes remain largely unchanged, honoring the wisdom of those who came before
                while maintaining the authentic taste that has made 'nduja legendary.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This isn't mass production—it's artisanal craftsmanship. Every batch is made with
                care, respect for tradition, and an unwavering commitment to quality.
              </p>
            </div>
          </div>

          {/* The Process */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Art of Making 'Nduja
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Creating authentic 'nduja is an intelligent ecosystem where humanity and nature
                work in harmony. It begins with selecting the finest cuts of pork—shoulder,
                belly, and back fat—chosen for their perfect balance of meat and richness.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The meat is ground to a fine consistency, then blended with Calabrian hot peppers
                that give 'nduja its distinctive deep red color and fiery character. Sea salt and
                traditional spices are added with precision honed over generations.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The mixture is then aged in natural casings, where time and tradition work their
                magic. During fermentation, the flavors intensify, the texture becomes luxuriously
                spreadable, and the 'nduja develops its characteristic bold, complex taste.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This process cannot be rushed. True 'nduja requires patience, skill, and respect
                for the craft—qualities that distinguish artisanal production from industrial
                alternatives.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌶️</div>
                  <p className="text-gray-700 font-semibold">Calabrian Peppers</p>
                  <p className="text-gray-600 text-sm mt-2">The soul of 'nduja</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Territory */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              The Soul of Calabria
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                'Nduja is more than a product—it's an expression of Calabrian identity.
                The region's rugged mountains, Mediterranean climate, and volcanic soil create
                the perfect conditions for raising exceptional pigs and growing the world's
                finest hot peppers.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our production takes place in the <strong>Presilan hills near San Demetrio Corone</strong>,
                an area where the Jonian coast meets the Sila mountains. This unique microclimate—
                where sea breezes mix with mountain air, where ancient Greek and Roman agricultural
                traditions still echo—creates an environment unlike anywhere else on earth.
                Here, in these very hills, Calabrian peppers develop their distinctive heat and
                sweetness, and pigs thrive on natural diets that impart incredible flavor to the meat.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Calabria is Italy's toe, jutting into the Mediterranean Sea, blessed with intense
                sun, pure mountain air, and a fiercely proud culinary heritage. The Calabrian
                people have always known how to transform simple ingredients into extraordinary
                flavors through patience, passion, and time-honored technique. This land has been
                cultivated for millennia—first by the Greeks, then the Romans, then generations of
                Italian farmers who understood that great food begins with great respect for the land.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every jar of 'nduja carries with it the spirit of this remarkable place:
                the warmth of the Calabrian sun beating down on the Presilan hills,
                the fire of the peppers grown in volcanic soil,
                the dedication of artisans who have made this their life's work,
                and the pride of a region that has preserved its gastronomic treasures for
                centuries. When you taste our 'nduja, you're tasting San Demetrio Corone—
                you're tasting Calabria itself.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🇺🇸</div>
                  <p className="text-gray-700 font-semibold">Bringing Italy to America</p>
                  <p className="text-gray-600 text-sm mt-2">Authentic. Direct. Delicious.</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission in America
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We believe that Americans deserve access to genuine, authentic 'nduja—not
                diluted imitations, but the real thing, made the traditional way in Calabria.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We work directly with artisanal producers in Spilinga and surrounding villages,
                families who have been perfecting their craft for generations. We import only
                the finest 'nduja, ensuring it arrives fresh, flavorful, and true to its origins.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our goal is simple: to share the bold, passionate flavors of Calabria with
                food lovers across America. Whether you're spreading it on crusty bread,
                stirring it into pasta, or discovering creative new uses, we want you to
                experience 'nduja the way it was meant to be.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                From our famiglia to yours—Buon appetito!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Commitment</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-200">
                Made in Calabria using centuries-old traditional methods
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-3">Natural</h3>
              <p className="text-gray-200">
                No artificial additives, preservatives, or shortcuts
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍🌾</div>
              <h3 className="text-xl font-bold mb-3">Artisanal</h3>
              <p className="text-gray-200">
                Small-batch production by master salumieri
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Direct Trade</h3>
              <p className="text-gray-200">
                Fair prices for producers, best quality for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Taste Tradition?
          </h2>
          <p className="text-xl mb-8">
            Experience authentic Calabrian 'nduja
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-red-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              View Products
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
