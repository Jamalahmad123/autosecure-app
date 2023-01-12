import { useEffect } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/ui/Wrapper";
import { jobs } from "../../data/constantData";
import { styles } from "../../Styles";

const ApplyForm = () => {
  const positions = jobs.map((job) => job.title);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="py-20 lg:pt-36 lg:pb-20">
      <Wrapper className="px-4 space-y-12">
        <header>
          <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
            Apply now.
          </h1>
          <p className={`${styles.textPrimary} text-clrPrimary mt-8`}>
            Use our application form and start your application process at
            autosecure GmbH now.
          </p>
        </header>
        <form className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold text-clrPrimary">
              Select vacancy and location
            </h2>
            <div className={`flex gap-4 flex-col lg:flex-row lg:items-center`}>
              <div className="flex-1 space-y-4">
                <p className="text-clrPrimary font-light">
                  Please select an open position.
                </p>
                <select className="select w-full bg-white text-clrPrimary text-xl font-normal font-AllianceRegular h-14 input rounded-none focus:outline-none focus:shadow-inputShadow">
                  <option value="choose position">– Select Position – *</option>
                  {positions.map((pos) => (
                    <option value={pos} key={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-clrPrimary font-light">
                  Please select a location.
                </p>
                <select className="select w-full bg-white text-clrPrimary text-xl font-normal font-AllianceRegular h-14 input rounded-none focus:outline-none focus:shadow-inputShadow">
                  <option value="choose location">– Choose location – *</option>
                  <option value="muenster">muenster</option>
                  <option value="nationwide">nationwide</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold text-clrPrimary">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name *"
                className="bg-white text-clrPrimary input w-full h-14 rounded-none focus:outline-none focus:shadow-inputShadow"
                name="company"
                // value={company}
                // onChange={onChange}
              />
              <input
                type="text"
                placeholder="Surname *"
                className="bg-white text-clrPrimary input h-14 w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                name="name"
                // value={name}
                // onChange={onChange}
              />
              <input
                type="email"
                placeholder="Email *"
                className="bg-white text-clrPrimary input h-14 w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                name="email"
                // value={email}
                // onChange={onChange}
              />
              <input
                type="tel"
                placeholder="Phone number. *"
                className="bg-white text-clrPrimary input h-14 w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                name="phoneNo"
                // value={phoneNo}
                // onChange={onChange}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold text-clrPrimary">
              Upload or create a new CV
            </h2>
            <p className="text-clrPrimary font-light">(max. 3MB file size).</p>
            <input type="file" className="file-input w-full max-w-xs" />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold text-clrPrimary">
              Why do you want to work at autosecure?
            </h2>
            <p className="text-clrPrimary font-light">
              Tell us why autosecure is the right employer for you and what
              motivates you to shape your future with us.
            </p>
            <textarea
              className="textarea text-lg font-AllianceRegular box-border w-full h-[200px] bg-white text-clrPrimary focus:outline-none focus:shadow-inputShadow"
              placeholder="your description of interest"
              name="message"
              // value={message}
              // onChange={onChange}
            ></textarea>
            <label className="label items-start gap-2 sm:gap-4 cursor-pointer">
              <input type="checkbox" className="toggle" />
              <span className="text-lg text-clrPrimary">
                I agree that my data may be used for evaluation within the
                application process. I am aware that I have the right of
                withdrawal at any time to have my data deleted at any time. You
                can find more information on how we handle your personal data in
                our{" "}
                <Link
                  to="/legal/privacy"
                  className="font-bold hover:opacity-80 text-black"
                >
                  privacy policy
                </Link>{" "}
                .
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="btn text-white text-xl lg:text-3xl border-none bg-clrPrimary h-20 font-normal capitalize w-full mt-8 rounded-none"
          >
            Send application now
          </button>
        </form>
      </Wrapper>
    </section>
  );
};

/*
                  
                  
                   */

export default ApplyForm;
