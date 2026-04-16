import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const PRODUCTS_ELECTRONICS = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/products_electronics-YGPWvywPjC3sNEzgBcpdsv.webp";
const PRODUCTS_CAMERAS = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/products_cameras-SacuScsFWwoCTc5vGRchYP.webp";
const PRODUCTS_NETWORKING = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/products_networking-7zwVtrf3XVWijYFSUgf7np.webp";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/hero_global_trade-E3YhHENw72wYpbRabno7HX.webp";

const serviceDetails = [
  {
    id: "electronics",
    title: "Electronics & Devices",
    subtitle: "Premium Computing Solutions",
    image: PRODUCTS_ELECTRONICS,
    description:
      "We specialize in the wholesale distribution of premium computing devices and peripherals from world-leading manufacturers. Our extensive portfolio includes desktops, laptops, workstations, and enterprise-grade equipment.",
    longDescription:
      "ROOT FZE maintains strategic partnerships with Dell, HP, Lenovo, and ASUS to provide enterprises with the latest computing technology. Whether you need high-performance workstations for creative professionals, reliable business laptops, or robust desktop systems, we deliver authentic products with comprehensive warranty support.",
    features: [
      "Desktop computers and workstations",
      "Laptops and ultrabooks for business and creative professionals",
      "Computer peripherals and accessories",
      "Enterprise networking equipment",
      "Storage solutions and data centers",
      "Power management and UPS systems",
      "Authorized distributor with warranty support",
      "Technical consultation and deployment services",
    ],
    products: [
      "Dell OptiPlex, Precision, and XPS series",
      "HP EliteDesk, ProBook, and Spectre series",
      "Lenovo ThinkCentre and ThinkPad enterprise solutions",
      "ASUS ProArt and VivoBook professional lines",
      "Peripherals: monitors, keyboards, mice, docking stations",
    ],
  },
  {
    id: "security",
    title: "Security Systems",
    subtitle: "Advanced Surveillance & Access Control",
    image: PRODUCTS_CAMERAS,
    description:
      "Our comprehensive security solutions protect enterprises with state-of-the-art surveillance systems, access control, and integrated monitoring platforms from industry leaders.",
    longDescription:
      "We partner with Hikvision, Dahua, and Uniview to deliver enterprise-grade security infrastructure. From IP cameras and NVR systems to advanced analytics and cloud-based monitoring, our solutions provide complete visibility and control over your facilities.",
    features: [
      "IP cameras and NVR recording systems",
      "CCTV surveillance with 4K resolution",
      "Access control and biometric systems",
      "Alarm monitoring and emergency response",
      "Integrated security management platforms",
      "Cloud-based monitoring and analytics",
      "Professional installation and integration",
      "24/7 technical support and maintenance",
    ],
    products: [
      "Hikvision IP cameras and NVR recorders",
      "Dahua surveillance domes and turrets",
      "Uniview network cameras and systems",
      "Axis network cameras for specialized applications",
      "Professional-grade recording and storage systems",
    ],
  },
  {
    id: "networking",
    title: "Networking Solutions",
    subtitle: "Enterprise Infrastructure & Connectivity",
    image: PRODUCTS_NETWORKING,
    description:
      "We provide enterprise-grade networking infrastructure that ensures reliable, secure, and scalable connectivity for organizations of all sizes.",
    longDescription:
      "Our networking solutions from Cisco, Ubiquiti, and Fortinet deliver the performance and security enterprises demand. From core switches to wireless access points, security appliances to cloud networking, we help you build robust infrastructure.",
    features: [
      "Enterprise switches and routers",
      "Wireless networking and WiFi solutions",
      "Network security appliances and firewalls",
      "VPN and remote access systems",
      "Cloud connectivity and SD-WAN",
      "Network monitoring and management tools",
      "Fiber optic and cabling infrastructure",
      "Professional network design and deployment",
    ],
    products: [
      "Cisco Catalyst switches and ASR routers",
      "Ubiquiti UniFi wireless access points",
      "Fortinet FortiGate security appliances",
      "Meraki cloud-managed networking",
      "Fiber optic cables and connectivity solutions",
    ],
  },
  {
    id: "distribution",
    title: "Global Distribution",
    subtitle: "Logistics & Supply Chain Excellence",
    image: HERO_IMAGE,
    description:
      "Our comprehensive logistics network ensures seamless delivery of technology products worldwide with reliability, speed, and transparency.",
    longDescription:
      "ROOT FZE operates a sophisticated global distribution network supporting sea freight, air cargo, and land transportation. We handle customs clearance, warehousing, inventory management, and last-mile delivery to ensure your products arrive on time and in perfect condition.",
    features: [
      "Multi-modal transportation (sea, air, land)",
      "Temperature-controlled warehousing",
      "Real-time tracking and visibility",
      "Customs clearance and documentation",
      "Inventory management and fulfillment",
      "Last-mile delivery services",
      "Insurance and risk management",
      "24/7 customer support and logistics coordination",
    ],
    products: [
      "Ocean freight for large shipments",
      "Air cargo for time-sensitive deliveries",
      "Land transportation across regions",
      "Bonded warehousing facilities",
      "Cross-docking and consolidation services",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Link href="/">
              <div className="flex items-center gap-2 text-secondary-foreground/75 hover:text-secondary-foreground mb-8 w-fit cursor-pointer">
                <ArrowLeft size={18} />
                Back to Home
              </div>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-secondary-foreground/90 max-w-3xl">
              Comprehensive technology solutions designed to meet the evolving needs of enterprises worldwide
            </p>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 space-y-24">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-20"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                        {service.subtitle}
                      </p>
                      <h2 className="text-4xl font-bold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        {service.longDescription}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-bold text-foreground mb-4 text-lg">
                        Key Capabilities
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.slice(0, 6).map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Products */}
                    <div>
                      <h3 className="font-bold text-foreground mb-3 text-lg">
                        Featured Solutions
                      </h3>
                      <ul className="space-y-2">
                        {service.products.map((product, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < serviceDetails.length - 1 && (
                  <div className="border-t border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why Our Services */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose ROOT FZE Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Authentic Products",
                  description: "100% genuine products from authorized manufacturers with full warranty support",
                },
                {
                  title: "Expert Team",
                  description: "Experienced professionals providing technical consultation and deployment support",
                },
                {
                  title: "Global Network",
                  description: "Worldwide logistics infrastructure ensuring reliable and timely delivery",
                },
                {
                  title: "24/7 Support",
                  description: "Dedicated customer support team available round-the-clock for assistance",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-border">
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact our team to discuss your specific requirements and discover how ROOT FZE can support your business growth.
            </p>
            <Link href="/contact">
              <div className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors cursor-pointer">
                Get in Touch
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
