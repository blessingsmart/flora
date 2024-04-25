import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import Flutter from './flutter';

function Preview({ src, title, price}) {
  return (
    <>
        <div className='md:mx-64 mr-6 bg-white pb-24 md:flex'>
            <div className='md:w-[50%]'>
                <img src={src} className='w-full h-[500px]' alt="" />
            </div>
            <div className='md:w-[50%] md:ml-10'>
                <h1 className='md:text-3xl text-xl font-bold text-gray-500 m-5'>{title}</h1>
                <span className='text-xl font-bold m-5 text-black'>{price}</span>
                <p className='m-5 text-gray-500'>I'm Sorry</p>
                <div>
                    <h2 className="text-sm text-gray-500 font-bold m-5">Add-ons</h2>
                    <ol className="list-decimal list-inside text-gray-700">
                        <li className="list-disc ml-[100px] mt-5">
                            <label>
                                <input type="checkbox" /> Chocolates 25000
                            </label>
                        </li>
                        <li className="list-disc ml-[100px] mt-5">
                            <label>
                                <input type="checkbox" /> Champagne 120000
                            </label>
                        </li>
                        <li className="list-disc ml-[100px] mt-5">
                            <label>
                                <input type="checkbox" /> Balloons 25000 150000
                            </label>
                        </li>
                        <li className="list-disc ml-[100px] mt-5">
                            <label>
                                <input type="checkbox" /> Card 3000
                            </label>
                        </li>
                        <li className="list-disc ml-[100px] mt-5">
                            <label>
                                <input type="checkbox" /> Wine 10000
                            </label>
                        </li>
                    </ol>
                </div>
                <div className='mt-10 text-gray-500'>
                    <h2 className="text-lg font-bold ml-[40px]">Information needed:</h2>
                    <ol className='list-decimal list-inside'>

                        <h5 className="text-sm font-bold ml-[40px] mt-5 mb-10">*Name of recipient</h5>
                        <li className='list-disc ml-[100px] mt-5'>
                            <input 
                                type="text"
                                name='name'
                                className='border border-gray-200 w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Telephone number of recipient</h5>
                        <li className='list-disc ml-[100px] mt-5'>
                            <input 
                                type="text"
                                name='contact'
                                className='border border-gray-200 w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Message to be written on the card</h5>
                        <li className='list-disc ml-[100px] mt-5'>
                            <input 
                                type="text"
                                name='message'
                                className='border border-gray-200 w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Delivery address</h5>
                        <li className='list-disc ml-[100px] mt-5'>
                            <input 
                                type="text"
                                name='address'
                                className='border border-gray-200 w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-xs font-bold ml-[40px] my-10">*Date of delivery</h5>
                        <li className='list-disc ml-[100px] mt-5'>
                            <input 
                                type="text"
                                name='date'
                                className='border border-gray-200 w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Time</h5>
                        <li className='list-disc ml-[100px] mt-5'>
                            <input 
                                type="text"
                                name='time'
                                className='border border-gray-200 w-[260px] rounded-sm h-9'
                            />
                        </li>
                    </ol>
                </div>
                <div className='flex mt-10'>
                    <div className="flex items-center pl-10 md:pl-3 mt-5">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal rounded-l w-[30px] h-[43px]">-</button>
                        <input className="appearance-none border border-gray-300 w-10 h-11 text-center py-2 rounded-none" type="" value=""/>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal rounded-r w-[30px] h-[43px]">+</button>
                    </div>
                    <div className='bg-[#c7889d] mx-5 border mt-5 hover:bg-[#b06981] pt-3'>
                        <button className='text-white font-bold px-10' ><Flutter price={(price)} title={(title)}/></button>
                    </div>
                </div>
                <div className='bg-[#0aad66] ml-8 border mt-5 hover:bg-[#0c985b] w-[300px]'>
                    <button className='flex m-auto text-center text-white py-2 font-bold'><FaWhatsapp className='mx-2 mt-[4px]'/><span>ORDER ON WHATSAPP</span></button>
                </div>
                <p className='m-8 pt-2 text-gray-500'>
                    Categories: <a href="">Anniversary flowers</a>, 
                    <a href=""> Apology flowers</a>, <a href=""> Birthday flowers</a>, 
                    <a href=""> Congratulations flowers</a>, <a href=""> Get well flowers</a>, 
                    <a href=""> Good luck flowers</a>, <a href=""> Mother's Day flowers</a>, 
                    <a href=""> New home flowers</a>, <a href=""> Occasions</a>, <a href="">Romance flowers</a>, 
                    <a href=""> Surprise flowers</a>, <a href=""> Thank you flowers</a>
                </p>
                <p className='mx-8 text-gray-500'>
                    Tags: <a href=""> Apology flowers</a>, <a href=""> fresh flowers</a>, 
                    <a href="">gift</a>
                </p>
            </div>
        </div>
    </>
  )
}

export default Preview;