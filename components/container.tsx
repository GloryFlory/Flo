import React from "react";

type ContainerProps = {
	children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
	return <div className="mx-auto max-w-3xl px-4">{children}</div>;
}
