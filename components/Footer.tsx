import React from "react";

export default function Footer() {
	return (
		<footer className="py-6 text-center text-black/60">
			&copy; {new Date().getFullYear()} Flo Hohenleitner
		</footer>
	);
}
