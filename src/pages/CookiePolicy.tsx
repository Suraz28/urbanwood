
import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';

const CookiePolicy = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last Updated: March 15, 2023</p>
            
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
            
            <h2>How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry 
              standard options for disabling cookies without completely disabling the functionality and features they add to the site.
            </p>
            
            <h2>The Cookies We Set</h2>
            <ul>
              <li>
                <strong>Account related cookies:</strong> If you create an account with us, we will use cookies for the management of the signup 
                process and general administration. These cookies will usually be deleted when you log out; however, in some cases, 
                they may remain to remember your site preferences when logged out.
              </li>
              <li>
                <strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents 
                you from having to log in every time you visit a new page. These cookies are typically removed or cleared when you log out 
                to ensure that you can only access restricted features and areas when logged in.
              </li>
              <li>
                <strong>Orders processing related cookies:</strong> This site offers e-commerce or payment facilities and some cookies are 
                essential to ensure that your order is remembered between pages so that we can process it properly.
              </li>
              <li>
                <strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment 
                forms, cookies may be set to remember your user details for future correspondence.
              </li>
              <li>
                <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality 
                to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that 
                this information can be called whenever you interact with a page is affected by your preferences.
              </li>
            </ul>
            
            <h2>Third Party Cookies</h2>
            <p>
              In some special cases, we also use cookies provided by trusted third parties. The following section details which third party 
              cookies you might encounter through this site.
            </p>
            <ul>
              <li>
                This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to 
                understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you 
                spend on the site and the pages that you visit so we can continue to produce engaging content.
              </li>
              <li>
                From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing 
                new features, these cookies may be used to ensure that you receive a consistent experience whilst on the site.
              </li>
            </ul>
            
            <h2>More Information</h2>
            <p>
              Hopefully that has clarified things for you. As was previously mentioned, if there is something that you aren't sure whether you need 
              or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
            </p>
            <p>
              If you are still looking for more information, you can contact us through one of our preferred contact methods:
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

export default CookiePolicy;