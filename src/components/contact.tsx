import ContactForm from "./contact-form";
import { FaUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="container mx-auto px-8" id="contact">
      <h2 className="text-center text-4xl font-semibold sm:text-5xl sm:text-[4rem]">
        CONTACT <span className="text-active">ME</span>
      </h2>
      <div className="grid grid-cols-1 gap-x-3 gap-y-16 pt-16 text-lg lg:grid-cols-2">
        <div className="mx-auto w-full max-w-xl space-y-6 text-center">
          <p className="m-0 font-bold uppercase">Get in touch</p>
          <p>
            Hey! We are looking forward to start a project with you ! Feel free
            to reach out....
          </p>
          <p>
            <span className="flex justify-center gap-2">
              <FaUser className="size-5 fill-white" />
              Name
              <br />
            </span>
            Hamza Ahmad
          </p>
          <p>
            <span className="flex justify-center gap-2">
              <FaMapMarkerAlt className="size-5 fill-white" />
              Location
              <br />
            </span>
            Hamza Ahmad
          </p>
          <p>
            <span className="flex items-center justify-center gap-2">
              <FaEnvelope className="size-5 fill-white" />
              Email
              <br />
            </span>
            Hasaigal@gmail.com
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
