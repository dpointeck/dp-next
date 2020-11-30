---
slug: 'my-vscode-setup'
title: 'My late 2020 VScode setup'
date: 2020-11-30
metadesc: In this post I share my current VScode setup and favourite plugins from 2020.
---

Editorwise in 2020 I transformed 100% from PhpStorm to VScode. The reason is that VScode is getting better with each update and it feels a lot more lightweight than a full blown IDE. In this post I describe which setting, keybindings and plugins work best for me and maybe there is also something you wanna try in your setup.

## Settings

My settings are pretty simple. This is mostly the case because I setup my macbook fresh a few weeks ago and just applied the essential settigs again.

```json
{ 
  // Typography
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontWeight": "400",
  "editor.fontSize": 12,
  "editor.suggestFontSize": 11,
  "editor.suggestLineHeight": 14,
  
  // Editor UI
  "workbench.sideBar.location": "right",
  "workbench.colorTheme": "Visual Studio 2019 Light",
  "editor.minimap.enabled": false,
  "workbench.activityBar.visible": false,
  "workbench.editor.showTabs": false,
  "customizeUI.titleBar": "inline",
  "window.titleBarStyle": "native",
  "zenMode.fullScreen": false,
  
  // Language specific settings
  "go.useLanguageServer": true,
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  },
}

```

## Keybindings

My keybindings are 90% based on the tips from [Caleb Prozio](https://calebporzio.com/).

```json
// keybindings.json
[
    {
        "key": "cmd+k cmd+a",
        "command": "workbench.action.toggleActivityBarVisibility"
    },
    {
        "key": "cmd+k cmd+d",
        "command": "workbench.view.debug"
    },
    {
        "key": "cmd+k cmd+e",
        "command": "workbench.view.explorer"
    },
    {
        "key": "cmd+k cmd+k",
        "command": "workbench.action.toggleZenMode"
    },
    {
        "key": "cmd+k cmd+m",
        "command": "workbench.view.scm"
    },
    {
        "key": "cmd+k cmd+x",
        "command": "workbench.extensions.action.showInstalledExtensions"
    }
]
```

## Plugins

VScode has a large variety of plugins for nearly every language and usecase you can imagine. Here are my favourites as from now:

- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) displays the size of imported packages next to the import statement in your js files.
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) A customizable extension for colorizing matching brackets
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) Intelligent Tailwind CSS tooling for VS Code
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) Improve your code commenting by annotating with alert, informational, TODOs, and more!

VScode is an awesome editor for webdevelopment or just coding in general. I hope you could pick something for you. Have fun hacking!