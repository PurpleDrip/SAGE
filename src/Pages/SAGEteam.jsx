// src/Pages/SAGEteam.jsx
import React from "react";
import { familyTree } from "../Data/familyTree";
import Tree from "react-d3-tree";
import ProfileCard from "../Components/ProfileCard";
import "../tree.css";

const renderNode = ({ nodeDatum }) => {
  return <ProfileCard nodeData={nodeDatum} />;
};

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
          nodeSize={{ x: 250, y: 150 }}
          renderCustomNodeElement={renderNode}
        />
      </div>
    </div>
  );
};

export default SAGEteam;
