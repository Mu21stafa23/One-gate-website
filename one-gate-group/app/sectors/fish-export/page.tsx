
'use client'

import { ReactNode } from 'react';

import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';


// --- Animated Section Components ---
import { useState, useEffect } from 'react';

// Fade In Animation Component
const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
};

// Overview Section
const Overview = () => (
  <section className="bg-white py-16 px-4" id="about">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-6 text-blue-900">About Our Fish Export Department</h2>
        <p className="mb-8 text-lg">
          Our Fish Export Department specializes in the complete value chain of Sudanese fish exports - from supporting 
          local fishermen to delivering premium products to international markets. We handle both marine species from 
          the Red Sea and freshwater fish from the Nile and Sudan's inland waters.
        </p>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          {
            title: 'OUR MISSION',
            items: ['Connect Sudanese fishermen to global markets', 'Provide world-class processing facilities']
          },
          {
            title: 'OUR VISION',
            items: ['Transform Sudan into a regional powerhouse in fish exports', 'Leverage vast water resources sustainably']
          },
          {
            title: 'OUR VALUES',
            items: ['Sustainability', 'Quality', 'Fair Trade', 'Innovation', 'Partnership', 'Excellence']
          }
        ].map((card, idx) => (
          <FadeIn key={idx} delay={idx * 200}>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">{card.title}</h3>
              <ul className="text-sm space-y-1">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// Economic Comparison Section
const EconomicComparison = () => (
  <section className="bg-gray-50 py-16 px-4" id="opportunity">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-6 text-blue-900">The Opportunity</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Why Sudan Fish Export?</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-bold text-blue-900 mb-3">Current Situation:</h4>
              <ul className="space-y-2">
                {[
                  'Only 3% of economic fishing area utilized',
                  '800+ km Red Sea coastline',
                  '98,000 km² exclusive economic zone',
                  '2 million hectares of inland waters',
                  '110,000 tons/year current production'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500">⚠️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-lg shadow p-6">
              <h4 className="font-bold text-green-700 mb-3">The Potential:</h4>
              <ul className="space-y-2">
                {[
                  '2+ million tons/year production capacity',
                  'Multi-billion dollar market opportunity',
                  'Strategic Red Sea location for global trade',
                  'Year-round production capability'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500">🚀</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={300}>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4 text-left">Country</th>
                <th className="p-4 text-left">Production</th>
                <th className="p-4 text-left">Annual Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['🇪🇬 Egypt', '2M tons (Tilapia)', '$4 Billion'],
                ['🇳🇴 Norway', '1.6M tons (Salmon)', '$10 Billion'],
                ['🇸🇩 Sudan (Current)', '110K tons', 'Underutilized'],
                ['🇸🇩 Sudan (POTENTIAL)', '2M+ tons', 'Multi-Billion']
              ].map((row, i) => (
                <tr key={i} className={`border-t ${i === 3 ? 'bg-green-50 font-bold' : ''}`}>
                  <td className="p-4">{row[0]}</td>
                  <td className="p-4">{row[1]}</td>
                  <td className="p-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xl font-bold text-green-700 text-center">
          Sudan has the resources to compete - we just need to unlock them!
        </p>
      </FadeIn>
    </div>
  </section>
);

// References Section
const References = () => (
  <section className="max-w-5xl mx-auto py-20 px-4" id="references">
    <h2 className="text-3xl font-bold mb-6 text-blue-900">References</h2>
    <ul className="list-disc pl-6 text-lg mb-8">
      <li>"الثروة السمكية في السودان.. الكنز المنسي" hayatweb.com</li>
      <li>"مصادر الثروة السمكية | وزارة الثروة الحيوانية" marinvsd.com</li>
    </ul>
  </section>
);


export default function FishExportPage() {
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <header className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40" style={{backgroundImage: 'url(/images/fish-export/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[120vw] h-48 bg-gradient-to-t from-blue-50/80 to-transparent rounded-t-full blur-2xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight bg-gradient-to-r from-yellow-300 via-white to-blue-200 bg-clip-text text-transparent">Fish Export Department</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">Transforming Sudan's Fishing Wealth into Global Opportunity</h2>
          <p className="mb-10 text-lg md:text-2xl text-white/80 font-medium">Connecting Sudan's rich marine and freshwater resources with international markets through modern facilities, sustainable practices, and strategic partnerships.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white/90 text-blue-900 rounded-2xl shadow-lg p-6 min-w-[140px] border-t-4 border-blue-400 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold mb-1">🌊 800km</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Red Sea Coastline</div>
            </div>
            <div className="bg-white/90 text-blue-900 rounded-2xl shadow-lg p-6 min-w-[140px] border-t-4 border-blue-400 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold mb-1">📊 110,000</div>
              <div className="text-xs font-semibold uppercase tracking-wide">tons/year Production</div>
            </div>
            <div className="bg-white/90 text-blue-900 rounded-2xl shadow-lg p-6 min-w-[140px] border-t-4 border-blue-400 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold mb-1">📈 2M+ tons</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Potential</div>
            </div>
            <div className="bg-white/90 text-blue-900 rounded-2xl shadow-lg p-6 min-w-[140px] border-t-4 border-blue-400 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold mb-1">✓ ISO</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Certified</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#partnership" className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all text-lg">Partner With Us</a>
            <a href="#facilities" className="inline-block bg-white/90 hover:bg-blue-100 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all text-lg border border-blue-200">View Facilities ↓</a>
          </div>
        </div>
      </header>

      <main className="bg-gradient-to-b from-blue-50 via-white to-blue-100">
        {/* --- Animated Content Sections --- */}
        <Overview />
        <EconomicComparison />
        {/* Add more animated sections here as needed, e.g. ProjectImportance, Facilities, Services, Partnership, etc. */}
        {/* --- Enhanced Facilities Section --- */}
        <section className="max-w-5xl mx-auto py-16 px-4" id="facilities">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">World-Class Infrastructure for Premium Quality</h2>
          <p className="mb-8">Our department operates state-of-the-art facilities that meet international standards for fish processing and export.</p>
          {/* Processing Chambers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Processing & Cold Storage Facilities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img src="/images/fish-export/chamber-1.jpg" alt="Processing Chamber" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Temperature-Controlled Processing Chambers</h4>
                  <ul className="text-sm list-disc pl-4">
                    <li>ISO-certified processing units</li>
                    <li>Maintains optimal temperatures</li>
                    <li>EU standards compliant</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img src="/images/fish-export/chamber-2.jpg" alt="Cold Storage" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Advanced Cold Storage Systems</h4>
                  <ul className="text-sm list-disc pl-4">
                    <li>Multi-temperature zones (-18°C to +4°C)</li>
                    <li>Blast freezing technology</li>
                    <li>24/7 monitoring & backup power</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img src="/images/fish-export/equipment.jpg" alt="Processing Equipment" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Modern Processing Technology</h4>
                  <ul className="text-sm list-disc pl-4">
                    <li>Automated cleaning & filleting</li>
                    <li>Vacuum packaging machines</li>
                    <li>Metal detection systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Market Operations */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Fresh Fish Receiving & Quality Control</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img src="/images/fish-export/market-inside-1.jpg" alt="Receiving Station" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Fresh Fish Receiving Station</h4>
                  <ul className="text-sm list-disc pl-4">
                    <li>Direct connection with fishing vessels</li>
                    <li>On-site ice production</li>
                    <li>Immediate quality inspection</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img src="/images/fish-export/market-inside-2.jpg" alt="Trading Floor" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Modern Trading Floor</h4>
                  <ul className="text-sm list-disc pl-4">
                    <li>Transparent pricing system</li>
                    <li>Real-time international market link</li>
                    <li>Digital documentation</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img src="/images/fish-export/market-inside-3.jpg" alt="Quality Control" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Quality Inspection & Certification</h4>
                  <ul className="text-sm list-disc pl-4">
                    <li>Laboratory testing</li>
                    <li>Freshness verification</li>
                    <li>Export certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Export Logistics */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Distribution & Export Operations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img src="/images/fish-export/market-outside-1.jpg" alt="Loading Docks" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Export Loading & Distribution Center</h4>
                  <ul className="text-sm list-disc pl-4">
                    <li>Refrigerated loading docks</li>
                    <li>Cold chain maintained</li>
                    <li>Direct port access</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img src="/images/fish-export/market-outside-2.jpg" alt="Warehouse" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Export Ready Storage</h4>
                  <ul className="text-sm list-disc pl-4">
                    <li>Temperature-controlled warehouses</li>
                    <li>24/7 security monitoring</li>
                    <li>Container staging area</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <img src="/images/fish-export/transport.jpg" alt="Transport Fleet" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Refrigerated Transport Fleet</h4>
                  <ul className="text-sm list-disc pl-4">
                    <li>GPS-tracked vehicles</li>
                    <li>Temperature monitoring</li>
                    <li>Direct routes to port/airport</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Certifications */}
          <div className="bg-blue-900 text-white rounded-lg shadow p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Certifications & Standards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">✓</div>
                <h4 className="font-bold mb-1">HACCP</h4>
                <p className="text-sm">Hazard Analysis Critical Control Points</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✓</div>
                <h4 className="font-bold mb-1">ISO 22000</h4>
                <p className="text-sm">Food Safety Management</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✓</div>
                <h4 className="font-bold mb-1">EU Standards</h4>
                <p className="text-sm">Export Approved</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✓</div>
                <h4 className="font-bold mb-1">Halal Certified</h4>
                <p className="text-sm">Islamic Standards</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✓</div>
                <h4 className="font-bold mb-1">EPA Compliant</h4>
                <p className="text-sm">Environmental Protection</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✓</div>
                <h4 className="font-bold mb-1">Full Traceability</h4>
                <p className="text-sm">Catch to Container</p>
              </div>
            </div>
          </div>
        </section>
        {/* --- Enhanced Partnership Section --- */}
        <section className="max-w-5xl mx-auto py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg" id="partnership">
          <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">Partner With Our Fish Export Department</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">We're seeking strategic partners to help unlock Sudan's massive fishing potential. Whether you're an investor, buyer, technology provider, or industry expert, we have partnership models that create mutual value.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-bold text-blue-900 mb-2">Financial Investment</h3>
              <p className="text-sm mb-3">Equity investment in facilities expansion and operations</p>
              <a href="#contact" className="text-blue-600 text-sm font-semibold hover:underline">Learn More →</a>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-blue-900 mb-2">Strategic Partnership</h3>
              <p className="text-sm mb-3">Long-term supply agreements and co-investment</p>
              <a href="#contact" className="text-blue-600 text-sm font-semibold hover:underline">Learn More →</a>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">🚢</div>
              <h3 className="font-bold text-blue-900 mb-2">Buyer Partnership</h3>
              <p className="text-sm mb-3">Exclusive supply contracts and custom products</p>
              <a href="#contact" className="text-blue-600 text-sm font-semibold hover:underline">Learn More →</a>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-bold text-blue-900 mb-2">Technical Partnership</h3>
              <p className="text-sm mb-3">Technology transfer and training programs</p>
              <a href="#contact" className="text-blue-600 text-sm font-semibold hover:underline">Learn More →</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Why Partner With Us?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold">Established Infrastructure</h4>
                  <p className="text-sm text-gray-600">Operating facilities with proven track record</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold">Part of Larger Company</h4>
                  <p className="text-sm text-gray-600">Financial stability and management expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold">Government Support</h4>
                  <p className="text-sm text-gray-600">Export incentives and tax benefits</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold">Experienced Team</h4>
                  <p className="text-sm text-gray-600">Industry experts with international experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold">Sustainable Approach</h4>
                  <p className="text-sm text-gray-600">Environmental compliance and community partnership</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold">Massive Growth Potential</h4>
                  <p className="text-sm text-gray-600">From 110K to 2M+ tons production capacity</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- References Section --- */}
        <References />
        {/* --- Floating Contact Button --- */}
        <a 
          href="#contact" 
          className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full shadow-lg transition z-50"
        >
          Contact Us
        </a>
        <section className="max-w-5xl mx-auto py-20 px-4" id="contact">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Get In Touch - Let's Build Together</h2>
          <p className="mb-4">Whether you're interested in partnership opportunities, purchasing fish products, or learning more about our operations, our team is ready to discuss how we can work together.</p>
          <div className="bg-gradient-to-br from-white to-blue-100 rounded-2xl shadow-lg p-8 mb-8 border-t-4 border-blue-400">
            <form className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input className="border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400" type="text" placeholder="Full Name" required />
                <input className="border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400" type="email" placeholder="Email Address" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input className="border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400" type="text" placeholder="Phone Number" />
                <input className="border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400" type="text" placeholder="Company/Organization" />
              </div>
              <select className="border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400" required>
                <option>Inquiry Type</option>
                <option>Partnership/Investment Opportunity</option>
                <option>Bulk Purchase Inquiry</option>
                <option>Technical Questions</option>
                <option>Facility Tour Request</option>
                <option>Fishermen Cooperative</option>
                <option>Media/Press Inquiry</option>
                <option>General Question</option>
                <option>Other</option>
              </select>
              <textarea className="border border-blue-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-400" rows={4} placeholder="Message" required />
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" required className="accent-blue-600" />
                  <span className="text-xs">I agree to the privacy policy</span>
                </label>
              </div>
              <button type="submit" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-blue-800 hover:to-blue-950 transition-all text-lg">Submit</button>
            </form>
          </div>
          <div className="text-sm text-blue-900/80">
            <p><b>Email:</b> fishexport@[yourcompany].com</p>
            <p><b>Phone:</b> +249 XXX XXX XXX</p>
            <p><b>Address:</b> Fish Export Department, [Your Company Name], [Street Address], Khartoum, Sudan</p>
            <p><b>Business Hours:</b> Sun-Thu: 8:00 AM - 5:00 PM</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
