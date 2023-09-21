import React from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { PiCompassFill } from "react-icons/pi";
import wales from "../assets/image 8.svg";
import londonFirst from "../assets/image 9.svg";
import londonSecond from "../assets/image 10.svg";
import {HiLocationMarker} from "react-icons/hi"

const Home = () => (
  <div>
    <div>
      <header className=" pt-4 pl-8 flex gap-5 justify-between border border-b-[#808080]">
        <a href="http://">
          <AiFillHome className=" fill-[#0086BA] text-2xl" />
        </a>
        <ul className="flex gap-3 relative right-40">
          <div className="flex">
            <li>
              <a
                href="http://"
                className="text-[#808080] text-base list-none font-normal"
              >
                Postcode lists
              </a>
            </li>
            <IoMdArrowDropdown className="fill-[#808080] relative top-1.5" />
          </div>
          <div className="flex">
            <li>
              <a
                href="http://"
                className="text-[#808080] text-base list-none font-normal"
              >
                Postcode maps
              </a>
            </li>
            <IoMdArrowDropdown className="fill-[#808080] relative top-1.5" />
          </div>
          <li>
            <a
              href="http://"
              className="text-[#808080] text-base list-none font-normal"
            >
              Nearest postcodes
            </a>
          </li>
          <li>
            <a
              href="http://"
              className="text-[#808080] text-base list-none font-normal"
            >
              Postcode lottery
            </a>
          </li>
          <div className="flex">
            <li>
              <a
                href="http://"
                className="text-[#808080] text-base list-none font-normal"
              >
                Help and information
              </a>
            </li>
            <IoMdArrowDropdown className="fill-[#808080] relative top-1.5" />
          </div>
        </ul>
        <div className="flex gap-2 border border-black rounded-lg p-2 relative bottom-2">
          <AiOutlineSearch className="relative top-1 text-lg" />
          <input
            type="text"
            id=""
            placeholder="Search for a postcode or place name"
            className="w-[300px] border-none"
          />
        </div>
      </header>
      <section className=" mt-20">
        <h3 className="text-center text-5xl font-semibold">
          POSTCODE SEARCH MADE EASY
        </h3>
        <p className="text-md font-normal text-[#808080] text-center mt-4 line-clamp-2">
          You can find a postcode by using the search bar or by clicking the
          locate me button to use
          <br />
          your device geolocation service to find postcodes near you
        </p>
        <div className="flex gap-3 justify-center mt-14">
          <div className="flex gap-2 border border-black rounded-lg p-2 relative bottom-2">
            <AiOutlineSearch className="relative top-1 text-2xl" />
            <input
              type="text"
              id=""
              placeholder="Search for a postcode or place name"
              className="w-[300px] border-none"
            />
          </div>
          <a
            href="http://"
            className="bg-[#0086BA] text-white text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-8 pr-8 p-3 relative bottom-2"
          >
            Search
          </a>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="http://"
            className="bg-white border-[3px] border-[#0086BA] text-[#0086BA] text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-10 pr-10 p-3 relative bottom-2 hover:text-white hover:bg-[#0086BA]"
          >
            Locate me
          </a>
        </div>
      </section>
      <section className=" mt-20">
        <div className="flex justify-center gap-2">
          <a href="http://" className="text-3xl font-bold text-blue-800">
            Booking
            <span
              className="text-3xl font-bold
             text-[#0086BA]"
            >
              .com
            </span>
          </a>
          <div className="flex border rounded-md bg-orange-400 p-2 relative bottom-2 gap-6">
            <div className="flex gap-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="eg. city,region,di"
                className="p-2 border rounded-sm"
              />
              <input type="date" name="" id="" className="border rounded-sm" />
              <a
                href="http://"
                className="bg-[#0086BA] text-white text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-8 pr-8 p-3 relative right-3"
              >
                Search
              </a>
            </div>
            <div
              className="flex bg-[#FFBE1E] text-white text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-6 pr-6  p-3 gap-1"
            >
              <MdGroups className="fill-[gray] text-xl" />
              <a href="http://" className="list-none text-[#CF9700]">
                Guests
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h3 className="text-3xl text-center text-[#0086BA] font-bold">
          Key Features
        </h3>
        <div className="flex justify-center gap-10 mt-20">
          <div className="flex flex-col border border-gray-400 rounded-xl p-6 gap-8 bg-[#FAFEFF]">
            <div className="border rounded-full bg-[#8ed6f2] w-fit p-6 text-xl">
              <AiOutlineSearch className="fill-[#0086BA] text-4xl relative right-3" />
            </div>
            <h5 className="text-xl font-bold">Find nearest postcodes</h5>
            <p>
              See where your postcode is on a map and
              <br /> find the nearest postcodes to where you are
              <br />
              right now
            </p>
          </div>
          <div className="flex flex-col border border-gray-400 rounded-xl p-4 gap-8 bg-[#FAFEFF]">
            <div className="border rounded-full bg-[#8ed6f2] w-fit p-6 text-xl">
              <PiCompassFill className="fill-[#0086BA] text-4xl relative right-3" />
            </div>
            <h5 className="text-xl font-bold">
              Discover key postcode insights
            </h5>
            <p>
              Use Check my postcode to find out all the
              <br />
              key information for your local postcode
            </p>
          </div>
          <div className="flex flex-col border border-gray-400 rounded-xl p-4 gap-8 bg-[#FAFEFF]">
            <div className="border rounded-full bg-[#8ed6f2] w-fit p-6 text-xl">
              <MdGroups className="fill-[#0086BA] text-4xl relative right-3" />
            </div>
            <h5 className="text-xl font-bold">Shared opostcode experiences</h5>
            <p>
              Read what other people have said about
              <br />
              your post code and leave your own
              <br />
              comments for others to read
            </p>
          </div>
        </div>
      </section>
      <section className="mt-14">
        <h3 className="text-3xl text-center text-[#0086BA] font-bold">
          Popular Postcodes
        </h3>
        <div className="flex justify-center mt-5 gap-5">
          <div className="flex flex-col border rounded-lg pb-4 bg-[#FAFEFF]">
            <img src={wales} alt="wales"/>
            <h3 className="text-2xl p-3 font-semibold">SA99 1DU</h3>
            <div className="flex gap-2 p-3 ">
            <HiLocationMarker className="relative top-1"/>
             <p className="text-md font-semibold">Morriston, Wales</p>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg pb-4 bg-[#FAFEFF]">
            <img src={londonFirst} alt="londonF"/>
            <h3 className="text-2xl p-3 font-semibold">W1A 1AA</h3>
            <div className="flex gap-2 p-3 ">
            <HiLocationMarker className="relative top-1"/>
             <p className="text-md font-semibold">London, England</p>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg pb-4 bg-[#FAFEFF]">
            <img src={londonSecond} alt="londonS"/>
            <h3 className="text-2xl p-3 font-semibold">WC2N 5DU</h3>
            <div className="flex gap-2 p-3 ">
            <HiLocationMarker className="relative top-1"/>
             <p className="text-md font-semibold">London, England</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
        <a
            href="http://"
            className="bg-white border-[3px] border-[#0086BA] text-[#0086BA] text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-8 pr-8 p-3 relative bottom-2 hover:text-white hover:bg-[#0086BA]"
          >
            View all
          </a>
        </div>
      </section>
     <footer className="bg-[#008CBA]">
       <div className="flex gap-5 justify-evenly p-5 mt-20">
        <div className="flex flex-col">
            <h3 className="font-bold text-2xl text-white pb-3">Quick Links</h3>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">Search</a>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">Postcode by country</a>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">Postcode by Introduction Date</a>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">Postcode near me</a>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">Postcode Lottery</a>
        </div>
        <div className="flex flex-col">
            <h3 className="font-bold text-2xl text-white pb-3">Postcode Maps</h3>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">Postcode Map by User Type</a>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">Postcode Map by User Category</a>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">Postcode Map by Council Tax Band</a>

        </div>
        <div className="flex flex-col">
            <h3 className="font-bold text-2xl text-white pb-3">Website Information</h3>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">About this website</a>
            <a href="https://" className="text-[#CCC] text-base font-medium" list-none>Disclaimer and Limitations</a>
            <a href="https://" className="text-[#CCC] text-base font-medium list-none">Privacy Policy</a>

        </div>
       </div>
     </footer>
    </div>
  </div>
);

export default Home;
