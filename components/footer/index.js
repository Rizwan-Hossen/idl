import { MapPinned, Mail, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="  bg-accent">
      <div className="max-w-7xl m-auto flex justify-between py-24 gap-5">
        <div className="flex-1">
          <img src="/idl.png" alt="IDL Logo" />
          <p className="text-xl">
            IDLis a new way of thinking about living, buying, and owning real
            estate, as well for renting purposes.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-primary font-semibold text-2xl">Contact Info</h3>
          <ul className="text-[#1D1D1D]">
            <li className="border-b-2 border-primary flex gap-2 items-center py-2 "><Phone size={16} strokeWidth={1.5}  className="text-primary text-base" /> +880 1740062270</li>
            <li className="border-b-2 border-primary flex gap-2 items-center py-2" > <Mail size={16} strokeWidth={1.5}  className="text-primary text-base" /> inheritance.ltd@gmail.com</li>
            <li className="border-b-2 border-primary flex gap-2 items-center py-2"><MapPinned size={16} strokeWidth={1.5}  className="text-primary text-base" /> Plot:31, Road:09, Block: H, sector -17, Uttara, Dhaka 1230</li>
          </ul>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>
    </footer>
  );
}
