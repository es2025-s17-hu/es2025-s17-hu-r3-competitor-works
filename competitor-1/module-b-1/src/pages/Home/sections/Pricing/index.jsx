const FEATURES = {
  tracking: "Real-time sales tracking",
  inventory: "Basic inventory management",
  support: "Priority phone support",
  multiloc: "Multi-location management",
};

function PricingPlan({ name, cost, description, features, highlight }) {
  return (
    <li className="md:w-full">
      <div
        className={
          "w-full border rounded pt-8 px-32 md:px-16 pb-16 mb-4" +
          (highlight
            ? " bg-gradient-to-r from-[#fc255a] via-[#c73597] to-[#8948e0] text-white"
            : "")
        }
      >
        <h3 className="uppercase font-bold mb-8 tracking-wider">{name}</h3>
        <p className="flex items-center justify-center gap-2 mb-8">
          $<span className="text-5xl font-bold">{cost}</span> per month
        </p>
        <p className={highlight ? "" : "text-gray-400"}>{description}</p>
      </div>
      <ul className="w-fit text-left mx-auto list-disc text-gray-600">
        {features
          .map((x) => [x, FEATURES[x]])
          .map(([k, v]) => (
            <li key={k}>{v}</li>
          ))}
      </ul>
      <ul className="w-fit text-left mx-auto text-gray-300 mb-4 md:mb-8">
        {Object.entries(FEATURES)
          .filter(([k, _]) => !features.includes(k))
          .map(([k, v]) => (
            <li key={k}>{v}</li>
          ))}
      </ul>
      <button
        className={
          "py-2 px-8 rounded-full border font-medium" +
          (highlight
            ? " relative bg-clip-border border-transparent bg-gradient-to-r from-[#fc255a] via-[#c73597] to-[#8948e0]"
            : " hover:bg-gray-100 transition-colors")
        }
      >
        {highlight ? (
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-[#f3eefc] rounded-full"></div>
        ) : null}
        <span
          className={
            highlight
              ? "bg-clip-text text-transparent bg-gradient-to-r from-[#fc255a] via-[#c73597] to-[#8948e0] relative"
              : ""
          }
        >
          Start Free Trial
        </span>
      </button>
    </li>
  );
}

export default function Pricing() {
  return (
    <section className="p-8 md:px-32 md:py-16 text-center" id="pricing">
      <h2 className="text-5xl font-bold mb-8">Flexible Pricing Plans</h2>
      <p className="mb-8 text-gray-400">
        Choose the plan that best fits your business. No hidden fees, no
        surprises.
      </p>
      <ul className="flex flex-col md:flex-row gap-8">
        <PricingPlan
          name="Starter"
          cost={19}
          description="Ideal for new or small restaurants looking to streamline operations."
          features={["tracking", "inventory"]}
        />
        <PricingPlan
          name="Professional"
          cost={49}
          description="Perfect for growing restaurants needing advanced analytics and marketing tools."
          features={["tracking", "inventory", "support"]}
          highlight={true}
        />
        <PricingPlan
          name="Enterprise"
          cost={99}
          description="Comprehensive solutions for large-scale or multi-location operations."
          features={["tracking", "inventory", "support", "multiloc"]}
        />
      </ul>
    </section>
  );
}
