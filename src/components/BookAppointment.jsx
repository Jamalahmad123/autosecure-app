import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import { booking } from "../assets/images";
import Wrapper from "./ui/Wrapper";
import LazyImage from "./ui/LazyImage";

const BookAppointment = () => {
  return (
    <section className="py-20 bg-clrVeryLightGray">
      <Wrapper className="px-4">
        <div className="card lg:card-side bg-white shadow-xl">
          <figure className="p-2">
            {/* <img
              src={booking}
              alt="book an appointment"
              className="rounded-xl"
              loading="lazy"
            /> */}
            <LazyImage
              image={{
                src: booking,
                alt: "book an appointment",
                style: "rounded-xl object-cover h-[350px] w-[1000px]",
              }}
            />
          </figure>
          <div className="card-body justiy-start items-start">
            <h2 className={`text-xl lg:text-3xl font-bold text-clrPrimary`}>
              Let's talk.
            </h2>
            <p className="text-clrPrimary text-base lg:text-lg">
              Real added value through process automation from autosecure.
              Arrange your free consultation appointment now.
            </p>
            <div className="card-actions mt-6 lg:mt-0">
              <Link
                to="/company/contact"
                className="btn lowercase bg-clrSky text-white border-none hover:bg-clrPrimary lg:text-lg font-normal"
              >
                make an appointment{" "}
                <FaCalendarCheck size={20} className="ml-5" />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default BookAppointment;
