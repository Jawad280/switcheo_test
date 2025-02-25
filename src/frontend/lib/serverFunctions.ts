'use client'

import useSWR from "swr"
const coinUrl = "https://interview.switcheo.com/prices.json"

interface FetcherResponse {
    json: () => Promise<any>
}

const fetcher = (url: string, options?: RequestInit): Promise<any> => fetch(url, options).then((res: FetcherResponse) => res.json());

export function GetCoinRates() {
    const { data, error, isLoading } = useSWR(coinUrl, fetcher);

    return {
        coins: data || [],
        isLoading,
        error
    }
}

