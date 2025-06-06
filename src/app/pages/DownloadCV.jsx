import React from "react";
// import { FaFilePdf } from "react-icons/fa";

const DownloadCV = () => {
  return (
    <a
      href="/cv/Bhimashankar Holkundi-1.pdf" // Path to your CV file in the public folder
      download="Bhimashankar Holkundi.pdf" // Name of the file when downloaded
      className="flex items-center justify-center px-4 py-2 border-2 border-primary rounded-full text-primary font-semibold hover:text-black hover:bg-white transition duration-300"
    >
      Download CV 📃
    </a>
    // <FaFilePdf className="ml-2" />
  );
};

export default DownloadCV;
