"use client";

import { useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from 'next/link';

const legalLinks = [
  { href: "/Pages/Additional/Private_Policy", text: "Privacy Policy" },
  { href: "/Pages/Additional/TermsandCondition", text: "Terms and Condition" },
  { href: "/Pages/Additional/Refund_Page", text: "Refund & Cancellation Policy" },
  
];

const usefulLinks = [
  { href: "/our-courses", text: "Our Courses" },
  { href: "/our-selection", text: "Our Selection" },
  { href: "/help", text: "Help" }
];

const contactInfo = [
  { iconClass: "fa-home", text: "B.No 958, Pocket C Gurugram, Haryana India" },
  { iconClass: "fa-envelope", text: "forumde127@gmail.com" },
  { iconClass: "fa-phone", text: "+91 7870970617" },
  { iconClass: "fa-print", text: "+91 9801830173" }
];

export function Footer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
     
    }
  }, []);

  return (
    <>
      <footer className=" p-5 text-center text-lg-start bg-gray-200 text-gray-600 w-80% align-bottom flex-col">
        <section className="bg-gray-200 py-8">
          <div className="container mx-auto text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h1 className="text-2xl font-bold mb-4 text-black">ForumDE</h1>
                <h5 className="text-xl font-semibold">Simplifying Technology For You.</h5>
                <h6 className="mt-2">
                  ForumDE has redefined, revolutionized, and simplified the way students learn technology whether they are a college student or working professional. Today, it’s one of the top websites and institutions when it comes to imparting quality content, guidance, and teaching with regards to technology.
                </h6>
              </div>

              <div>
                <h5 className="text-lg font-bold mb-3 mt-3 text-black space-y-2">LEGAL</h5>
                {legalLinks.map((link, index) => (
                  <p key={index}>
                    <a href={link.href} >
                      <a className="text-gray-600 hover:text-gray-800 font-semibold  space-y-2">{link.text}</a>
                    </a>
                  </p>
                ))}
              </div>

              <div>
                <h5 className="text-lg font-bold mb-4 text-black">Useful links</h5>
                {usefulLinks.map((link, index) => (
                  <p key={index}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-gray-600 hover:text-gray-800 font-semibold">{link.text}</a>
                    </Link>
                  </p>
                ))}
              </div>

              <div className="text-black">
                <h5 className="text-lg font-bold mb-4">Contact</h5>
                {contactInfo.map((info, index) => (
                  <p key={index}>
                    <i className={`fas ${info.iconClass} mr-2 font-bold`}></i>{info.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 py-4">
          <div className="container mx-auto text-center">
            <h5 className="text-lg font-bold mb-4">Follow Us</h5>
            <div className="flex justify-center space-x-4">
              <a href="https://www.youtube.com/@forum_de" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube text-red-600 text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/forumde/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-blue-700 text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/forum_de_team?igsh=MXBldW5uOGwxbTlkeA==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-pink-500 text-2xl"></i>
              </a>
              <a href="https://www.facebook.com/Forum.DE.Team" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-blue-600 text-2xl"></i>
              </a>
              <a href="https://discord.gg/s2CjQAJVnZ" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord text-blue-900 text-2xl"></i>
              </a>
            </div>
          </div>
        </section>
        <div className="bg-gray-200">
          <div className="text-center py-4 text-lg" style={{ color: "black" }}>
            © 2024 Copyright :
            <Link href="https://forumde.in/" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800 font-bold ml-2">ForumDE</a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
