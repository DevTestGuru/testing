import React from "react";

type FeatureType = {
  title: string;
  description: string;
};

const features: FeatureType[] = [
  {
    title: "📊 Real-time Market Tracking",
    description:
      "Stay up-to-date with live crypto prices, volume, and market cap across thousands of tokens.",
  },
  {
    title: "📈 Advanced Charting & Indicators",
    description:
      "Use interactive charts with customizable indicators to perform deep technical analysis.",
  },
  {
    title: "🧠 AI-Powered Insights",
    description:
      "Get trend predictions and portfolio suggestions with the help of AI-powered analytics.",
  },
];

const ProductDetails: React.FC = () => (
  <>
    <section className="description">
      ChainSight is a powerful crypto market analysis tool designed to help
      investors, analysts, and enthusiasts make data-driven decisions. Track
      trends, monitor coins, and gain actionable insights—all in one place.
    </section>

    <section className="features-section">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        {features.map((feature: FeatureType, index: number) => (
          <div key={index} className="feature-item">
            <h1>{feature.title}</h1>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    <footer className="footer">
      <p>
        Contact us at:{" "}
        <a href="mailto:support@example.com">support@example.com</a>
      </p>
    </footer>
  </>
);

export default ProductDetails;
