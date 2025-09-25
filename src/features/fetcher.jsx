// features/fetcher.jsx
const RAW = import.meta.env.VITE_API_URL || "";
export const API_URL = RAW.replace(/\/+$/, "");

export async function get(endpoint, opts = {}) {
    if (typeof endpoint !== "string") {
        throw new Error(`get(endpoint) wymaga stringa, dostał: ${Object.prototype.toString.call(endpoint)}`);
    }
    const clean = endpoint.replace(/^\/+/, "");
    const [path, qs] = clean.split("?", 2);
    const url = new URL(`${API_URL}/api/${path}`);

    if (qs) new URLSearchParams(qs).forEach((v, k) => url.searchParams.append(k, v));
    if (!url.searchParams.has("status")) url.searchParams.set("status", "published");
    if (opts.params) Object.entries(opts.params).forEach(([k, v]) => v != null && url.searchParams.set(k, String(v)));

    const res = await fetch(url.toString(), { headers: { "Content-Type": "application/json" } });
    if (!res.ok) throw new Error(`GET ${url.pathname}${url.search} failed: ${res.status}`);
    return res.json();
}

export function getStrapiMedia(url) {
    if (!url) return null;
    return /^https?:\/\//i.test(url) ? url : `${API_URL}${url}`;
}
