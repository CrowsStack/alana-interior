"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Loft Kitchen Interior",
    category: "interior",
    description:
      "Take advantage of the experiential-learning opportunities built into many programs. You can work in labs on and off campus or even spend semesters overseas. One Construction employs…",
    image: "/images/loft-kitchen.jpg",
  },
  {
    id: 2,
    title: "White Italian Villa",
    category: "architecture",
    description:
      "Take advantage of the exponential-learning opportunities built into many programs. You can work in labs on and off campus or even spend semesters overseas. One Construction employs…",
    image: "/images/italian-villa.jpg",
  },
  {
    id: 3,
    title: "Modern Living Space",
    category: "interior",
    description:
      "Explore our modern living space, designed with a focus on minimalism and comfort. Perfect for urban living with a touch of elegance.",
    image: "/images/modern-living.jpg",
  },
  {
    id: 4,
    title: "Contemporary Office",
    category: "interior",
    description: "A bright and modern office space designed for productivity and collaboration.",
    image: "/images/office-space.jpg",
  },
  {
    id: 5,
    title: "Minimalist House Design",
    category: "architecture",
    description: "A study in minimalism, this house design emphasizes clean lines and open spaces.",
    image: "/images/minimalist-house.jpg",
  },
  {
    id: 6,
    title: "Luxury Apartment",
    category: "interior",
    description: "Experience urban luxury in this beautifully designed apartment with high-end finishes.",
    image: "/images/luxury-apartment.jpg",
  },
]

const categories = [
  { name: "All Projects", count: 9 },
  { name: "architecture", count: 2 },
  { name: "building", count: 1 },
  { name: "Civil", count: 3 },
  { name: "Design", count: 1 },
  { name: "interior", count: 4 },
  { name: "Residence", count: 1 },
]

export default function FeaturedProjects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const handleNavClick = (index: number) => {
    setCurrentProjectIndex(index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Outstanding.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projects Featured by Maiko.Architects below. We’ve built a community based on sharing knowledge because the
            best ideas flow between disciplines. At our company, we understand that a home is more than just a physical
            space – it’s a reflection of your dreams and aspirations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className={`mx-2 my-1 px-4 py-2 text-sm text-gray-700 transition-colors ${
                index === 0 ? "border-b-2 border-gray-800" : "border rounded-full hover:bg-gray-100"
              }`}
            >
              {category.name} <span className="text-gray-500">({category.count})</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-md flex flex-col items-center ${
                index === 1 ? "md:scale-105" : "md:scale-95 grayscale hover:grayscale-0 transition-all duration-300"
              }`}
            >
              <div className={`relative w-full ${index === 1 ? "h-64 md:h-80" : "h-48 md:h-56"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              {index === 1 && (
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="mb-4">
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-700">{project.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <Link href={`/projects/${project.id}`} className="text-blue-600 hover:underline">
                    Read More
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-8">
          <div className="relative">
            <div className="relative w-full h-64">
              <Image
                src={projects[currentProjectIndex].image}
                alt={projects[currentProjectIndex].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{projects[currentProjectIndex].title}</h3>
              <div className="mb-4">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-700">
                  {projects[currentProjectIndex].category}
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">{projects[currentProjectIndex].description}</p>
              <Link href={`/projects/${projects[currentProjectIndex].id}`} className="text-blue-600 hover:underline">
                Read More
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentProjectIndex ? "bg-gray-800" : "bg-gray-300"}`}
                onClick={() => handleNavClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

