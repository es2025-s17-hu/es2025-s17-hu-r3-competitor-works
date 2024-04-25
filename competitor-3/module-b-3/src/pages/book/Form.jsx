import React from "react";

/**
 * Form at the right side of the page
 */
const Form = () => {
  return (
    <form className="flex flex-col gap-4 w-full md:w-1/2">
      {/* Inputs */}
      <label className="flex flex-col gap-2 w-full text-[#535e70]">
        Name
        <input
          placeholder="John Doe"
          className="border boder-neutral-300 rounded-md px-4 py-2 w-full outline-[#6926d7] placeholder:text-neutral-500"
          required
        />
      </label>

      <label className="flex flex-col gap-2 w-full text-[#535e70]">
        Phone number
        <input
          type="tel"
          placeholder="+1 23 547 4345"
          className="border boder-neutral-300 rounded-md px-4 py-2 w-full outline-[#6926d7] placeholder:text-neutral-500"
          required
        />
      </label>

      <label className="flex flex-col gap-2 w-full text-[#535e70]">
        Email address
        <input
          type="email"
          placeholder="john.de@citydiner.com"
          className="border boder-neutral-300 rounded-md px-4 py-2 w-full outline-[#6926d7] placeholder:text-neutral-500"
          required
        />
      </label>

      {/* CTA */}
      <button className="mt-2 bg-[#6926d7] rounded-md px-4 py-3 text-white font-semibold transition-all hover:opacity-80">
        Book a Demo
      </button>
    </form>
  );
};

export default Form;
