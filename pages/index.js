import Image from "next/image";
import { Inter, Cormorant_Garamond } from "next/font/google";
// Cormorant Garamond
import Footer from "@/components/footer";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ProjectCard from "@/components/ui/project-card";
const inter = Inter({ subsets: ["latin"] });
const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

const options = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
];

export default function Home() {
  const [animal, setAnimal] = useState(null);

  const handleChange = (value) => {
    console.log("value:", value);
    setAnimal(value);
  };
  return (
    <>

      <section className="h-screen bg-[#F6F3EC] overflow-hidden flex align-between justify-center flex-wrap">
        <div className="text-center h-auto pt-32">
          <h3 className="text-base font-medium uppercase">
            THE PERFECT PLAN FOR BUILD
          </h3>
          <h4 className="text-6xl font-semibold leading-tight ">
            <span className="font-cormorant italic text-primary">Smart </span>{" "}
            living starts with <br /> smart
            <span className="font-cormorant italic text-primary">
              {" "}
              buildings
            </span>
          </h4>
          <button className="border-2 px-2 py-2  text-primary text-2xl border-primary  mt-6  ">
            Watch Video
          </button>
        </div>
        <div className="relative bg-[url('/images/home_bg.png')] w-screen bg-no-repeat bg-top h-full text-center  ">
          <div></div>
        </div>
      </section>
      <section className="bg-foreground">
        <div className="max-w-screen-xl m-auto flex flex-wrap pt-44 pb-28">
          <div className="flex-1 ">
            <h5 className="text-[#808080]">About us</h5>
            <h3 className="text-white text-6xl font-bold">
              We{" "}
              <span className="text-primary italic font-cormorant">Work</span>{" "}
              for your <br />
              better{" "}
              <span className="text-primary italic font-cormorant">Future</span>
            </h3>
          </div>
          <div className="flex-1">
            <p className="text-white pt-8">
              Our attention to detail and well-informed service delivery. We
              approach each new project with enthusiasm and professionalism and
              strive to make every project enjoyable and stress-free for our
              clients...
            </p>
          </div>
          <div className="w-full mt-20 flex bg-[url(/images/mask_bg.png)] bg-cover bg-[#262626]">
            <div className="flex-1 pt-36 pb-9 px-20 text-white hover:text-primary  hover:bg-white duration-300">
              <h4 className="text-5xl mb-4">01</h4>
              <p className="text-xl font-cormorant">
                Trustworthy and <br />
                Reliable
              </p>
            </div>
            <div className="flex-1 pt-36 pb-9 px-20 text-white hover:text-primary hover:bg-white duration-300">
              <h4 className="text-5xl mb-4">02</h4>
              <p className="text-xl font-cormorant">
                Superior Quality & <br />
                Modern Design
              </p>
            </div>
            <div className="flex-1 pt-36 pb-9 px-20 text-white hover:text-primary hover:bg-white duration-300">
              <h4 className="text-5xl mb-4">03</h4>
              <p className="text-xl font-cormorant">
                Superior Quality & <br />
                Modern Design
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-accent bg-[url(/images/mask_bg.png)] bg-cover py-20">
        <div className="max-w-screen-xl m-auto flex flex-wrap pt-44 pb-28">
          <div className="max-w-7xl m-auto flex flex-wrap">
            <div className="lg:w-2/12 lg:mb-4">
              <h5 className="text-[#808080]  text-2xl">Our Projects</h5>
            </div>
            <div className="lg:w-7/12 lg:mb-4 ">
              <h3 className="text-7xl font-bold  items-center columns-1">
                We build
                <span className="text-primary font-cormorant italic ml-2">
                  Quality
                </span>{" "}
                <br />
                real estate projects
              </h3>
            </div>
            <div className="lg:w-3/12 lg:mb-4 ">
              <p className="text-2xl leading-8">
                IDL is working in the market since 2019. The beginning of our
                activity, we have had a clear goal – to provide people with a
                fundamentally new housing environment!
              </p>
            </div>
          </div>

          <div className="flex justify-evenly w-3/12">
            <ul className="flex flex-col gap-5 ">
              <li>
                <Button className="text-5xl h-auto p-0 bg-transparent hover:bg-transparent leading-8 inline-block font-bold ">
                  Ongoing
                </Button>
              </li>

              <li>
                <Button className="text-5xl h-auto p-0 bg-transparent hover:bg-transparent leading-8 inline-block text-[#808080] hover:text-secondary duration-150 font-medium">
                  Upcoming
                </Button>
              </li>

              <li>
                <Button className="text-5xl h-auto p-0 bg-transparent hover:bg-transparent leading-8 inline-block text-[#808080] hover:text-secondary ease-in duration-150 font-medium">
                  Finished
                </Button>
              </li>
            </ul>
          </div>
          <div className="flex gap-6 w-9/12">
       <ProjectCard />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="bg-[url('/images/testi_bg.svg')] bg-cover bg-center ">
          <h5>Our Clients Lovely Words.</h5>
          <p>
            When building a home, selecting the right developer company was a
            very important decision. We were looking for a reliable company who
            could understand our requirements and give us a safe haven. IDL was
            definitely the right choice.
          </p>
        </div>
      </section> */}
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
