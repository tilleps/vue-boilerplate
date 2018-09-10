module.exports = {
  base: "/docs/",
  dest: "./dist/docs",
  title: "Documentation",
  themeConfig: {
    navbar: true,
    nav: [
      /*
      {
        text: "Home",
        link: "/"
      },
      //*/
      {
        text: "Dropdown",
        items: [
          { text: "Item #1", link: "/example/index" },
          { text: "Item #2", link: "/example/howto" }
        ]
      }
    ],
    sidebarDepth: 2,
    sidebar: [
      '/',
      {
        title: "Group #1",
        collapsable: true,
        children: [
          ['/example/', 'Overview'],
          '/example/howto'
        ]
      }
    ]
  }
}
