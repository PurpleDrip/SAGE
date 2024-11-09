// src/data/familyTree.js
export const familyTree = {
  id: 1,
  name: "John Doe",
  gender: "Male",
  children: [
    {
      id: 2,
      name: "Jane Doe",
      gender: "Female",
      children: [
        {
          id: 4,
          name: "Alice Doe",
          gender: "Female",
          children: [],
        },
        {
          id: 5,
          name: "Bob Doe",
          gender: "Male",
          children: [],
        },
      ],
    },
    {
      id: 3,
      name: "Jim Doe",
      gender: "Male",
      children: [],
    },
  ],
};
