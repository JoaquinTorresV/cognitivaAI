import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import { lazy } from 'react';

// Lazy load below-fold components for code splitting
const ServiceOfferings = lazy(() => import('@/components/sections/ServiceOfferings'));
const WorkMethodology = lazy(() => import('@/components/sections/WorkMethodology'));
const IndustryExpertise = lazy(() => import('@/components/sections/IndustryExpertise'));
const FinalCTASection = lazy(() => import('@/components/sections/FinalCTASection'));
const FloatingActionButtons = lazy(() => import('@/components/common/FloatingActionButtons'));

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceOfferings />
        <WorkMethodology />
        <IndustryExpertise />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingActionButtons />
    </>
  );
}