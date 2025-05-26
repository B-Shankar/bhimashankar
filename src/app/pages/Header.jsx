import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start my-8 ">
        {/* Logo Section */}
        <div className="absolute top-4 md:left-16 left-4 flex items-center">
          <Image
            src="/favicon/favicon.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain rounded-full border-2 border-black border-opacity-20"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:w-9/12 text-center md:text-left">
        <h1
          className="text-2xl md:text-5xl font-bold overflow-hidden whitespace-nowrap border-r-4 border-gray-600 inline-block"
          style={{
            animation: "type 3s steps(28, end), blink 0.75s step-end infinite", // Adjusted steps for faster typing
            display: "inline-block",
            maxWidth: "25ch", // Limit the width to 20 characters
            lineHeight: "1.0", // Adjust line height for better spacing
            paddingBottom: "0.5rem", // Add padding to prevent clipping
            fontFamily: "monospace", // Set font-family to monospace
          }}
        >
          Hey, I'm Bhimashankar!
        </h1>
          <p className="md:text-xl mt-4 text-gray-600">
            Passionate developer with a love for creating innovative solutions.
            I specialize in fullstack development and enjoy working with various
            technologies to bring ideas to life. My vibe? Crafting apps that
            don’t just work but vibe with you—functionality meets flawless user
            experience.✨
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex-none md:w-64 md:h-64 h-24 w-24 bg-red-400 rounded-full overflow-hidden mb-4 md:mb-0">
          <Image
            src="/Me.jpg"
            alt="Bhimashankar"
            fill
            sizes="(max-width: 768px) 50vw,
            (max-width: 1200px) 33vw,
            25vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Header;