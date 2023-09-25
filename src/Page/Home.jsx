import React, {useState} from "react";
import { AiFillHome, AiOutlineSearch, AiOutlineMenu, AiFillCaretRight } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { PiCompassFill } from "react-icons/pi";
import wales from "../assets/image 8.svg";
import londonFirst from "../assets/image 9.svg";
import londonSecond from "../assets/image 10.svg";
import {HiLocationMarker} from "react-icons/hi";
import throndheim from "../assets/image 5.svg";
import sixt from "../assets/image 6.svg";
import brangsore from "../assets/image 7.svg";
import france from "../assets/fra.svg";
import norway from "../assets/nor.svg";
import england from "../assets/gbr.svg";
import india from "../assets/ind.svg";
import australia from "../assets/aus.svg";
import spain from "../assets/esp.svg";
import greece from "../assets/grc.svg";
import italy from "../assets/ita.svg";
import Aos from 'aos';
import 'aos/dist/aos.css'
Aos.init();

const Home = () => {

  const display =
  {
    display:"none"
  }

const [open, setOpen] = useState(false);
const [second, setSecond] = useState(false);
const [third, setThird] = useState(false);
const [mobileReveal, setMobileReveal] = useState(false);
const [secondReveal, setSecondReveal] = useState(false);
const [thirdReveal, setThirdReveal] = useState(false);



return (
 <div>
    
      <header className="flex pt-4 pl-8 gap-5 justify-between border border-b-[#808080]" id="desktop-only">
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
            <div>
            <IoMdArrowDropdown className="fill-[#808080] relative top-1.5 cursor-pointer" onMouseOver={() => setOpen(!open)} />
            {open && (
            <div className="absolute" >
              <ul className="relative top-2 right-28 bg-[#0086BA] p-2">
             <li className=" text-white text-base rounded-b-md border-b-2 p-2"><a href="http://">By country</a></li>
             <li className=" text-white text-base rounded-b-md border-b-2 p-2"><a href="http://">By Introduction Date</a></li>
             </ul>
            </div>
            )}
            </div>
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
            <div>
            <IoMdArrowDropdown className="fill-[#808080] relative top-1.5 cursor-pointer" onMouseOver={() => setSecond(!second)}/>
            {second && (
              <div className="absolute ">
                <ul className="relative top-2 right-16 bg-[#0086BA] p-2">
                  <li className=" text-white text-base rounded-b-md border-b-2 p-2">  <a href="http://">User Type</a></li>
                  <li className=" text-white text-base rounded-b-md border-b-2 p-2">  <a href="http://">Use Category</a></li>
                  <li className=" text-white text-base rounded-b-md border-b-2 p-2">  <a href="http://">Council Tax Band</a></li>
                </ul>
             </div>
            )}
            </div>
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
            <div>
            <IoMdArrowDropdown className="fill-[#808080] relative top-1.5  cursor-pointer" onMouseOver={() => setThird(!third)} />
            {third && (
               <div className=" absolute">
              <ul className="relative top-2 right-28 bg-[#0086BA] p-2 w-[200px]">
                  <li className=" text-white text-base rounded-b-md border-b-2 p-2"><a href="http://">About This Website</a></li>
                  <li className=" text-white text-base rounded-b-md border-b-2 p-2"><a href="http://">Privacy Policy</a></li>
                </ul>
              </div>
            )}
            </div>
          </div>
        </ul>
        <div className="flex gap-2 border border-black rounded-lg p-2 relative bottom-2">
          <AiOutlineSearch className="relative top-1 text-lg"/>
          <input
            type="text"
            id=""
            placeholder="Search for a postcode or place name"
            className="w-[300px] border-none"
          />
        </div>
      </header>
      <header className="flex flex-col" id="mobile-only">
       <div className="flex justify-between w-full bg-[#0086BA] p-3">
        <AiFillHome className="fill-white text-2xl"/>
           <div className="flex gap-1" onClick={() => setOpen(!open)}>
            <span className="text-white" >Menu</span>
           <AiOutlineMenu  className="fill-white text-2xl cursor-pointer"/>
           </div>
        </div>

        { open && (
          <ul className="flex flex-col bg-[#0086BA] p-2 gap-2">
         <div className="flex justify-between bg-blue-700 p-2">
           <li className="list-none text-white text-base ">
            <a href="http://">Help and Information</a></li>
           <AiFillCaretRight className="fill-gray-400" onClick={() => setMobileReveal(!mobileReveal)}/>
           </div>
           {mobileReveal &&
           (
           
              <ul className="flex flex-col relative" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <li><a href="http://" className="list-none text-white text-base">Help and Information</a></li>
                <li><a href="http://" className="list-none text-white text-base">About this website</a></li>
                <li><a href="http://" className="list-none text-white text-base">Privacy Policy</a></li>
              </ul>
  
           )
           } 
         
          <div className="flex ml-3 bg-blue-700">
          <input type="text" name="" id="" className=" pl-10"/>
          <a href="http://" className="bg-[#0027BA] text-white p-1 pr-7 pl-7 list-none text-base">
            Search</a>
          </div>
         <div className="flex justify-between bg-blue-700 p-2">
          <li className="list-none text-white text-base">
            <a href="http://">Postcode Lists</a></li>
           <AiFillCaretRight className="fill-gray-400" target="blank" onClick={() => setSecondReveal(!secondReveal)}/>
         </div>
         {secondReveal &&
           (
              <ul className="flex flex-col" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <li><a href="http://" className="list-none text-white text-base">Postcard Lists</a></li>
                <li><a href="http://" className="list-none text-white text-base">By County</a></li>
                <li><a href="http://" className="list-none text-white text-base">By Introduction Date</a></li>
              </ul>
           )
           } 
          <div className="flex justify-between bg-blue-700 p-2">
            <li className="list-none text-white text-base ">
            <a href="http://">Postcode Maps</a></li>
           <AiFillCaretRight className="fill-gray-400" onClick={() => setThirdReveal(!thirdReveal)}/>
            </div>
            {thirdReveal &&
           (
              <ul className="flex flex-col" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <li><a href="http://" className="list-none text-white text-base">Postcode Maps</a></li>
                <li><a href="http://" className="list-none text-white text-base">User Type</a></li>
                <li><a href="http://" className="list-none text-white text-base">Use Category</a></li>
                <li><a href="http://" className="list-none text-white text-base">Council Tax Band</a></li>
              </ul>
           )
           } 
          <li className="list-none text-white text-base bg-blue-700 p-2">
            <a href="http://">Nearest Postcodes</a></li>
          <li className="list-none text-white text-base bg-blue-700 p-2">
            <a href="http://">Postcode Lottery</a></li>
          </ul>
        )
        }
      </header>
      <section className=" mt-20">
        <h3 className="text-center text-5xl font-semibold sm:text-4xl" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
          POSTCODE SEARCH MADE EASY
        </h3>
        <p className="text-md font-normal text-[#808080] text-center mt-4 line-clamp-2" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
          You can find a postcode by using the search bar or by clicking the
          locate me button to use
          <br />
          your device geolocation service to find postcodes near you
        </p>
        <div className="flex gap-3 justify-center mt-14 sm:flex sm:flex-col">
            <AiOutlineSearch className="relative top-2.5 text-2xl left-10 sm:top-12 sm:right-3" />
            <input
              type="text"
              id=""
              placeholder="search for postal code or placename"
              className="w-[300px] border border-black rounded-md pl-10 pr-10 sm:m-auto sm:p-2 sm:pl-9"
            />

          <a
            href="http://"
            className="bg-[#0086BA] text-white text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-8 pr-8 p-3 relative sm:m-auto"
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
        <div className="flex justify-center gap-2 sm:flex sm:flex-col">
          <a href="http://" className="text-3xl font-bold text-blue-800 sm:p-5">
            Booking
            <span
              className="text-3xl font-bold
             text-[#0086BA]"
            >
              .com
            </span>
          </a>
          <div className="flex border rounded-md bg-orange-400 p-2 relative bottom-2 gap-6 sm:flex sm:flex-col sm:m-2">
            <div className="flex gap-4 sm:flex sm:flex-col">
              <input
                type="text"
                name=""
                id=""
                placeholder="eg. city,region,di"
                className="p-2 border rounded-sm"
              />
              <input type="date" name="" id="" className="border rounded-sm p-2" 
              placeholder="22-August 23"/>
              <a
                href="http://"
                className="bg-[#0086BA] text-white text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-8 pr-8 p-3 relative right-3 sm:m-auto"
              >
                Search
              </a>
            </div>
            <div
              className="flex bg-[#FFBE1E] text-white text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-6 pr-6 p-3 gap-1 sm:m-auto sm:relative sm:right-3"
            >
              <MdGroups className="fill-[gray] text-xl" />
              <a href="http://" className="list-none text-[#CF9700]">
                Guests
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-1 relative bottom-16 sm:flex sm:flex-col sm:m-2">
            <div className="flex flex-col w-[200px] sm:m-auto" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <div className="flex flex-col bg-black opacity-[0.7] p-2 relative top-16 w-[150px]">
                    <div className="flex">
                     <p className="text-white font-bold">Trondheim</p>
                     <img src={norway} alt="fra" className="h-4 w-5 relative top-1.5 left-7"/>
                    </div>
                    <p className="text-white font-semibold">46 properties</p>
                </div>
              <img src={throndheim} alt="throndheim" />  
              <p className="text-[#6F6A6A] text-sm flex justify-end">Double from</p>           
            </div>
            <div className="flex flex-col w-[200px] sm:m-auto" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <div className="flex flex-col bg-black opacity-[0.7] p-2 relative top-16 w-[150px]">
                    <div className="flex">
                     <p className="text-white font-bold">Sixt</p>
                     <img src={france} alt="fra" className="h-4 w-5 relative top-1.5 left-7"/>
                    </div>
                    <p className="text-white font-semibold">21 properties</p>
                </div>
              <img src={sixt} alt="sixt" /> 
              <p className="text-[#6F6A6A] text-sm flex justify-end">Double from</p>
            </div>
           <div className="flex flex-col w-[200px] sm:m-auto" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex flex-col bg-black opacity-[0.7] p-2 relative top-16 w-[150px]">
                    <div className="flex">
                     <p className="text-white font-bold">Brangsore</p>
                     <img src={england} alt="fra" className="h-4 w-5 relative top-1.5 left-7"/>
                    </div>
                    <p className="text-white font-semibold">4 properties</p>
                </div>
             <img src={brangsore} alt="brangsore" /> 
             <p className="text-[#6F6A6A] text-sm flex justify-end">Double from</p> 
            </div>
        <div className="flex flex-col pt-16">
            <div className="flex bg-[#EDF1F7] flex-col sm:w-[280px] sm:m-auto sm:border sm:rounded-md sm:p-2">
            <div className="flex justify-between gap-16 pb-1.5  border border-b-gray-200">
              <div className="flex gap-1">
                <img src={norway} alt="country-flag" className="h-3 w-5 relative top-2"/>
                <p className="text-base">Trondheim</p>
              </div>
              <p className="text-base text-[#989898]">From</p>
            </div>
            <div className="flex justify-between gap-12 pb-1.5 border border-b-gray-200">
              <div className="flex gap-1">
                <img src={france} alt="country-flag" className="h-3 w-5 relative top-2"/>
                <p className="text-base">Sixt</p>
              </div>
              <p className="text-base text-[#989898]">From</p>
            </div>
            <div className="flex justify-between gap-12 pb-1.5  border border-b-gray-200">
              <div className="flex gap-1">
                <img src={england} alt="country-flag" className="h-3 w-5 relative top-2"/>
                <p className="text-base">Bransgore</p>
              </div>
              <p className="text-base text-[#989898]">From</p>
            </div>
            <div className="flex justify-between gap-12 pb-1.5  border border-b-gray-200">
              <div className="flex gap-1">
                <img src={india} alt="country-flag" className="h-3 w-5 relative top-2"/>
                <p className="text-base">Alipur</p>
              </div>
              <p className="text-base text-[#989898]">From</p>
            </div>
            <div className="flex justify-between gap-12 pb-1.5  border border-b-gray-200">
              <div className="flex gap-1">
                <img src={australia} alt="country-flag" className="h-3 w-5 relative top-2"/>
                <p className="text-base">Aldinga Beach</p>
              </div>
              <p className="text-base text-[#989898]">From</p>
            </div>
            <div className="flex justify-between gap-12 pb-1.5 border border-b-gray-200">
              <div className="flex gap-1">
                <img src={spain} alt="country-flag" className="h-3 w-5 relative top-2"/>
                <p className="text-base">Cala Anguila</p>
              </div>
              <p className="text-base text-[#989898]">From</p>
            </div>
            <div className="flex justify-between gap-12 pb-1.5  border border-b-gray-200">
              <div className="flex gap-1">
                <img src={greece} alt="country-flag" className="h-3 w-5 relative top-2"/>
                <p className="text-base">Kavousion</p>
              </div>
              <p className="text-base text-[#989898]">From</p>
            </div>
            <div className="flex justify-between gap-12 pb-1.5 border border-b-gray-200">
              <div className="flex gap-1">
                <img src={italy} alt="country-flag" className="h-3 w-5 relative top-2 "/>
                <p className="text-base">Pieve Di Ledro</p>
              </div>
              <p className="text-base text-[#989898]">From</p>
            </div>
            </div>
            <div className="flex bg-[#0086BA] p-2 sm:w-[280px] sm:m-auto sm:border sm:rounded-md">
             <AiOutlineSearch className="relative fill-white top-1.5 left-10 sm:relative sm:left-20"/>
             <a
            href="http://"
            className="text-white list-none font-normal m-auto"
          >
            Discover
          </a>
        </div>
        </div>
        </div>
      </section>
      <section className="mt-10">
        <h3 className="text-3xl text-center text-[#0086BA] font-bold">
          Key Features
        </h3>
        <div className="flex justify-center gap-10 mt-20 sm:flex sm:flex-col sm:p-4" 
        data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
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
        <div className="flex justify-center mt-5 gap-5 sm:flex sm:flex-col sm:p-4">
          <div className="flex flex-col border rounded-lg pb-4 bg-[#FAFEFF]" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
            <img src={wales} alt="wales"/>
            <h3 className="text-2xl p-3 font-semibold">SA99 1DU</h3>
            <div className="flex gap-2 p-3 ">
            <HiLocationMarker className="relative top-1"/>
             <p className="text-md font-semibold">Morriston, Wales</p>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg pb-4 bg-[#FAFEFF]" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
            <img src={londonFirst} alt="londonF"/>
            <h3 className="text-2xl p-3 font-semibold">W1A 1AA</h3>
            <div className="flex gap-2 p-3 ">
            <HiLocationMarker className="relative top-1"/>
             <p className="text-md font-semibold">London, England</p>
            </div>
          </div>
          <div className="flex flex-col border rounded-lg pb-4 bg-[#FAFEFF]" data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000">
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
       <div className="flex gap-5 justify-evenly p-5 mt-20 sm:flex sm:flex-col">
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
)
};
export default Home;
