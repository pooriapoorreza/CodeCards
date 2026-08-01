import { useState } from "react";

const content = [
  {
    name: "JavaScript",
    summary: "JavaScript brings life to the web",
    details:
      "The core language of web development. It runs in every browser and powers interactivity on websites, from simple animations to complex single-page applications. Paired with HTML and CSS, and frameworks like React, Vue, or Angular, JavaScript is essential for anyone pursuing front-end or full-stack web development. It's also used on the server side through Node.js, making it a genuinely full-stack language.",
  },
  {
    name: "Python",
    summary: "Simple syntax, powerful for AI and data",
    details:
      "The language for artificial intelligence, machine learning, data science, and automation. Its clean, readable syntax makes it beginner-friendly, while powerful libraries like TensorFlow, PyTorch, Pandas, and NumPy make it the industry standard for AI research and data analysis. It's also widely used for scripting, backend development (with frameworks like Django and Flask), and academic research.",
  },
  {
    name: "Java",
    summary: "Write once, run anywhere",
    details:
      "A robust, object-oriented language known for its portability (write once, run anywhere). It's the primary language for native Android app development and is heavily used in large-scale enterprise systems, banking software, and backend services where stability and scalability matter. Big companies rely on Java for mission-critical systems because of its maturity and strong ecosystem.",
  },
  {
    name: "C++",
    summary: "Speed and control, built for performance",
    details:
      " A high-performance language used where speed and control over hardware are critical. It's the backbone of game development (engines like Unreal Engine are built in C++), real-time systems, robotics, embedded systems, and performance-critical software. It gives developers low-level memory control while still supporting object-oriented programming.",
  },
  {
    name: "!",
    summary: "We can think of props as the component API",
    details:
      "A robust, object-oriented language known for its portability (write once, run anywhere). It's the primary language for native Android app development and is heavily used in large-scale enterprise systems, banking software, and backend services where stability and scalability matter. Big companies rely on Java for mission-critical systems because of its maturity and strong ecosystem.",
  },
];
export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab
          item={content.at(0)}
          num={0}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <Tab
          item={content.at(1)}
          num={1}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <Tab
          item={content.at(2)}
          num={2}
          activeTab={activeTab}
          onClick={setActiveTab}
        />

        <Tab
          item={content.at(3)}
          num={3}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <Tab
          item={content.at(4)}
          num={4}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </div>

      {activeTab <= 3 ? (
        <TabContent
          item={content.at(activeTab)}
          key={content.at(activeTab).summary}
        />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

function Tab({ item, num, activeTab, onClick }) {
  return (
    <>
      <button
        className={activeTab === num ? "tab active" : "tab"}
        onClick={() => onClick(num)}
      >
        {item.name}
      </button>
    </>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes((likes) => likes + 1);
  }

  function handleTripleInc() {
    // setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);

    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
    console.log(likes);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
