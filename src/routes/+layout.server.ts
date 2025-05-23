import type { PageServerLoad } from "./$types";
import type { RequestEvent } from "@sveltejs/kit";
export const prerender = true
export const csr = false;

export const load: PageServerLoad = ({ request }: RequestEvent) => {
    const host = request.headers.get('host');
    const url = request.url;
    return {
        host,
        url
    };
};