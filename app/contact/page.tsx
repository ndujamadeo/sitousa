"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    orderType: "retail",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Questions about our products? Ready to order?
            We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="orderType" className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="orderType"
                    name="orderType"
                    required
                    value={formData.orderType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition bg-white"
                  >
                    <option value="retail">Retail Orders (Personal Use)</option>
                    <option value="wholesale">Wholesale Orders (Restaurant/Store)</option>
                    <option value="bulk">Bulk Orders (Large Quantity)</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name (if applicable)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition resize-none"
                    placeholder="Tell us about your interest in 'nduja. What products are you interested in? How much would you like to order?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Details */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Direct Contact
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📧</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <a href="mailto:info@ndujaitalia.com" className="text-red-600 hover:text-red-700">
                        info@ndujaitalia.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📱</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <a href="tel:+15551234567" className="text-red-600 hover:text-red-700">
                        +1 (555) 123-4567
                      </a>
                      <p className="text-sm text-gray-600">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Origin</h3>
                      <p className="text-gray-700">Spilinga, Calabria, Italy</p>
                      <p className="text-sm text-gray-600">Imported to USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Types */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Order Types
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-red-600 mb-2">🏠 Retail Orders</h3>
                    <p className="text-gray-700 text-sm">
                      Perfect for home cooks and food enthusiasts. Minimum order: 1 jar.
                      Ships to all 50 states.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600 mb-2">🍽️ Wholesale</h3>
                    <p className="text-gray-700 text-sm">
                      For restaurants, specialty stores, and gourmet shops.
                      Competitive pricing and regular delivery schedules.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600 mb-2">📦 Bulk Orders</h3>
                    <p className="text-gray-700 text-sm">
                      Large quantity orders for events, corporate gifts, or distribution.
                      Custom packaging available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  🚚 Shipping Information
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Ships to all 50 states</li>
                  <li>✓ Standard shipping: 5-7 business days</li>
                  <li>✓ Express shipping available</li>
                  <li>✓ Refrigerated packaging for freshness</li>
                  <li>✓ Track your order online</li>
                </ul>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Questions?
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-gray-900">How long does 'nduja last?</h3>
                    <p className="text-gray-600">Unopened: 6 months refrigerated. Opened: 2-3 weeks.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Can I freeze it?</h3>
                    <p className="text-gray-600">Yes! Freezes perfectly for up to 6 months.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Minimum order?</h3>
                    <p className="text-gray-600">Retail: 1 jar. Wholesale: Contact us for details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Follow Our Journey
          </h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-50">
                <span className="text-2xl">📘</span>
              </div>
              <p className="text-xs mt-2">Facebook</p>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-50">
                <span className="text-2xl">📷</span>
              </div>
              <p className="text-xs mt-2">Instagram</p>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-50">
                <span className="text-2xl">🐦</span>
              </div>
              <p className="text-xs mt-2">Twitter</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
