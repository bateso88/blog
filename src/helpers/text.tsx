import React, { ReactNode } from "react";

export const emphasizeText = (text: ReactNode, obj: any) => {
  // Type correctly
  let emphasizedText = text;

  if (obj.bold) {
    emphasizedText = <b>{text}</b>;
  }

  if (obj.italic) {
    emphasizedText = <em>{text}</em>;
  }

  if (obj.underline) {
    emphasizedText = <u>{text}</u>;
  }
  return emphasizedText;
};

const textFormatting = {
  "heading-one": "text-xl font-bold mb-4",
  "heading-two": "text-xl font-bold mb-4",
  "heading-three": "text-xl font-semibold mb-4",
  "heading-four": "text-md font-semibold mb-4",
  "heading-five": "text-md font-semibold mb-4",
  "heading-six": "text-md font-semibold mb-4",
  paragraph: "mb-8",
};

const formattedText = (textBlock, type) => (
  <p className={textFormatting[type]}>
    {textBlock.map((text: string) => (
      <>{text}</>
    ))}
  </p>
);

export const getContentFragment = (text: string | ReactNode, typeObject: { children: ReactNode; type: string }) => {
  const modifiedText = typeObject ? emphasizeText(text, typeObject) : text;

  if (typeObject.type) {
    return typeObject.type === "image" ? (
      <img alt={typeObject.title} height={typeObject.height} width={typeObject.width} src={typeObject.src} />
    ) : (
      formattedText(modifiedText, typeObject.type)
    );
  }

  return modifiedText;
};
