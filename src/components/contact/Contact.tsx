"use client";

import { useState } from "react";
import {
	FiMapPin,
	FiPhone,
	FiGlobe,
	FiCopy,
	FiCheck,
	FiExternalLink,
} from "react-icons/fi";

type CardProps = {
	icon: React.ReactNode;
	title: string;
	body: React.ReactNode;
	actions: React.ReactNode;
};

const cardBase =
	"group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition hover:border-white/15 hover:bg-white/[0.07] flex flex-col";
const iconWrap = "mb-6 flex items-center justify-center";
const iconBadge = "rounded-xl bg-orange-500/15 p-3";
const h3Base = "text-lg font-semibold";
const bodyBase = "mt-2 min-h-[56px] text-sm leading-relaxed text-zinc-300";
const actionsBase = "mt-6 flex flex-wrap items-center gap-3";

const btnPrimary =
	"inline-flex items-center gap-2 rounded-xl bg-orange-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";
const btnGhost =
	"inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm font-semibold text-zinc-200 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";

export default function ContactSection() {
	const address = "Plot No. 45, Industrial Area, Hyderabad, Telangana 500072";
	const phone = "+91 98765 43210";
	const website = "www.srilaxmisales.com";

	const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
		address
	)}`;
	const telHref = `tel:${phone.replace(/\s+/g, "")}`;
	const webHref = `https://${website.replace(/^https?:\/\//, "")}`;

	const [copied, setCopied] = useState<"address" | "phone" | "website" | null>(
		null
	);
	const copy = async (key: "address" | "phone" | "website", text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(key);
			setTimeout(() => setCopied(null), 1500);
		} catch {}
	};

	const Card = ({ icon, title, body, actions }: CardProps) => (
		<div className={cardBase}>
			<div className={iconWrap}>
				<div className={iconBadge}>{icon}</div>
			</div>
			<h3 className={h3Base}>{title}</h3>
			<div className={bodyBase}>{body}</div>
			<div className={actionsBase}>{actions}</div>
		</div>
	);

	return (
		<section className="relative overflow-hidden bg-[#0b0b0b] text-white">
			{/* background glow */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(800px 400px at 50% -10%, rgba(255,125,40,0.18), transparent), radial-gradient(600px 300px at 0% 100%, rgba(255,125,40,0.12), transparent)",
				}}
			/>
			{/* subtle grid */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.3)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.3)_96%)] bg-[size:24px_24px]"
			/>

			<div className="relative mx-auto max-w-6xl px-6 py-24">
				<div className="text-center">
					<span className="inline-block rounded-full border mt-10 border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
						Contact
					</span>
					<h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
						Reach Out to Sri Laxmi
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 md:text-base">
						We&apos;re here to help with orders, specifications, and on-site
						support.
					</p>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
					{/* Address */}
					<Card
						icon={<FiMapPin className="text-orange-400" size={28} />}
						title="Address"
						body={
							<>
								Plot No. 45, Industrial Area
								<br /> Hyderabad, Telangana 500072
							</>
						}
						actions={
							<>
								<a
									href={mapHref}
									target="_blank"
									rel="noreferrer"
									className={btnPrimary}>
									<FiExternalLink /> Get Directions
								</a>
								<button
									onClick={() => copy("address", address)}
									className={btnGhost}
									aria-label="Copy address">
									{copied === "address" ? <FiCheck /> : <FiCopy />}{" "}
									{copied === "address" ? "Copied" : "Copy"}
								</button>
							</>
						}
					/>

					{/* Phone */}
					<Card
						icon={<FiPhone className="text-orange-400" size={28} />}
						title="Phone"
						body={<span>{phone}</span>}
						actions={
							<>
								<a href={telHref} className={btnPrimary}>
									Call Now
								</a>
								<button
									onClick={() => copy("phone", phone)}
									className={btnGhost}
									aria-label="Copy phone">
									{copied === "phone" ? <FiCheck /> : <FiCopy />}{" "}
									{copied === "phone" ? "Copied" : "Copy"}
								</button>
							</>
						}
					/>

					{/* Website */}
					<Card
						icon={<FiGlobe className="text-orange-400" size={28} />}
						title="Website"
						body={<span>{website}</span>}
						actions={
							<>
								<a
									href={webHref}
									target="_blank"
									rel="noreferrer"
									className={btnPrimary}>
									Visit Site
								</a>
								<button
									onClick={() => copy("website", webHref)}
									className={btnGhost}
									aria-label="Copy website">
									{copied === "website" ? <FiCheck /> : <FiCopy />}{" "}
									{copied === "website" ? "Copied" : "Copy"}
								</button>
							</>
						}
					/>
				</div>

				{/* CTA to Email */}
				<div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-white/5 p-6 md:p-8 text-center">
					<p className="text-sm text-zinc-300">
						Need quotations or technical specs?{" "}
						<a
							href="mailto:sales@srilaxmisales.com"
							className="font-semibold text-orange-400 underline-offset-4 hover:underline">
							Send us your requirements
						</a>
						.
					</p>
				</div>
			</div>
		</section>
	);
}
