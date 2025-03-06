"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const TOC = () => {
    const [toc, setToc] = useState([]);

    useEffect(() => {
        const headings = Array.from(document.querySelectorAll('h1, h2'));
        const tocItems = headings.map((heading) => {
            const id = heading.innerText.toLowerCase().replace(/\s+/g, '-');
            heading.id = id; // Set the ID to allow smooth scrolling
            return { id, text: heading.innerText, level: heading.tagName };
        });

        setToc(tocItems);
    }, []);

    return (
        <div className='mt-[30px]'>
            <h3 className='text-xl text-dark font-semibold mb-5'>Table of Contents</h3>
            <ul className='text-sm text-dark flex flex-col gap-1.5'>
                {toc.map((item, index) => {
                    const HeadingTag = item.level.toLowerCase();
                    return (
                        <li key={index} className={item.level === 'H2' ? '' : ''}>
                            <Link href={`#${item.id}`} className="hover:underline">
                                {React.createElement(HeadingTag, {}, item.text)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TOC;
