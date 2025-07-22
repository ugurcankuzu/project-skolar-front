import Image, { ImageProps } from "next/image";

interface ICustomImage extends ImageProps {}
const FALLBACK_URL = "/no-image.png";
export default function CustomImage({ src, ...props }: ICustomImage) {
  const finalSrc = src ? src : FALLBACK_URL;
  return <Image src={finalSrc} {...props} />;
}
