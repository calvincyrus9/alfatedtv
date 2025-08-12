// src/app/pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Pricing from '../components/home/Pricing';
import CTA from '../components/home/CTA'; // 1. Import the new CTA component
import { siteConfig } from '../config';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteConfig.name} - {siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
      </Head>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA /> {/* 2. Add the component here */}
    </Layout>
  );
}