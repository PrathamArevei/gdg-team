"use client"
import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ProfileCard = ({ image, name, title, desc, github, insta, twitter }) => {
    return (
        <div 
        className="card-slide p-6 shadow-lg rounded-lg bg-white flex flex-col items-center text-center m-5 cursor-pointer transition-all hover:shadow-sm hover:shadow-orange-400 hover:scale-105">
            <div className="rounded-full shadow-lg shadow-yellow-400 overflow-hidden w-32 h-32 mb-4 hover:scale-105 hover:shadow-red-400 transition-all cursor-pointer ">
                {/* Next Image Component */}
                <img
                    src={image || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover"
                />
            </div>
            <div className="text-2xl font-semibold mb-2 mt-2">
                {/* Name */}
                {name || "Prathamesh Kothalkar"}
            </div>
            <div className="text-slate-500 italic mb-4">
                {/* Description */}
                {desc || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </div>
            <div className="text-xl font-medium mb-4">
                {/* Title */}
                {title || "Web Dev Lead"}
            </div>
            <div className="flex gap-4">
                <Link href={insta}><FaInstagram className="text-2xl hover:text-pink-600 cursor-pointer" /></Link>
                <Link href={github}><FaGithub className="text-2xl hover:text-gray-800 cursor-pointer" /></Link>
                <Link href={twitter}><FaTwitter className="text-2xl hover:text-blue-500 cursor-pointer" /></Link>
            </div>
        </div>
    );
}

export default ProfileCard;
