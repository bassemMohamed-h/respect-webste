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
export const CaseStudy = defineDocumentType(() => ({
  name: "CaseStudy",
  filePathPattern: "case-studies/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    coverImage: { type: "string", required: true },
    featured: { type: "boolean", required: false, default: false },
    order: { type: "number", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Service = defineDocumentType(() => ({
  name: "Service",
  filePathPattern: `services/*.mdx`,
  contentType: "mdx",
  fields: {
    slug: { type: "string", required: true },
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    moreDesc: { type: "string", required: false },
    heroImg: { type: "string", required: false },
    order: { type: "number", required: false },
  },
  computedFields: {
    // handy link for your cards (since you use hash)
    href: {
      type: "string",
      resolve: (doc) => `/services#${doc.slug}`,
    },
  },
}));
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page, CaseStudy, Service],
});
