import React from "react";
import { familyTree } from "../Data/familyTree";
import Tree from "react-d3-tree";
import "../tree.css";

const SAGEteam = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between gap-8">
      <div className="family-tree" style={{ width: "100%", height: "600px" }}>
        <Tree
          data={familyTree}
          orientation="vertical"
          pathFunc="step"
          translate={{ x: 400, y: 50 }}
          separation={{ siblings: 2, nonSiblings: 2 }}
          nodeSize={{ x: 200, y: 100 }}
        />
      </div>
    </div>
  );
};

export default SAGEteam;
