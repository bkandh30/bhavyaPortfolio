import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Bhavya Kandhari - Software Developer & Data Engineer"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom, #000000, #111827)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(to right, #4d94ff, #66a3ff)",
          backgroundClip: "text",
          color: "transparent",
          marginBottom: 40,
          fontWeight: "bold",
        }}
      >
        Bhavya Kandhari
      </div>
      <div style={{ fontSize: 32, color: "#9ca3af", marginBottom: 40 }}>Software Developer & Data Engineer</div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}

