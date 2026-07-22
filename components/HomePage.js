'use client';

import CursorFollower from '@/components/CursorFollower';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Studios from '@/components/Studios';
import Projects, { Capabilities } from '@/components/Projects';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import Packages from '@/components/Packages';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage({ site }) {
  return (
    <>
      <div className="fx-grid" aria-hidden="true" />
      <div className="fx-scanlines" aria-hidden="true" />
      <CursorFollower />
      <Nav />
      <main>
        <Hero hero={site.hero} heroBar={site.heroBar} />
        <TrustedBy partners={site.partners} />
        <Studios studios={site.studios} />
        <Projects projects={site.projects} stories={site.stories} />
        <Capabilities capabilities={site.capabilities} />
        <Industries industries={site.industries} />
        <Process process={site.process} />
        <Packages packages={site.packages} />
        <FAQ faq={site.faq} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
