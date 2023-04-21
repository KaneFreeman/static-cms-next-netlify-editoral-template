import type { BooleanField, FieldPreviewProps } from "@staticcms/core";
import type { FC } from "react";

const PostDraftFieldPreview: FC<FieldPreviewProps<boolean, BooleanField>> = ({ value }) => {
  return (
    <div
      style={{
        backgroundColor: value === true ? "rgb(37 99 235)" : "rgb(22 163 74)",
        color: "white",
        border: "none",
        padding: "2px 6px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "4px",
        fontSize: "14px",
      }}
    >
      {value === true ? "Draft" : "Published"}
    </div>
  );
};

export default PostDraftFieldPreview;
