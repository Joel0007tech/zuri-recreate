import React from 'react'
import {AiFillHome, AiOutlineSearch} from "react-icons/ai"
import {IoMdArrowDropdown} from "react-icons/io";
import {MdGroups} from "react-icons/md";
import {PiCompassFill} from "react-icons/pi";


const Home = () => 
   (
    <div>
        <div>
            <header className=' pt-4 pl-8 flex gap-5 justify-between border border-b-[#808080]'>
                     <a href="http://"><AiFillHome className=' fill-[#0086BA] text-2xl'/></a> 
                <ul className='flex gap-3 relative right-40'>
                    <div className='flex'>
                    <li>
                     <a href="http://" className='text-[#808080] text-base list-none font-normal'>Postcode lists</a> 
                    </li>
                    <IoMdArrowDropdown className='fill-[#808080] relative top-1.5'/>
                    </div>
                    <div className='flex'>
                    <li>
                     <a href="http://" className='text-[#808080] text-base list-none font-normal'>Postcode maps</a> 
                    </li>
                    <IoMdArrowDropdown className='fill-[#808080] relative top-1.5'/>
                    </div>
                    <li>
                     <a href="http://" className='text-[#808080] text-base list-none font-normal'>Nearest postcodes</a> 
                    </li>
                    <li>
                     <a href="http://" className='text-[#808080] text-base list-none font-normal'>Postcode lottery</a> 
                    </li>
                    <div className='flex'>
                    <li>
                     <a href="http://" className='text-[#808080] text-base list-none font-normal'>Help and information</a> 
                    </li>
                    <IoMdArrowDropdown className='fill-[#808080] relative top-1.5'/>
                    </div>
                </ul>
                <div className='flex gap-2 border border-black rounded-lg p-2 relative bottom-2'>
                   <AiOutlineSearch className='relative top-1 text-lg'/>
                <input type="text" id="" placeholder='Search for a postcode or place name' className='w-[300px] border-none'/>
                </div>
            </header>
            <section className=' mt-20'>
                <h3 className='text-center text-5xl font-semibold'>POSTCODE SEARCH MADE EASY</h3>
                <p className='text-md font-normal text-[#808080] text-center mt-4 line-clamp-2'>
                You can find a postcode by using the search bar or by clicking the locate me button to use<br/>
                 your device geolocation service to find postcodes near you
                </p>
                <div className='flex gap-3 justify-center mt-14'>
                <div className='flex gap-2 border border-black rounded-lg p-2 relative bottom-2'>
                   <AiOutlineSearch className='relative top-1 text-2xl'/>
                <input type="text" id="" placeholder='Search for a postcode or place name' className='w-[300px] border-none'/>
                </div>
                <a href="http://" className='bg-[#0086BA] text-white text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-8 pr-8 p-3 relative bottom-2'>Search</a>
                </div>
                <div className='flex justify-center mt-10'>
                <a href="http://" className='bg-white border-[3px] border-[#0086BA] text-[#0086BA] text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-10 pr-10 p-3 relative bottom-2 hover:text-white hover:bg-[#0086BA]'>Locate me</a>
                </div>
            </section>
         <section className=' mt-20'>
            <div className='flex justify-center gap-2'>
            <a href="http://" className='text-3xl font-bold text-blue-800'>Booking<span className='text-3xl font-bold
             text-[#0086BA]'>.com</span></a>
            <div className='flex border rounded-md bg-orange-400 p-2 relative bottom-2 gap-6'>
                <div className='flex gap-4'>
                    <input type="text" name="" id="" placeholder='eg. city,region,di' className='p-2 border rounded-sm'/>
                <input type='date' name="" id="" className='border rounded-sm'/>
                <a href="http://" className='bg-[#0086BA] text-white text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-8 pr-8 p-3 relative right-3'>Search</a>
                 </div>
                <div className='flex bg-[#FFBE1E] text-white text-sm font-bold
                 list-none rounded-md w-fit h-fit pl-6 pr-6  p-3 gap-1'>
                    <MdGroups className='fill-[gray] text-xl'/> 
                <a href="http://" className='list-none text-[#CF9700]'>Guests</a>
                </div>
            </div>
            </div>
         </section>
         <section className='mt-10'>
            <h3 className='text-3xl text-center text-[#0086BA] font-bold'>Key Features</h3>
            <div className='flex justify-center gap-10 mt-20'>
                <div className='flex flex-col border border-gray-400 rounded-md p-4 gap-5'>
                    <div className='border rounded-full bg-[#0086BA] w-fit p-6 text-xl'>
                    <AiOutlineSearch/>
                    </div>
                    <h5>Find nearest postcodes</h5>
                    <p>See where your postcode is on a map and<br/> find the nearest postcodes to where you are<br/>
                     right now</p>

                </div>
                <div className='flex flex-col border border-gray-400 rounded-md p-4 gap-8'>
                     <div className='border rounded-full bg-[#0086BA] w-fit p-6 text-xl'>
                    <PiCompassFill/>
                    </div>
                    <h5>Discover key postcode insights</h5>
                    <p>Use Check my postcode to find out all the<br/>
                     key information for your local postcode</p>

                </div>
                <div className='flex flex-col border border-gray-400 rounded-md p-4 gap-8'>
                     <div className='border rounded-full bg-[#0086BA] w-fit p-6 text-xl'>
                      <MdGroups/>
                      </div>
                    <h5>Shared opostcode experiences</h5>
                    <p>Read what other people have said about<br/>
                     your post code and leave your own<br/>
                      comments for others to read</p>

                </div>
                </div>
         </section>
        </div>
    </div>
  )

export default Home