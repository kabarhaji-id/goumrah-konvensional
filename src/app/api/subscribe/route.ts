import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const body = await req.json(); // Ambil data JSON dari request
  const email = body.email;

  // Basic email validation function
  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }

  // Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);
    if (response.status === 200) {
      return NextResponse.json({ message: "Keren! Anda telah berhasil berlangganan!" }, { status: 201 });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {

      if (error.response?.data.title === "Member Exists") {
        return NextResponse.json({
          error: "Waduh, sepertinya email ini sudah terdaftar 🧐",
        }, { status: 400 });
      }
    }

    return NextResponse.json({
      error:
        "Ups! Terjadi kesalahan saat mendaftar ke newsletter. Silakan kirim email kepada saya di digital@goumrah.id dan saya akan menambahkan Anda ke daftar.",
    }, { status: 500 });
  }
}
