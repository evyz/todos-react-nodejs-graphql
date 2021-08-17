import { gql } from '@apollo/client'

export const CREATE_TODO = gql`
    mutation CreateTodo($input : TodoInput){
        createTodo(input: $input){
            title,completed
        }
    }
`

export const DELETE_TODO = gql`
    mutation deleteTodo($input: ChangeTodoInput){
        deleteTodo(input: $input){
            id, completed
        }
    }
`

export const UPDATE_TODO = gql`
    mutation changeComplete($input: ChangeTodoInput){
        changeComplete(input: $input){
            id, completed
        }
    }
`