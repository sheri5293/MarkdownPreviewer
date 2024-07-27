/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownPreviewer = () => {
  const firstMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;
  const [markdown, setMarkdown] = useState(firstMarkdown);
  const getMarkdownText = (markdown) => {
    return { __html: marked(markdown) };
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea
          name="editor"
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText(markdown)} />
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
