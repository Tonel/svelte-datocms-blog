import { PUBLIC_DATOCMS_READ_ONLY_API_TOKEN } from '$env/static/public';
export async function useGraphqlQuery({query, variables = {}}) {
    // perform the GraphQL request to the
    // DatoCMS Content Delivery API
    const response = await fetch('https://graphql.datocms.com', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${PUBLIC_DATOCMS_READ_ONLY_API_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    return await response.json()
};
