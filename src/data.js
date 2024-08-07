const data = {
  root: {
    name: "root",
    type: "directory",
    content: [
      {
        type: "directory",
        content: [
          { type: "file", name: "public_nexted_file" },
          { type: "directory", name: "public_nexted_folder", content: [] },
        ],
        name: "public",
      },
      {
        type: "directory",
        content: [
          { type: "file", name: "App.js" },
          { type: "file", name: "index.js" },
          { type: "file", name: "style.css" },
        ],
        name: "src",
      },
      { type: "file", name: "package.json" },
    ],
  },
};

export default data;
