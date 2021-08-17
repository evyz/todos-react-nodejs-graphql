## Тестовое задание

Задание: разработать приложение todos, используя graphQl для работы с запросами

### Зависимости:

#### Backend:

Сервер:

-   [express](https://www.npmjs.com/package/express) - для запуска сервера
-   [graphql](https://www.npmjs.com/package/graphql)
-   [express-graphql](https://www.npmjs.com/package/express-graphql) - для связки express с graphql

Cors:

-   [cors](https://www.npmjs.com/package/cors)

#### FrontEnd:

-   [react](https://www.npmjs.com/package/react)
-   [graphql](https://www.npmjs.com/package/graphql)
-   [@apollo/client](https://www.npmjs.com/package/@apollo/client) - для записи запросов на backend

### Инициализация:

Копипастим эти строки:

#### Сервер:
```
git clone https://github.com/evyz/todos-react-nodejs-graphql.git -b server server
cd server
npm i
npm run dev
```
#### Клиент:
```
git clone https://github.com/evyz/todos-react-nodejs-graphql.git -b client client
cd client
npm i
npm run start
```

### Примечание:

Я не использовал БД, поэтому у меня все todos-ы хранятся просто в массиве на сервере.
Это означает, что при каждом перезапуске сервера - данные будут обнулятся до начального todo.

Happy hacking ✌️
