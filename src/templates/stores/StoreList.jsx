'use client';
import Title from '@/components/title/title';
import Link from 'next/link';
import { useState } from 'react';


export default function StoreList({stores}) {

    const [selectedLetter, setSelectedLetter] = useState('A');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const numbers = '0123456789';

    const filteredStores = stores.filter(store =>
        selectedLetter === '0-9' ? numbers.includes(store.Name) : store.Name.startsWith(selectedLetter)
    );

    return (
        <div className="container mx-auto px-4 lg:px-0">
            <Title
                title="All stores"
            />

            <div className="flex flex-wrap gap-2 mt-[43px] mb-[37px]">
                {[...alphabet, '0-9'].map(letter => (
                    <button
                        key={letter}
                        onClick={() => setSelectedLetter(letter)}
                        className={`w-[34px] h-[34px] border rounded-md hover:bg-primary hover:text-white ${selectedLetter === letter ? 'bg-primary text-white' : 'border-[#DFE4EA] text-gray-700'}`}
                    >
                        {letter}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-[128px]">
                {filteredStores.length > 0 ? (
                    filteredStores.map((store, index) => (
                        <div key={index} className="capitalize">
                            <Link href={`/stores/${store?.Slug}`} className='hover:text-primary'>{store?.Name}</Link>
                        </div>
                    ))
                ) : (
                    <p className="col-span-3 text-gray-500">No stores found.</p>
                )}
            </div>
        </div>
    );
}