import { FC, useMemo, useState } from "react";
import { Image } from "antd";

interface Props {
  media: { url: string }[];
}

export const GalleryItem: FC<Props> = ({ media }) => {
  const [visible, setVisible] = useState(false);

  const previewImage = useMemo(() => media[0]?.url || "", [media]);

  return (
    <>
      <Image
        preview={{ visible: false }}
        width={200}
        src={previewImage}
        onClick={() => setVisible(true)}
        className="gallery-preview"
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {media.map((i) => (
            <Image src={i.url} key={i.url} />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
};
