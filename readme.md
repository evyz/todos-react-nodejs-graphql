## Тестовое задание

Задание: разработать приложение todos, используя graphQl для работы с запросами

### Зависимости:

#### Backend:

Сервер:

-   [express] - для запуска сервера
-   [graphql]
-   [express-graphql] - для связки express с graphql

Cors:

-   [cors]

#### FrontEnd:

-   [react]
-   [graphql]
-   [@apollo/client] - для записи запросов на backend

### Инициализация:

Копипастим эти строки:

```
git clone https://github.com/evyz/todos-react-nodejs-graphql.git -b client client
git clone https://github.com/evyz/todos-react-nodejs-graphql.git -b server server
cd server
npm i
npm run dev
cd ../client
npm i
npm run start
```

### Примечание:

Я не использовал БД, поэтому у меня все todos-ы хранятся просто в массиве на сервере.
Это означает, что при каждом перезапуске сервера - данные будут обнулятся до начального todo.

Happy hacking ✌️
