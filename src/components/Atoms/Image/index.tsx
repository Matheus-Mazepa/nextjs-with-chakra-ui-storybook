import React from "react";
import Image from "next/image";

interface AtomImageProps {
  scr: string
  alt: string
  width: number
  height: number
}

export default function AtomImage({ src, alt, width, height }: AtomImageProps) {
  return <Image src={src} width={width} height={height} alt={alt} />
}