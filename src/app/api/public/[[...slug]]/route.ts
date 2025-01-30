import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET(req: Request, { params }: { params: { slug?: string[] } }) {
  try {
    if (!params.slug) {
      return new NextResponse('Invalid request', { status: 400 })
    }

    // Construct the correct file path
    const filePath = path.join(process.cwd(), 'public', ...params.slug)
    console.log('Attempting to read file:', filePath)  // Debugging log

    const fileContent = await fs.readFile(filePath)

    return new NextResponse(fileContent, {
      headers: { 'Content-Type': 'image/jpeg' },  // Set correct headers
    })
  } catch (err) {
    console.error('GET File Error:', err)
    return new NextResponse('File not found', { status: 404 })
  }
}