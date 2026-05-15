export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  services: [
    { label: "CCTV Installation", href: "/services/cctv-installation" },
    { label: "Smart Door Locks", href: "/services/smart-door-locks" },
    { label: "Biometric Systems", href: "/services/biometric-attendance" },
    { label: "Access Control", href: "/services/access-control" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Visit", href: "/booking" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const ADMIN_NAV = [
  { label: "Overview", href: "/admin", icon: "layout-dashboard" },
  { label: "Bookings", href: "/admin/bookings", icon: "calendar" },
  { label: "Services", href: "/admin/services", icon: "package" },
  { label: "Customers", href: "/admin/customers", icon: "users" },
  { label: "Providers", href: "/admin/providers", icon: "hard-hat" },
  { label: "Reviews", href: "/admin/reviews", icon: "star" },
  { label: "Payments", href: "/admin/payments", icon: "credit-card" },
  { label: "Analytics", href: "/admin/analytics", icon: "bar-chart" },
];

export const PROVIDER_NAV = [
  { label: "Dashboard", href: "/provider", icon: "layout-dashboard" },
  { label: "My Jobs", href: "/provider/jobs", icon: "briefcase" },
  { label: "Earnings", href: "/provider/earnings", icon: "wallet" },
  { label: "Profile", href: "/provider/profile", icon: "user" },
];

export const CUSTOMER_NAV = [
  { label: "Dashboard", href: "/customer", icon: "layout-dashboard" },
  { label: "My Bookings", href: "/customer/bookings", icon: "calendar" },
  { label: "History", href: "/customer/history", icon: "history" },
  { label: "Invoices", href: "/customer/invoices", icon: "file-text" },
  { label: "Profile", href: "/customer/profile", icon: "user" },
];
