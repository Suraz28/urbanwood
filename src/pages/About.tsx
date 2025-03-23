import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BaseLayout from '@/components/layouts/BaseLayout';

const About = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?q=80&w=2000&auto=format&fit=crop" 
            alt="UrbanWood Furniture team" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl p-6">
              <h1 className="text-3xl md:text-5xl text-white font-display font-semibold mb-4">Our Story</h1>
              <p className="text-lg opacity-90">
                Crafting beautiful furniture with passion and purpose since 2005.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl font-display font-semibold mb-6">Transforming Spaces, Enhancing Lives</h2>
          </div>
          
          <p className="text-lg text-primary/80 leading-relaxed mb-6">
            At UrbanWood Furniture, we believe that beautiful, well-crafted furniture has the power to transform 
            spaces and enhance the quality of life. Our mission is to create furniture that combines timeless 
            design, exceptional craftsmanship, and sustainable practices.
          </p>
          
          <p className="text-lg text-primary/80 leading-relaxed mb-6">
            We are committed to sourcing the finest materials, partnering with skilled artisans, and utilizing 
            innovative manufacturing techniques to create pieces that stand the test of time. Our dedication to 
            quality and attention to detail ensures that each piece of furniture we create is not only visually 
            stunning but also functional and durable.
          </p>
          
          <p className="text-lg text-primary/80 leading-relaxed">
            Beyond creating beautiful furniture, we are passionate about providing exceptional customer service 
            and building lasting relationships with our clients. We take pride in helping our customers find the 
            perfect pieces for their spaces and ensuring a seamless experience from selection to delivery.
          </p>
        </div>
        
        {/* Values Section */}
        <div className="bg-secondary/20 py-16 px-6 rounded-xl mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl font-display font-semibold">What Drives Us Forward</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Quality</h3>
                <p className="text-primary/70">
                  We never compromise on quality. From material selection to final assembly, we ensure every piece meets our high standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Sustainability</h3>
                <p className="text-primary/70">
                  We are committed to sustainable practices, using responsibly sourced materials and minimizing our environmental impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Innovation</h3>
                <p className="text-primary/70">
                  We constantly explore new designs, materials, and techniques to create furniture that meets contemporary needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl font-display font-semibold mb-4">Meet The People Behind UrbanWood</h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              A passionate group of designers, craftspeople, and furniture enthusiasts dedicated to creating exceptional pieces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'David Chen',
                title: 'Founder & Creative Director',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop',
              },
              {
                name: 'Sarah Johnson',
                title: 'Head of Design',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop',
              },
              {
                name: 'Michael Torres',
                title: 'Master Craftsman',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop',
              },
              {
                name: 'Emily Wong',
                title: 'Customer Experience Director',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 rounded-full overflow-hidden mx-auto w-48 h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-primary/60">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-primary rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
                  Let's Create Your Dream Space Together
                </h2>
                <p className="text-white/80 mb-8">
                  Browse our collections or get in touch with our design consultants to start your journey.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/shop">
                    <Button variant="secondary">
                      Shop Collections
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="text-black-500 border-white hover:bg-white/10 hover:text-white">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
                alt="Modern living room"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;