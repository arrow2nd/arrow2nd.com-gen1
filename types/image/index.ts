export type DynamicImage = {
  imageProps: {
    blurDataURL: string;
    src: string;
    height: number;
    width: number;
    type?: string | undefined;
  };
  alt: string;
};
