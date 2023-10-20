import cn from "classnames";
import Link from "next/link";
import { Image, ResponsiveImageType } from "react-datocms";

interface Props {
  title: string;
  slug: string;
  responsiveImage: ResponsiveImageType;
}

export default function CoverImage({ title, responsiveImage, slug }: Props) {
  return (
    <div className="sm:mx-0">
      <Image
        data={{
          ...responsiveImage,
          alt: `Cover Image for ${title}`,
        }}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
      />
    </div>
  );
}
