import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from "react-router-dom";
import Preview from './preview';
import Cart from '../pages/cart';


const Modal = ({ onClose, iconClicked, dynamic, openModal, modalData, setModalData, newData}) => {
  const [searchValue, setSearchValue] = useState('');
  const [optItem, setOptItem] = useState(0);  // initializing the checkbox
  const [increase, setIncrease] = useState(1);  // initializing the quantity increment
  const totalPrice = newData.price * increase + optItem; // calculating total price
  const [chocolates, champagne, balloons, card, wine] = [25000, 120000, 25000, 3000, 10000];

  // initializing customer informations 
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [sendersName, setSendersName] = useState('');
  const [sendersPhone, setSendersPhone] = useState('');
  const [sendersEmail, setSendersEmail] = useState('');

  // function to handle customer information
  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        setModalData(prevModalData => prevModalData.map(item => {
          if (item.id === newData.id) {
            return { ...item, name: value };
          }
          return item;
        }));
        break;
      case 'contact':
        setContact(value);
        setModalData(prevModalData => prevModalData.map(item => {
          if (item.id === newData.id) {
            return { ...item, contact: value };
          }
          return item;
        }));
        break;
      case 'message':
        setMessage(value);
        setModalData(prevModalData => prevModalData.map(item => {
          if (item.id === newData.id) {
            return { ...item, message: value };
          }
          return item;
        }));
        break;
      case 'address':
        setAddress(value);
        setModalData(prevModalData => prevModalData.map(item => {
          if (item.id === newData.id) {
            return { ...item, address: value };
          }
          return item;
        }));
        break;
      case 'date':
        setDate(value);
        setModalData(prevModalData => prevModalData.map(item => {
          if (item.id === newData.id) {
            return { ...item, date: value };
          }
          return item;
        }));
        break;
      case 'time':
        setTime(value);
        setModalData(prevModalData => prevModalData.map(item => {
          if (item.id === newData.id) {
            return { ...item, time: value };
          }
          return item;
        }));
        break;
      case 'sendersName':
        setSendersName(value);
        setModalData(prevModalData => prevModalData.map(item => {
          if (item.id === newData.id) {
            return { ...item, sendersName: value };
          }
          return item;
        }));
        break;
      case 'sendersPhone':
        setSendersPhone(value);
        setModalData(prevModalData => prevModalData.map(item => {
          if (item.id === newData.id) {
            return { ...item, sendersPhone: value };
          }
          return item;
        }));
        break;
      case 'sendersEmail':
        setSendersEmail(value);
        setModalData(prevModalData => prevModalData.map(item => {
          if (item.id === newData.id) {
            return { ...item, sendersEmail: value };
          }
          return item;
        }));
        break;
      default:
        // Handle default case or do nothing
        break;
    }
  };

  // Convert the string prop to a number
//  const price = new Intl.NumberFormat('en-NG', {
//    style: 'currency',
//    currency: 'NGN'
//}).format(newData.price);

const totalPrices = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN'
}).format(totalPrice);

const optionItem = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN'
}).format(optItem);



  // function to handle the quantity increment
  const handleQuantityChange = (increment) => {
    setIncrease(prevIncrease => prevIncrease + increment);
  };

  // function to handle the checkbox in preview component
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
    
    setModalData(prevModalData => prevModalData.map(item => {
      if (item.id === newData.id) {
        return { ...item, optionItem: optItem + checkPrice };
      }
      return item;
    }));
};

const FinaltotalPrice = modalData.reduce((accumulator, currentItem) => {
  return accumulator + (currentItem.totalPrices ? parseFloat(currentItem.totalPrices.replace(/[^\d.-]/g, '')) : 0);
}, 0);
console.log(FinaltotalPrice);

const handleSubTotal = () => {
  setModalData(prevModalData => prevModalData.map(item => {
    if (item.id === newData.id) {
      return { ...item, totalPrices: totalPrices, increase: increase };
    }
    return item;
  }));
  
  FinaltotalPrice();
};

const handleSearchChange = (e) => {
  setSearchValue(e.target.value);
};

  const links = [
    {
      id: 1,
      link: "/",
      title: "HOME PAGE",
    },
    // {
    //   id: 2,
    //   title: "FALL FLOWERS",
    // },
    {
      id: 3,
      link: "/fresh-flower-bouquets",
      title: "FRESH FLOWER BOUQUETS",
    },
    {
      id: 4,
      link: "/fruit-baskets",
      title: "FRUIT BASKETS",
    },
    {
      id: 5,
      link: "/balloons",
      title: "BALLONS",
    },
    {
      id: 6,
      link: "/wines",
      title: "WINES",
    },
    {
      id: 7,
      link: "/vase",
      title: "VASE",
    },
    {
      id: 8,
      link: "/teddy-bears",
      title: "TEDDY BEARS",
    },
    {
      id: 9,
      link: "/chocolates-valentine-gifts",
      title: "CHOCOLATES",
    },
    {
      id: 10,
      link: "/funerals",
      title: "FUNERAL",
    },
    {
      id: 11,
      link: "/cards",
      title: "CARDS",
    },
    {
      id: 12,
      link: "/plants",
      title: "PLANTS",
    },
    {
      id: 13,
      link: "/about",
      title: "ABOUT US",
    },
  ];


  return (
    <>
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center ">
      <div className="text-white text-sm">
        {iconClicked === 'search' ? (
          <div className="p-4 relative">
            <input
              type="text"
              label="search"
              className="bg-white/20 rounded-full p-3 sm:w-96 focus:outline-none"
              placeholder="Search ..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        ) : iconClicked === 'nav' ? (
          <div className="py-16 px-4 absolute left-0 top-0 bg-black/80 max-h-screen h-screen overflow-y-auto ">
            <div className="p-4 relative">
              <input
                type="text"
                label="search"
                className="bg-white/20 rounded-full py-2 px-3 w-52 focus:outline-none text-sm"
                placeholder="Search ..."
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
            <ul className="flex flex-col gap-4">
              {links.map(({ id, link, title }) => (
                <li
                  key={id}
                  className="px-4 py-2 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-white/70 hover:text-white"
                >
                    <RouterLink to={link}>{title}</RouterLink>
                </li>
              ))}
            </ul> 
          </div>
        ) : iconClicked === 'preview' ? (
          <div className="py-16 sm:px-4 absolute left-0 top-0 bg-black/80 max-h-screen h-screen overflow-y-auto ">
            <Preview newData={newData}
                     dynamic={dynamic} openModal={openModal} 
                     handleCheckboxClick={handleCheckboxClick} 
                     optionItem={optionItem}
                     increase={increase}
                     handleQuantityChange={handleQuantityChange}
                     totalPrices={totalPrices}
                     chocolates={chocolates}
                     champagne={champagne}
                     balloons={balloons}
                     card={card}
                     wine={wine}
                     name={name}
                     contact={contact}
                     message={message}
                     address={address}
                     date={date}
                     time={time}
                     sendersName={sendersName}
                     sendersPhone={sendersPhone}
                     sendersEmail={sendersEmail}
                     onChange={onChange}
                     handleSubTotal={handleSubTotal}
            />
          </div>
        ) : iconClicked === 'cart' ? (
          <div className="absolute left-0 top-0 bg-black/80 w-full max-h-screen h-screen overflow-y-auto ">
            <Cart totalPrices={totalPrices}
                  optionItem={optionItem}
                  customerName={name}
                  contact={contact}
                  increase={increase}
                  message={message}
                  address={address}
                  date={date}
                  time={time}
                  newData={newData} 
                  sendersName={sendersName}
                  sendersPhone={sendersPhone}
                  sendersEmail={sendersEmail}
                  handleQuantityChange={handleQuantityChange}
                  modalData={modalData}
                  FinaltotalPrice={FinaltotalPrice}
            />
          </div>
        ) : (
          <div className="p-4">
            This is why nothing is showing
          </div>
        )}
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-white/70 hover:text-white">
          <FaTimes size={30} />
        </button>
      </div>
    </div>
    </>
  );
};

export default Modal;
