
import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';

const PrivacyPolicy = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last Updated: March 15, 2023</p>
            
            <h2>Introduction</h2>
            <p>
              At UrbanWood Furniture, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our 
              website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2>The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that 
              person can be identified. We may collect, use, store and transfer different kinds of personal data 
              about you which we have grouped together as follows:
            </p>
            <ul>
              <li>Identity Data: includes first name, last name, username or similar identifier</li>
              <li>Contact Data: includes billing address, delivery address, email address and telephone numbers</li>
              <li>Financial Data: includes payment card details</li>
              <li>Transaction Data: includes details about payments to and from you and other details of products you have purchased from us</li>
              <li>Technical Data: includes internet protocol (IP) address, your login data, browser type and version</li>
              <li>Profile Data: includes your username and password, purchases or orders made by you, your preferences</li>
              <li>Usage Data: includes information about how you use our website and products</li>
              <li>Marketing and Communications Data: includes your preferences in receiving marketing from us and our third parties</li>
            </ul>
            
            <h2>How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>To register you as a new customer</li>
              <li>To process and deliver your order</li>
              <li>To manage our relationship with you</li>
              <li>To enable you to participate in a promotion or survey</li>
              <li>To administer and protect our business and website</li>
              <li>To deliver relevant website content and advertisements to you</li>
              <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data 
              to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              Email: privacy@urbanwoodfurniture.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default PrivacyPolicy;