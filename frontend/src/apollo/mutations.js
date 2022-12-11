import gql from 'graphql-tag'

export const loginUser = gql`
mutation LoginUser(
   $username: String!
   $password: String!
   $platform: String!
) {
   loginUser(
      name: $username
      password: $password
      platform: $platform
   ) {
      success
      msg
   }
}
`