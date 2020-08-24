import React from 'react';
import sal from 'sal.js';
import { Helmet } from 'react-helmet';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../components/Button';
import Card from '../components/Card';
import Contact from '../components/Contact';
import CustomerCard from '../components/CustomerCard';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import ContactImage from '../svg/Conversation';
import HeroImage from '../svg/HeroImage2';
import ImplementationImage from '../svg/Implementation';
import MeetingImage from '../svg/Meeting';
import PartnershipImage from '../svg/Partnership';
import ProgressImage from '../svg/ProgressImage';
import TeamworkImage from '../svg/TeamworkImage';
import Christie from './Christie.png';
import Devin from './Devin.png';
import Isabelle from './Isabelle.png';
import Steven from './Steven.png';

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Hon Media</title>
    </Helmet>
    <section className="pt-20 md:pt-40" id="top">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Our Goal</h1>
          <p className="text-xl lg:text-2xl mt-8 lg:mr-12 font-light">
            To make a better San Diego by providing businesses with high quality Consulting and
            Marketing services they need to grow.
          </p>
          <p className="mt-12 mb-12 lg:mt-24 text-xl font-light">
            <AnchorLink href="#services">
              <Button>See Our Services</Button>
            </AnchorLink>
          </p>
        </div>
        <div className="lg:mt-0 lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-50">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business&apos; Growth Strategy
          </h3>
          <p className="mt-8 text-2xl font-light leading-relaxed">
            We specialize in Social Media, Marketing, and Analytics to scale your business.
          </p>
        </div>
      }
      secondarySlot={<TeamworkImage />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Our Method</h3>
          <p className="mt-8 text-2xl font-light leading-relaxed">
            We use a Human-Centered Design and Data-Driven approach to find the right problem and
            deliver a creative solution that drives growth.
          </p>
        </div>
      }
      secondarySlot={<ProgressImage />}
    />
    <section
      id="about"
      className="py-20 lg:pt-32"
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-easing="ease"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Team</h2>
        <div className="mt-16 flex flex-col space-x-8 sm:flex-row mt-10 lg:px-33">
          <div className="w-full h-full md:w-1/4">
            <StatsBox
              image={Steven}
              secondaryText="Steven Phung"
              linkedin="https://www.linkedin.com/in/steven-phung/"
            />
            <p className="text-gray-600 mx-auto px-4 text-lg">Co-Founder/CEO</p>
            <p className="mt-4 mx-6 mb-8 lg:mb-0">
              Steven is a UC San Diego alumni who studied International Business & Design
              experienced in Digital Marketing, Design, and Product Management.
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <StatsBox
              image={Isabelle}
              secondaryText="Isabelle Hwang"
              linkedin="https://www.linkedin.com/in/isabelhwang/"
            />
            <p className="text-gray-600 mx-auto px-4 text-lg">Co-Founder/COO</p>
            <p className="mt-4 mx-6 mb-8 lg:mb-0">
              Isabelle is a UC San Diego alumni who studied Communication & Business with an
              emphasis in Marketing experienced in Marketing, Client Acquisition, and Management
              Consulting.
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <StatsBox
              image={Christie}
              secondaryText="Christie Hui"
              linkedin="https://www.linkedin.com/in/christie-hui/"
            />
            <p className="text-gray-600 mx-auto px-4 text-lg">Web Developer</p>
            <p className="mt-4 mx-6 mb-8 lg:mb-0">
              Christie is a UC San Diego alumni and current student at the University of Colorado
              Boulder pursuing a B.S. in Computer Science experienced in Web Development.
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <StatsBox
              image={Devin}
              secondaryText="Devin Lim"
              linkedin="https://www.linkedin.com/in/devinjacoblim/"
            />
            <p className="text-gray-600 mx-auto px-4 text-lg">Growth Strategist</p>
            <p className="mt-4 mx-6 mb-8 lg:mb-0">
              Devin is a UCLA alumni who studied Entrepreneurship and Geospatial Information Systems
              and Technology. He is experienced in Business Development, Partner Development, Brand
              Strategy, and Growth Strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      id="services"
      className="py-20 lg:pb-40 lg:pt-32"
      data-sal="slide-up"
      data-sal-easing="ease"
      data-sal-delay="100"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-3xl">
                <MeetingImage className="text-6xl mx-auto mb-4 self-center" />
                Consultation
              </p>
              <p className="mt-5 text-lg">
                We do a thorough analysis of your business, your customers, the market, and the
                economy to find the best solution for your business. We deliver a recommendation
                through a presentation and a final report showing how we came to our conclusion.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-3xl">
                <ImplementationImage className="text-6xl mx-auto mb-4 self-center" />
                Implementation
              </p>
              <p className="mt-5 text-lg">
                We will create the assets you need to tell your story with Video, Photo, Copy and
                Design. We will connect you with the tools you need to manage your own growth. We
                can also assist you with Search Engine Optimization, A/B testing, Paid Social, and
                Influencer Marketing.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-3xl">
                <PartnershipImage className="text-6xl mx-auto mb-4 self-center" />
                Partnership
              </p>
              <p className="mt-5 text-lg">
                We will manage your growth. After setting a timeframe that works for you, our team
                will be a part of your team. Whether it’s developing a new strategy, launching
                campaigns, or creating the assets, we will do what it takes for you to accelerate
                your growth.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section
      id="testimonials"
      className="py-10 -mt-12 lg:py-32 pb-4"
      data-sal="slide-up"
      data-sal-easing="ease"
      data-sal-delay="100"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row md:-mx-3 mt-12">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <SplitSection
      primarySlot={
        <section
          id="contact"
          className="container mx-auto pt-20 my-30"
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-delay="100"
        >
          <h3 className="mt-12 text-4xl font-semibold">Ready to grow your business?</h3>
          <p className="mt-8 text-xl font-light">
            Tell us about your business goals and we’ll tell you what we can do for you. Feel free
            to ask us any questions.
          </p>
          <Contact />
        </section>
      }
      secondarySlot={<ContactImage className="mt-16 ml-8" />}
    />
  </Layout>
);
