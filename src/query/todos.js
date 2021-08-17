import { gql } from '@apollo/client'

export const GET_ALL_TODOS = gql`
    query{
        getAllTodos{
            id, title,completed
        }
    }
`