import { Link } from "wouter";
import { ArrowRight, Globe, Zap, Shield, Package, Truck, Ship, Plane, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClocksSection } from "@/components/LiveClock";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/ROOT_Logo_Print_1898a936.jpg";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/hero_global_trade_218a8598.jpg";
const PRODUCTS_ELECTRONICS = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/products_electronics_aada2a08.jpg";
const PRODUCTS_CAMERAS = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/products_cameras_fbf72114.jpg";
const PRODUCTS_NETWORKING = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/products_networking_4d2a08c4.jpg";

// Shipping images
const SHIPPING_SEA = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/shipping_sea_freight_050281ef.png";
const SHIPPING_AIR = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/shipping_air_cargo_12046373.png";
const SHIPPING_LAND = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/shipping_land_logistics_ed2e5d5a.png";
const SHIPPING_GLOBAL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663029740326/koQzytSWEcpAzy7vv2ioog/shipping_global_network_b1434533.png";



const services = [
  {
    id: "electronics",
    title: "Electronics & Devices",
    description: "Premium computers, laptops, and peripherals from world-leading manufacturers",
    icon: Package,
    image: PRODUCTS_ELECTRONICS,
    href: "/services#electronics",
  },
  {
    id: "security",
    title: "Security Systems",
    description: "Advanced surveillance and security solutions for enterprises",
    icon: Shield,
    image: PRODUCTS_CAMERAS,
    href: "/services#security",
  },
  {
    id: "networking",
    title: "Networking Solutions",
    description: "Enterprise-grade networking and infrastructure equipment",
    icon: Zap,
    image: PRODUCTS_NETWORKING,
    href: "/services#networking",
  },
  {
    id: "distribution",
    title: "Global Distribution",
    description: "Seamless logistics and supply chain management worldwide",
    icon: Globe,
    image: HERO_IMAGE,
    href: "/services#distribution",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Full Width with Logo */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${HERO_IMAGE}')`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center">
              <img
                src={LOGO_URL}
                alt="ROOT FZE"
                className="h-48 w-auto object-contain drop-shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Global Technology & Trade
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Leading distributor of premium technology solutions, connecting world-class manufacturers with enterprises worldwide
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 py-6">
                Explore Our Solutions
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About ROOT FZE
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                ROOT FZE is a UAE-based technology enterprise headquartered in the Jebel Ali Free Zone, Dubai. We specialize in the wholesale trading and global distribution of premium electronics, advanced security systems, and enterprise software solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                With strategic partnerships with the world's leading technology manufacturers including Dell, HP, Lenovo, Cisco, Hikvision, and Dahua, we deliver cutting-edge solutions to enterprises across multiple continents.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our comprehensive import/export network ensures seamless logistics, competitive pricing, and exceptional service delivery to our global clientele.
              </p>
            </div>
          </div>
        </section>

        {/* Live Clocks Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-2">
                Operating Across Global Markets
              </h2>
              <p className="text-lg text-muted-foreground">
                Real-time operations in key markets worldwide
              </p>
            </div>
            <ClocksSection />
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Comprehensive technology solutions tailored to enterprise needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link key={service.id} href={service.href}>
                    <div className="group block h-full">
                      <div className="bg-white rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden bg-muted">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-start gap-3 mb-3">
                            <IconComponent className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-4 flex-1">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                            Learn More
                            <ArrowRight size={18} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>



        {/* Global Shipping & Logistics */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Global Shipping & Logistics
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver technology solutions to every corner of the world with multiple shipping options and comprehensive logistics support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Sea Freight */}
              <div className="bg-white rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={SHIPPING_SEA}
                    alt="Sea Freight"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Ship className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Sea Freight</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Cost-effective maritime shipping for large volume orders. We handle FCL (Full Container Load) and LCL (Less than Container Load) shipments to major ports worldwide.
                  </p>
                </div>
              </div>

              {/* Air Cargo */}
              <div className="bg-white rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={SHIPPING_AIR}
                    alt="Air Cargo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Plane className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Air Cargo</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Express international delivery for urgent shipments. Fast transit times with real-time tracking to ensure your technology reaches you on schedule.
                  </p>
                </div>
              </div>

              {/* Land Logistics */}
              <div className="bg-white rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={SHIPPING_LAND}
                    alt="Land Logistics"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Land Logistics</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Regional ground transportation with modern fleet and warehousing facilities. Efficient distribution across Middle East, Asia, and Europe.
                  </p>
                </div>
              </div>

              {/* Global Network */}
              <div className="bg-white rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-all">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={SHIPPING_GLOBAL}
                    alt="Global Network"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe2 className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Global Network</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Integrated supply chain management across 150+ countries. Strategic partnerships with logistics providers ensure seamless end-to-end delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: "Countries Served", value: "150+" },
                { label: "Annual Shipments", value: "10,000+" },
                { label: "On-Time Delivery", value: "99.5%" },
                { label: "Warehouses", value: "25+" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-border text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose ROOT FZE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Global Reach",
                  description: "Serving enterprises across multiple continents with reliable logistics and supply chain management",
                },
                {
                  title: "Premium Partners",
                  description: "Exclusive partnerships with world-leading manufacturers ensuring authentic, quality products",
                },
                {
                  title: "Expert Support",
                  description: "Dedicated team providing technical expertise, consultation, and comprehensive after-sales support",
                },
              ].map((item, i) => (
                <div key={i} className="bg-muted/50 rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with ROOT FZE?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact our team to discuss your technology and distribution requirements. We're committed to delivering excellence.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 py-6">
                Get in Touch
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
