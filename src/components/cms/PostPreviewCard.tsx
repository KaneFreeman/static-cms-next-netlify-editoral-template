import type { TemplatePreviewCardProps } from "@staticcms/core";
import type { PostContent } from "../../lib/posts";

const PostPreviewCard = ({ entry, viewStyle }: TemplatePreviewCardProps<PostContent>) => {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div style={{ padding: "16px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: viewStyle === "grid" ? "column" : "row",
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
