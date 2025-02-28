'use client';

import { useState, useMemo } from 'react';
import Title from '@/components/title/title';
import Link from 'next/link';

export default function StoreList({ stores = [] }) {
    const [selectedLetter, setSelectedLetter] = useState('A');
    
    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // Improved readability
    const numbersRegex = /^[0-9]/; // Matches names starting with a number

    // Memoized store filtering
    const filteredStores = useMemo(() => {
        return stores.filter(store => 
            selectedLetter === '0-9'
                ? numbersRegex.test(store.Name) // Check if Name starts with a number
                : store.Name.toUpperCase().startsWith(selectedLetter) // Case-insensitive check
        );
    }, [stores, selectedLetter]);

    return (
        <div className="container mx-auto px-4 lg:px-0">
            <Title title="All Stores" />

            {/* Alphabet Selector */}
            <div className="flex flex-wrap gap-2 mt-10 mb-9">
                {[...alphabet, '0-9'].map(letter => (
                    <button
                        key={letter}
                        onClick={() => setSelectedLetter(letter)}
                        className={`w-9 h-9 border rounded-md transition-colors 
                            ${selectedLetter === letter 
                                ? 'bg-primary text-white' 
                                : 'border-gray-300 text-gray-700 hover:bg-primary hover:text-white'}`}
                    >
                        {letter}
                    </button>
                ))}
            </div>

            {/* Store List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-32">
                {filteredStores.length > 0 ? (
                    filteredStores.map(({ Name, Slug }, index) => (
                        <div key={index} className="capitalize">
                            <a href={`/stores/${Slug}`} className="hover:text-primary">
                                {Name}
                            </a>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-gray-500">No stores found.</p>
                )}
            </div>
        </div>
    );
}
