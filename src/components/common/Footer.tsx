import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
	// one place to control icon sizing across breakpoints
	const iconCls =
		"text-orange-500 flex-shrink-0 h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4";

	return (
		<footer className="bg-[#0b0b0b] text-white">
			<div className="mx-auto max-w-7xl px-6 py-12 lg:px-20">
				<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
					{/* Company */}
					<div className="text-center sm:text-left">
						<div className="mb-4 flex justify-center sm:justify-start">
							<Image
								src="https://res.cloudinary.com/degrggosz/image/upload/v1749712620/29_zxpmin.png"
								alt="Sri Laxmi Sales Corporation"
								width={140}
								height={70}
								className="h-auto w-auto object-contain"
								priority
							/>
						</div>
						<p className="text-sm text-zinc-400">
							Trusted provider of heavy machinery, crusher spares, wire mesh,
							and conveyor parts for industrial needs.
						</p>
					</div>

					{/* Quick Links */}
					<nav className="text-center sm:text-left">
						<h3 className="mb-4 text-lg font-semibold text-orange-500">
							Quick Links
						</h3>
						<ul className="grid grid-cols-2 gap-2 text-sm text-zinc-300 sm:block sm:space-y-2">
							{[
								{ name: "Home", href: "/" },
								{ name: "About Us", href: "/about" },
								{ name: "Products", href: "/products" },
								{ name: "Gallery", href: "/gallery" },
								{ name: "Contact", href: "/contact" },
							].map((l) => (
								<li key={l.name}>
									<Link href={l.href} className="hover:text-orange-400">
										{l.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Contact */}
					<address className="not-italic text-center sm:text-left">
						<h3 className="mb-4 text-lg font-semibold text-orange-500">
							Contact
						</h3>
						<ul className="space-y-4 text-sm text-zinc-300">
							<li className="flex items-start justify-center gap-3 sm:justify-start">
								<FaMapMarkerAlt className={iconCls} />
								<span className="text-left">
									#2-3-85, Nallagutta, M.G. Road,
									<br />
									Behind Punjab National Bank,
									<br />
									Beside ALS Transport,
									<br />
									Secunderabad - 500003
								</span>
							</li>
							<li className="flex items-start justify-center gap-3 sm:justify-start">
								<FaPhoneAlt className={iconCls} />
								<span>9966236709, 040-66381090</span>
							</li>
							<li className="flex items-start justify-center gap-3 sm:justify-start">
								<FaEnvelope className={iconCls} />
								<span className="break-words">
									srilaxmisalescorporation@gmail.com
								</span>
							</li>
							<li className="pt-1 text-sm font-medium text-orange-500">
								GSTIN: 36AHDPG8022E1ZR
							</li>
						</ul>
					</address>
				</div>

				<hr className="my-10 border-zinc-800" />

				{/* Bottom bar: centered & stacked */}
				<div className="text-center text-sm text-zinc-500 space-y-2">
					<p>
						&copy; {new Date().getFullYear()} Sri Laxmi Sales Corporation. All
						rights reserved.
					</p>
					<p>
						Developed by{" "}
						<a
							href="https://hsdev.in"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-orange-400 hover:underline">
							HSDev
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
