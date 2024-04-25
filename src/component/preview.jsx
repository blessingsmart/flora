import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import Flutter from './flutter';

function Preview({ src, title, price}) {
    const [prices, setPrice] = useState(price);
    const [optItem, setOptItem] = useState(0);

    const [chocolates, champagne, balloons, card, wine] = [25000, 120000, 25000, 3000, 10000];

    const handleCheckboxClick = (checkPrice, isChecked) => {
        setOptItem(prevItem => {
            if (isChecked) {
                // Checkbox is checked, add the value
                return prevItem + checkPrice;
            } else {
                // Checkbox is unchecked, subtract the value
                return prevItem - checkPrice;
            }
        });
        setPrice(prevPrice => {
            if (isChecked) {
                // Checkbox is checked, add the value
                return prevPrice + checkPrice;
            } else {
                // Checkbox is unchecked, subtract the value
                return prevPrice - checkPrice;
            }
        })
    };

  return (
    <>
        <div className='md:mx-64 m-auto bg-white pb-24 md:flex w-[60%]'>
            <div className='md:w-[50%]'>
                <img src={src} className='w-full h-[400px] sm:h-[500px]' alt="" />
            </div>
            <div className='md:w-[50%] md:ml-10'>
                <h1 className='md:text-3xl text-xl font-bold text-gray-500 m-5'>{title}</h1>
                <span className='text-xl font-bold m-5 text-black'>₦{price}</span>
                <p className='m-5 text-gray-500'>I'm Sorry</p>
                <div>
                    <h2 className="text-sm text-gray-500 font-bold m-5">Add-ons</h2>
                    <ol className="list-decimal list-inside text-gray-700">
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(chocolates, e.target.checked)}/> Chocolates {chocolates}
                            </label>
                        </li>
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(champagne, e.target.checked)}/> Champagne {champagne}
                            </label>
                        </li>
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(balloons, e.target.checked)}/> Balloons {balloons}
                            </label>
                        </li>
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(card, e.target.checked)}/> Card {card}
                            </label>
                        </li>
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(wine, e.target.checked)}/> Wine {wine}
                            </label>
                        </li>
                    </ol>
                </div>
                <div className='mt-10 text-gray-500'>
                    <h2 className="text-lg font-bold ml-[40px]">Information needed:</h2>
                    <ol className='list-decimal list-inside'>

                        <h5 className="text-sm font-bold ml-[40px] mt-5 mb-10">*Name of recipient</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='name'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Telephone number of recipient</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='contact'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Message to be written on the card</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='message'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Delivery address</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='address'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-xs font-bold ml-[40px] my-10">*Date of delivery</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='date'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Time</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='time'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                            />
                        </li>
                    </ol>
                </div>
                <div className='mt-[70px] mx-10'>
                    <h4 className='text-gray-900'>OPTIONS AMOUNT</h4>
                    <span className='text-xl text-black font-bold mt-2'>₦{optItem}</span>
                    <h4 className='text-gray-900 mt-5'>FINAL TOTAL</h4>
                    <span className='text-xl text-black font-bold mt-2'>₦{prices}</span>
                </div>
                <div className='flex mt-6'>
                    <div className="flex items-center sm:pl-10 pl-3 md:pl-3 mt-5">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal rounded-l w-[30px] h-[43px]">-</button>
                        <input className="appearance-none border border-gray-300 w-10 h-11 text-center py-2 rounded-none" type="" value=""/>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal rounded-r w-[30px] h-[43px]">+</button>
                    </div>
                    <div className='bg-[#c7889d] ml-5 border mt-5 hover:bg-[#b06981] pt-3'>
                        <button className='text-white font-bold sm:px-10 px-2' ><Flutter price={(price)} title={(title)}/></button>
                    </div>
                </div>
                <div className='bg-[#0aad66] ml-3 border mt-5 hover:bg-[#0c985b] sm:w-[280px] w-[210px]'>
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