require('dotenv').config()
const express = require('express')

const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')

const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())

const Todos = [
    {
        id: 1,
        title: "Создать задачку",
        completed: false
    }
]

const findId = () => {
    let a = Todos.length
    if (a == 0) {
        return 1
    }
    return Number(Todos[a - 1].id + 1)
}

const createUser = (input) => {
    const id = findId()
    return {
        id, ...input
    }
}

const root = {
    getAllTodos: () => {
        return Todos
    },
    getTodo: ({ id }) => {
        return Todos.find(user => user.id = id)
    },
    createTodo: ({ input }) => {
        const todo = createUser(input)
        Todos.push(todo)
        return todo
    },
    changeComplete: ({ input }) => {
        Todos.map(todo => {
            if (todo.id == input.id) {
                todo.completed = input.completed
            }
        })
        return true
    },
    deleteTodo: ({ input }) => {
        let count = 0
        Todos.map(todo => {
            if (todo.id == Number(input.id)) {
                Todos.splice(count, 1)
            }
            count++;
        })
    }
}

app.get('/', (req, res) => res.json(Todos))

app.use('/api', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))


app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
})