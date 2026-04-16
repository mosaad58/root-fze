import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MapPin, CheckCircle, Clock } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Message sent successfully! We'll contact you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Link href="/">
              <div className="flex items-center gap-2 text-secondary-foreground/75 hover:text-secondary-foreground mb-6 w-fit cursor-pointer">
                <ArrowLeft size={18} />
                Back to Home
              </div>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-secondary-foreground/90 max-w-3xl">
              Get in touch with our team to discuss your technology and distribution requirements
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="bg-white rounded-lg p-8 border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Phone
                  </h3>
                </div>
                <a
                  href="tel:+971553001483"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  +971 55 300 1483
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg p-8 border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Email
                  </h3>
                </div>
                <a
                  href="mailto:info@rootae.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  info@rootae.com
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-lg p-8 border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Address
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  WS13-A12, JAFZA
                  <br />
                  Dubai, UAE
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg border border-border p-8 md:p-12 shadow-md">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-green-800">
                    Your message has been sent successfully. We'll get back to you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="+971 55 300 1234"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Subject & Service Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="Inquiry about our services"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="electronics">Electronics & Devices</option>
                        <option value="security">Security Systems</option>
                        <option value="networking">Networking Solutions</option>
                        <option value="distribution">Global Distribution</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Business Hours
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg border border-border p-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-4">Operating Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">Monday - Friday:</span> 8:00 AM - 6:00 PM (GST)
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Saturday:</span> 9:00 AM - 2:00 PM (GST)
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Sunday:</span> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
