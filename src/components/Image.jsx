import { IKImage } from "imagekitio-react";

const Image = ({ src, className, alt, w, h }) => {
  return (
    <div>
      <IKImage
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src}
        className={className}
        loading="lazy"
        alt={alt}
        lqip={{ active: true, quality: 20 }}
        width={w}
        height={h}
      />
    </div>
  );
};

export default Image;
