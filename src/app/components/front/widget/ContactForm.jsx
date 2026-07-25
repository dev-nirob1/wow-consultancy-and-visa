// components/ContactForm.jsx
"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg("Your message has been sent successfully!");
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-dark/10 p-8">
      <h4>Send Us a Message</h4>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-dark mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="John"
              className="w-full rounded-md border border-dark/20 px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-dark mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Doe"
              className="w-full rounded-md border border-dark/20 px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full rounded-md border border-dark/20 px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+880 1700-000000"
              className="w-full rounded-md border border-dark/20 px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">
            Interested Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-dark/20 px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200"
          >
            <option value="" disabled>
              Select a service...
            </option>
            <option value="admissions">University Admissions</option>
            <option value="visa">Visa Processing</option>
            <option value="scholarships">Scholarships & Funding</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="How can we help you?"
            className="w-full rounded-md border border-dark/20 px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-200"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-white font-medium uppercase tracking-wide px-8 py-3.5 rounded-md hover:bg-primary/90 transition-colors duration-200 disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {successMsg && <p className="text-primary text-sm">{successMsg}</p>}
      </form>
    </div>
  );
};

export default ContactForm;