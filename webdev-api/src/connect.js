import def from "ajv/dist/vocabularies/applicator/additionalItems";
import config from "./config.js";
import mongoose from "mongoose";

export default function connect(){
    return mongoose.connect(config.mongoDbUrl, {
    });
}