import { NextResponse, userAgent } from 'next/server'

export function middleware(request) {
    const url = request.nextUrl
    const { device } = userAgent(request)

    // device.type can be: 'mobile', 'tablet', 'console', 'smarttv',
    // 'wearable', 'embedded', or undefined (for desktop browsers)
    const viewport = device.type || 'desktop'

    const res = NextResponse.next() // continue to the page
    res.cookies.set({
        name: 'device',
        value: viewport,
        path: '/',           // cookie available site-wide
        httpOnly: false,     // readable in server components
    })

    return res
}
