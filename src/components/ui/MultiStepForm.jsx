import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
    quatity: "don't know yet",
    startDate: "",
    lastDate: "",
    email: "",
    phone: null,
    message: "",
  });

  const nextStep = () => setStep((prevState) => prevState + 1);
  const prevStep = () => setStep((prevState) => prevState - 1);

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <>
      <form className="space-y-8">
        <div className="w-full bg-clrPrimary overflow-hidden smooth transition-all">
          <div
            className={`h-full bg-clrSky text-white text-right pr-4 text-sm smooth`}
            style={{ width: 20 * step + "%" }}
          >
            {20 * step}%
          </div>
        </div>
        <FormContainer
          step={step}
          next={nextStep}
          prev={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
        <span className="text-sm text-[#3a3a3c] inline-block">
          * Please fill out fields marked with *.
        </span>
      </form>
    </>
  );
};

export default MultiStepForm;

const FormContainer = ({ step, next, prev, handleChange, formData }) => {
  const {
    company,
    firstName,
    lastName,
    quantity,
    startDate,
    lastDate,
    email,
    phone,
    message,
  } = formData;
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          next={next}
          handleChange={handleChange}
          company={company}
          firstName={firstName}
          lastName={lastName}
        />
      );
    case 2:
      return (
        <NumberOfTowers
          prev={prev}
          next={next}
          handleChange={handleChange}
          quantity={quantity}
        />
      );
    case 3:
      return (
        <RentPeriod
          prev={prev}
          next={next}
          handleChange={handleChange}
          startDate={startDate}
          lastDate={lastDate}
        />
      );
    case 4:
      return (
        <Contact
          prev={prev}
          next={next}
          handleChange={handleChange}
          email={email}
          phone={phone}
        />
      );
    case 5:
      return (
        <Message prev={prev} handleChange={handleChange} message={message} />
      );
  }
};

const FormUserDetails = ({
  next,
  handleChange,
  company,
  firstName,
  lastName,
}) => {
  return (
    <div className="space-y-8">
      <input
        type="text"
        placeholder="Company *"
        className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px]"
        id="company"
        onChange={handleChange}
        defaultValue={company}
      />
      <div className="flex items-center flex-col gap-5 lg:flex-row">
        <input
          type="text"
          placeholder="first name"
          className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px]"
          id="firstName"
          onChange={handleChange}
          defaultValue={firstName}
        />
        <input
          type="text"
          placeholder="Surname *"
          className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px]"
          id="lastName"
          onChange={handleChange}
          defaultValue={lastName}
        />
      </div>
      <button
        type="button"
        className="btn p-8 text-xl text-white border-none bg-clrSky w-full mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 hover:bg-clrSky"
        onClick={next}
      >
        Continue
      </button>
    </div>
  );
};

const NumberOfTowers = ({ prev, next, handleChange, quantity }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
        How many towers would you like to rent?
      </h2>
      <select
        className="select w-full bg-white py-2 text-xl font-AllianceRegular"
        id="quantity"
        defaultValue={quantity}
        onChange={handleChange}
      >
        <option>I don't no yet</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="btn p-8 text-xl text-clrSky border-none bg-transparent mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 flex-1"
          onClick={prev}
        >
          Return
        </button>
        <button
          type="button"
          className="btn p-8 text-xl text-white border-none bg-clrSky mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 hover:bg-clrSky flex-1"
          onClick={next}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const RentPeriod = ({ next, prev, handleChange, startDate, lastDate }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
        Determine your desired rental period:
      </h2>
      <div>
        <label htmlFor="date" className="text-white">
          Of:
        </label>
        <input
          type="date"
          id="startDate"
          className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px] mt-4"
          defaultValue={startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date" className="text-white">
          On:
        </label>
        <input
          type="date"
          id="lastDate"
          className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px] mt-4"
          defaultValue={lastDate}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="btn p-8 text-xl text-clrSky border-none bg-transparent mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 flex-1"
          onClick={prev}
        >
          Return
        </button>
        <button
          type="button"
          className="btn p-8 text-xl text-white border-none bg-clrSky mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 hover:bg-clrSky flex-1"
          onClick={next}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

//

const Contact = ({ next, prev, email, phone, handleChange }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
        How can we contact you?
      </h2>
      <input
        type="email"
        id="email"
        placeholder="your email*"
        className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px]"
        defaultValue={email}
        onChange={handleChange}
      />
      <input
        type="tel"
        id="phone"
        placeholder="your phone number*"
        className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px]"
        defaultValue={phone}
        onChange={handleChange}
      />
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="btn p-8 text-xl text-clrSky border-none bg-transparent mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 flex-1"
          onClick={prev}
        >
          Return
        </button>
        <button
          type="button"
          className="btn p-8 text-xl text-white border-none bg-clrSky mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 hover:bg-clrSky flex-1"
          onClick={next}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const Message = ({ prev, message, handleChange }) => {
  return (
    <div>
      <textarea
        className="textarea w-full bg-white text-clrPrimary focus:outline-none focus:shadow-inputShadow "
        placeholder="Your Message *"
        id="message"
        defaultValue={message}
        onChange={handleChange}
      ></textarea>
      <div className="form-control mt-8">
        <label className="label justify-start gap-2 sm:gap-4 cursor-pointer">
          <input type="checkbox" className="toggle" />
          <span className="text-xs">
            Yes, I agree to the <b>data protection</b> agreements of autosecure
            GmbH.
          </span>
        </label>
      </div>
      <div className="form-control">
        <label className="label justify-start gap-2 sm:gap-4 cursor-pointer">
          <input type="checkbox" className="toggle" />
          <span className="text-xs">
            Yes, I agree to the <b>general</b> terms and conditions of
            autosecure GmbH.
          </span>
        </label>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="btn p-8 text-xl text-clrSky border-none bg-transparent mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 flex-1"
          onClick={prev}
        >
          Return
        </button>
        <button
          type="submit"
          className="btn p-8 text-xl text-white border-none bg-clrSky mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 hover:bg-clrSky flex-1"
        >
          request a qoute
        </button>
      </div>
    </div>
  );
};
