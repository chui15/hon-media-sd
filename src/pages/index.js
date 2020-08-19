import React from 'react';
import Card from '../components/Card';
import Contact from '../components/Contact';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import ContactImage from '../svg/Conversation';
import HeroImage from '../svg/HeroImage2';
import ProgressImage from '../svg/ProgressImage';
import TeamworkImage from '../svg/TeamworkImage';
import Steven from './steven.jpg';
import Isabelle from './isabelle.jpg';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40" id="top">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Our Goal</h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            To make a better San Diego by providing businesses with high quality Consulting and
            Marketing services they need to grow.
          </p>
        </div>
        <div className="lg:w-1/2">
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
          <p className="mt-8 text-xl font-light leading-relaxed">
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
          <p className="mt-8 text-xl font-light leading-relaxed">
            We use a Human-Centered Design and Data-Driven approach to find the right problem and
            deliver a creative solution that drives growth.
          </p>
        </div>
      }
      secondarySlot={<ProgressImage />}
    />
    <section id="about" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Team</h2>
        <div className="flex flex-col sm:flex-row mt-10 lg:px-33">
          <div className="w-full md:w-1/2">
            <StatsBox image={Steven} secondaryText="Steven Phung, Co-Founder/CEO" />
            <p className="mt-4">
              Steven is a UC San Diego graduate who studied International Business & Design
              experienced in Digital Marketing, Design, and Product Management.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <StatsBox image={Isabelle} secondaryText="Isabelle Hwang, Co-Founder/CEO" />
            <p className="mt-4">
              Isabelle is a UC San Diego graduate who studied Communication & Business with an
              emphasis in Marketing experienced in Marketing, Client Acquisition, and Management
              Consulting.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-3xl">Consultation</p>
              <p className="mt-5 text-lg">
                We do a thorough analysis of your business, your customers, the market, and the
                economy to find the best solution for your business. We deliver a recommendation
                through a presentation and a final report showing how we came to our conclusion.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-3xl">Implementation</p>
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
              <p className="font-semibold text-3xl">Partnership</p>
              <p className="mt-5 text-lg">
                We will manage your growth. After setting a timeframe that works for you, our team
                will provide high-touch servicing for your marketing needs. Whether it’s developing
                a new strategy, launching campaigns, or creating the assets, we will do what it
                takes for you to accelerate your growth.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40 pb-4">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center text-2xl">
          What Our Clients Say
        </LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
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
        <section id="contact" className="container mx-auto my-30">
          <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
          <p className="mt-8 text-xl font-light">
            Tell us about your businesses goals and we’ll tell you what we can do for you. Feel free
            to ask us any questions.
          </p>
          <Contact />
        </section>
      }
      secondarySlot={<ContactImage />}
    />
  </Layout>
);
