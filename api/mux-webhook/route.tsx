import { NextRequest } from 'next/server'

/**
 * Sends a POST request and handles the response accordingly.
 * @param {Request} request - The request object representing the POST request.
 */
export async function POST(request: NextRequest) {
    const body = await request.json()
    const { type, data } = body
    if (type === 'video.asset.ready') {
      // todo save this
    } else {
      /* handle other event types */
    }
    return Response.json({ message: 'ok' })
}
