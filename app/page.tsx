import HeroSection from "@/components/hero-section"
import PortfolioGrid from "@/components/portfolio-grid"
import ApproachSection from "@/components/approach-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import NewsSection from "@/components/news-section"
import PartnersSection from "@/components/partners-section"
import TrustSection from "@/components/trust-section"
import EngineeringSection from "@/components/engineering-section"
import ProcessSteps from "@/components/process-steps"
import ServicesAccordion from "@/components/services-accordion"
// import WordsCard from "@/components/words-cards"
// import { projectTitles } from "@/lib/words-data"

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioGrid />
      <ApproachSection />

<div className="bodycarder">

    <div class="wordscardContainer">

        <div class="card-wrapper">
            <div class="wordscard" // style="background-color: lightblue;"
            >
                Card 1
            </div>
        </div>

        <div class="card-wrapper">
            <div class="wordscard" // style="background-color: lightcoral;"
            >
                Card 2
            </div>
        </div>

        <div class="card-wrapper">
            <div class="wordscard" // style="background-color: lightgreen;"
            >
                Card 3
            </div>
        </div>

        <div class="card-wrapper">
            <div class="wordscard" // style="background-color: light;"
            >
                Card 4
            </div>
        </div>

    </div>

</div>

      {/*
      <div>       
        <main className="min-h-screen">
            {projectTitles.map((project, index) => (
            <WordsCard key={index} title={project.title} />
            ))}
        </main>
      </div>
*/}

      <ServicesSection />
      <ServicesAccordion />
      <TrustSection />
      <EngineeringSection />
      <ProcessSteps />
      <TestimonialsSection />
      <CTASection />
      <NewsSection />
      <PartnersSection />
    </>
  )
}

