import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'

const endpoint = 'https://graphqlzero.almansi.me/api'

export const usePosts = (data: any) => {
  return useQuery('posts', async () => {
    const {
      posts: { data }
    } = await request(
      endpoint,
      gql`
        query {
          posts {
            data {
              id
              title
            }
          }
        }
      `
    )
    return data
  })
}
