import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="bg-[#F6F3EC] absolute top-0 left-0 w-full h-20 shadow-md inset-y-2 inset-x-0">
            <div className="flex justify-between max-w-7xl m-auto items-center h-20 flex-wrap bg-transparent">
                <div>
                    <img src="/idl.png" alt="IDL Logo" />
                </div>
                <ul className="m-0 flex gap-6 text-lg font-normal text items-center justify-center">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/services"}>Services</Link></li>
                    <li><Link href={"/projects"}>Projects</Link></li>
                    <li><Link href={"/about"}>About Us</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
                <div>
                    <Link
                        className="px-5 py-3 bg-primary text-accent inline-block m-0"
                        href="/contact"
                    >
                        Schedule a Meeting
                    </Link>
                </div>
            </div>
        </nav>
    );
}
