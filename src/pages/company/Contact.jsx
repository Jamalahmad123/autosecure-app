import { useEffect } from "react";
import { FaAt, FaBuilding, FaPhoneVolume } from "react-icons/fa";
import { logo } from "../../assets/images";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <section className="pt-24 pb-14 bg-clrLightGray">
        <Wrapper className="px-4">
          <header className="space-y-8">
            <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
              Contact us.
            </h1>
            <p className={`${styles.textPrimary} text-clrPrimary`}>
              autosecure is your specialist for leading technology-based
              automation solutions for the automotive and mobility industry.
            </p>
            <p className="font-bold text-lg md:text-xl md:max-w-2xl text-clrPrimary">
              Let's get in touch. We would be happy to visit you nationwide and
              advise you individually.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 pt-20">
            <div className="space-y-8">
              <figure>
                <img src={logo} alt="logo" className="w-36" />
              </figure>
              <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
                Visit Us.
              </h2>
              <p className="text-clrPrimary sm:max-w-[150px]">
                autosecure GmbH Hammer Strasse 39 48153 Munster
              </p>
              <div className="flex flex-col gap-6">
                <a
                  href="telto:+49 (0) 251 - 2373 37 - 0"
                  className="btn text-white border-none hover:bg-clrPrimary flex-nowrap justify-start bg-clrSky sm:text-lg font-bold w-full max-w-xs gap-3 sm:gap-8"
                >
                  <FaPhoneVolume className="flex-0" />
                  +49 (0) 251 - 2373 37 - 0
                </a>
                <a
                  href="telto:+49 (0) 251 - 2373 37 - 7"
                  className="btn text-white border-none hover:bg-clrPrimary flex-nowrap justify-start bg-clrSky sm:text-lg font-bold w-full max-w-xs gap-3 sm:gap-8"
                >
                  <FaBuilding />
                  +49 (0) 251 - 2373 37 - 7
                </a>
                <a
                  href="mailto:info@autosecure.net"
                  className="btn text-white border-none hover:bg-clrPrimary flex-nowrap justify-start bg-clrSky sm:text-lg font-bold w-full max-w-xs gap-3 sm:gap-8"
                >
                  <FaAt />
                  info@autosecure.net
                </a>
              </div>
            </div>
            <div className="space-y-8">
              <figure>
                <img src={logo} alt="logo" className="w-36" />
              </figure>
              <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
                Make an appointment now.
              </h2>
              <form>
                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Company *"
                    className="bg-white text-clrPrimary input w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                  />
                  <input
                    type="text"
                    placeholder="Surname *"
                    className="bg-white text-clrPrimary input w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="bg-white text-clrPrimary input w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number. *"
                    className="bg-white text-clrPrimary input w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                  />
                  <div className="flex items-center flex-col gap-5 sm:flex-row">
                    <input
                      type="text"
                      placeholder="POSTCODE *"
                      className="bg-white text-clrPrimary input w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                    />
                    <input
                      type="text"
                      placeholder="Location *"
                      className="bg-white text-clrPrimary input w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                    />
                  </div>
                  <textarea
                    className="textarea w-full bg-white text-clrPrimary focus:outline-none focus:shadow-inputShadow "
                    placeholder="Your Message *"
                  ></textarea>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-2 sm:gap-4 cursor-pointer">
                    <input type="checkbox" className="toggle" />
                    <span className="text-xs">
                      Yes, I agree to the <b>data protection</b> agreements of
                      autosecure GmbH.
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
                <button className="btn text-white border-none hover:bg-clrPrimary bg-clrSky w-full mt-8">
                  Send inquiry now
                </button>
              </form>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Contact;
