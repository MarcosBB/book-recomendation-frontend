import React from "react";

export default function Header() {
    return (
        <header className="bg-purple-2  w-full">
            <div className="flex items-center justify-between gap-3 max-w-[1296px] mx-auto">
                <a className="cursor-pointer"><img src="/logo.svg" alt="logo" /></a>
                <div className="flex items-center gap-5">
                    <div className="flex items-center bg-purple-5 p-[2px] rounded-l-full gap-1">
                        <button className="bg-purple-2 rounded-full p-3"><img src="/search.svg" alt="Search" /></button>
                        <input type="text" placeholder="Search a book..." className="bg-purple-5 p-2 text-purple-1 placeholder:text-purple-1/25" />
                    </div>
                    <button className="bg-purple-5 rounded-full p-3"><img src="/profile.svg" alt="Profile options" /></button>
                </div>
            </div>
        </header>
    );
}
