import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="px-6 py-12 lg:px-20 text-center">
			<div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
				{/* Company Info */}
				<div className="justify-self-center w-60">
					<h2 className="text-center text-xl font-semibold text-orange-500 mb-4">
						Sri Laxmi
					</h2>
					<p className="text-sm text-gray-400">
						Trusted provider of heavy machinery, crusher spares, wire mesh, and
						conveyor parts for industrial needs.
					</p>
				</div>

				{/* Quick Links */}
				<div className="justify-self-center">
					<h3 className="text-lg font-medium mb-4 text-orange-500">
						Quick Links
					</h3>
					<ul className="space-y-2 text-sm text-gray-300">
						<li>
							<Link href="/" className="hover:text-orange-400">
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:text-orange-400">
								About Us
							</Link>
						</li>
						<li>
							<Link href="/products" className="hover:text-orange-400">
								Products
							</Link>
						</li>
						<li>
							<Link href="/gallery" className="hover:text-orange-400">
								Gallery
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-orange-400">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact Info */}
				<div className="justify-self-center w-60">
					<h3 className="text-lg text-center font-medium mb-4 text-orange-500">
						Contact
					</h3>
					<ul className="text-sm space-y-3 text-gray-300">
						<li className="flex items-start gap-2">
							<FaMapMarkerAlt className="text-orange-500 mt-1" />
							<span>
								#2-3-85, Nallagutta, M.G. Road,
								<br />
								Behind Punjab National Bank,
								<br />
								Beside ALS Transport,
								<br />
								Secunderabad - 500003
							</span>
						</li>
						<li className="flex items-center gap-2">
							<FaPhoneAlt className="text-orange-500" />
							9966236709, 040-66381090
						</li>
						<li className="flex items-center gap-2">
							<FaEnvelope className="text-orange-500" />
							srilaxmisalescorporation@gmail.com
						</li>
						<li className="text-orange-500 text-sm mt-2">
							GSTIN: 36HDPG8022E1ZR
						</li>
					</ul>
				</div>

				{/* Social Media */}
				<div className="justify-self-center">
					<h3 className="text-lg font-medium mb-4 text-orange-500">
						Follow Us
					</h3>
					<div className="flex gap-4">
						<a href="#" className="text-gray-300 hover:text-orange-400">
							<FaFacebookF size={18} />
						</a>
						<a href="#" className="text-gray-300 hover:text-orange-400">
							<FaInstagram size={18} />
						</a>
						<a href="#" className="text-gray-300 hover:text-orange-400">
							<FaLinkedinIn size={18} />
						</a>
					</div>
				</div>
			</div>

			<hr className="border-gray-700 my-8" />

			<p className="text-center text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Sri Laxmi Sales Corporation. All
				rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
