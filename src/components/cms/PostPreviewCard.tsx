import type { TemplatePreviewCardProps, FieldPreviewProps, DateTimeField, BooleanField } from "@staticcms/core";
import type { PostContent } from "../../lib/posts";
import type { FC } from "react";

const PostPreviewCard: FC<TemplatePreviewCardProps<PostContent>> = ({ entry, theme }) => {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div style={{ padding: "16px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "start",
            color: theme === "dark" ? "white" : "inherit",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            <strong style={{ fontSize: "24px" }}>{entry.data.title}</strong>
            <span style={{ fontSize: "16px" }}>{entry.data.date}</span>
          </div>
          <div
            style={{
              backgroundColor: entry.data.draft === true ? "blue" : "green",
              color: "white",
              border: "none",
              padding: "4px 8px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            {entry.data.draft === true ? "Draft" : "Published"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreviewCard;
