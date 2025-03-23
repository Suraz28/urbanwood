
import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';

const TermsOfService = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last Updated: March 15, 2023</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using UrbanWood Furniture's website, you agree to be bound by these Terms of Service and all applicable 
              laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on UrbanWood Furniture's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            
            <h2>3. Ordering and Payment</h2>
            <p>
              When you place an order, you agree to provide current, complete, and accurate purchase information. We reserve the right 
              to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
            </p>
            
            <h2>4. Shipping and Delivery</h2>
            <p>
              Shipping and delivery times are estimates only and cannot be guaranteed. We are not liable for any delays in shipments.
              For larger furniture items, you may be contacted to schedule a delivery appointment.
            </p>
            
            <h2>5. Returns and Refunds</h2>
            <p>
              You may return items within 30 days of delivery for a full refund. The item must be in its original condition and packaging.
              Custom-made or personalized items cannot be returned unless defective.
            </p>
            
            <h2>6. Product Descriptions</h2>
            <p>
              We attempt to be as accurate as possible in our product descriptions. However, we do not warrant that product descriptions or other 
              content on the site are accurate, complete, reliable, current, or error-free.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              UrbanWood Furniture shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages resulting from your 
              use of the website or any products purchased through the website.
            </p>
            
            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify, defend and hold harmless UrbanWood Furniture and its officers, directors, employees, agents and suppliers from and against all 
              losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of these Terms of Service.
            </p>
            
            <h2>9. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at legal@urbanwoodfurniture.com.
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default TermsOfService;