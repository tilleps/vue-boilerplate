# Boilerplate

Steps to recreate this project


Install Vue CLI
``` bash
npm install -g @vue/cli
```


``` bash
vue create project-name
```


Add npm run docs:* commands to package.json
``` bash
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

Setup Vuepress
``` bash
mkdir -p docs
npm install --only-dev vuepress
```

Create sample doc files
``` bash
echo "# Documentation" | tee docs/README.md
mkdir -p docs/example
echo "# Example" | tee docs/example/README.md
echo "# How To" | tee docs/example/howto.md
```

Create Vuepress config file
``` bash
mkdir -p docs/.vuepress
tee docs/.vuepress/config.js << EOF
module.exports = {
  base: "/docs",
  title: "Documentation",
  themeConfig: {
    navbar: true,
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Dropdown",
        items: [
          { text: "Item #1", link: "#" },
          { text: "Item #2", link: "#" }
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
EOF


tee docs/.vuepress/override.styl << EOF
\$accentColor = #3eaf7c
\$textColor = #2c3e50
\$borderColor = #eaecef
\$codeBgColor = #282c34
EOF
```

