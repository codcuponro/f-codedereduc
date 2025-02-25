'use client';
import Title from '@/components/title/title';
import Link from 'next/link';
import { useState } from 'react';

const stores = [
    { name: 'AASport', slug: 'aasport' },
    { name: 'ABC ZOO', slug: 'abc-zoo' },
    { name: 'Abonamente Sail', slug: 'abonamente-sail' },
    { name: 'About You', slug: 'about-you' },
    { name: 'About You OUTLET', slug: 'about-you-outlet' },
    { name: 'Abubu', slug: 'abubu' },
    { name: 'Alex Store', slug: 'alex-store' },
    { name: 'Alianna', slug: 'alianna' },
    { name: 'AlidaFashion', slug: 'alida-fashion' },
    { name: 'Alien Surface', slug: 'alien-surface' },
    { name: 'AliExpress', slug: 'ali-express' },
    { name: 'Alinda', slug: 'alinda' },
    { name: 'Arman Sport', slug: 'arman-sport' },
    { name: 'Arman Sport Kids', slug: 'arman-sport-kids' },
    { name: 'Aromateria', slug: 'aromateria' },
    { name: 'Aronia Charlottenburg', slug: 'aronia-charlottenburg' },
    { name: 'Art & Craft', slug: 'art-craft' },
    { name: 'Arta Ceaiului', slug: 'arta-ceaiului' },
    { name: 'Azal', slug: 'azal' },
    { name: 'Azay', slug: 'azay' },
    { name: 'AziaVision', slug: 'azia-vision' },
    { name: '9One', slug: '9one' },
    { name: 'Bata', slug: 'bata' }
];
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