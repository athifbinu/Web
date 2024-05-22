import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  const sections = [
    {
      title: "Solutions",
      items: [
        { name: "Marketing", link: "#" },
        { name: "Analytics", link: "#" },
        { name: "Commerce", link: "#" },
        { name: "Data", link: "#" },
        { name: "Cloud", link: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "Pricing", link: "#" },
        { name: "Documentation", link: "#" },
        { name: "Guides", link: "#" },
        { name: "API Status", link: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Jobs", link: "/careers" },
        { name: "Admin", link: "/Dashboard" },
        { name: "Partners", link: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Claims", link: "#" },
        { name: "Privacy", link: "#" },
        { name: "Terms", link: "#" },
        { name: "Policies", link: "#" },
        { name: "Conditions", link: "#" },
      ],
    },
  ];

  const items = [
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/",
    },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
    { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
    { name: "Github", icon: FaGithub, link: "https://github.com/" },
  ];

  return (
    <div>
      <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase pt-2">{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i} className="py-1 text-gray-500 hover:text-white">
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p className="py-4">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                className="w-full p-2 mr-4 rounded-md mb-4"
                type="email"
                placeholder="Enter email.."
              />
              <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            {items.map((x, index) => (
              <a
                key={index}
                href={x.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <x.icon className="hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
