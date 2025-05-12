import React from 'react'
import Image from 'next/image'

const imageData = [
  { src: '/images/M-Black.png', top: '15%', left: '90%' },
  { src: '/images/C-Black.png', top: '30%', left: '70%' },
  { src: '/images/W-Black.png', top: '55%', left: '85%' },
  { src: '/images/A-Black.png', top: '90%', left: '80%' },
  { src: '/images/P-Black.png', top: '15%', left: '10%' },
  { src: '/images/S-Black.png', top: '40%', left: '5%' },
  { src: '/images/F-Black.png', top: '60%', left: '20%' },
  { src: '/images/G-Black.png', top: '90%', left: '3%' },
]

const Background = () => {
  return (
  <div className="absolute inset-0 -z-10">
  {imageData.map((item, index) => (
    <Image
      key={index}
      width={60}
      height={60}
      src={item.src}
      alt={`bubble-${index}`}
      className="absolute object-contain blur-xs animate-bounce"
      style={{
        top: item.top,
        left: item.left,
      }}
    />
  ))}
</div>

  )
}

export default Background
