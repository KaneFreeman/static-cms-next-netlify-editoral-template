import type { TemplatePreviewProps } from "@staticcms/core";
import type { FC } from "react";

interface PostData {
  title: string;
  date: string;
  body: string;
}

const PostPreview: FC<TemplatePreviewProps<PostData>> = ({ entry, widgetFor }) => {
  return (
    <div className="content">
      <h1>{entry.data.title}</h1>
      <time>{entry.data.date}</time>
      <div>{widgetFor("body")}</div>
    </div>
  );
};

export default PostPreview;
