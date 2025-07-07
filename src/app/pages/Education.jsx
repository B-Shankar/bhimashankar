import Image from "next/image";
import Link from "next/link";
import React from "react";

const Education = () => {
	return (
		<div className="flex min-h-0 flex-col gap-y-3 relative">
			<h2 className="text-xl font-bold relative">Education</h2>
			<div className="flex flex-col space-y-5">
				<Link
					className="block cursor-pointer"
					href="https://sharnbasvauniversity.edu.in/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="rounded-lg bg-card text-card-foreground flex items-center ">
						<div className="flex-none">
							<span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-[hsl(252.79deg_4.85%_40.84%)] size-12 m-auto bg-muted-background dark:bg-foreground">
								<Image
								width={48}
								height={48}
									alt="Sharnbasva University Logo"
									src="/education/sharnbasvaUniversity.png"
								/>
							</span>
						</div>
						<div className="flex-grow ml-4 items-center flex-col group">
							<div className="flex flex-col">
								<div className="flex items-center justify-between gap-x-2 text-base">
									<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
										Sharnbasva University, Gulbarga
									</h3>
									<div className="text-xs sm:text-sm text-muted-foreground text-right flex-shrink-0">
										<div className="">2020 - 2024</div>
										<div className="">9.85 CGPA</div>
									</div>
								</div>
								<h3 className="font-sans text-xs text-muted-foreground">
									Bachelor's Degree of Electronics and Communication (ECE)
								</h3>
							</div>
						</div>
					</div>
				</Link>
				<Link
					className="block cursor-pointer"
					href="https://chandrakantpatilpucollege.in/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="rounded-lg bg-card text-card-foreground flex items-center ">
						<div className="flex-none">
							<span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-[hsl(252.79deg_4.85%_40.84%)] size-12 m-auto bg-muted-background dark:bg-foreground">
								<Image
									className="aspect-square h-full w-full object-cover"
									alt="CPM college Logo"
									src="/education/cpm.png"
									width={48}
									height={48}
								/>
							</span>
						</div>
						<div className="flex-grow ml-4 items-center flex-col group">
							<div className="flex flex-col">
								<div className="flex items-center justify-between gap-x-2 text-base">
									<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
										Chandrakant Patil Memorial PU College, Gulbarga
									</h3>
									<div className="text-xs sm:text-sm text-muted-foreground text-right flex-shrink-0">
										<div className="">2018 - 2020</div>
										<div className="">89.66 %</div>
									</div>
								</div>
								<h3 className="font-sans text-xs text-muted-foreground">
								{/* Pre-University Education in PCMC (Physics, Chemistry, Mathematics, and Computer Science) */}
								Pre-University Education 
								</h3>
							</div>
						</div>
					</div>
				</Link>
				<div
					className="block cursor-pointer"
					href={null}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="rounded-lg bg-card text-card-foreground flex items-center ">
						<div className="flex-none">
							<span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-[hsl(252.79deg_4.85%_40.84%)] size-12 m-auto bg-muted-background dark:bg-foreground">
								<Image
								width={48}
								height={48}
									alt="Priyadarshini Logo"
									src="/education/cyf.png"
								/>
							</span>
						</div>
						<div className="flex-grow ml-4 items-center flex-col group">
							<div className="flex flex-col">
								<div className="flex items-center justify-between gap-x-2 text-base">
									<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
										Chetan Youth Forum High School, Gulbarga
									</h3>
									<div className="text-xs sm:text-sm text-muted-foreground text-right flex-shrink-0">
									<div className="">2015 - 2018</div>
									<div className="">78.40 %</div>
									</div>
								</div>
								<h3 className="font-sans text-xs text-muted-foreground">
									Secondary Education
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;