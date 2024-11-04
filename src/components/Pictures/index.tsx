import { useState } from "react";
import "./styles.css";

type Props = {};

export default function Pictures({}: Props) {
  const [isMobile] = useState<boolean>(window.innerWidth <= 675);
  return (
    <div className="pictures">
      <img
        src={
          isMobile
            ? "/public/images/mobile/image-gallery-milkbottles.jpg"
            : "/public/images/desktop/image-gallery-milkbottles.jpg"
        }
        alt=""
      />
      <img
        src={
          isMobile
            ? "/public/images/mobile/image-gallery-orange.jpg"
            : "/public/images/desktop/image-gallery-orange.jpg"
        }
        alt=""
      />
      <img
        src={
          isMobile
            ? "/public/images/mobile/image-gallery-cone.jpg"
            : "/public/images/desktop/image-gallery-cone.jpg"
        }
        alt=""
      />
      <img
        src={
          isMobile
            ? "/public/images/mobile/image-gallery-sugarcubes.jpg"
            : "/public/images/desktop/image-gallery-sugarcubes.jpg"
        }
        alt=""
      />
    </div>
  );
}
