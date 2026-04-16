import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <a
                href="tel:+971553001483"
                className="hover:text-primary transition-colors"
              >
                +971 55 300 1483
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a
                href="mailto:info@rootae.com"
                className="hover:text-primary transition-colors"
              >
                info@rootae.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p>WS13 -A12-JAFZA</p>
              <p>Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sidebar-border pt-8">
          <p className="text-center text-sm opacity-75">
            © 2026 ROOT FZE. All rights reserved. | Global Technology & Trade
          </p>
        </div>
      </div>
    </footer>
  );
}
