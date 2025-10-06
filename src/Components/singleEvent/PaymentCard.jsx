import React, { useState } from 'react';
import SelectTicketModal from "./SelectTicketModal";

export default function PaymentCard({ event }) {
  const [showModal, setShowModal] = useState(false);
  const { price = {} } = event;
  const { free, vip, regular } = event;

  const handleOpenModal = () => setShowModal(true);

  return (
    <div className="bg-black w-[220px] text-white rounded-md p-3">
      <h1 className="text-center font-semibold my-1">Pricing</h1>

      {!free && (
        <div className="mt-4">
          <div className="flex justify-between py-3">
            <span>VIP</span>
            <span className="font-bold">NGN {vip}</span>
          </div>
          <div className="flex justify-between pb-3">
            <span>Regular</span>
            <span className="font-bold">NGN {regular}</span>
          </div>
        </div>
      )}

      <button
        className="my-2 w-full h-12 text-white "
        // content={free ? "Select Tickets" : "Proceed to payment"}
        onClick={handleOpenModal}
      >Select Tickets</button>

      <SelectTicketModal
        showModal={showModal}
        setShowModal={setShowModal}
        event={event}
      />
    </div>
  );
}