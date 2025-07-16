import { HomeProps } from "@/types/Home";

export default function Home({ ref }: HomeProps) {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-gray-950/50" ref={ref}>
      <div className="w-full text-center text-xl flex flex-col items-center gap-4 mt-10">
        <div className="text-2xl text-green-400">Hi there, I'm</div>
        <h1 className="text-8xl playfair bg-gradient-to-bl to-green-950 from-green-400 bg-clip-text text-transparent">
          Alakh Namdev
        </h1>
        <h2 className="text-4xl font-bold poppins text-gray-400">
          I'm a Full Stack Developer
        </h2>
        <p className="w-[80vw] sm:w-1/2 text-gray-300 ">
          I craft digital experiences where logic meets creativity. Every
          problem's a puzzle, every solution a quiet triumph. I believe in code
          you don't notice and ideas you feel. Welcome to my corner of the web —
          let's build something clever.
        </p>
        <div className="flex gap-4 text-md font-bold mt-5">
          <button className="px-4 py-2 cursor-pointer active:scale-80 bg-green-400 text-green-950  rounded hover:shadow-xl hover:shadow-green-400/40 transition-all duration-300">
            Let's Talk
          </button>
          <button className="px-4 py-2 cursor-pointer active:scale-80 hover:bg-green-400 hover:text-green-950 hover:shadow-xl hover:shadow-green-400/40 border border-green-500  text-green-500 rounded transition-all duration-300">
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
}
