const visit = require('unist-util-visit');
module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'link', node => {
    if (
      node.url &&
      !node.url.startsWith('//') &&
      !node.url.startsWith('http')
    ) {
      node.url = node.url.replace(/^(.*)\.md$/, (match, path) => {
        return `../${path}/`;
      })
    }
  });

  return markdownAST;
};