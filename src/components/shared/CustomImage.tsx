import Image, { ImageProps } from "next/image";

type ICustomImage = ImageProps;
const FALLBACK_URL = "/no-image.png";
export default function CustomImage({ src, alt, ...props }: ICustomImage) {
  const finalSrc = src ? src : FALLBACK_URL;
  return <Image src={finalSrc} alt={alt} {...props} />;
}
