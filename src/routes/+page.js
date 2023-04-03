import {useGraphqlQuery} from '$lib/utils/query'
export async function load({}) {
    // retrieve the articles to show in the home page
    const responseData = await useGraphqlQuery({
        query: `
              {
                  allArticles {
                    id
                    title
                    slug
                    publicationDate: _firstPublishedAt
                  }
              }
        `
    })

    return responseData.data
}
