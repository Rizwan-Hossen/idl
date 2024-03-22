import {
  Bath,
  BedDouble,
  Book,
  Hospital,
  Ruler,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhotoAlbum from "react-photo-album";



import Link from "next/link";
import React from "react";

const photos = [
  { src: "/images/image1.jpg", width: 800, height: 600 },
  { src: "/images/image2.jpg", width: 1600, height: 900 },
];

export default function view() {
  return (
    <>
      <section className="py-48 bg-foreground">
        <div className="container flex items-end">
          <div className="w-7/12">
            <div>
              <h5 className="text-base font-normal text-background">
                Elevate your life style with
              </h5>
              <h4 className="text-5xl font-semibold text-background">
                IDL <span className="text-primary">Amethyst</span>
              </h4>
              <div className="mt-6">
                <Link
                  className="text-xl border-2 border-primary py-3 px-4 inline-block text-background hover:bg-primary duration-300 mr-6"
                  href={"/"}
                >
                  Register Your Interest
                </Link>
                <Link
                  className="text-xl border-2 border-primary py-3 px-4 inline-block text-background hover:bg-primary duration-300"
                  href={"/"}
                >
                  Project Brochure
                </Link>
              </div>
            </div>
          </div>
          <div className="w-5/12">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2">
                <h5 className="text-base font-normal text-primary">
                  Project Location
                </h5>
                <h4 className="text-3xl font-semibold text-background leading-9">
                  Plot:70, Road:15, Sector -17, Uttara, Dhaka-1230
                </h4>
              </div>
              <div className="">
                <h5 className="text-base font-normal text-primary">
                  Apartment Size
                </h5>
                <h4 className="text-3xl font-semibold text-background leading-9">
                  1800 sqft{" "}
                </h4>
              </div>
              <div className="">
                <h5 className="text-base font-normal text-primary">Bedroom</h5>
                <h4 className="text-3xl font-semibold text-background leading-9">
                  4 Bedroom
                </h4>
              </div>
              <div className="">
                <h5 className="text-base font-normal text-primary">
                  Completion Date
                </h5>
                <h4 className="text-3xl font-semibold text-background leading-9">
                  January, 2423
                </h4>
              </div>
              <div className="">
                <h5 className="text-base font-normal text-primary">Status</h5>
                <h4 className="text-3xl font-semibold text-background leading-9">
                  Complete
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-24">
        <div className="container">
          <img src="/images/view.png" alt="project1" className="w-full h-fit" />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-center">
            <h5 className="text-base">See the most important features</h5>
            <h4 className="text-4xl text-primary font-semibold">At A Glance</h4>
          </div>

          <div className="grid grid-cols-6 gap-12 mt-24 content-center">
            <div className="text-center">
              <img
                src="/images/features.png"
                alt="feature1"
                className="w-12 h-12 m-auto"
              />
              <h5 className="text-base font-semibold mt-3">
                Built Over 3 Khata
              </h5>
            </div>
            <div className="text-center">
              <img
                src="/images/features.png"
                alt="feature1"
                className="w-12 h-12 m-auto"
              />
              <h5 className="text-base font-semibold mt-3">
                Built Over 3 Khata
              </h5>
            </div>
            <div className="text-center">
              <img
                src="/images/features.png"
                alt="feature1"
                className="w-12 h-12 m-auto"
              />
              <h5 className="text-base font-semibold mt-3">
                Built Over 3 Khata
              </h5>
            </div>
            <div className="text-center">
              <img
                src="/images/features.png"
                alt="feature1"
                className="w-12 h-12 m-auto"
              />
              <h5 className="text-base font-semibold mt-3">
                Built Over 3 Khata
              </h5>
            </div>
            <div className="text-center">
              <img
                src="/images/features.png"
                alt="feature1"
                className="w-12 h-12 m-auto"
              />
              <h5 className="text-base font-semibold mt-3">
                Built Over 3 Khata
              </h5>
            </div>
            <div className="text-center">
              <img
                src="/images/features.png"
                alt="feature1"
                className="w-12 h-12 m-auto"
              />
              <h5 className="text-base font-semibold mt-3">
                Built Over 3 Khata
              </h5>
            </div>
            <div className="text-center">
              <img
                src="/images/features.png"
                alt="feature1"
                className="w-12 h-12 m-auto"
              />
              <h5 className="text-base font-semibold mt-3">
                Built Over 3 Khata
              </h5>
            </div>
            <div className="text-center">
              <img
                src="/images/features.png"
                alt="feature1"
                className="w-12 h-12 m-auto"
              />
              <h5 className="text-base font-semibold mt-3">
                Built Over 3 Khata
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-48">
        <div className="container flex items-center gap-9">
          <div className="w-7/12">
            <img
              src="/images/map.png"
              alt="project1"
              className="w-full h-fit"
            />
          </div>
          <div className="w-5/12">
            <div>
              <h4 className="text-4xl font-semibold text-background mb-8">
                Location <br />
                <span className="text-primary">Highlight</span>
              </h4>
              <div className="mb-6">
                <h4 className="text-background border-b-2 border-primary text-2xl items-center pb-1 flex gap-2">
                  <Book size={24} className="text-primary" /> Educational
                  Institute
                </h4>
                <ul className="list-image-[url(/images/list_style.png)] ml-6">
                  <li className="text-base text-background">
                    Milestone School & College
                  </li>
                  <li className="text-base text-background">
                    Mastermind School
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-background border-b-2 border-primary text-2xl items-center pb-1 flex gap-2">
                  <Hospital size={24} className="text-primary" /> Hospitals
                </h4>
                <ul className="list-image-[url(/images/list_style.png)] ml-6">
                  <li className="text-base text-background">
                    Radical Hospital
                  </li>
                  <li className="text-base text-background">
                    Dhaka Specialized Hospital{" "}
                  </li>
                  <li className="text-base text-background">
                    Hi-Care General Hospital{" "}
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-background border-b-2 border-primary text-2xl items-center pb-1 flex gap-2">
                  <ShoppingCart size={24} className="text-primary" /> Grocery
                </h4>
                <ul className="list-image-[url(/images/list_style.png)] ml-6">
                  <li className="text-base text-background">Agora</li>
                  <li className="text-base text-background">Meena Bazar</li>
                  <li className="text-base text-background">Johora Market</li>
                </ul>
              </div>
              <div>
                <h4 className="text-background border-b-2 border-primary text-2xl items-center pb-1 flex gap-2">
                  <ShoppingBag size={24} className="text-primary" /> Shopping
                  Malls
                </h4>
                <ul className="list-image-[url(/images/list_style.png)] ml-6">
                  <li className="text-base text-background">Zam Zam Tower</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container">
          <div className="text-center">
            <h5 className="text-base font-medium">Explore Amethyst</h5>
            <h4 className="text-4xl text-primary font-semibold">Floor Plan</h4>
            <p className="max-w-[500px] m-auto text-xs">
              The Amethyst is a versatile and spacious floor plan that is
              customized to fit for family. It is available in both single and
              double unit options, as well as a parking floor plan.
            </p>
          </div>
        </div>
        <div className="container mt-8">
          <Tabs defaultValue="single" className="w-full">
            <TabsList className="w-full bg-transparent border-foreground justify-center border-b-2 pb-0">
              <TabsTrigger value="single" className="data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-primary after:absolute relative after:-bottom-[3px] data-[state=active]:bg-transparent">Single Unit</TabsTrigger>
              <TabsTrigger value="double" className="data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-primary after:absolute relative after:-bottom-[3px] data-[state=active]:bg-transparent">Double Unit</TabsTrigger>
              <TabsTrigger value="ground" className="data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-primary after:absolute relative after:-bottom-[3px] data-[state=active]:bg-transparent">Ground Unit</TabsTrigger>
            </TabsList>
            <TabsContent value="single">
              <div className="flex items-center gap-10">
                <div className="w-1/3">
                  <ul className="flex gap-2">
                    <li className="text-primary text-base font-semibold flex items-center gap-1">
                      <Ruler size={14} /> 1047.42 Sq ft
                    </li>
                    <li className="text-primary text-base font-semibold flex items-center gap-1">
                      <BedDouble size={14} /> 4 Bedroom
                    </li>
                    <li className="text-primary text-base font-semibold flex items-center gap-1">
                      <Bath size={14} /> 4 Bathroom
                    </li>
                  </ul>
                  <table className="w-full mt-4 border-t border-foreground border-2 divide-y divide-gray-200 border-collapse">
                    <thead>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5 font-semibold text-xl text-primary">Room</th>
                        <th className="text-end pr-5 font-semibold text-xl text-primary">Sqft</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5 leading-6">2 Bedroom (Type A)</th>
                        <th className="text-end pr-5 leading-6">140.00 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">2 Bedroom (Type B)</th>
                        <th className="text-end pr-5">116.62 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">2 Bathroom (Type A)</th>
                        <th className="text-end pr-5">29.20 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">2 Bathroom (Type B)</th>
                        <th className="text-end pr-5">30.00 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">Drawing room</th>
                        <th className="text-end pr-5">30.00 sqft</th>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-2/3">
                  <img src="/images/floor.png" alt="floor" className="w-full" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="double">    <div className="flex items-center gap-10">
                <div className="w-1/3">
                  <ul className="flex gap-2">
                    <li className="text-primary text-base font-semibold flex items-center gap-1">
                      <Ruler size={14} /> 1047.42 Sq ft
                    </li>
                    <li className="text-primary text-base font-semibold flex items-center gap-1">
                      <BedDouble size={14} /> 4 Bedroom
                    </li>
                    <li className="text-primary text-base font-semibold flex items-center gap-1">
                      <Bath size={14} /> 4 Bathroom
                    </li>
                  </ul>
                  <table className="w-full mt-4 border-t border-foreground border-2 divide-y divide-gray-200 border-collapse">
                    <thead>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5 font-semibold text-xl text-primary">Room</th>
                        <th className="text-end pr-5 font-semibold text-xl text-primary">Sqft</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5 leading-6">2 Bedroom (Type A)</th>
                        <th className="text-end pr-5 leading-6">140.00 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">2 Bedroom (Type B)</th>
                        <th className="text-end pr-5">116.62 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">2 Bathroom (Type A)</th>
                        <th className="text-end pr-5">29.20 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">2 Bathroom (Type B)</th>
                        <th className="text-end pr-5">30.00 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">Drawing room</th>
                        <th className="text-end pr-5">30.00 sqft</th>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-2/3">
                  <img src="/images/floor.png" alt="floor" className="w-full" />
                </div>
              </div></TabsContent>
            <TabsContent value="ground">    <div className="flex items-center gap-10">
                <div className="w-1/3">
                  <ul className="flex gap-2">
                    <li className="text-primary text-base font-semibold flex items-center gap-1">
                      <Ruler size={14} /> 1047.42 Sq ft
                    </li>
                    <li className="text-primary text-base font-semibold flex items-center gap-1">
                      <BedDouble size={14} /> 4 Bedroom
                    </li>
                    <li className="text-primary text-base font-semibold flex items-center gap-1">
                      <Bath size={14} /> 4 Bathroom
                    </li>
                  </ul>
                  <table className="w-full mt-4 border-t border-foreground border-2 divide-y divide-gray-200 border-collapse">
                    <thead>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5 font-semibold text-xl text-primary">Room</th>
                        <th className="text-end pr-5 font-semibold text-xl text-primary">Sqft</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5 leading-6">2 Bedroom (Type A)</th>
                        <th className="text-end pr-5 leading-6">140.00 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">2 Bedroom (Type B)</th>
                        <th className="text-end pr-5">116.62 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">2 Bathroom (Type A)</th>
                        <th className="text-end pr-5">29.20 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">2 Bathroom (Type B)</th>
                        <th className="text-end pr-5">30.00 sqft</th>
                      </tr>
                      <tr className="border-t-2 border-foreground">
                        <th className="text-start pl-5">Drawing room</th>
                        <th className="text-end pr-5">30.00 sqft</th>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-2/3">
                  <img src="/images/floor.png" alt="floor" className="w-full" />
                </div>
              </div></TabsContent>
          </Tabs>
        </div>
      </section>

      <section>
      <PhotoAlbum layout="rows" photos={photos} />
      </section>
    </>
  );
}
