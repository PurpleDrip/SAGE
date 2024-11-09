// src/components/TreeNode.js
import React from "react";

const TreeNode = ({ member }) => {
  return (
    <div className="tree-node">
      <div className="member-info">
        <p>{member.name}</p>
        <p>{member.gender}</p>
      </div>
      {member.children && member.children.length > 0 && (
        <div className="children">
          {member.children.map((child) => (
            <TreeNode key={child.id} member={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
