// src/app/services/page.tsx
'use client'
import ServicesSection from '../../components/ServicesSection'

export default function ServicesPage() {
  return (
    <section className="bg-light">
      <div className="container-max py-16">
        <h1 className="text-4xl font-title mb-8">Services</h1>
        <ServicesSection detailed />
      </div>
    </section>
  )
}
