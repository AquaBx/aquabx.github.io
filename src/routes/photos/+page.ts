export async function load({fetch}) {
    const response = await fetch('api/instagram')
    const insta = await response.json()
    return { insta }
}