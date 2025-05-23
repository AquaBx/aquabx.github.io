// /src/routes/sitemap.xml/+server.ts
import * as sitemap from 'super-sitemap';
import type { RequestEvent, RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request, params }: RequestEvent) => {
    const protocol = request.url.startsWith('https') ? 'https' : 'http';
    return await sitemap.response({
        origin: `${protocol}://${request.headers.get('host')!}`,
        page: params.page,
    });
};