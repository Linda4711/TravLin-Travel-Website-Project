import React, { useState, useEffect } from 'react'
import TravLinButton from './TravLinButton'
import { Input } from './ui/input'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send, Globe, Users, Play, ExternalLink, FileText, Cloud, DollarSign, Shield, Heart, Plane, MapIcon } from 'lucide-react'
import { toast } from 'sonner'
//import emailjs from '@emailjs/browser'
import BotProtection, { BotProtectionUtils } from './BotProtection'
// Replaced figma:asset with working URL for deployment
const verticalLogo = 'https://images.unsplash.com/photo-1654538912526-b44d206918c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJ0aWNhbCUyMHRyYXZlbCUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzU4MDA0ODg0fDA&ixlib=rb-4.1.0&q=80&w=200'
import TermsPrivacy from './TermsPrivacy'

interface FooterProps {
  onContactClick?: () => void
  onNavigateToServices?: () => void
  onNavigateToCruises?: () => void
  onNavigateToTravelOptions?: () => void
  onNavigateToStories?: () => void
  onNavigateToAbout?: () => void
  onNavigateToAI?: () => void
  onNavigateToHome?: () => void
  onNavigateToContact?: () => void
}

export default function Footer({ onContactClick, onNavigateToServices, onNavigateToCruises, onNavigateToTravelOptions, onNavigateToStories, onNavigateToAbout, onNavigateToAI, onNavigateToHome, onNavigateToContact }: FooterProps) {
  const [showTermsPrivacy, setShowTermsPrivacy] = useState(false)
  const [footerEmail, setFooterEmail] = useState('')
  const [isFooterSubscribing, setIsFooterSubscribing] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)





  // Mock subscription handler
  const handleFooterSubscribe = async () => {
    console.log('🔄 Footer subscription attempt started')
    
    if (!footerEmail.trim()) {
      toast.error('Please enter your email address')
      return
    }

    if (!agreedToPrivacy) {
      toast.error('Please agree to the privacy policy to continue')
      return
    }

    setIsFooterSubscribing(true)
    
    try {
      // Mock email functionality - replace with real implementation when emailjs is available
      console.log('Newsletter subscription request:', {
        email: footerEmail,
        source: 'Footer',
        timestamp: new Date().toISOString()
      })
      
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('🎉 Thank you for subscribing! You\'ll receive our best travel deals and updates.', {
        description: 'Welcome to the TravLin Travel community!',
        duration: 5000
      })
      
      setFooterEmail('')
      setAgreedToPrivacy(false)
      
    } catch (error) {
      console.error('❌ Footer subscription error:', error)
      toast.error('Subscription failed. Please try again or contact us directly.', {
        description: 'You can also email us directly at hello@travlintravel.com.au',
        duration: 7000
      })
    } finally {
      setIsFooterSubscribing(false)
      console.log('🏁 Footer subscription attempt completed')
    }
  }

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 items-end">
          
          {/* Column 1: About Us */}
          <div>
            <button 
              onClick={onNavigateToHome}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 h-20 w-16 lg:h-24 lg:w-18 flex items-center justify-center mb-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-white/80 text-sm font-medium">TravLin</div>
                <div className="text-white/60 text-sm">Travel</div>
                <div className="text-white/60 text-xs mt-1">Logo</div>
              </div>
            </button>
            <h4 
              className="text-sm font-semibold text-white mb-2 transition-colors duration-300 cursor-pointer" 
              style={{ 
                color: 'white',
                '--hover-color': '#ED7D31'
              } as React.CSSProperties}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ED7D31'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; }}
            >
              ABOUT US
            </h4>
            <p className="text-gray-300 text-xs leading-tight">
              Creating extraordinary travel experiences that transform perspectives and forge lasting 
              connections across cultures and continents for over 19 years. Founded by Linda Forster, 
              we specialize in all forms of cruise holiday. Let us inspire your wanderlust!
            </p>
          </div>
          
          {/* Column 2: Quick Links & Subscribe */}
          <div>
            {/* QUICK LINKS Section */}
            <h4 
              className="text-sm font-semibold text-white mb-2 transition-colors duration-300 cursor-pointer" 
              style={{ 
                color: 'white',
                '--hover-color': '#ED7D31'
              } as React.CSSProperties}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ED7D31'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; }}
            >
              QUICK LINKS
            </h4>
            <p className="text-xs text-gray-300 leading-tight mb-4">
              <span onClick={onNavigateToHome} className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Home</span><br />
              <span onClick={onNavigateToAbout} className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">About Us</span><br />
              <span onClick={onNavigateToCruises} className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Cruises</span><br />
              <span onClick={onNavigateToTravelOptions} className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Travel Options</span><br />
              <span onClick={onNavigateToStories} className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">TravLin Stories</span><br />
              <span onClick={onNavigateToContact} className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Contact us</span>
            </p>

            {/* Combined SUBSCRIBE title and description */}
            <p className="text-xs text-gray-300 mb-2">
              <span className="font-semibold text-yellow-400">SUBSCRIBE</span> - Get exclusive travel deals and inspiration straight into your inbox
            </p>
            
            {/* Line 3: Email input only */}
            <BotProtection />
            <div className="mb-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleFooterSubscribe()}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded text-xs h-8 w-full"
              />
            </div>
            
            {/* Line 4: Send button and privacy checkbox together */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-gray-400">
                <input 
                  type="checkbox" 
                  checked={agreedToPrivacy}
                  onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                  className="rounded border-gray-600 scale-75" 
                />
                <span>I agree to the privacy policy</span>
              </div>
              <div
                onClick={handleFooterSubscribe}
                className="flex-shrink-0 flex items-center justify-center cursor-pointer"
                style={{ 
                  backgroundColor: '#ED7D31', 
                  color: 'white',
                  border: 'none',
                  borderRadius: '0px',
                  padding: '0px',
                  width: '24px',
                  height: '24px',
                  minWidth: '24px',
                  minHeight: '24px',
                  maxWidth: '24px',
                  maxHeight: '24px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  outline: 'none',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d16a28';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ED7D31';
                }}
              >
                {isFooterSubscribing ? (
                  <div className="w-2 h-2 border border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-2 h-2" />
                )}
              </div>
            </div>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h4 
              className="text-sm font-semibold text-white mb-2 transition-colors duration-300 cursor-pointer" 
              style={{ 
                color: 'white',
                '--hover-color': '#ED7D31'
              } as React.CSSProperties}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ED7D31'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; }}
            >
              CONTACT INFO
            </h4>
            
            <div className="text-xs text-gray-300 space-y-1 mb-3">
              <p className="font-medium text-white">PO BOX 7303, Karingal Centre</p>
              <p className="font-medium text-white">KARINGAL VIC 3199 AUSTRALIA</p>
              
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3" style={{ color: '#FFC000' }} />
                <span>www.travlintravel.com.au</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" style={{ color: '#FFC000' }} />
                <span>+61 415 355 851</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" style={{ color: '#FFC000' }} />
                <span>hello@travlintravel.com.au</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FFC000' }}></span>
                <span>24/7 Emergency Travel Support</span>
              </div>
            </div>

            <h5 className="text-xs font-medium text-gray-400 mb-2">TRAVEL RESOURCES</h5>
            <div className="flex space-x-2 mb-3">
              <a href="https://www.passports.gov.au" target="_blank" rel="noopener noreferrer" title="Passport Information" className="w-5 h-5 border border-white/20 text-gray-300 hover:border-blue-400 hover:bg-blue-400 hover:text-white rounded transition-all duration-300 inline-flex items-center justify-center">
                <FileText className="w-2 h-2" />
              </a>
              <a href="https://www.bom.gov.au" target="_blank" rel="noopener noreferrer" title="Weather Information" className="w-5 h-5 border border-white/20 text-gray-300 hover:border-blue-400 hover:bg-blue-400 hover:text-white rounded transition-all duration-300 inline-flex items-center justify-center">
                <Cloud className="w-2 h-2" />
              </a>
              <a href="https://www.xe.com/currencyconverter" target="_blank" rel="noopener noreferrer" title="Currency Converter" className="w-5 h-5 border border-white/20 text-gray-300 hover:border-green-400 hover:bg-green-400 hover:text-white rounded transition-all duration-300 inline-flex items-center justify-center">
                <DollarSign className="w-2 h-2" />
              </a>
              <a href="https://www.smartraveller.gov.au" target="_blank" rel="noopener noreferrer" title="Travel Safety Advice" className="w-5 h-5 border border-white/20 text-gray-300 hover:border-orange-400 hover:bg-orange-400 hover:text-white rounded transition-all duration-300 inline-flex items-center justify-center">
                <Shield className="w-2 h-2" />
              </a>
              <a href="https://www.health.gov.au/health-topics/travel-health" target="_blank" rel="noopener noreferrer" title="Travel Health Information" className="w-5 h-5 border border-white/20 text-gray-300 hover:border-red-400 hover:bg-red-400 hover:text-white rounded transition-all duration-300 inline-flex items-center justify-center">
                <Heart className="w-2 h-2" />
              </a>
              <a href="https://www.dfat.gov.au/geo/" target="_blank" rel="noopener noreferrer" title="Embassy & Consulates" className="w-5 h-5 border border-white/20 text-gray-300 hover:border-purple-400 hover:bg-purple-400 hover:text-white rounded transition-all duration-300 inline-flex items-center justify-center">
                <MapIcon className="w-2 h-2" />
              </a>
            </div>

            <div className="flex space-x-2">
              <a href="https://www.facebook.com/travlintravel" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white p-1.5 rounded-full transition-all duration-300" style={{ '--facebook-blue': '#1877F2' } as React.CSSProperties} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1877F2'; e.currentTarget.style.backgroundColor = '#1877F2'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                <Facebook className="w-3 h-3" />
              </a>
              <a href="https://www.instagram.com/travlintravel" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white hover:border-pink-400 hover:bg-pink-400 p-1.5 rounded-full transition-all duration-300">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="https://www.youtube.com/@travlintravel/videos" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white hover:border-red-500 hover:bg-red-500 p-1.5 rounded-full transition-all duration-300">
                <Youtube className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          {/* Column 4: Let's Go TravLin */}
          <div>
            <h4 
              className="text-sm font-semibold text-white mb-2 transition-colors duration-300 cursor-pointer" 
              style={{ 
                color: 'white',
                '--hover-color': '#ED7D31'
              } as React.CSSProperties}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ED7D31'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; }}
            >
              LET'S GO TRAVLIN
            </h4>
            <p className="text-xs text-gray-300 leading-tight mb-3">
              Ready to start planning your next adventure? Connect TravLin Travel for a personalised travel expertise and professional cruise planning.
              <br /><br />
            </p>
            
            <div className="w-full rounded overflow-hidden border border-blue-500 bg-black relative">
              <iframe
                className="w-full"
                src="https://www.youtube.com/embed/gIkqN3mVNR8?controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=gIkqN3mVNR8&enablejsapi=1"
                title="TravLin Travel Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ 
                  aspectRatio: '16/9',
                  height: '140px'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Copyright Footer */}
        <div className="border-t border-gray-700 mt-6 pt-3 pb-0 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 TravLin Travel. All rights reserved. • Founded by Linda Forster • Powered by Passion</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <button 
              className="hover:text-orange-400 transition-colors duration-300 hover:underline"
              onClick={() => setShowTermsPrivacy(true)}
            >
              Terms & Privacy
            </button>
            <span>•</span>
            <span>Effective 01 Jul 2025</span>
          </div>
        </div>
      </div>

      {/* Terms & Privacy Modal */}
      <TermsPrivacy 
        isOpen={showTermsPrivacy} 
        onClose={() => setShowTermsPrivacy(false)} 
      />
    </footer>
  )
}