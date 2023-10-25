import { Image, ResponsiveImageType } from "react-datocms";

interface Props {
  title: string;
  responsiveImage: ResponsiveImageType;
}

export default function CoverImage({ title, responsiveImage }: Props) {
  return (
    <div className="sm:mx-0">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        data={{
          ...responsiveImage,
          alt: `Cover Image for ${title}`,
        }}
        className="shadow-small hover:shadow-2xl transition-shadow duration-200"
      />
    </div>
  );
}