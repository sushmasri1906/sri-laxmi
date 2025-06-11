"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const links = [
	{ href: "/",  icon: <FaHome /> },
	{ href: "/about", name: "About Us" },
	{ href: "/products", name: "Products" },
	{ href: "/machinery", name: "Our Machinery" },
	{ href: "/gallery", name: "Gallery" },
	{ href: "/contact", name: "Contact" },
];


const NavBar = () => {
	const pathname = usePathname();
	const [selected, setSelected] = useState("/");
	const [hovered, setHovered] = useState<string | null>(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		setSelected(pathname);
		const handleScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [pathname]);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-white"
			}`}>
			<div className="max-w-7xl mx-auto px-4 lg:px-16 h-16 flex items-center justify-between text-gray-800">
				<h1 className="text-xl lg:text-2xl font-bold tracking-wide text-orange-500">
					Sri Laxmi
				</h1>

				{/* Desktop Menu */}
				<div className="hidden lg:flex items-center gap-x-6 text-sm font-medium">
					{links.map((link) => (
						<div
							key={link.href}
							onMouseEnter={() => setHovered(link.href)}
							onMouseLeave={() => setHovered(null)}
							className="relative px-2 py-1 flex items-center gap-1">
							<Link
								href={link.href}
								className={`flex items-center gap-2 transition duration-300 ${
									selected === link.href
										? "text-orange-500"
										: "hover:text-orange-400"
								}`}>
								{link.icon && <span className="text-base">{link.icon}</span>}
								{link.name}
							</Link>
							<AnimatePresence>
								{(hovered === link.href || selected === link.href) && (
									<motion.div
										layoutId="underline"
										className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"
										transition={{ type: "spring", stiffness: 500, damping: 30 }}
									/>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>

				{/* Mobile Menu Toggle */}
				<button
					onClick={() => setMenuOpen(true)}
					className="lg:hidden text-gray-700"
					aria-label="Open Menu">
					<FaBars size={22} />
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<>
						{/* Overlay - tap to close */}
						<motion.div
							className="fixed inset-0 bg-black/40 z-40 lg:hidden"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							onClick={() => setMenuOpen(false)}
						/>

						{/* Slide-in Menu Panel */}
						<motion.div
							className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white text-gray-800 flex flex-col px-6 pt-24 space-y-6 z-50 shadow-xl"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}>
							{/* Close Button */}
							<button
								onClick={() => setMenuOpen(false)}
								className="absolute top-6 right-6 text-orange-500 hover:rotate-90 transition-transform duration-300"
								aria-label="Close Menu">
								<FaTimes size={26} />
							</button>

							{/* Links */}
							{links.map((link) => (
								<motion.div
									key={link.href}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									<Link
										href={link.href}
										onClick={() => setMenuOpen(false)}
										className={`flex items-center gap-3 text-base font-medium transition-colors duration-300 ${
											selected === link.href
												? "text-orange-500"
												: "hover:text-orange-400"
										}`}>
										{link.icon && <span className="text-lg">{link.icon}</span>}
										{link.name}
									</Link>
								</motion.div>
							))}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default NavBar;
