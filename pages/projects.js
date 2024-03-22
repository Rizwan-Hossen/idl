import React, { useEffect, useState } from "react";
import UniversalCombobox from "@/components/combobox";
import { LocateIcon, MapPin } from "lucide-react";
import Link from "next/link";
const myData = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  { id: 3, name: "Option 3" },
];

export default function projects() {
  const [selectedValue, setSelectedValue] = useState(null); // Optional initial value

  return (
    <>
      <section className="bg-[url(/images/mask_bg.png)] bg-foreground bg-[20%]">
        <div className="container items-center mx-auto flex py-52 pb-72">
          <div className="w-1/2">
            <h3 className="text-xl text-background">Our Projects</h3>
            <p className="text-5xl font-roboto font-semibold text-background">
              We build <span className="text-primary italic">Quality </span>{" "}
              <br />
              real estate projects
            </p>
          </div>
          <div className="w-1/2">
            <p className="text-background text-2xl">
              IDL is working in the market since 2019. The beginning of our
              activity, we have had a clear goal – to provide people with a
              fundamentally new housing environment!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container bg-transparent -mt-56 pb-48 flex justify-between gap-12">
          <div className="w-full">
            <UniversalCombobox
              data={myData}
              initialValue={selectedValue}
              onSelect={(selectedValue) =>
                console.log("Selected:", selectedValue)
              }
            />
          </div>
          <div className="w-full">
            <UniversalCombobox
              data={myData}
              initialValue={selectedValue}
              onSelect={(selectedValue) =>
                console.log("Selected:", selectedValue)
              }
            />
          </div>
          <div className="w-full">
            <UniversalCombobox
              data={myData}
              initialValue={selectedValue}
              onSelect={(selectedValue) =>
                console.log("Selected:", selectedValue)
              }
            />
          </div>
        </div>

        <div className="container grid grid-cols-3 gap-12 -mt-32 z-10 relative">
          <div className="pb-card basis-1/3 aspect-[2/2.9] overflow-hidden after:duration-300  pc-bg relative hover:after:scale-105  after:bg-[url(/images/project1.png)] after:bg-cover after:bg-top after:bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10">
            <div className="pb-content absolute bottom-12 left-12 duration-300 text-background">
              <h4 className="font-semibold text-3xl max-w-60 ">
                Inheritance Mannan Palace
              </h4>
              <h3 className="text-primary flex items-center text-base mt-3 gap-1">
                <MapPin size={16} strokeWidth={2.75} /> Uttara, Dhaka
              </h3>
            </div>
            <Link
              href={"#"}
              className="pb-link text-background duration-300 left-12 absolute bottom-12 border-2 border-primary py-1 px-2 text-base "
            >
              View Project
            </Link>
          </div>
          <div className="pb-card basis-1/3 aspect-[2/2.9] overflow-hidden after:duration-300  pc-bg relative hover:after:scale-105  after:bg-[url(/images/project1.png)] after:bg-cover after:bg-top after:bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10">
            <div className="pb-content absolute bottom-12 left-12 duration-300 text-background">
              <h4 className="font-semibold text-3xl max-w-60 ">
                Inheritance Mannan Palace
              </h4>
              <h3 className="text-primary flex items-center text-base mt-3 gap-1">
                <MapPin size={16} strokeWidth={2.75} /> Uttara, Dhaka
              </h3>
            </div>
            <Link
              href={"#"}
              className="pb-link text-background duration-300 left-12 absolute bottom-12 border-2 border-primary py-1 px-2 text-base "
            >
              View Project
            </Link>
          </div>
          <div className="pb-card basis-1/3 aspect-[2/2.9] overflow-hidden after:duration-300  pc-bg relative hover:after:scale-105  after:bg-[url(/images/project1.png)] after:bg-cover after:bg-top after:bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10">
            <div className="pb-content absolute bottom-12 left-12 duration-300 text-background">
              <h4 className="font-semibold text-3xl max-w-60 ">
                Inheritance Mannan Palace
              </h4>
              <h3 className="text-primary flex items-center text-base mt-3 gap-1">
                <MapPin size={16} strokeWidth={2.75} /> Uttara, Dhaka
              </h3>
            </div>
            <Link
              href={"#"}
              className="pb-link text-background duration-300 left-12 absolute bottom-12 border-2 border-primary py-1 px-2 text-base "
            >
              View Project
            </Link>
          </div>
          <div className="pb-card basis-1/3 aspect-[2/2.9] overflow-hidden after:duration-300  pc-bg relative hover:after:scale-105  after:bg-[url(/images/project1.png)] after:bg-cover after:bg-top after:bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10">
            <div className="pb-content absolute bottom-12 left-12 duration-300 text-background">
              <h4 className="font-semibold text-3xl max-w-60 ">
                Inheritance Mannan Palace
              </h4>
              <h3 className="text-primary flex items-center text-base mt-3 gap-1">
                <MapPin size={16} strokeWidth={2.75} /> Uttara, Dhaka
              </h3>
            </div>
            <Link
              href={"#"}
              className="pb-link text-background duration-300 left-12 absolute bottom-12 border-2 border-primary py-1 px-2 text-base "
            >
              View Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
