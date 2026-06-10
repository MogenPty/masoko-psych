"use client";

import { motion } from "framer-motion";
import { Clock, CreditCard, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HOURS = [
	{ day: "Monday – Friday", hours: "09:00 – 18:00" },
	{ day: "Saturday", hours: "09:00 – 13:00" },
	{ day: "Sunday", hours: "Closed" },
];

function isPracticeOpen() {
	const now = new Date();
	const day = now.getDay(); // 0 = Sunday, 6 = Saturday
	const hour = now.getHours();
	const minute = now.getMinutes();
	const time = hour + minute / 60;

	if (day >= 1 && day <= 5 && time >= 9 && time < 18) return true;
	if (day === 6 && time >= 9 && time < 13) return true;
	return false;
}

export default function Pricing() {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true);
			},
			{ threshold: 0.1 },
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		setOpen(isPracticeOpen());
	}, []);

	const scrollToContact = () => {
		document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id={"pricing"}
			ref={ref}
			style={{ backgroundColor: "#F8F5F2", padding: "120px 0" }}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={visible ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="flex items-center gap-4 mb-16"
				>
					<div className="w-10 h-px" style={{ backgroundColor: "#0D9488" }} />
					<span
						style={{
							fontFamily: "'Inter', sans-serif",
							fontSize: "11px",
							letterSpacing: "0.2em",
							textTransform: "uppercase",
							color: "#0D9488",
						}}
					>
						Pricing & Hours
					</span>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16">
					{/* Pricing */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={visible ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.1 }}
					>
						<h2
							style={{
								fontFamily: "'Instrument Serif', serif",
								fontSize: "clamp(2rem, 4vw, 3rem)",
								color: "#121D2F",
								lineHeight: 1.1,
								marginBottom: "2rem",
							}}
						>
							Transparent,
							<br />
							<em style={{ fontStyle: "italic" }}>accessible care.</em>
						</h2>

						<div className="flex flex-col gap-6">
							<div
								style={{
									padding: "32px",
									border: "1px solid rgba(18,29,47,0.12)",
									backgroundColor: "#fff",
								}}
							>
								<div className="flex items-start gap-4">
									<div
										style={{
											padding: "10px",
											backgroundColor: "rgba(13,148,136,0.08)",
											flexShrink: 0,
										}}
									>
										<CreditCard size={20} style={{ color: "#0D9488" }} />
									</div>
									<div>
										<h3
											style={{
												fontFamily: "'Instrument Serif', serif",
												fontSize: "1.4rem",
												color: "#121D2F",
												marginBottom: "8px",
											}}
										>
											Medical Aid Rates
										</h3>
										<p
											style={{
												fontFamily: "'Inter', sans-serif",
												fontSize: "1rem",
												color: "rgba(18,29,47,0.65)",
												lineHeight: 1.7,
												fontWeight: 300,
											}}
										>
											I charge medical aid rates and am registered with most
											major medical schemes. I am happy to claim directly from
											your medical aid on your behalf.
										</p>
									</div>
								</div>
							</div>

							<div
								style={{
									padding: "32px",
									border: "1px solid rgba(18,29,47,0.12)",
									backgroundColor: "#fff",
								}}
							>
								<div className="flex items-start gap-4">
									<div
										style={{
											padding: "10px",
											backgroundColor: "rgba(13,148,136,0.08)",
											flexShrink: 0,
										}}
									>
										<Phone size={20} style={{ color: "#0D9488" }} />
									</div>
									<div>
										<h3
											style={{
												fontFamily: "'Instrument Serif', serif",
												fontSize: "1.4rem",
												color: "#121D2F",
												marginBottom: "8px",
											}}
										>
											Cash / Private Rates
										</h3>
										<p
											style={{
												fontFamily: "'Inter', sans-serif",
												fontSize: "1rem",
												color: "rgba(18,29,47,0.65)",
												lineHeight: 1.7,
												fontWeight: 300,
											}}
										>
											Private cash rates are available. Please contact our
											office for detailed information on fees.
										</p>
									</div>
								</div>
							</div>
						</div>

						<button
												type="button"
							onClick={scrollToContact}
							className="focus-teal mt-8"
							style={{
								backgroundColor: "#0D9488",
								color: "#F8F5F2",
								fontFamily: "'Inter', sans-serif",
								fontSize: "13px",
								fontWeight: 500,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								padding: "16px 32px",
								border: "2px solid #0D9488",
								cursor: "pointer",
								transition: "all 0.3s ease",
								minHeight: "44px",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = "#121D2F";
								e.currentTarget.style.borderColor = "#121D2F";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = "#0D9488";
								e.currentTarget.style.borderColor = "#0D9488";
							}}
						>
							Enquire About Fees
						</button>
					</motion.div>

					{/* Hours */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={visible ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.25 }}
					>
						<div className="flex items-center gap-3 mb-8">
							<Clock size={18} style={{ color: "#0D9488" }} />
							<h3
								style={{
									fontFamily: "'Instrument Serif', serif",
									fontSize: "1.8rem",
									color: "#121D2F",
								}}
							>
								Working Hours
							</h3>
							<div
								style={{
									marginLeft: "auto",
									padding: "4px 12px",
									backgroundColor: open
										? "rgba(13, 148, 136, 0.1)"
										: "rgba(18,29,47,0.06)",
									border: `1px solid ${open ? "#0D9488" : "rgba(18,29,47,0.15)"}`,
									display: "flex",
									alignItems: "center",
									gap: "6px",
								}}
							>
								<div
									style={{
										width: "6px",
										height: "6px",
										borderRadius: "50%",
										backgroundColor: open ? "#0D9488" : "rgba(18,29,47,0.3)",
									}}
								/>
								<span
									style={{
										fontFamily: "'Inter', sans-serif",
										fontSize: "11px",
										fontWeight: 500,
										color: open ? "#0D9488" : "rgba(18,29,47,0.5)",
										letterSpacing: "0.05em",
									}}
								>
									{open ? "Open now" : "Closed"}
								</span>
							</div>
						</div>

						<div className="flex flex-col">
							{HOURS.map((row, i) => (
								<div
									key={row.hours}
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										padding: "20px 0",
										borderBottom:
											i < HOURS.length - 1
												? "1px solid rgba(18,29,47,0.08)"
												: "none",
									}}
								>
									<span
										style={{
											fontFamily: "'Inter', sans-serif",
											fontSize: "1rem",
											color: "rgba(18,29,47,0.65)",
											fontWeight: 400,
										}}
									>
										{row.day}
									</span>
									<span
										style={{
											fontFamily: "'Instrument Serif', serif",
											fontSize: "1.1rem",
											color:
												row.hours === "Closed"
													? "rgba(18,29,47,0.3)"
													: "#121D2F",
										}}
									>
										{row.hours}
									</span>
								</div>
							))}
						</div>

						<div className="mt-10 p-8" style={{ backgroundColor: "#121D2F" }}>
							<h4
								style={{
									fontFamily: "'Instrument Serif', serif",
									fontSize: "1.3rem",
									color: "#F8F5F2",
									marginBottom: "8px",
								}}
							>
								Locations
							</h4>
							<div className="flex flex-col gap-3 mt-4">
								{["Randburg, Johannesburg", "Soweto, Johannesburg"].map(
									(loc) => (
										<div key={loc} className="flex items-center gap-3">
											<div
												style={{
													width: "6px",
													height: "6px",
													backgroundColor: "#0D9488",
													borderRadius: "50%",
													flexShrink: 0,
												}}
											/>
											<span
												style={{
													fontFamily: "'Inter', sans-serif",
													fontSize: "1rem",
													color: "rgba(248,245,242,0.7)",
													fontWeight: 300,
												}}
											>
												{loc}
											</span>
										</div>
									),
								)}
								<div className="flex items-center gap-3">
									<div
										style={{
											width: "6px",
											height: "6px",
											backgroundColor: "#0D9488",
											borderRadius: "50%",
											flexShrink: 0,
										}}
									/>
									<span
										style={{
											fontFamily: "'Inter', sans-serif",
											fontSize: "1rem",
											color: "rgba(248,245,242,0.7)",
											fontWeight: 300,
										}}
									>
										Online via Teams or Zoom (nationwide)
									</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
