import {useGraphqlQuery} from '$lib/utils/query'
export async function load({params}) {
    // retrieve the articles related to the slug
    // specified in the url
    const responseData = await useGraphqlQuery({
        query: `
            query BlogPostQuery($slug: String!) {
             article(filter: { slug: { eq: $slug } }) {
                title
                slug
                publicationDate: _firstPublishedAt
                content {
                  value
                  blocks
                }
              }
            }
        `,
        variables: {
            // the dynamic "slug" parameter extracted
            // from the URL
            slug: params.slug,
        },
    })

    return responseData.data
}
