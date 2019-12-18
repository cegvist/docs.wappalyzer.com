(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{211:function(e,r,t){"use strict";t.r(r);var a=t(0),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"contributing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),t("p",[e._v("Wappalyzer is "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e._v("open-source"),t("OutboundLink")],1),e._v(". Anyone who wishes to contribute is welcome to do so! Wappalyzer has been improved by "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/graphs/contributors",target:"_blank",rel:"noopener noreferrer"}},[e._v("hundreds of people"),t("OutboundLink")],1),e._v(" over the years.")]),e._v(" "),t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),t("p",[e._v("To get started, install "),t("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),t("OutboundLink")],1),e._v(" on your system. This will allow you to install and run the Wappalyzer development environment which comes bundled with the required tools.")]),e._v(" "),t("p",[e._v("Next, "),t("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("create a fork"),t("OutboundLink")],1),e._v(" of the "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wappalyzer repository"),t("OutboundLink")],1),e._v(" on GitHub, clone it and execute "),t("code",[e._v("./run links")]),e._v(" in "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bash_(Unix_shell)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bash"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_github_username"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/Wappalyzer.git\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" Wappalyzer\n$ ./run links\n")])])]),t("h2",{attrs:{id:"drivers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drivers"}},[e._v("#")]),e._v(" Drivers")]),e._v(" "),t("p",[e._v("Wappalyzer is a cross-platform application, written in JavaScript. Platform specific code can be found in "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("src/drivers")]),t("OutboundLink")],1),e._v(". Shared functionality is contained within "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/blob/master/src/wappalyzer.js",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("src/wappalyzer.js")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("To test your local changes in a browser, refer to the links below. The extension files are located in "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/tree/master/src/drivers/webextension",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("src/drivers/webextension")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://developer.chrome.com/extensions/getstarted#unpacked",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Chrome: load an unpacked extension"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mozilla Firefox: load a temporary add-on"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Installation and usage instructions for NPM and Docker can be found on the "),t("a",{attrs:{href:"https://www.wappalyzer.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("download page"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"submitting-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submitting-changes"}},[e._v("#")]),e._v(" Submitting changes")]),e._v(" "),t("p",[e._v("When you're done making changes, run "),t("code",[e._v("./run validate")]),e._v(". If no errors are reported, push your commits to a new branch on your own repository.")]),e._v(" "),t("p",[e._v("Finally, open a "),t("a",{attrs:{href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pull request"),t("OutboundLink")],1),e._v(" on the "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/pulls",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wappalyzer repository"),t("OutboundLink")],1),e._v(". If the automated checks or members of the community report any issues, please resolve them or your pull request may get rejected.")]),e._v(" "),t("h2",{attrs:{id:"adding-a-new-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-application"}},[e._v("#")]),e._v(" Adding a new application")]),e._v(" "),t("p",[e._v("To add a new application, edit "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/blob/master/src/apps.json",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("src/apps.json")]),t("OutboundLink")],1),e._v(" and add a square icon to "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/tree/master/src/icons",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("src/icons")]),t("OutboundLink")],1),e._v(" (preferably an SVG file, otherwise a 64x64 or 32x32 PNG file).")]),e._v(" "),t("p",[e._v("Only widely used applications should be added. When creating a pull request, please include ten or more links to websites that use the application, a GitHub page with at least 1,000 stars or anything that will help establish the size of the user base.")]),e._v(" "),t("p",[e._v("Wappalyzer uses "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",target:"_blank",rel:"noopener noreferrer"}},[e._v("regular expressions"),t("OutboundLink")],1),e._v(" to fingerprint web applications. Refer to the "),t("a",{attrs:{href:"/guide/specification"}},[e._v("specification")]),e._v(" for more detail.")]),e._v(" "),t("h2",{attrs:{id:"adding-a-new-category"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-category"}},[e._v("#")]),e._v(" Adding a new category")]),e._v(" "),t("p",[e._v("Please "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on GitHub"),t("OutboundLink")],1),e._v(" first to discuss the need for a new category. To add one, edit "),t("code",[e._v("src/apps.json")]),e._v(" and update the "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/tree/master/src/drivers/webextension/_locales",target:"_blank",rel:"noopener noreferrer"}},[e._v("translations"),t("OutboundLink")],1),e._v(" (it's acceptable to include the English string in any or all of them).")]),e._v(" "),t("h2",{attrs:{id:"adding-a-new-translation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-translation"}},[e._v("#")]),e._v(" Adding a new translation")]),e._v(" "),t("p",[e._v("To add a new translation, copy the "),t("code",[e._v("en")]),e._v(" folder in "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/tree/master/src/drivers/webextension/_locales",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("src/drivers/webextension/_locales")]),t("OutboundLink")],1),e._v(", rename it to the relevant two-letter country code and update the containing "),t("code",[e._v("messages.json")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"adding-a-new-feature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-feature"}},[e._v("#")]),e._v(" Adding a new feature")]),e._v(" "),t("p",[e._v("Please "),t("a",{attrs:{href:"https://github.com/AliasIO/Wappalyzer/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on GitHub"),t("OutboundLink")],1),e._v(" first. New features and large changes are rarely accepted without prior discussion.")])])}),[],!1,null,null,null);r.default=n.exports}}]);