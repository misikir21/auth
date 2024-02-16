import { connect } from "@/dbconfig/dbconfig";
import User from "@models/usermodels.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { usename, email, password } = reqBody;
    console.log(reqBody);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "user exist" }, { status: 400 });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedpassword = await bcryptjs.hash(password, salt);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 5000 });
  }
}
