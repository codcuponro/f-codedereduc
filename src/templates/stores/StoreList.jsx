'use client';

import { useState, useMemo } from 'react';
import Title from '@/components/title/title';
import Link from 'next/link';

export default function StoreList({ stores = [] }) {
    const [selectedLetter, setSelectedLetter] = useState('A');
    
    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const numbersRegex = /^[0-9]/;

    const filteredStores = useMemo(() => {
        return stores.filter(store => 
            selectedLetter === '0-9'
                ? numbersRegex.test(store.Name)
                : store.Name.toUpperCase().startsWith(selectedLetter)
        );
    }, [stores, selectedLetter]);

    // Group stores by first letter for static rendering
    const storesByLetter = useMemo(() => {
        const groups = {};
        stores.forEach(store => {
            const firstChar = numbersRegex.test(store.Name) ? '0-9' : store.Name.toUpperCase()[0];
            if (!groups[firstChar]) {
                groups[firstChar] = [];
            }
            groups[firstChar].push(store);
        });
        return groups;
    }, [stores]);

    return (
        <div className="container mx-auto px-4 lg:px-0">
            <Title title="Toate Magazinele" />
            
            {/* SEO-friendly description */}
            <div className="sr-only">
                <p>Descoperă toate magazinele partenere CodCupon. Fiecare magazin oferă coduri de reducere și vouchere exclusive pentru a te ajuta să economisești la cumpărături.</p>
            </div>

            {/* Alphabet Selector - Client-side interactive */}
            <div className="flex flex-wrap gap-2 mt-10 mb-9 interactive" role="navigation" aria-label="Navigare alfabetică magazine">
                {[...alphabet, '0-9'].map(letter => (
                    <button
                        key={letter}
                        onClick={() => setSelectedLetter(letter)}
                        className={`w-9 h-9 border rounded-md transition-colors 
                            ${selectedLetter === letter 
                                ? 'bg-primary text-white' 
                                : 'border-gray-300 text-gray-700 hover:bg-primary hover:text-white'}`}
                        aria-label={`Arată magazinele care încep cu ${letter}`}
                        aria-current={selectedLetter === letter ? 'page' : undefined}
                    >
                        {letter}
                    </button>
                ))}
            </div>

            {/* Store List - Static content with client-side filtering */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-32 interactive" role="list">
                {filteredStores.length > 0 ? (
                    filteredStores.map(({ Name, Slug }, index) => (
                        <div key={index} className="capitalize" role="listitem">
                            <Link 
                                href={`/magazine/${Slug}`} 
                                className="hover:text-primary"
                                aria-label={`Vezi coduri reducere și vouchere pentru ${Name}`}
                            >
                                {Name}
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-gray-500">Nu s-au găsit magazine.</p>
                )}
            </div>

            {/* Static content for SEO - Hidden visually */}
            <div className="sr-only">
                <h2>Listă completă magazine partenere</h2>
                <p>Găsește toate magazinele partenere CodCupon, organizate alfabetic, cu coduri de reducere și vouchere exclusive.</p>
                {Object.entries(storesByLetter).map(([letter, letterStores]) => (
                    <div key={letter}>
                        <h3>Magazine cu litera {letter}</h3>
                        <ul>
                            {letterStores.map(({ Name, Slug }) => (
                                <li key={Slug}>
                                    <Link href={`/magazine/${Slug}`} aria-label={`Vezi coduri reducere și vouchere pentru ${Name}`}>
                                        {Name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
