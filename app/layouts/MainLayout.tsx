'use client';

import React from "react"
import SideNavMain from "./includes/SideNavMain"
import TopNav from "./includes/TopNav"
import { usePathname } from "next/navigation"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
      	<>
			<TopNav/>
            <div 
                className={`flex justify-between mx-auto w-full px-4 ${pathname == '/' ? 'max-w-[1140px]' : ''}`}
            >
                <div className="lg:w-[calc(100%-580px)] md:w-[calc(100%-330px)] sm:w-full w-full">
                    {children}
                </div>

				<SideNavMain />
			</div>
      	</>
    )
}
