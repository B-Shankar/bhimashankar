import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-3 relative mb-6">
      <h2 className="text-xl font-bold relative">Experience</h2>
      <div className="flex flex-col space-y-5">
        
        {/* SwingBell Labs - Fullstack Developer */}
        <Link
          className="block cursor-pointer"
          href="https://swingbell.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-lg bg-card text-card-foreground flex items-center">
            <div className="flex-none">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-[hsl(252.79deg_4.85%_40.84%)] size-12 m-auto bg-muted-background dark:bg-foreground">
                <Image
                  width={48}
                  height={48}
                  alt="SwingBell Labs Logo"
                  src="/experience/sbl.png"
                />
              </span>
            </div>
            <div className="flex ml-4 flex-col w-full">
              <Link
                href="https://swingbell.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm sm:text-base text-primary hover:underline"
              >
                SwingBell Labs, Bengaluru
              </Link>
              <div className="flex justify-between items-center w-full">
                <p className="font-bold text-xs sm:text-sm text-muted-foreground">
                  Fullstack Developer
                </p>
                <p className="font-bold text-xs sm:text-sm text-muted-foreground text-right">
                  Jun 2024 - Present
                </p>
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside mt-2 ml-11 text-xs sm:text-sm text-muted-foreground">
            <li>Developed scalable web applications using React and Node.js.</li>
            <li>Collaborated with cross-functional teams to deliver projects on time.</li>
            <li>Implemented CI/CD pipelines to streamline deployment processes.</li>
            <li>Optimized application performance, reducing load times by 30%.</li>
            <li>Mentored junior developers and conducted code reviews.</li>
          </ul>
        </Link>

        {/* SwingBell Labs - Engineering Intern */}
        <Link
          className="block cursor-pointer"
          href="https://swingbell.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-lg bg-card text-card-foreground flex items-center">
            <div className="flex-none">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-[hsl(252.79deg_4.85%_40.84%)] size-12 m-auto bg-muted-background dark:bg-foreground">
                <Image
                  width={48}
                  height={48}
                  alt="SwingBell Labs Logo"
                  src="/experience/sbl.png"
                />
              </span>
            </div>
            <div className="flex ml-4 flex-col w-full">
              <Link
                href="https://swingbell.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm sm:text-base text-primary hover:underline"
              >
                SwingBell Labs, Bengaluru
              </Link>
              <div className="flex justify-between items-center w-full">
                <p className="font-bold text-xs sm:text-sm text-muted-foreground">
                  Engineering Intern
                </p>
                <p className="font-bold text-xs sm:text-sm text-muted-foreground text-right">
                  Feb 2024 - May 2024
                </p>
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside mt-2 ml-11 text-xs sm:text-sm text-muted-foreground">
            <li>Designed and implemented responsive UI components.</li>
            <li>Worked closely with designers to ensure pixel-perfect designs.</li>
            <li>Integrated RESTful APIs into frontend applications.</li>
            <li>Conducted usability testing to improve user experience.</li>
            <li>Documented technical specifications and project workflows.</li>
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default Experience;