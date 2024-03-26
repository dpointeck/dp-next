import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
    metadesc: { type: 'string', required: true },
  },
}))

const rehypeoptions = {
    // Use one of Shiki's packaged themes
    theme: "github-light",
    // Set to true to keep the background color
    keepBackground: true ,
    onVisitLine(node: any) {
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    onVisitHighlightedLine(node: any) {
      node.properties.className.push("highlighted");
    },
    onVisitHighlightedWord(node: any, id: any) {
      node.properties.className = ["word"];
    },
  };


export default makeSource({ contentDirPath: '_posts', documentTypes: [Post], markdown: { rehypePlugins: [[rehypePrettyCode, rehypeoptions]] as any } })