import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/ceramic", label: "Ceramic Coating" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  contact: {
    phone: "+1 (555) 123-4567",
    email: "hello@luxedetail.com",
    address: "123 Premium Drive, Beverly Hills, CA",
  },
};

export function Footer() {
  return (
    <footer className="border-t border-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl font-medium tracking-wide text-text"
            >
              M&M AUTO DETAILING
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text/60">
              Premium automotive detailing for discerning owners. Where precision
              meets perfection.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-medium tracking-wider text-accent">
              NAVIGATION
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text/70 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-medium tracking-wider text-accent">
              CONTACT
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-text/70">
              <li>
                <a
                  href={`tel:${footerLinks.contact.phone.replace(/\D/g, "")}`}
                  className="transition-colors duration-200 hover:text-accent"
                >
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="transition-colors duration-200 hover:text-accent"
                >
                  {footerLinks.contact.email}
                </a>
              </li>
              <li>{footerLinks.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-surface pt-8">
          <p className="text-center text-sm text-text/50">
            © {new Date().getFullYear()} M&M Auto Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
