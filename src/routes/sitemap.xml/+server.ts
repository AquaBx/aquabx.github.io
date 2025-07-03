// /src/routes/sitemap.xml/+server.ts
import * as sitemap from 'super-sitemap';
import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
export const prerender = true
export const GET: RequestHandler = async ({ request, params }: RequestEvent) => {
    const protocol = request.url.startsWith('https') ? 'https' : 'http';
    const origin = `${protocol}://${request.headers.get('host')!}`

    return await sitemap.response({
        origin,
        lang: {
            default: 'en',           // e.g. /about
            alternates: ['fr', 'en'] // e.g. /zh/about, /de/about
        }
    });
};