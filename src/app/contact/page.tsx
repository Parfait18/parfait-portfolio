import { Metadata } from "next";
import ContactForm from "../components/ContactUsForm";
import PageTitle from "../components/PageTitle";
import { template } from "../utils/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: template.replace("%s", "Contact"),
};

export default function Contact() {
  return (
    <main className="px-8 w-full items-center pt-24 md:pt-4">
      <div className="text-left my-8 ">
        <PageTitle title="Contact" />
      </div>
      {/* Education */}

      <div className=" p-8 w-full inline-flex h-96 mx-auto ">
        <div className="md:w-6/12 p-2 w-full">
          <ContactForm />
        </div>
        <div className="md:w-6/12 hidden md:inline-flex  p-2 w-full ">
          <Image
            src="/images/contact_us.svg"
            alt="contact_us_img"
            width={400}
            height={200}
            className="static mx-2 w-96 h-96"
          />
        </div>
      </div>
    </main>
  );
}
