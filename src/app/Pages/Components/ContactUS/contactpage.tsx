"use client"
import React, { useState } from 'react';

const ContactButtonsData = [
  {
    id: 1,
    name: "Student fndjksfndsk",
    Phonenumber: "58959199"
  },
  {
    id: 2,
    name: "Student fndjksfndsk",
    Phonenumber: "58959199"
  },
  {
    id: 3,
    name: "Student fndjksfndsk",
    Phonenumber: "58959199"
  }
];

const ContactUsButtons = () => {
  const [copiedNumber, setCopiedNumber] = useState();

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    alert(`Phone number ${number} copied to clipboard!`);
  };

  return (
    <div className='grid grid-cols-3 px-4 space-x-2 py-3'>
      {ContactButtonsData.map((contact) => (
        <div 
          key={contact.id} 
          className='border-3 bg-green-200 rounded-xl p-3 border-black text-center'
        >
          <p className='text-sm'>{contact.name}</p>
          <p 
            className={`text-2xl cursor-pointer hover:text-red-500 ${copiedNumber === contact.Phonenumber ? 'text-blue-700' : ''}`}
            onClick={() => handleCopy(contact.Phonenumber)}
          >
            {contact.Phonenumber}
          </p>
          
        </div>
      ))}
    </div>
  );
}

export default ContactUsButtons;
 