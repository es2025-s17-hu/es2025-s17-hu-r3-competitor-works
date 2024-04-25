import check from "../../assets/check.png";

/**
 * Pricing component
 */
const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-[min(1250px,100%)] px-4 py-16 mx-auto flex flex-col gap-14"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="flex flex-col gap-4 self-center">
        <h2 className="font-bold text-[42px] text-center text-[#1e0e62]">
          Flexible Pricing Plans
        </h2>
        <p className="text-[#a1a1b0] text-center">
          Choose the plan that best fits your business. No hidden fees, no
          surprises.
        </p>
      </div>

      {/* Pricings */}
      <div className="flex items-start gap-16 flex-col md:flex-row">
        {/* Pricing */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          {/* Pricing box */}
          <div className="border border-neutral-300 rounded-md p-12 flex flex-col gap-8">
            <h6
              className="font-semibold text-center text-[#26264f]"
              style={{ letterSpacing: "2px" }}
            >
              STARTER
            </h6>

            <div className="flex items-center gap-1 text-center self-center items-center  text-[#26264f]">
              $
              <span className="text-5xl font-bold  text-[#26264f]">
                &nbsp;19&nbsp;
              </span>
              per month
            </div>

            <p className="text-neutral-500 text-center  text-[#26264f]">
              Ideal for new or small restaurants looking to streamline
              operations.
            </p>
          </div>

          {/* Pricing desc */}
          <div className="flex flex-col gap-3 pl-8 text-neutral-400">
            <div className="flex items-center gap-2 text-neutral-500">
              <img src={check} alt="Checkmark" /> Real-time sales tracking
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <img src={check} alt="Checkmark" />
              Basic inventory management
            </div>
            <div className="flex items-center gap-2 text-neutral-200 pl-[23px]">
              Priority phone support
            </div>
            <div className="flex items-center gap-2 text-neutral-200 pl-[23px]">
              Multi-location management
            </div>
          </div>

          <button className="transition-all hover:opacity-50 rounded-full self-center px-6 py-2 border text-[#1e0e62] font-semibold">
            Start free trial
          </button>
        </div>

        {/* Pricing */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          {/* Pricing box */}
          <div className="border border-neutral-300 rounded-md p-12 flex flex-col gap-8 bg-gradient-to-r from-[#fc255a] to-[#7f4aec]">
            <h6
              className="font-semibold text-center text-white uppercase"
              style={{ letterSpacing: "2px" }}
            >
              Professional
            </h6>

            <div className="flex items-center gap-1 text-center self-center items-center text-white">
              $
              <span className="text-5xl font-bold text-white">
                &nbsp;49&nbsp;
              </span>
              per month
            </div>

            <p className="text-neutral-500 text-center text-white">
              Perfect for growing restaurants needing advanced analytics and
              marketing tools.
            </p>
          </div>

          {/* Pricing desc */}
          <div className="flex flex-col gap-3 pl-8 text-neutral-400">
            <div className="flex items-center gap-2 text-neutral-500">
              <img src={check} alt="Checkmark" />
              Real-time sales tracking
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <img src={check} alt="Checkmark" />
              Advanced inventory management
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <img src={check} alt="Checkmark" />
              Priority phone support
            </div>
            <div className="flex items-center gap-2 text-neutral-200 pl-[23px]">
              Multi-location management
            </div>
          </div>

          <div className="transition-all hover:opacity-50 w-fit self-center flex items-center justify-center p-[2px] rounded-full bg-gradient-to-r from-[#fc255a] to-[#7f4aec]">
            <div className="bg-white/95 rounded-full">
              <button className="rounded-full self-center px-6 py-2 font-semibold bg-gradient-to-r from-[#fc255a] to-[#7f4aec] text-transparent bg-clip-text">
                Start free trial
              </button>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          {/* Pricing box */}
          <div className="border border-neutral-300 rounded-md p-12 flex flex-col gap-8">
            <h6
              className="font-semibold text-center text-[#26264f] uppercase"
              style={{ letterSpacing: "2px" }}
            >
              Enterprise
            </h6>

            <div className="flex items-center gap-1 text-center self-center items-center text-[#26264f]">
              $
              <span className="text-5xl font-bold text-[#26264f]">
                &nbsp;99&nbsp;
              </span>
              per month
            </div>

            <p className="text-neutral-500 text-center text-[#26264f]">
              Comprehensive solutions for large-scale or multi-location
              operations.
            </p>
          </div>

          {/* Pricing desc */}
          <div className="flex flex-col gap-3 pl-8 text-neutral-400">
            <div className="flex items-center gap-2 text-neutral-500">
              <img src={check} alt="Checkmark" />
              Real-time sales tracking
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <img src={check} alt="Checkmark" />
              Advanced inventory management
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <img src={check} alt="Checkmark" />
              Priority phone support
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <img src={check} alt="Checkmark" />
              Multi-location management
            </div>
          </div>

          <button className="transition-all hover:opacity-50 rounded-full self-center px-6 py-2 border text-[#1e0e62] font-semibold">
            Start free trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
