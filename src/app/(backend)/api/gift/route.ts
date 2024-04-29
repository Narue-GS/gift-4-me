import { NextRequest, NextResponse } from 'next/server'
import { READ } from "./service"

export async function GET(req: NextRequest,) {
  const result = await READ()
  return NextResponse.json(result)
}