import Head from 'next/head';
import Layout from '../app/components/Layout/Layout';
import Hero from '../app/components/home/Hero';
import Features from '../app/components/home/Features';
import Testimonials from '../app/components/home/Testimonials';
import Pricing from '../app/components/home/Pricing';
import CTA from '../app/components/home/CTA';
import { siteConfig } from '../app/config';

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
      <CTA />
    </Layout>
  );
}