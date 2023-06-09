import React, { ReactNode } from "react";

import { Child, Grandchild, RawContent } from "@Types/posts";

const emphasizeText = (grandchild: Grandchild) => {
  const { text } = grandchild;
  let emphasizedText: string | ReactNode = grandchild.text;

  if (grandchild.bold) {
    emphasizedText = <b>{text}</b>;
  }

  if (grandchild.italic) {
    emphasizedText = <em>{text}</em>;
  }

  if (grandchild.underline) {
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

export const getFragment = (child: Child) => {
  const modifiedText = child.children.map((grandchild: Grandchild) => emphasizeText(grandchild));

  return (
    <p className={(textFormatting as any)[child.type]}>
      {modifiedText.map((text: string | ReactNode) => (
        <>{text}</>
      ))}
    </p>
  );
};

export const formatContent = (content: RawContent) => content.children.map((child) => getFragment(child));
