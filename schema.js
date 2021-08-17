const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Todo{
        id: ID,
        title: String,
        completed: Boolean
    }

    input TodoInput{
        id: ID,
        title: String!,
        completed: Boolean!
    }

    input ChangeTodoInput{
        id: ID,
        completed: Boolean!
    }

    type Query{
        getAllTodos: [Todo]
        getTodo(id: ID): Todo
    }

    type Mutation{
        createTodo(input: TodoInput): Todo
        changeComplete(input : ChangeTodoInput): Todo
        deleteTodo(input: ChangeTodoInput): Todo
    }

`)

module.exports = schema