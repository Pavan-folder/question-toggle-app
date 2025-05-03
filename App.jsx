import React, { useState } from "react";
import "./style1.css";

const FAQItem = () => {
  // This will keep track of the state for each question individually
  const [isOpen, setIsOpen] = useState(null);

  const toggleFAQ = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
    // If the clicked FAQ is already open, it closes, else it opens.
  };

  return (
    <div>
      <div className="back">
        <div className="con">
          <div className="first">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.4W4MetgBd4fU7_7R3qhrEgHaHa&pid=Api&P=0&h=180"
              alt="star icon"
            />
            <h1>FAQs</h1>
          </div>

          <div className="ll">
            <div className="faq-header">
              <p className="ok1">
                What is Frontend Mentor, and how will it help me?
              </p>
              <div className="icons" onClick={() => toggleFAQ(0)}>
                {isOpen === 0 ? (
                  <img
                    src="./src/assets/images/icon-minus.svg"
                    className="minus"
                    alt="minus"
                  />
                ) : (
                  <img
                    src="./src/assets/images/icon-plus.svg"
                    className="plus"
                    alt="plus"
                  />
                )}
              </div>
            </div>
            {isOpen === 0 && (
              <p className="ok">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
              </p>
            )}
          </div>

          <div className="ll">
            <div className="faq-header">
              <p className="ok1">Is Frontend Mentor free?</p>
              <div className="icons" onClick={() => toggleFAQ(1)}>
                {isOpen === 1 ? (
                  <img
                    src="./src/assets/images/icon-minus.svg"
                    className="minus"
                    alt="minus"
                  />
                ) : (
                  <img
                    src="./src/assets/images/icon-plus.svg"
                    className="plus"
                    alt="plus"
                  />
                )}
              </div>
            </div>
            {isOpen === 1 && (
              <p className="ok">
                Yes, Frontend Mentor offers both free and premium coding
                challenges, with the free option providing access to a range of
                projects suitable for all skill levels.
              </p>
            )}
          </div>

          <div className="ll">
            <div className="faq-header">
              <p className="ok1">
                Can I use Frontend Mentor projects in my portfolio?
              </p>
              <div className="icons" onClick={() => toggleFAQ(2)}>
                {isOpen === 2 ? (
                  <img
                    src="./src/assets/images/icon-minus.svg"
                    className="minus"
                    alt="minus"
                  />
                ) : (
                  <img
                    src="./src/assets/images/icon-plus.svg"
                    className="plus"
                    alt="plus"
                  />
                )}
              </div>
            </div>
            {isOpen === 2 && (
              <p className="ok">
                Yes, you can use projects completed on Frontend Mentor in your
                portfolio. It's an excellent way to showcase your skills to
                potential employers!
              </p>
            )}
          </div>

          <div className="ll">
            <div className="faq-header">
              <p className="ok1">
                How can I get help if I'm stuck on a challenge?
              </p>
              <div className="icons" onClick={() => toggleFAQ(3)}>
                {isOpen === 3 ? (
                  <img
                    src="./src/assets/images/icon-minus.svg"
                    className="minus"
                    alt="minus"
                  />
                ) : (
                  <img
                    src="./src/assets/images/icon-plus.svg"
                    className="plus"
                    alt="plus"
                  />
                )}
              </div>
            </div>
            {isOpen === 3 && (
              <p className="ok">
                The best place to get help is inside Frontend Mentor's Discord
                community. There's a help channel where you can ask questions
                and seek support from other community members.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
