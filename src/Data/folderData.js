const explorer = {
    title: "Node 1",
    isFolder: true,
    children: [
      {
        title: "Node 2",
        isFolder: false,
        children: [
          {
            title: "Node 2.1",
            isFolder: false,
            children: [
              {
                title: "Node 2.1.1",
                isFolder: false,
                children: []
              }
            ]
          },
          {
            title: "Node 2.2",
            isFolder: false,
            children: []
          }
        ]
      },
      {
        title: "Node 3",
        isFolder: true,
        children: [
          {
            title: "Node 3.1",
            isFolder: true,
            children: [
              {
                title: "Node 3.1.1",
                isFolder: false,
                children: []
              }
            ]
          },
          {
            title: "Node 3.2",
            isFolder: false,
            children: []
          },
          {
            title: "Node 3.3",
            isFolder: false,
            children: []
          },
          {
            title: "Node 3.4",
            isFolder: false,
            children: []
          }
        ]
      },
      {
        title: "Node 4",
        isFolder: false,
        children: []
      }
    ]
  };
  
  export default explorer;
  