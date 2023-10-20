import { useState } from "react";

const accordionsArr = [
  {
    id: 1,
    header: "What is Webflow and why is it the best website builder?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    header: "What is your favorite template from BRIX Templates?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    header: "How do you clone a Webflow Template from the Showcase?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    header: "Why is BRIX Templates the best Webflow agency out there?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function App() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  function toggleChange(index) {
    if (index === activeAccordion) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  }

  return (
    <div className="container">
      {accordionsArr.map((accordion, index) => {
        return (
          <button
            key={accordion.id}
            className={`accordion-card ${
              activeAccordion === index ? "active" : ""
            }`}
            onClick={() => {
              toggleChange(index);
            }}
          >
            <div className="row">
              <h4>{accordion.header}</h4>
              <div className="icon">
                <i
                  className={`fa-solid fa-chevron-${
                    activeAccordion === index ? "down" : "right"
                  }`}
                ></i>
              </div>
            </div>
            {activeAccordion === index && (
              <p className="description">{accordion.description}</p>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default App;
