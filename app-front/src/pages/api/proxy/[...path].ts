import type { NextApiRequest, NextApiResponse } from "next"
import { Readable } from "stream"

const FASTAPI_BASE_URL =
  process.env.NEXT_PUBLIC_FASTAPI_URL || "http://35.176.178.30:8000"

export const config = {
  api: {
    bodyParser: false, // 반드시 false여야 파일 스트림 전달 가능
  },
}

function nodeReadableFromWeb(stream: ReadableStream<Uint8Array> | null): Readable | null {
  if (!stream) return null
  // @ts-expect-error Node 18+ 환경
  return Readable.fromWeb(stream)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { path = [] } = req.query
    const backendPath = Array.isArray(path) ? path.join("/") : path
    const query = req.url?.split("?")[1] ? `?${req.url.split("?")[1]}` : ""
    const targetUrl = `${FASTAPI_BASE_URL}/${backendPath}${query}`

    console.log("🚀 Proxy Request →", req.method, targetUrl)

    // ✅ 헤더 복사
    const headers: Record<string, string> = {}
    for (const [key, value] of Object.entries(req.headers)) {
      if (typeof value === "string") headers[key] = value
    }

    // ✅ body 준비
    const body =
      req.method !== "GET" && req.method !== "HEAD"
        ? (req as unknown as Readable)
        : undefined

    // ✅ fetch 시 duplex: 'half' 반드시 필요 (Node 18+)
    const response = await fetch(targetUrl, {
      method: req.method,
      headers,
      body: body as any,
      duplex: "half",
    })

    res.status(response.status)
    const nodeStream = nodeReadableFromWeb(response.body)
    if (nodeStream) nodeStream.pipe(res)
    else res.end()
  } catch (error) {
    console.error("❌ Proxy Error:", error)
    res.status(500).json({ error: "Proxy request failed" })
  }
}
