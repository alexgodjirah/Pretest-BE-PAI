## Models + Migrations

<!-- User -->

### User

`npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,role:string`

<!-- Products -->

### Products

`npx sequelize-cli model:generate --name Product --attributes title:string,latinName:string,origins:string,pictures:string`

### Details

`npx sequelize-cli model:generate --name Detail --attributes description:string,benefits:string,sideEffects:string,productID:integer`

## Seed

`npx sequelize-cli seed:generate --name user`
`npx sequelize-cli seed:generate --name profile`
`npx sequelize-cli seed:generate --name product`
`npx sequelize-cli seed:generate --name about`
`npx sequelize-cli seed:generate --name wishlist`
