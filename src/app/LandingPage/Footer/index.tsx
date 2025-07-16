"use client";

export default function Footer() {
  return (
    <footer className="bg-green-950/50 text-gray-300 grid py-4 place-items-center absolute bottom-0 w-full">
      <div className="text-center text-sm text-green-500 poppins">
        <h3 className="text-lg font-black">Designed and crafted with passion by Alakh Namdev</h3>
        © {new Date().getFullYear()} Alakh Namdev. All rights reserved.
      </div>
    </footer>
  );
}
