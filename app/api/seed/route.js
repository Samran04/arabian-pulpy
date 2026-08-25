import { NextResponse } from "next/server";
import { seedFirestoreDatabase } from "../../../src/services/firebaseService";

export async function GET() {
  const result = await seedFirestoreDatabase();
  return NextResponse.json(result);
}

export async function POST() {
  const result = await seedFirestoreDatabase();
  return NextResponse.json(result);
}
