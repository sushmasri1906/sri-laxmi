import { FiMapPin, FiPhone, FiMail, FiGlobe } from "react-icons/fi";

export default function ContactSection() {
	return (
		<section className="bg-[#0f0f0f] text-white px-6 py-24 mt-26">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
				{/* Left Content */}
				<div className="max-w-md mx-auto">
					<p className="text-orange-600 font-semibold uppercase tracking-wider mb-3">
						Contact Us
					</p>
					<h2 className="text-4xl font-bold leading-tight mb-6">
						Reach Out to Sri Laxmi
					</h2>
					<p className="text-gray-300 mb-10">
						Have a question about our machinery or services? We&apos;re ready to
						assist with your needs. Contact Sri Laxmi Sales Corporation today.
					</p>

					<div className="space-y-6">
						<div className="flex items-start gap-4">
							<FiMapPin className="text-orange-600 mt-1" size={22} />
							<div>
								<p className="font-semibold">Address</p>
								<p className="text-gray-300">
									Plot No. 45, Industrial Area, Hyderabad, Telangana 500072
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<FiPhone className="text-orange-600 mt-1" size={22} />
							<div>
								<p className="font-semibold">Phone</p>
								<p className="text-gray-300">+91 98765 43210</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<FiMail className="text-orange-600 mt-1" size={22} />
							<div>
								<p className="font-semibold">Email</p>
								<p className="text-gray-300">sales@srilaxmisales.com</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<FiGlobe className="text-orange-600 mt-1" size={22} />
							<div>
								<p className="font-semibold">Website</p>
								<p className="text-gray-300">www.srilaxmisales.com</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right Form */}
				<div className="max-w-lg mx-auto bg-[#1a1a1a] p-8 rounded-lg">
					<form className="space-y-6">
						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<label className="block font-medium mb-1">
									Name <span className="text-orange-600">*</span>
								</label>
								<input
									type="text"
									placeholder="Your Name"
									className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-[#0f0f0f] text-white focus:ring-2 focus:ring-orange-600 outline-none transition duration-150"
								/>
							</div>
							<div>
								<label className="block font-medium mb-1">
									Email <span className="text-orange-600">*</span>
								</label>
								<input
									type="email"
									placeholder="Your Email"
									className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-[#0f0f0f] text-white focus:ring-2 focus:ring-orange-600 outline-none transition duration-150"
								/>
							</div>
						</div>
						<div>
							<label className="block font-medium mb-1">Message</label>
							<textarea
								placeholder="Write your message here..."
								rows={5}
								className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-[#0f0f0f] text-white focus:ring-2 focus:ring-orange-600 outline-none transition duration-150"
							/>
						</div>
						<button
							type="submit"
							className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 transition duration-200">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
