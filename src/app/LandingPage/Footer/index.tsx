"use client";

export default function Footer() {
  return (
    <footer className="bg-green-950/50 text-gray-300 grid py-4 place-items-center absolute lg:bottom-0 md:bottom-15 sm:bottom-15 bottom-15 w-full">
      <div className="text-center text-green-500">
        <h3 className="lg:text-lg sm:text-xs text-xs font-black">Designed and crafted with passion by Alakh Namdev</h3>
        <p className="lg:text-sm sm:text-[10px] text-[10px] font-semibold poppins">© {new Date().getFullYear()} Alakh Namdev. All rights reserved.</p>
      </div>
    </footer>
  );
}
