import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Country, State } from "country-state-city";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    message: "",
  });

  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);

  // Populate country list
  useEffect(() => {
    const countries = Country.getAllCountries().map((country) => ({
      name: country.name,
      isoCode: country.isoCode,
    }));
    setCountryList(countries);
  }, []);

  // Update state list based on selected country
  useEffect(() => {
    if (formData.country) {
      const states = State.getStatesOfCountry(formData.country).map(
        (state) => ({
          name: state.name,
          isoCode: state.isoCode,
        })
      );
      setStateList(states);
    } else {
      setStateList([]);
    }
  }, [formData.country]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setFormData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between gap-8">
      <Header />
      <div className="breadcrumbs text-sm pl-8">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex-grow w-4/5 p-8 gap-4 flex flex-col shadow-xl items-center mt-8 mx-auto border border-primary-content rounded-3xl">
        <h1 className="text-5xl font-bold tracking-[1rem] pl-4 after-underline text-accent after:bg-secondary">
          Contact Us
        </h1>
        <form className="flex justify-between gap-16" onSubmit={handleSubmit}>
          {/* Left Section with Contact Info */}
          <div className="left-bit flex flex-col gap-8">
            <div className="west flex flex-col gap-2">
              <h1 className="text-2xl font-bold">SAGE-WEST</h1>
              <h3>Dr. Prasad Shastry</h3>
              <h3>Mrs. Scarlet Daoud</h3>
            </div>
            <div className="east flex flex-col gap-2">
              <h1 className="text-2xl font-bold">SAGE-EAST</h1>
              <h3>Dr. M.H. Kori</h3>
              <h3>Mrs. Aparna Sankarasubramaniam</h3>
            </div>
            <div className="inquiry flex flex-col gap-2">
              <h1 className="text-2xl font-bold">General Inquiry</h1>
              <h3>
                📧{" "}
                <a
                  href="mailto:info@shastryassociates.com"
                  className="link link-hover"
                >
                  info@shastryassociates.com
                </a>
              </h3>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-[20rem] flex flex-col">
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Surname Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Surname</span>
              </label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Enter your surname"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Send Message
            </button>
          </div>

          <div className="w-[20rem] flex flex-col">
            {/* Country Dropdown */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              >
                <option value="">Select Country</option>
                {countryList.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* State Dropdown */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">State</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
                disabled={!formData.country}
              >
                <option value="">Select State</option>
                {stateList.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered h-32"
                placeholder="Enter your message"
                required
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
