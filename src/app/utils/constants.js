// src/utils/constants.js
export const FEATURES = [
  { icon: "fas fa-satellite-dish", title: "10,000+ Channels", description: "Access global channels from over 100 countries in multiple languages." },
  { icon: "fas fa-film", title: "50,000+ VOD", description: "Movies, TV shows, and exclusive content updated daily." },
  { icon: "fas fa-tv", title: "4K & HD Quality", description: "Crystal clear picture quality with minimal buffering." },
  { icon: "fas fa-mobile-alt", title: "Multi-Device Support", description: "Stream on any device: Smart TV, Phone, Tablet, PC, and more." },
  { icon: "fas fa-sync", title: "Catch-Up TV", description: "Never miss a show with our 7-day catch-up feature." },
  { icon: "fas fa-headset", title: "24/7 Support", description: "Dedicated support team ready to assist you anytime." }
];

export const CHANNELS = [
  { name: "ESPN", icon: "fas fa-basketball-ball" },
  { name: "HBO", icon: "fas fa-crown" },
  { name: "CNN", icon: "fas fa-newspaper" },
  { name: "BBC", icon: "fas fa-globe-europe" },
  { name: "Netflix", icon: "fas fa-play-circle" },
  { name: "Disney", icon: "fas fa-hat-wizard" },
  { name: "Fox Sports", icon: "fas fa-football-ball" },
  { name: "Discovery", icon: "fas fa-binoculars" }
];

export const PLANS = [
  {
    name: "Basic",
    price: "9.99",
    features: [
      "5,000+ Channels",
      "20,000+ VOD",
      "1 Device at a time",
      "HD Quality",
      "24/7 Support"
    ],
    ctaText: "Get Started",
    ctaLink: "/signup"
  },
  {
    name: "Standard",
    price: "14.99",
    features: [
      "7,500+ Channels",
      "35,000+ VOD",
      "2 Devices at a time",
      "Full HD Quality",
      "Catch-Up TV (3 days)",
      "24/7 Support"
    ],
    ctaText: "Most Popular",
    ctaLink: "/signup"
  },
  {
    name: "Premium",
    price: "19.99",
    features: [
      "10,000+ Channels",
      "50,000+ VOD",
      "5 Devices at a time",
      "4K & HD Quality",
      "Catch-Up TV (7 days)",
      "24/7 Priority Support"
    ],
    ctaText: "Best Value",
    ctaLink: "/signup"
  }
];

export const TESTIMONIALS = [
  {
    text: "The best IPTV service I've ever used. The channel list is incredible and the quality is top-notch.",
    name: "Alex Johnson",
    location: "New York, USA"
  },
  {
    text: "Affordable and reliable. I cut my cable bill by 80% and got more channels!",
    name: "Maria Garcia",
    location: "Madrid, Spain"
  },
  {
    text: "The customer support is amazing. They helped me set up on all my devices in minutes.",
    name: "James Smith",
    location: "London, UK"
  }
];