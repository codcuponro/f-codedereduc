"use client"
import Image from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'
import qs from 'qs'
import debounce from 'lodash.debounce'
import { Request } from '@/config/Axios'
import { Link } from '@mui/material'

const InputSearch = ({ full }) => {
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch stores based on input value
    const getStores = async (query) => {
        if (!query.trim()) {
            setStores([]); // Clear results if query is empty
            return;
        }

        setLoading(true);
        const params = qs.stringify({
            populate: ['Icon', "coupons_and_deals"],
            filters: {
                $or: [
                    { Name: { $contains: query } }, // Search by Name (partial match)
                    { Slug: { $contains: query } }  // Search by Slug (partial match)
                ]
            },
            pagination: { limit: 10 }
        }, { encodeValuesOnly: true });

        try {
            const response = await Request(`/stores?${params}`);
            setStores(response?.data || []);
        } catch (error) {
            console.error("Error fetching stores:", error);
            setStores([]);
        } finally {
            setLoading(false);
        }
    };

    // Debounced function to optimize API calls
    const debouncedGetStores = useCallback(debounce(getStores, 500), []);

    useEffect(() => {
        debouncedGetStores(searchValue);
    }, [searchValue, debouncedGetStores]);

    return (
        <div className='relative max-w-[500px] w-full'>
            <div className={`bg-[#FCFDFE33] px-[22px] py-[13px] gap-[17px] w-full rounded-full flex items-center ${full ? "w-full" : "max-w-[500px]"}`}>
                <Image src="/svg/search.svg" alt='' width={22} height={22} />
                <input
                    type='text'
                    className='text-white placeholder:text-white text-sm bg-transparent w-full outline-none'
                    placeholder='Search for stores'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                />
            </div>

            {/* Dropdown List */}
            {isFocused && (
                <div id="list" className='z-[10] absolute p-4 top-14 shadow-lg rounded-xl bg-white border w-full'>
                    {loading ? (
                        <p className="text-gray-500">Loading...</p>
                    ) : stores.length > 0 ? (
                        stores.map((store) => (
                            <Link href={`/stores/${store.Slug}`} key={store.id} className="flex !no-underline items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
                                <Image src={store?.Icon?.url || '/images/fallback.png'} alt={store.Name} width={60} height={60} className='w-[60px] rounded-md border object-cover' />
                                <span className="text-gray-800 !no-underline">{store.Name}</span>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500">No results found</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default InputSearch;
