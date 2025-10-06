import React, { useState } from 'react';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

export default function SelectTicketModal({ showModal, setShowModal, event }) {
  const { price = {} } = event || {};
  const { free = false, vip = 0, regular = 0 } = price;

  const [vipQty, setVipQty] = useState(1);
  const [regularQty, setRegularQty] = useState(1);

  const total = vipQty * vip + regularQty * regular;

  if (!showModal || !event) return null;

  return (
    <div className="modal-container fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal bg-white rounded-lg shadow-lg w-[400px] p-6 relative">
        <p className="text-xl font-semibold mb-4 text-center">Select Ticket</p>

        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 font-bold text-xl"
        >
          ×
        </button>

        {free ? (
          <div className="text-center text-green-600 font-medium">This event is free!</div>
        ) : (
          <>
           
            <div className="flex justify-between items-center mb-4">
              <span className="w-[15%] font-medium">VIP</span>
              <div className="flex items-center gap-2 w-[30%] justify-center">
                <CiCircleMinus
                  className="cursor-pointer text-xl"
                  onClick={() => setVipQty(Math.max(0, vipQty - 1))}
                />
                <span>{vipQty}</span>
                <CiCirclePlus
                  className="cursor-pointer text-xl"
                  onClick={() => setVipQty(vipQty + 1)}
                />
              </div>
              <span className="w-[15%] text-right font-semibold">NGN {vip}</span>
            </div>

            
            <div className="flex justify-between items-center mb-4">
              <span className="w-[15%] font-medium">Regular</span>
              <div className="flex items-center gap-2 w-[30%] justify-center">
                <CiCircleMinus
                  className="cursor-pointer text-xl"
                  onClick={() => setRegularQty(Math.max(0, regularQty - 1))}
                />
                <span>{regularQty}</span>
                <CiCirclePlus
                  className="cursor-pointer text-xl"
                  onClick={() => setRegularQty(regularQty + 1)}
                />
              </div>
              <span className="w-[15%] text-right font-semibold">NGN {regular}</span>
            </div>

            
            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <span className="w-[15%] font-bold">Total</span>
              <span className="w-[50%] text-right font-bold text-purple-600">
                NGN {total.toLocaleString()}
              </span>
            </div>

            
            <button
              className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            >
              Proceed To Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
}