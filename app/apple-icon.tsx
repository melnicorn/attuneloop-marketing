import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Easy-to-read default export
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}
      >
        {/* Outer Left */}
        <div
          style={{
            position: 'absolute',
            left: 5,
            top: 12,
            width: 2,
            height: 8,
            background: '#94a3b8',
          }}
        />

        {/* Inner Left */}
        <div
          style={{
            position: 'absolute',
            left: 10,
            top: 8,
            width: 2,
            height: 16,
            background: '#94a3b8',
          }}
        />

        {/* Center */}
        <div
          style={{
            position: 'absolute',
            left: 15,
            top: 4,
            width: 2,
            height: 24,
            background: '#e11d48',
          }}
        />

        {/* Inner Right */}
        <div
          style={{
            position: 'absolute',
            left: 20,
            top: 8,
            width: 2,
            height: 16,
            background: '#94a3b8',
          }}
        />

        {/* Outer Right */}
        <div
          style={{
            position: 'absolute',
            left: 25,
            top: 12,
            width: 2,
            height: 8,
            background: '#94a3b8',
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
