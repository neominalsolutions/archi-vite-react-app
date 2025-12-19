import React from 'react';

interface LinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	rel?: string;
}

export const Link: React.FC<LinkProps> = ({
	href,
	children,
	className = '',
	target = '_self',
	rel,
}) => {
	return (
		<a
			href={href}
			target={target}
			rel={rel}
			className={`text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 ${className}`}
		>
			{children}
		</a>
	);
};
