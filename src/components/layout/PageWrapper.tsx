"use client";

import { ReactNode } from "react";

interface PageWrapperProps {
    children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <main
            id="main-content"
            role="main"
            className="animate-fade-in"
        >
            {children}
        </main>
    );
}
