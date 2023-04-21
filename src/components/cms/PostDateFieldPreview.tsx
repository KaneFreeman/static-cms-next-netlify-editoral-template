import type { DateTimeField, FieldPreviewProps } from "@staticcms/core";
import type { FC } from "react";

const PostDateFieldPreview: FC<FieldPreviewProps<string | Date, DateTimeField>> = ({ value }) => {
  const date = new Date(value);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  return <div>{`${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`}</div>;
};

export default PostDateFieldPreview;
