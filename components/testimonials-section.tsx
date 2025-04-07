"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import Link from "next/link"

interface Review {
  id: number
  name: string
  text: string
  rating: number
  date: string
  role?: string
  project?: string
  summary?: string
}

const testimonials: Review[] = [
  {
    id: 1,
    name: "Hugh Bond",
    role: "Client",
    project: "Villa Renovation in Mount Lawley",
    text: "I can't speak more highly of Alana. Her skills and confidence in interior design are second to none. I reached out to Alana to help rejuvenate a tired late-1970's Villa in Mount Lawley. Her initial thoughts and layouts surpassed anything previously proposed by other Interior Designers. As such I became very comfortable with Alana's recommendations and was confident the outcome would match (and hopefully) exceed my expectations. To me, Alana's most endearing quality was her commitment to the outcome. Long after her design consult was concluded and fees paid, Alana remained available for any questions or concerns I had during the renovation/build phase. I felt she was just as invested in the outcome as me! I can truly say Alana played a pivotal role in creating something that I'm happy to now call home.",
    rating: 5,
    date: "4 weeks ago",
  },
  {
    id: 2,
    name: "Lindsay Ruster",
    role: "Client",
    project: "Brazilian-Influenced Home Design",
    text: "Alana was fantastic to work with in helping me design my home. I asked her to bring a Brazilian influence and I love the way she incorporated this theme. I also appreciated that she took us around to various furniture stores to find exactly what we were looking for and sending links to source everything. She also provided options for items we wanted to add to our home over time. Overall she was professional and created a beautiful home for us to enjoy.",
    rating: 5,
    date: "3 months ago",
  },
  {
    id: 3,
    name: "Brad Snell",
    role: "Client",
    project: "Apartment Renovation",
    text: "We were referred to Alana by a work colleague who was very happy with the work she did for him. Our apartment was tired, dated and in need of a refresh. We had no idea what could be done to improve things but really needed to understand us, our lifestyle and what would work well for us. Alana took the time to listen to the project to lift the result from nice to spectacular. We collaborated well as we went through the process and we were looking to achieve. The end result is a beautiful apartment that we love living in. One thing we really appreciated was the time Alana took to understand us, our lifestyle and what would work well for us. We are very happy with the end result and highly recommend Alana as a designer with a great mix of flair and practicality.",
    rating: 5,
    date: "7 months ago",
  },
  {
    id: 4,
    name: "Matilda M",
    role: "Client",
    project: "Living Room Redesign",
    text: "Our living room has an awkward recess area, making it tricky to get the right furniture and accessories. It was a daunting task to get all the right furniture and accessories who understood our taste and had brilliant ideas. Alana designed a beautiful space that was difficult to fill. She was fantastic at helping us searching for the right furnitures, suitable accessories, art works and plants as well as creating an efficient layout, often at discounted prices or with sales promotion. We are very happy with the final layout and glad that we did not spent the same money DIY. Aesthetically, but also been a colossal waste of money.",
    rating: 5,
    date: "2 years ago",
  },
  {
    id: 5,
    name: "Dorothy Hasley",
    role: "Client",
    project: "Apartment Redesign",
    text: "When I relocated to Perth a year ago, downsized and knew I would need to buy furniture, I was lucky to find Alana. Alana is a lovely mix of a 'professional' and a 'friend'. She listened to what I wanted, made suggestions, and was happy to work with some of my existing pieces. I love her energy and, in a way, I'm sad the project is finished. My apartment has been transformed into a warm and lovely home which everyone admires.",
    rating: 5,
    date: "1 year ago",
  },
  {
    id: 6,
    name: "Brendan Coffey",
    role: "Business Owner, TLCU",
    project: "Office Space Design",
    text: "Alana came highly recommended to our business. The scope was to transform our very bland commercial space into a warm and inviting environment for our clients as well as creating an efficient working space for our administration team. I couldn't have imagined the vision that Alana had when she first walked through our door. As the vision came to life, we were all in awe. Alana is professional, competent, has amazing attention to detail and has an out of this world positive attitude. She's an absolute delight to work with.",
    rating: 5,
    date: "3 years ago",
  },
]

const reviewSummaries = [
  "Exceptional attention to detail in every design aspect",
  "Transformed outdated spaces into modern, functional areas",
  "Personalized approach that understands client lifestyles",
  "Professional yet friendly service throughout projects",
  "Creative solutions for challenging spaces",
  "Consistently exceeds client expectations",
]

export default function GoogleStyleReviews() {
  const [visibleReviews, setVisibleReviews] = useState(2) // Show only 2 reviews initially
  const totalReviews = 15868
  const averageRating = 4.9

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
      ))
  }

  const loadMore = () => {
    // Navigate to reviews page
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Ray Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent animate-pulse"></div>

      <div className="container-custom max-w-4xl relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-white">What our clients say</h2>

        <div className="flex items-center gap-4 mb-8">
          <div className="text-4xl font-bold text-white">{averageRating}</div>
          <div>
            <div className="flex mb-1">{renderStars(Math.round(averageRating))}</div>
            <div className="text-gray-400">{totalReviews.toLocaleString()} satisfied clients</div>
          </div>
        </div>

        {/* AI Summary */}
        <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg mb-8">
          <div className="font-medium mb-2 text-white">Client Experience Summary</div>
          <div className="text-gray-400 mb-2">Based on {testimonials.length} detailed testimonials</div>
          <div className="text-gray-300 mb-4">
            Our clients consistently praise our attention to detail, personalized approach, and ability to transform
            spaces while understanding their unique lifestyles and needs.
          </div>
          <Link href="/reviews" className="text-blue-500 hover:underline">
            Read all testimonials
          </Link>
        </div>

        {/* Review Highlights (Tabbed Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reviewSummaries.slice(0, 4).map((summary, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg">
              <div className="flex mb-2">{renderStars(5)}</div>
              <p className="text-white">{summary}</p>
            </div>
          ))}
        </div>

        {/* Individual Testimonials (First 2) */}
        <div className="space-y-6 mb-8">
          {testimonials.slice(0, visibleReviews).map((review) => (
            <div key={review.id} className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-white">{review.name}</h3>
                  {review.role && <p className="text-gray-400 text-sm">{review.role}</p>}
                </div>
                <div className="text-gray-400 text-sm">{review.date}</div>
              </div>
              <div className="flex mb-2">{renderStars(review.rating)}</div>
              {review.project && <p className="font-medium text-white mb-2">{review.project}</p>}
              <p className="text-gray-300 mb-2">
                {review.text.length > 200 ? `${review.text.substring(0, 200)}...` : review.text}
                {review.text.length > 200 && (
                  <Link href={`/reviews/${review.id}`} className="text-blue-500 hover:underline ml-1">
                    Read more
                  </Link>
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={loadMore} className="text-blue-500 hover:underline mb-8">
            Tap to view all reviews
          </button>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Share your experience
          </Link>
        </div>
      </div>
    </section>
  )
}

