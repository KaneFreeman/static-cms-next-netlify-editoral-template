import CMS from "@staticcms/core";
import '@staticcms/core/dist/main.css';
import { useEffect } from "react";

import PostDateFieldPreview from "./PostDateFieldPreview";
import PostDraftFieldPreview from "./PostDraftFieldPreview";
import PostPreview from "./PostPreview";
import PostPreviewCard from "./PostPreviewCard";
import config from "./config";

const CMSPage = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      config.local_backend = true;
    }

    CMS.registerPreviewTemplate("posts", PostPreview);
    CMS.registerPreviewCard("posts", PostPreviewCard);
    CMS.registerFieldPreview('posts', 'date', PostDateFieldPreview);
    CMS.registerFieldPreview('posts', 'draft', PostDraftFieldPreview);

    CMS.registerAdditionalLink({
      id: "external-link",
      title: "External link",
      data: "https://example.com/",
    });

    CMS.init({ config });
  }, []);

  return (
    <div>
      <style jsx global>{`
        html,
        body {
          height: 100%;
        }

        #__next {
          display: none;
        }
      `}</style>
    </div>
  );
};

CMSPage.displayName = "CMSPage";

export default CMSPage;
