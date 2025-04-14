import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  min-width: 200px;
  height: 200px;
  @media screen and (min-width: 768px) {
    min-width: 100%;
    height: 200px;
  }
`;
const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;
const ImageButton = styled.div`
  border: 2px solid #aaa;
  ${(props) =>
    props.active
      ? `
    border-color:#aaa;
  `
      : `
    border-color: transparent;
    opacity: .7;
  `}
  height: 60px;
  width: 60px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((img) => (
          <ImageButton
            key={img}
            active={img === activeImage}
            onClick={() => setActiveImage(img)}
          >
            <Image src={img} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
