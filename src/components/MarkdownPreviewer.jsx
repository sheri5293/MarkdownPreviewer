/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: true,
});
const MarkdownPreviewer = () => {
  const firstMarkdown = `# Heading 1
## Heading 2
[Link](https://www.sapBytes.com)
\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`;
  const [markdown, setMarkdown] = useState(firstMarkdown);
  useEffect(() => {
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
  }, []);
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownPreviewer;
