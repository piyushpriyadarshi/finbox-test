import { useState } from "react";
import data from "./data";

console.log(data);

function FileTree({ rootNode }) {
  const [isToggle, setIsToggle] = useState(false)

  // if (rootNode.type === 'directory') {
  //   return <FileTree rootNode={rootNode}/>
  // }

  return <>
    <div style={{ display: 'flex', flexDirection: "column" }}>
      <button onClick={() => { setIsToggle(!isToggle) }}>{rootNode.name}</button>

      {isToggle && rootNode?.content?.map((content, index) => {
        if (content.type === 'file') {
          return <div key={index}>{content.name}</div>
        }
        if (content.type === 'directory') {
          return <FileTree rootNode={content} key={index} />
        }
      })}
    </div>

  </>
}

export default FileTree;
