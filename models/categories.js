import { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
    name: String,
    // data: {
    //     type: Array[String],
    // }

})

const Category = models?.Category ?? model("Category", categorySchema);

export default Category;