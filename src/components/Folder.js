import { useState } from "react";
import "./Folder.css"
function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  
  return (
    <div>
      
      <span onClick={() => setExpand(!expand)} className="title" >{expand?<i class="ri-checkbox-blank-circle-line"></i>:<i class="ri-checkbox-blank-circle-fill"></i>}{explorer.title}</span>

      <br />
      <div className="title-line" style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {explorer.children.map((explore) => (
          <Folder key={explore.title} explorer={explore}  />
        ))}
      </div>
     
     
    </div>
  );
}

export default Folder;