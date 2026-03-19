"use client";

import React from 'react';
import Link from 'next/link';

interface ContactLinkProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function ContactLink({ children, className, onClick }: ContactLinkProps) {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // We still want Link to handle the URL change if we're on a different page,
        // but if we're on the same page, we might need to force the scroll.

        const targetId = "contact";
        const element = document.getElementById(targetId);

        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
            // Update the URL without a full page reload or scroll reset
            window.history.pushState(null, '', `#${targetId}`);

            if (onClick) onClick();
        }
    };

    return (
        <Link
            href="#contact"
            onClick={handleScroll}
            className={className}
        >
            {children}
        </Link>
    );
}
