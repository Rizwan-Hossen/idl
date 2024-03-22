import React from "react";
import { MapPinned, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function contact() {
  return (
    <>
      <div className="bg-foreground">
        <div className="flex container  py-40">
          <div className="w-7/12">
            <h5 className="text-base text-primary font-normal">Contact Us</h5>
            <h6 className="text-7xl font-semibold text-white">
              Call or Visit Us <br /> For Any Enquiry
            </h6>
          </div>
          <div className="w-5/12">
            <ul className="text-[#1D1D1D]">
              <li className="flex gap-2 flex-wrap items-center py-2 ">
                <span className="flex items-center gap-2 text-primary font-semibold text-2xl">
                  {" "}
                  <Phone
                    size={18}
                    strokeWidth={1.5}
                    className="text-primary text-base"
                  />{" "}
                  Phone
                </span>
                <span className="w-full block text-white text-3xl">
                  +880 1740062270
                </span>
              </li>
              <li className=" flex gap-2 flex-wrap items-center py-2 ">
                <span className="flex items-center gap-2 text-primary font-semibold text-2xl">
                  {" "}
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="text-primary text-base"
                  />{" "}
                  Email
                </span>
                <span className="w-full block text-white text-3xl">
                  inheritance.ltd@gmail.com
                </span>
              </li>

              <li className=" flex gap-2 flex-wrap items-center py-2 ">
                <span className="flex items-center gap-2 text-primary font-semibold text-2xl">
                  {" "}
                  <MapPinned
                    size={18}
                    strokeWidth={1.5}
                    className="text-primary text-base"
                  />{" "}
                  Location
                </span>
                <span className="w-full block text-white text-3xl">
                  Plot:31, Road:09, Block: H, sector -17, Uttara, Dhaka 1230{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1659.8413456081573!2d90.40356624996258!3d23.862413559733888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1710489630420!5m2!1sen!2sbd"
          width={600}
          height={550}
          className="w-full -mt-28"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="bg-[#F6F3EC]">
        <div className="container max-w-6xl py-40">
          <div className="flex">
            <div className="w-6/12">
              <h6 className="text-primary text-2xl font-normal">
                Stay In Touch
              </h6>
              <p className="text-foreground text-7xl font-semibold font-roboto">
                Email us, <br /> we would love to from you
              </p>
            </div>
            <div className="w-6/12">
              <form>
                <div>
                  <input
                    className="border-2 bg-transparent  border-x-0 px-5 py-5 w-full text-2xl border-[#999793] outline-none focus:border-primary"
                    placeholder="Type your name"
                  />
                </div>

                <div className="flex">
                  <input
                    className="border-2 bg-transparent border-t-0 border-l-0 px-5 py-5 w-full text-2xl border-[#999793] outline-none focus:border-primary"
                    placeholder="Email Address"
                  />
                  <input
                    className="border-2 bg-transparent  border-t-0 border-r-0 px-5 py-5 w-full text-2xl border-[#999793] outline-none focus:border-primary"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    className="border-2 bg-transparent border-t-0 border-x-0 px-5 py-5 w-full text-2xl border-[#999793] outline-none focus:border-primary"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    className="border-2 bg-transparent border-t-0 border-x-0 px-5 py-5 w-full text-2xl border-[#999793] outline-none focus:border-primary"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <button className="mt-6 px-5 py-3 bg-primary text-accent inline-block m-0">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-foreground">
        <div className="max-w-7xl m-auto flex justify-between py-24 gap-5">
          <div>
            <h3 className="text-6xl capitalize text-white font-bold">
              Subscribe to our{" "}
              <span className="text-primary font-cormorant ">newsletter</span>
            </h3>
          </div>
          <div>
            <p className="text-[#94928E] text-base leading-5">
              To receive updates about exclusive experiences, Mondiale events,
              upcoming projects and more, please enter your details below.
            </p>
            <div className="flex mt-3">
              <Input
                className="bg-[#262626] border-[#262626] outline-none border-none text-white focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                placeholder="Enter your Email address"
              />
              <Button className="text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
