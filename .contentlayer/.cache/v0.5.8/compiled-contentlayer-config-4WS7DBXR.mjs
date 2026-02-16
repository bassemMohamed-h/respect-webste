// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    },
    body: {
      type: "mdx",
      resolve: (doc) => doc.body.raw
    }
  }
}));
var CaseStudy = defineDocumentType(() => ({
  name: "CaseStudy",
  filePathPattern: "case-studies/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    coverImage: { type: "string", required: true },
    featured: { type: "boolean", required: false, default: false },
    order: { type: "number", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Page, CaseStudy]
});
export {
  CaseStudy,
  Page,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4WS7DBXR.mjs.map
