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
    const formspreeEndpoint = "https://formspree.io/f/xwpqldwe"; // Replace with your Formspree endpoint

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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#4DB6AC">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-teal-950/50 to-teal-950/10">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-neutral-300 text-lg font-light drop-shadow max-w-xl mx-auto">
            Let's start a conversation and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left side - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods */}
            <div className="bg-teal-900/30 backdrop-blur-md border border-teal-600/40 rounded-2xl p-6 shadow-xl hover:border-teal-400 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center group-hover:bg-teal-700/60 transition-colors border border-teal-600/30">
                    <Phone className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <p className="text-teal-300 text-sm font-medium">Phone</p>
                    <a
                      href="tel:+918602019492"
                      className="text-white drop-shadow hover:text-teal-300 transition-colors cursor-pointer"
                    >
                      +91-8602019492
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center group-hover:bg-teal-700/60 transition-colors border border-teal-600/30">
                    <Mail className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <p className="text-teal-300 text-sm font-medium">Email</p>
                    <a
                      href="mailto:mauryaaditya.2807@gmail.com"
                      className="text-white drop-shadow hover:text-teal-300 transition-colors cursor-pointer"
                    >
                      mauryaaditya.2807@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-teal-900/30 backdrop-blur-md border border-teal-600/40 rounded-2xl p-6 shadow-xl hover:border-teal-400 transition-all duration-300">
              <p className="text-teal-300 text-sm font-medium mb-4">
                Follow us
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/M311248972807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center hover:bg-teal-700/60 transition-colors group border border-teal-600/30 hover:border-teal-400/60"
                >
                  <XIcon />
                </a>
                <a
                  href="https://www.instagram.com/_.strange.0_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center hover:bg-teal-700/60 transition-colors group border border-teal-600/30 hover:border-teal-400/60"
                >
                  <Instagram className="w-5 h-5 text-teal-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adimaurya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center hover:bg-teal-700/60 transition-colors group border border-teal-600/30 hover:border-teal-400/60"
                >
                  <Linkedin className="w-5 h-5 text-teal-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://github.com/STR7ANGER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center hover:bg-teal-700/60 transition-colors group border border-teal-600/30 hover:border-teal-400/60"
                >
                  <Github className="w-5 h-5 text-teal-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-teal-900/30 backdrop-blur-md border border-teal-600/40 rounded-2xl p-6 shadow-xl hover:border-teal-400 transition-all duration-300">
              <p className="text-teal-300 text-sm font-medium mb-4">
                Office Hours
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-neutral-200 drop-shadow">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </p>
                <p className="text-neutral-200 drop-shadow">
                  Sat: 10:00 AM - 4:00 PM
                </p>
                <p className="text-neutral-200 drop-shadow">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-teal-900/30 backdrop-blur-md border border-teal-600/40 rounded-2xl p-8 shadow-xl hover:border-teal-400 transition-all duration-300">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-teal-300 text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-teal-950/40 border border-teal-700/50 rounded-lg px-4 py-3 text-white placeholder-teal-400/60 focus:border-teal-400 focus:outline-none transition-colors backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-teal-300 text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-teal-950/40 border border-teal-700/50 rounded-lg px-4 py-3 text-white placeholder-teal-400/60 focus:border-teal-400 focus:outline-none transition-colors backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-teal-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-teal-950/40 border border-teal-700/50 rounded-lg px-4 py-3 text-white placeholder-teal-400/60 focus:border-teal-400 focus:outline-none transition-colors backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-teal-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-teal-950/40 border border-teal-700/50 rounded-lg px-4 py-3 text-white placeholder-teal-400/60 focus:border-teal-400 focus:outline-none transition-colors resize-none backdrop-blur-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-400 to-blue-400 text-black py-3 px-6 rounded-lg hover:from-teal-300 hover:to-blue-300 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send
                    className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`}
                  />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-900/50 border border-green-500/40 rounded-lg backdrop-blur-sm">
                    <p className="text-green-300 text-sm">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-900/50 border border-red-500/40 rounded-lg backdrop-blur-sm">
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
    </div>
  );
};

export default Contact;
