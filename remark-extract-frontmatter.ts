// Source: https://github.com/timlrx/tailwind-nextjs-starter-blog/tree/master
import { visit } from 'unist-util-visit'
import { load } from 'js-yaml'

export default function extractFrontmatter() {
  return (tree, file) => {
    visit(tree, 'yaml', (node, index, parent) => {
      file.data.frontmatter = load(node.value)
    })
  }
}
