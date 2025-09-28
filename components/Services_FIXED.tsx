import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Plane, MapPin, Calendar, Users, Shield, Package, Globe, FileText, Ship, ExternalLink } from 'lucide-react'

const services = [
  {
    icon: Ship,
    title: 'Cruise Holidays',
    description: 'Cruise specialists crafting luxury ocean voyages, intimate river journeys, and expedition adventures. From premium to boutique experiences, we create your perfect floating escape.',
    color: '#0075CC'
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'Expertly designed itineraries featuring guided narration, convenient luggage handling, and exceptional value for money travel. Perfect for those seeking big or small group worry-free exploration.',
    color: '#ED7D31'
  },
  {
    icon: Calendar,
    title: 'Escorted Tours',
    description: 'Expertly designed itineraries featuring professional narration, convenient luggage handling, and exceptional value for money group travel. Perfect for groups big or small seeking worry-free exploration.',
    color: '#FFC000'
  },
  {
    icon: Plane,
    title: 'Air and Land',
    description: 'Complete travel solutions combining flights, accommodations and more. As standalone options or combined - We offer varying service levels tailored for your budget and optimal travel experience.',
    color: '#0075CC'
  },
  {
    icon: MapPin,
    title: 'Independent Travel',
    description: 'Semi-independent tours and custom itinerary building. Expert guidance with freedom to explore - perfectly balanced travel experiences crafted for your style.',
    color: '#ED7D31'
  },
  {
    icon: Shield,
    title: 'Travel Protection',
    description: 'Flexible protection plans safeguarding your travel investment. From trip cancellation to medical emergencies - complete peace of mind.',
    color: '#FFC000'
  },
  {
    icon: Globe,
    title: 'Visa Assistance',
    description: 'Navigate country specific visa requirements with ease through our expert guidance, support service, and access to reputable Visa Service Providers.',
    color: '#0075CC'
  },
  {
    icon: FileText,
    title: 'Document Preparation & Delivery',
    description: 'Complete document handling - electronic and hard copy. Secure delivery or local meetups for complex itineraries.',
    color: '#ED7D31'
  }
]

export default function Services() {
  return (
    <div className="relative overflow-hidden">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <Card 
              key={index} 
              className="group bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
              style={{
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Clean top border accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-[16px]"
                style={{ backgroundColor: service.color }}
              ></div>
              
              <CardContent className="p-6 lg:p-8 text-center relative">
                {/* Clean Card Icon with subtle shadow */}
                <div 
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: service.color }}
                >
                  <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                
                {/* Service Title - Updated to match OurValues styling */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Service Description - Updated to match OurValues styling */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}