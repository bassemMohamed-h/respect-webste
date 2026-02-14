import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    body: {
    type: "mdx",
    resolve: (doc) => doc.body.raw,
  },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page],
});
