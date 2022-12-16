## Models + Migrations

<!-- User -->

### User

`npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,role:string`

<!-- Products -->

### Products

`npx sequelize-cli model:generate --name Product --attributes title:string,latinName:string,origins:string,family:array,pictures:string,description:string`

### Benefits

`npx sequelize-cli model:generate --name Benefits --attributes productID:integer,title:array,description:array`

### Side-Effect

`npx sequelize-cli model:generate --name SideEffects --attributes productID:integer,title:array`

### Nutrion-Details

`npx sequelize-cli model:generate --name NutrionDetail --attributes details:array`

## Seed

`npx sequelize-cli seed:generate --name user`
`npx sequelize-cli seed:generate --name profile`
`npx sequelize-cli seed:generate --name product`
`npx sequelize-cli seed:generate --name about`
`npx sequelize-cli seed:generate --name wishlist`
