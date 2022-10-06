import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
          fullName
        }
      }
    }
  }
`;

export const ME = gql`
query {
  me {
    id
    username
  }
}
`