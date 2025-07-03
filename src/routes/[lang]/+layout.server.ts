import type { PageServerLoad } from "./$types";
import type { RequestEvent } from "@sveltejs/kit";
export const prerender = true
export const csr = true;

export const load: PageServerLoad = ({ request, params }: RequestEvent) => {
    const host = request.headers.get('host');
    const url = request.url;
    const { lang } = params
    return {
        host,
        url,
        lang
    };
};