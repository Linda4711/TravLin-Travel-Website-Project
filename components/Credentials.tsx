import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Award, Trophy, Star, Users, Check, Ship, Globe, Shield } from 'lucide-react'
import SectionDivider from './SectionDivider'

const credentials = [
  {
    id: 1,
    title: 'ATIA Travel Tick Accredited',
    organization: 'Australian Travel Industry Association',
    year: '2025',
    description: 'ATIA accreditation protects your travel dreams. We meet rigorous industry standards ensuring every booking is secure with complete peace of mind.',
    logoAlt: 'ATIA Accredited Member',
    icon: Shield,
    category: 'accreditation',
    featured: true
  },
  {
    id: 2,
    title: 'NTIA 2022 winner - People\'s Choice Best Agency',
    organization: 'National Travel Industry Association',
    year: '2022',
    description: 'Award-winning Best Agency, recognised as the true people\'s choice. Our client entry was selected from over 11,000 public votes.',
    logoAlt: 'Travel Industry Excellence Award',
    icon: Trophy,
    category: 'award',
    featured: true
  },
  {
    id: 3,
    title: 'CLIA Master Cruise Consultant',
    organization: 'CLIA Certification',
    year: '2025',
    description: 'Certified cruise masters with the highest level accreditation. Top 50 Australia ranking. Cruising is more than business—it\'s our passion.',
    logoAlt: 'CLIA Master Cruise Consultant 2025',
    icon: Trophy,
    category: 'certification',
    featured: false
  },
  {
    id: 4,
    title: 'CLIA Australasia Member',
    organization: 'CLIA Australasia',
    year: '2025',
    description: 'Active CLIA Australasia membership connecting us with industry leaders and latest cruise innovations. We attend every annual conference across Australia.',
    logoAlt: 'CLIA Australasia 2025 Travel Agent Member',
    icon: Ship,
    category: 'membership',
    featured: false
  },
  {
    id: 5,
    title: 'Travellers Choice Member',
    organization: 'Travellers Choice',
    year: '2025',
    description: 'Proud members of an award-winning premium travel professional network. Four consecutive NTIA Best Non-Branded Agency Network awards: 2021-2024.',
    logoAlt: 'Travellers Choice Member',
    icon: Star,
    category: 'membership',
    featured: true
  },
  {
    id: 6,
    title: 'Quality Business Winner 2024',
    organization: 'Quality Business Awards',
    year: '2024',  
    description: 'Awarded exceptional (95%+) quality rating for outstanding business excellence. Recognized as Frankston\'s Best Travel Agent for 2024.',
    logoAlt: 'Quality Business Winner 2024',
    icon: Award,
    category: 'award',
    featured: true
  },
  {
    id: 7,
    title: 'IATA TIDS Agent',
    organization: 'International Air Transport Association',
    year: '2025',
    description: 'Accredited TIDS (Travel Industry Designator Service ) agent providing secure and professional booking services across global airline networks.',
    logoAlt: 'IATA TIDS Agent Accreditation',
    icon: Globe,
    category: 'accreditation',
    featured: false
  },
  {
    id: 8,
    title: 'Travel Agent Finder Member',
    organization: 'Travel Agent Finder',
    year: '2025',
    description: 'Proud member of Australia\'s premier travel agent search network, connecting travelers with accredited specialists nationwide.',
    logoAlt: 'Travel Agent Finder - Valued Member',
    icon: Users,
    category: 'membership',
    featured: false
  }
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'award':
      return {
        bg: 'var(--brand-orange)',
        text: 'white',
        glow: 'rgba(237, 125, 49, 0.3)'
      }
    case 'certification':
      return {
        bg: 'var(--brand-blue)',
        text: 'white',
        glow: 'rgba(0, 117, 204, 0.3)'
      }
    case 'accreditation':
      return {
        bg: 'var(--brand-yellow)',
        text: 'var(--gray-800)',
        glow: 'rgba(255, 192, 0, 0.3)'
      }
    case 'membership':
      return {
        bg: 'var(--gray-600)',
        text: 'white',
        glow: 'rgba(108, 117, 125, 0.3)'
      }
    default:
      return {
        bg: 'var(--brand-blue)',
        text: 'white',
        glow: 'rgba(0, 117, 204, 0.3)'
      }
  }
}

export default function Credentials() {
  return (
    <section id="credentials" className="pt-12 pb-24 relative overflow-hidden" style={{ backgroundColor: 'var(--gray-50)' }}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-96 h-96 opacity-5" style={{
          background: 'radial-gradient(circle, var(--brand-blue) 0%, transparent 70%)'
        }}></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 opacity-5" style={{
          background: 'radial-gradient(circle, var(--brand-orange) 0%, transparent 70%)'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5" style={{
          background: 'radial-gradient(circle, var(--brand-yellow) 0%, transparent 70%)'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <SectionDivider />
          <h2 className="section-heading">
            Our Credentials
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--gray-600)' }}>
            Recognized through industry awards, professional memberships,<br />
            and certifications for delivering exceptional travel service.
          </p>
        </div>

        {/* Unified Grid - All Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => {
            const categoryStyle = getCategoryColor(credential.category)
            return (
              <Card 
                key={credential.id}
                className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden group"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge 
                    className="text-xs font-bold px-3 py-1"
                    style={{ 
                      backgroundColor: categoryStyle.bg,
                      color: categoryStyle.text,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {credential.category}
                  </Badge>
                </div>

                {/* Glow Effect on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${categoryStyle.glow} 0%, transparent 50%)`
                  }}
                ></div>
                
                <CardContent className="p-8 relative">
                  {/* Logo and Icon Section - Side by Side */}
                  <div className="flex items-center justify-center mb-6 space-x-4">
                    {/* Professional Logo Placeholder Container */}
                    <div className="relative">
                      {/* Glow background */}
                      <div 
                        className="absolute inset-0 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ backgroundColor: categoryStyle.bg }}
                      ></div>
                      
                      {/* Professional Logo Placeholders - Different shapes per requirement */}
                      <div 
                        className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm flex items-center justify-center"
                        style={{ 
                          // ATIA & NTIA = Landscape rectangles
                          width: (credential.id === 1 || credential.id === 2) ? '140px' : 
                                 // Travellers Choice = Rectangle  
                                 credential.id === 5 ? '130px' :
                                 // CLIA, Winner 2024, TIDS, Travel Agent Finder = Squares for round logos
                                 '100px',
                          height: (credential.id === 1 || credential.id === 2) ? '90px' : 
                                  credential.id === 5 ? '85px' :
                                  '100px',
                          borderColor: categoryStyle.bg + '40'
                        }}
                      >
                        <div className="text-center p-3">
                          <div 
                            className="font-medium mb-1 text-xs leading-tight"
                            style={{ 
                              color: categoryStyle.bg,
                              fontSize: (credential.id === 1 || credential.id === 2 || credential.id === 5) ? '11px' : '10px'
                            }}
                          >
                            {/* Logo Names */}
                            {credential.id === 1 && "ATIA Logo"}
                            {credential.id === 2 && "NTIA Logo"}
                            {credential.id === 3 && "CLIA Logo"}
                            {credential.id === 4 && "CLIA Member"}
                            {credential.id === 5 && "Travellers Choice"}
                            {credential.id === 6 && "Winner 2024"}
                            {credential.id === 7 && "TIDS Logo"}
                            {credential.id === 8 && "Travel Agent Finder"}
                          </div>
                          <div 
                            className="text-xs opacity-60"
                            style={{ color: categoryStyle.bg }}
                          >
                            Logo Placeholder
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Icon alongside logo */}
                    <div 
                      className="w-12 h-12 flex items-center justify-center shadow-lg flex-shrink-0"
                      style={{ backgroundColor: categoryStyle.bg }}
                    >
                      <credential.icon className="w-6 h-6" style={{ color: categoryStyle.text }} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-3 leading-tight" style={{ color: 'var(--gray-800)' }}>
                      {credential.title}
                    </h4>
                    
                    <div className="flex items-center justify-center mb-4 text-sm" style={{ color: 'var(--gray-500)' }}>
                      <span>{credential.organization}</span>
                    </div>
                    
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                      {credential.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>


      </div>
    </section>
  )
}