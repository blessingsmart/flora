import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Preview({id, src, title, prices, openModal, 
                handleCheckboxClick, optionItem, 
                increase, handleQuantityChange,
                totalPrices, chocolates, champagne, balloons, card, wine,
                name, contact, message, address, date, time,
                sendersName, sendersPhone, sendersEmail, onChange
            }) {

    // Convert the string prop to a number


// Convert each number to a formatted currency string
const formattedChocolates = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
}).format(chocolates);

const formattedChampagne = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
}).format(champagne);

const formattedBalloons = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
}).format(balloons);

const formattedCard = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
}).format(card);

const formattedWine = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
}).format(wine);


    const handleItemClick = (id, src, title, price, prices) => {
        openModal("cart"); // Pass src, title, and price only
        dynamic({ src, title, price, prices }); // Pass src, title, and price only
    };

  return (
    <>
        <div className='md:mx-64 bg-white pb-24 md:flex md:w-[60%]'>
            <div className='md:w-[50%]'>
                <img src={src} className='w-full h-[400px] sm:h-[500px]' alt="" />
            </div>
            <div className='md:w-[50%] md:ml-10'>
                <h1 className='md:text-3xl text-xl font-bold text-gray-500 m-5'>{title}</h1>
                <span className='text-xl font-bold m-5 text-black'>{prices}</span>
                <p className='m-5 text-gray-500'>I'm Sorry</p>
                <div>
                    <h2 className="text-sm text-gray-500 font-bold m-5">Add-ons</h2>
                    <ol className="list-decimal list-inside text-gray-700">
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(chocolates, e.target.checked)}/> Chocolates {formattedChocolates}
                            </label>
                        </li>
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(champagne, e.target.checked)}/> Champagne {formattedChampagne}
                            </label>
                        </li>
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(balloons, e.target.checked)}/> Balloons {formattedBalloons}
                            </label>
                        </li>
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(card, e.target.checked)}/> Card {formattedCard}
                            </label>
                        </li>
                        <li className="list-disc ml-[50px] mt-5">
                            <label>
                                <input type="checkbox" onChange={(e) => handleCheckboxClick(wine, e.target.checked)}/> Wine {formattedWine}
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
                                value={name}
                                onChange={onChange}
                                required
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Telephone number of recipient</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='contact'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                                value={contact}
                                onChange={onChange}
                                required
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Message to be written on the card</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <textarea 
                                type="text"
                                name='message'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-24 resize-none'
                                value={message}
                                onChange={onChange}
                                required
                                >
                            </textarea>
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Delivery address</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='address'
                                value={address}
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                                onChange={onChange}
                                required
                            />
                        </li>
                        <h5 className="text-xs font-bold ml-[40px] my-10">*Date of delivery</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="date"
                                name='date'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                                value={date}
                                onChange={onChange}
                                required
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Time of delivery</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="time"
                                name='time'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                                value={time}
                                onChange={onChange}
                                required
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Senders name</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='sendersName'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                                value={sendersName}
                                onChange={onChange}
                                required
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Senders phone</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="text"
                                name='sendersPhone'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                                value={sendersPhone}
                                onChange={onChange}
                                required
                            />
                        </li>
                        <h5 className="text-sm font-bold ml-[40px] my-10">*Senders email</h5>
                        <li className='list-disc ml-[70px] mt-5'>
                            <input 
                                type="email"
                                name='sendersEmail'
                                className='border border-gray-200 w-[130px] sm:w-[260px] rounded-sm h-9'
                                value={sendersEmail}
                                onChange={onChange}
                                required
                            />
                        </li>
                    </ol>
                </div>
                <div className='mt-[70px] mx-10'>
                    <h4 className='text-gray-900'>OPTIONS AMOUNT</h4>
                    <span className='text-xl text-black font-bold mt-2'>{optionItem}</span>
                    <h4 className='text-gray-900 mt-5'>FINAL TOTAL</h4>
                    <span className='text-xl text-black font-bold mt-2'>{totalPrices}</span>
                </div>
                <div className='flex mt-6'>
                    <div className="flex items-center sm:pl-10 pl-3 md:pl-3 mt-5">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal rounded-l w-[30px] h-[43px]" onClick={() => handleQuantityChange(-1)}>-</button>
                        <input 
                            className="appearance-none text-black border border-gray-300 w-10 h-11 text-center py-2 rounded-none" 
                            value={increase}
                        />
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-normal rounded-r w-[30px] h-[43px]" onClick={() => handleQuantityChange(+1)}>+</button>
                    </div>
                    <div className='bg-[#c7889d] ml-5 border mt-5 hover:bg-[#b06981] pt-3'>
                        <button className='text-white font-bold sm:px-10 px-2' onClick={() => handleItemClick( id, src, title, prices)}>ADD TO CART</button>
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