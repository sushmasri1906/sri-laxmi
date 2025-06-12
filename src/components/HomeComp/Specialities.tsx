"use client";

import { FiClock, FiMail, FiMapPin } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

const Specialities = () => {
	return (
		<section className="bg-black w-full py-10 px-6 md:px-20 text-white">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
					Our Specialities
				</h2>
				<div className="w-24 h-1 bg-orange-500 mx-auto mb-12" />

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Card 1 */}
					<div className="group bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm text-center transition duration-300 hover:bg-orange-600 hover:text-white hover:scale-105">
						<FiClock
							size={44}
							className="text-orange-500 group-hover:text-white mx-auto mb-4"
						/>
						<h4 className="text-lg font-semibold mb-2">Timely Delivery</h4>
						<p className="text-sm text-gray-300 group-hover:text-white/90">
							We prioritize rapid dispatch, ensuring fast and reliable product
							delivery.
						</p>
					</div>

					{/* Card 2 */}
					<div className="group bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm text-center transition duration-300 hover:bg-orange-600 hover:text-white hover:scale-105">
						<FiMail
							size={44}
							className="text-orange-500 group-hover:text-white mx-auto mb-4"
						/>
						<h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
						<p className="text-sm text-gray-300 group-hover:text-white/90">
							Our team works round the clock to resolve all support concerns
							within 24 hours.
						</p>
					</div>

					{/* Card 3 */}
					<div className="group bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm text-center transition duration-300 hover:bg-orange-600 hover:text-white hover:scale-105">
						<FiMapPin
							size={44}
							className="text-orange-500 group-hover:text-white mx-auto mb-4"
						/>
						<h4 className="text-lg font-semibold mb-2">
							Professional Training
						</h4>
						<p className="text-sm text-gray-300 group-hover:text-white/90">
							We equip customers with expert training for operational
							excellence.
						</p>
					</div>

					{/* Card 4 */}
					<div className="group bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-sm text-center transition duration-300 hover:bg-orange-600 hover:text-white hover:scale-105">
						<MdVerified
							size={44}
							className="text-orange-500 group-hover:text-white mx-auto mb-4"
						/>
						<h4 className="text-lg font-semibold mb-2">
							Fail-Safe Commissioning
						</h4>
						<p className="text-sm text-gray-300 group-hover:text-white/90">
							All our products undergo foolproof commissioning to ensure safe
							and seamless operation.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Specialities;
