import {
  MdKeyboardVoice,
  MdPalette,
  MdEnergySavingsLeaf,
} from "react-icons/md";

const features = [
  {
    icon: <MdKeyboardVoice />,
    title: "Voice Control",
    desc: "Works with Alexa, Google Home, or Siri.",
  },
  {
    icon: <MdPalette />,
    title: "Dynamic Colors",
    desc: "Choose from 16M+ hues or custom scenes.",
  },
  {
    icon: <MdEnergySavingsLeaf />,
    title: "Eco Mode",
    desc: "Save up to 40% more energy than regular lamps.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container features__inner">
        {features.map((f) => (
          <div key={f.title} className="feature-card">
            <div className="feature-card__icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
