import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Car from "../../../models/Car";

export async function GET() {
  await dbConnect();
  const cars = await Car.find({});
  return NextResponse.json(cars);
}
