import React, { useEffect, useState } from "react";

/**
 * Numbers section
 */
const Number = () => {
  // State for the counters
  const [customerNum, setCustomerNum] = useState(0);
  const [transactionNum, setTransactionNum] = useState(0);
  const [customerPer, setCustomerPer] = useState(0);
  const [awardsNum, setAwardsNum] = useState(0);

  // useEffect for counter starting
  useEffect(() => {
    startFirstCounter();
    startSecondCounter();
    startThirdCounter();
    startFourthCounter();
  }, []);

  /**
   * Functions for incrementign the counters
   */
  async function startFirstCounter() {
    for (let i = 0; i <= 2531; i++) {
      await new Promise((res) => setTimeout(res, 10));
      setCustomerNum(i);
    }
  }
  async function startSecondCounter() {
    for (let i = 0; i <= 1235764; i++) {
      await new Promise((res) => setTimeout(res, 5));
      setTransactionNum(i);
    }
  }
  async function startThirdCounter() {
    for (let i = 0; i <= 98; i++) {
      await new Promise((res) => setTimeout(res, 20));
      setCustomerPer(i);
    }
  }
  async function startFourthCounter() {
    for (let i = 0; i <= 25; i++) {
      await new Promise((res) => setTimeout(res, 40));
      setAwardsNum(i);
    }
  }

  return (
    <section className="bg-[#976de6] z-[3] relative" id="overview">
      <div className="w-[min(1250px,100%)] mx-auto px-4 py-[80px] gap-12 flex flex-col">
        <div className="text-white self-center flex flex-col gap-2">
          <h2 className="text-[42px] text-center font-bold text-white">
            DineEase by the Numbers
          </h2>
          <span className="text-center self-center text-white">
            Our achievement in the journey depicted in numbers
          </span>
        </div>

        <div className="gap-8 flex items-center flex-col md:flex-row">
          <div className="text-white bg-[#6926d7] flex flex-col gap-2 p-12 rounded-md w-full md:w-1/4 whitespace-nowrap">
            <h4 data-num className="text-4xl font-bold text-center text-white">
              {customerNum}+
            </h4>
            <span className="text-center text-white">Customers</span>
          </div>

          <div className="text-white bg-[#6926d7] flex flex-col gap-2 p-12 rounded-md w-full md:w-1/4 whitespace-nowrap">
            <h4 data-num className="text-4xl font-bold text-center text-white">
              {transactionNum}+
            </h4>
            <span className="text-center text-white">Transactions monthly</span>
          </div>

          <div className="text-white bg-[#6926d7] flex flex-col gap-2 p-12 rounded-md w-full md:w-1/4 whitespace-nowrap">
            <h4 data-num className="text-4xl font-bold text-center text-white">
              {customerPer}%
            </h4>
            <span className="text-center text-white">
              Customer Satisfaction
            </span>
          </div>

          <div className="text-white bg-[#6926d7] flex flex-col gap-2 p-12 rounded-md w-full md:w-1/4 whitespace-nowrap">
            <h4 data-num className="text-4xl font-bold text-center text-white">
              {awardsNum}+
            </h4>
            <span className="text-center text-white">Awards Won</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Number;
