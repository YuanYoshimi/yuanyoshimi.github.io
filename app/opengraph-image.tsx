import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Yuan Yoshimi - CS Student & Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div style={{ color: '#ffffff', fontSize: 72, fontWeight: 700, letterSpacing: '-2px' }}>
          Yuan Yoshimi
        </div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 32, marginTop: 24 }}>
          CS + Architecture & Embedded Systems @ UC Irvine
        </div>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 24, marginTop: 16 }}>
          yuanyoshimi.github.io
        </div>
      </div>
    ),
    { ...size }
  );
}
