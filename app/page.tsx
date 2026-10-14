"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMaestro from "@/components/AboutMaestro";
import Courses from "@/components/Courses";
import CourseFinder from "@/components/CourseFinder";
import ScheduleSection from "@/components/ScheduleSection";
import GymGallery from "@/components/GymGallery";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import TrialBookingModal from "@/components/TrialBookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Boxe / Pugilato Amatoriale");

  const handleOpenBooking = (courseName?: string) => {
    if (courseName) {
      setSelectedCourse(courseName);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c0e] text-zinc-100">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Chi Siamo & Il Maestro Claudio Cricrì */}
        <AboutMaestro />

        {/* Corsi & Discipline */}
        <Courses onSelectCourseForBooking={(name) => handleOpenBooking(name)} />

        {/* Interactive Course Finder Quiz */}
        <CourseFinder onSelectCourseForBooking={(name) => handleOpenBooking(name)} />

        {/* Orari Settimanali */}
        <ScheduleSection />

        {/* La Palestra & Gallerie Ring */}
        <GymGallery />

        {/* Dove Siamo & Contatti */}
        <ContactLocation onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Trial Booking Modal */}
      <TrialBookingModal
        key={selectedCourse}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialCourse={selectedCourse}
      />
    </div>
  );
}
