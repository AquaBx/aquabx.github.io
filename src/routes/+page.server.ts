import type { RequestHandler } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const load: RequestHandler = async ({ request, url }) => {
    console.log(url.pathname)

    if (url.pathname.endsWith('sitemap.xml')) {
        return {};
    }
    const acceptLanguage = request.headers.get('accept-language');
    let lang = 'en';
    if (acceptLanguage) {
        if (acceptLanguage.startsWith('fr')) {
            lang = 'fr';
        }
    }
    throw redirect(307, `/${lang}`);
};
