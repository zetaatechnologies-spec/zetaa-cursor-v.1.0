export type UserRole = "customer" | "admin" | "provider";

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "assigned"
  | "in_progress"
  | "completed"
  | "cancelled";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  role: UserRole;
  avatar_url: string | null;
  address: string | null;
  city: string | null;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  short_description: string;
  description: string;
  category: string;
  image_url: string;
  starting_price: number;
  is_active: boolean;
  features: string[];
  benefits: string[];
  packages: ServicePackage[];
  created_at: string;
  updated_at: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface Booking {
  id: string;
  customer_id: string;
  service_id: string;
  provider_id: string | null;
  status: BookingStatus;
  scheduled_date: string;
  scheduled_time: string;
  address: string;
  city: string;
  pincode: string;
  notes: string | null;
  images: string[];
  total_amount: number | null;
  created_at: string;
  updated_at: string;
  service?: Service;
  customer?: UserProfile;
  provider?: UserProfile;
}

export interface Review {
  id: string;
  booking_id: string;
  customer_id: string;
  service_id: string;
  rating: number;
  comment: string;
  is_approved: boolean;
  created_at: string;
  customer?: UserProfile;
}

export interface Payment {
  id: string;
  booking_id: string;
  customer_id: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  razorpay_order_id: string | null;
  razorpay_payment_id: string | null;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: string;
  is_read: boolean;
  created_at: string;
}

export interface ProviderProfile extends UserProfile {
  specialization: string[];
  rating: number;
  total_jobs: number;
  is_available: boolean;
}

// Static service page content (Urban Company style)
export interface ServicePageContent {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  overview: string;
  startingPrice: number;
  duration: string;
  benefits: { title: string; description: string; icon: string }[];
  features: string[];
  process: { step: number; title: string; description: string }[];
  packages: ServicePackage[];
  gallery: { before: string; after: string; caption: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}
