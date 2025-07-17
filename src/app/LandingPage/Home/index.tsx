import { HomeProps } from "@/types/Home";

export default function Home({ ref }: HomeProps) {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-gray-950/50" ref={ref}>
      <div className="w-full text-center text-xl flex flex-col items-center gap-4 lg:mt-10 sm:mt-0 mt-0">
        <div className="text-2xl text-green-400">Hi there, I&#39;m</div>
        <h1 className="lg:text-8xl sm:text-7xl text-7xl playfair bg-gradient-to-bl to-green-950 from-green-400 bg-clip-text text-transparent">
          Alakh Namdev
        </h1>
        <h2 className="lg:text-4xl sm:text-xl text-xl font-bold poppins text-gray-400">
          I&#39;m a Full Stack Developer
        </h2>
        <p className="w-[80vw] sm:w-1/2 text-gray-300 lg:text-lg sm:text-sm text-sm">
          I craft digital experiences where logic meets creativity. Every
          problem&#39;s a puzzle, every solution a quiet triumph. I believe in code
          you don&#39;t notice and ideas you feel. Welcome to my corner of the web —
          let&#39;s build something clever.
        </p>
        <div className="flex gap-4 lg:text-lg md:text-md sm:text-sm text-sm font-bold mt-5">
          <button className="px-4 py-2 cursor-pointer active:scale-80 bg-green-400 text-green-950 rounded hover:shadow-xl hover:shadow-green-400/40 transition-all duration-300">
            Let&#39;s Talk
          </button>
          <button className="px-4 py-2 cursor-pointer active:scale-80 hover:bg-green-400 hover:text-green-950 hover:shadow-xl hover:shadow-green-400/40 border border-green-500  text-green-500 rounded transition-all duration-300">
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
}
