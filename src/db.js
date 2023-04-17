import mongoose from "mongoose";
import config from "./config.js";

const { dbUser, dbName, dbPassword } = config;

const database = {
  connect: async () => {
    try { 
      console.log(`${dbUser}`);
      console.log(`${dbPassword}`);
      console.log(`${dbName}`);

    //  await  mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.1k06imr.mongodb.net/${dbName}?retryWrites=true&w=majority`);

    await  mongoose.connect("mongodb+srv://hectorcoderhouse:5IRPy6soQ0liBnI2@cluster0.0kwnee3.mongodb.net/ecommerce?retryWrites=true&w=majority");
        
    } catch (error) {
      console.log(error);
    }
  },
};

export default database;