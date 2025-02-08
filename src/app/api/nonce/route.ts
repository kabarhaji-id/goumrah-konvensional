import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(req: NextRequest) {
  const nonce = crypto.randomBytes(16).toString("base64");
  return new NextResponse(nonce, { status: 200 });
}
