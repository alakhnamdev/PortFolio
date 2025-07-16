import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Footer from "../Footer";
import { ContactProps } from "@/types/Contact";

export default function Contact({ ref }: ContactProps) {
  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-center bg-gray-950/50 text-gray-300 relative py-30" ref={ref}>
      <h1 className="text-6xl font-bold mb-8 poppins bg-gradient-to-bl to-green-950 from-green-400 bg-clip-text text-transparent">
        Get in Touch
      </h1>
      <p className="text-lg max-w-2xl text-center my-10">
        I'd love to hear from you! Whether you have a project idea, want to
        collaborate, or just connect, feel free to reach out via email,
        LinkedIn, or GitHub. I value every message and will respond as soon as
        possible. Let's create something great together!
      </p>
      <a
        href="mailto:namdev.alakh@gail.com"
        className="bg-green-400 font-black text-lg p-2 px-4 rounded-md text-gray-800 transition duration-300"
      >
        Let's Connect
      </a>
      <div className="mt-10 flex gap-4">
        <a href="mailto:namdev.alakh@gail.com">
          <IoIosMail className="text-gray-600 text-5xl -mt-1.5" />
        </a>
        <a href="https://www.linkedin.com/in/alakhnamdev" target="_blank">
          <FaLinkedin className="text-gray-600 text-4xl" />
        </a>
        <a href="https://github.com/alakhnamdev" target="_blank">
          <FaGithub className="text-gray-600 text-4xl" />
        </a>
      </div>
      <Footer />
    </div>
  );
}
