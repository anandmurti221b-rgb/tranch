import mongoose, { Schema, model, models } from "mongoose";

const carSchema = new Schema({
  Name: { type: String, required: true },
  Price: { type: Number, required: true },
});

const Car = models.Car || model("Car", carSchema, "Cars");

export default Car;
