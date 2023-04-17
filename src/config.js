import dotenv from "dotenv";
dotenv.config();
/*const config = {
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
};*/


const config = {
  dbName: 'ecommerce',
  dbUser: 'hectorcoderhouse',
  dbPassword: '5IRPy6soQ0liBnI2',
};

console.log(process.env.DB_NAME);

export default config;