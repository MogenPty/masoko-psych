"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SPECIALTIES = [
	"Depression & Suicidal Ideation",
	"Anxiety",
	"Panic Disorder",
	"Generalized Anxiety Disorder",
	"PTSD",
	"Trauma",
	"Grief & Bereavement",
	"Adjustment Issues",
	"Stress",
	"Anger Management",
	"Personal Growth",
	"Work-Related Stress",
	"Feeling Stuck in Life",
	"Emotional Difficulties",
	"Substance Abuse",
	"Coping with Illness",
	"Parenting Challenges",
	"Relationship Difficulties",
	"Low Self-Esteem",
	"Divorce & Separation",
];

export default function Expertise() {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	const [hovered, setHovered] = useState(null);

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

	return (
		<section
			id="expertise"
			ref={ref}
			style={{
				backgroundColor: "#F8F5F2",
				padding: "120px 0",
				borderTop: "1px solid rgba(18,29,47,0.08)",
			}}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
				<div className="grid lg:grid-cols-12 gap-16">
					{/* Left label col */}
					<div className="lg:col-span-4">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={visible ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6 }}
							className="flex items-center gap-4 mb-8"
						>
							<div
								className="w-10 h-px"
								style={{ backgroundColor: "#0D9488" }}
							/>
							<span
								style={{
									fontFamily: "'Inter', sans-serif",
									fontSize: "11px",
									letterSpacing: "0.2em",
									textTransform: "uppercase",
									color: "#0D9488",
								}}
							>
								Areas of Expertise
							</span>
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							animate={visible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.1 }}
							style={{
								fontFamily: "'Instrument Serif', serif",
								fontSize: "clamp(2rem, 4vw, 3.2rem)",
								color: "#121D2F",
								lineHeight: 1.1,
								marginBottom: "1.5rem",
							}}
						>
							Conditions I<br />
							<em style={{ fontStyle: "italic" }}>specialise in.</em>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={visible ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.7, delay: 0.3 }}
							style={{
								fontFamily: "'Inter', sans-serif",
								fontSize: "1.125rem",
								color: "rgba(18,29,47,0.6)",
								lineHeight: 1.7,
								fontWeight: 300,
							}}
						>
							With over a decade of clinical experience, I have developed deep
							expertise across a broad range of psychological conditions and
							life challenges.
						</motion.p>
					</div>

					{/* Right — specialty tags */}
					<div className="lg:col-span-8">
						<div className="flex flex-wrap gap-3">
							{SPECIALTIES.map((item, i) => (
								<motion.span
									key={item}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={visible ? { opacity: 1, scale: 1 } : {}}
									transition={{ duration: 0.4, delay: i * 0.03 }}
									onMouseEnter={() => setHovered(i)}
									onMouseLeave={() => setHovered(null)}
									style={{
										fontFamily: "'Inter', sans-serif",
										fontSize: "14px",
										fontWeight: 400,
										letterSpacing: "0.02em",
										padding: "10px 20px",
										border:
											hovered === i
												? "1px solid #0D9488"
												: "1px solid rgba(18, 29, 47, 0.15)",
										backgroundColor:
											hovered === i
												? "rgba(13, 148, 136, 0.06)"
												: "transparent",
										color: hovered === i ? "#0D9488" : "#121D2F",
										cursor: "default",
										transition: "all 0.25s ease",
										transform:
											hovered === i ? "translateY(-2px)" : "translateY(0)",
										display: "inline-block",
										userSelect: "none",
									}}
								>
									{item}
								</motion.span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
