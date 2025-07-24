import { useState } from "react";
import { Phone, Mail, Send, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Using Formspree - no templates needed!
    const formspreeEndpoint = "https://formspree.io/f/manbegod"; // Replace with your Formspree endpoint

    const formData2 = new FormData();
    formData2.append("name", formData.name);
    formData2.append("email", formData.email);
    formData2.append("phone", formData.phone);
    formData2.append("message", formData.message);
    formData2.append("_replyto", formData.email);
    formData2.append("_subject", "New Contact Form Message");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData2,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom X (Twitter) icon component
  const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-4 tracking-wide">Contact</h1>
          <p className="text-gray-400 text-lg font-light">
            Let's start a conversation
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left side - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">hello@company.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-4">Follow us</p>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors group">
                  <XIcon />
                </button>
                <button className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors group">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>
                <button className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>
                <button className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors group">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            {/* Office Hours */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-4">Office Hours</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Sat: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-300">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send
                  className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`}
                />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-900 border border-green-700 rounded-lg">
                  <p className="text-green-300 text-sm">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-900 border border-red-700 rounded-lg">
                  <p className="text-red-300 text-sm">
                    ✗ Failed to send message. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
