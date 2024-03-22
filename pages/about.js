import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function about() {
  return (
    <>
      <section className="bg-foreground h-screen flex items-center">
        <div className="container">
          <div className="text-center">
            <h6 className="text-base text-white font-medium">Who We Are</h6>
            <h3 className="text-7xl text-white font-semibold">
              We{" "}
              <span className="italic text-primary font-cormorant">Work</span>{" "}
              for your <br />
              better{" "}
              <span className="italic text-primary font-cormorant">Future</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="bg-background py-44 pb-56">
        <div className="container flex gap-5">
          <div className="w-5/12">
            <h3 className="text-4xl tracking-tight">
              Inheritance Development Limited has{" "}
              <span className="text-primary font-medium">
                successfully contributed
              </span>{" "}
              to the real estate industries of the country{" "}
              <span className="text-primary font-medium">since 2019.</span>
            </h3>
            <p className="text-xl text-foreground tracking-tight">
              Our attention to detail and well-informed service delivery. We
              approach each new project with enthusiasm and professionalism and
              strive to make every project enjoyable and stress-free for our
              clients, from dual to Construction inspection is an accurate and
              positive way to check the quality, accuracy and progress of a
              construction project Our specialist teams will oversee all aspects
              of construction identified by your due diligence phase and provide
              reports, updates and advice to give you full project control.
            </p>
            <ul className="flex justify-start gap-9">
              <li>
                <div>
                  <h6 className="text-7xl text-primary font-cormorant text-center">
                    16
                  </h6>
                  <h6 className="font-cormorant text-2xl text-center">
                    Handover <br />
                    Projects
                  </h6>
                </div>
              </li>
              <li>
                <div>
                  <h6 className="text-7xl text-primary font-cormorant text-center">
                    14
                  </h6>
                  <h6 className="font-cormorant text-2xl text-center">
                    Ongoing <br />
                    Projects
                  </h6>
                </div>
              </li>
              <li>
                <div>
                  <h6 className="text-7xl text-primary font-cormorant text-center">
                    08
                  </h6>
                  <h6 className="font-cormorant text-2xl text-center">
                    Upcoming <br />
                    Projects
                  </h6>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-7/12">
            <div className="relative w-full h-full pl-40">
              <Image
                src="/images/about.png"
                layout="fill"
                className="h-fit"
                alt="hi"
                objectFit="contain"
              />
            </div>
            <div className="pr-40 pl-36  -mt-28 z-10 relative -ml-16">
              <div className="bg-primary py-5">
                <p className="text-xl mx-20 text-justify my-10 mb-4 text-white border-l-4 border-white pl-2">
                  “Real estate development is not just about building buildings.
                  It is about creating communities where people can live, work,
                  and thrive. It is about building a better future for
                  everyone.”
                </p>
                <div className="mx-20 flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="/images/ceo.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-xl font-cormorant font-bold text-white">
                      Md. Hasan{" "}
                    </h4>
                    <h6 className="text-white">
                      Chairman of Inheritance Development Ltd.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
