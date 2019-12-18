# Contributing

Wappalyzer is [open-source](https://github.com/AliasIO/Wappalyzer/blob/master/LICENSE). Anyone who wishes to contribute is welcome to do so! Wappalyzer has been improved by [hundreds of people](https://github.com/AliasIO/Wappalyzer/graphs/contributors) over the years.

## Getting started

To get started, install [Git](https://git-scm.com/) and [Docker](https://www.docker.com/) on your system. This will allow you to install and run the Wappalyzer development environment which comes bundled with the required tools.

Next, [create a fork](https://help.github.com/articles/fork-a-repo/) of the [Wappalyzer repository](https://github.com/AliasIO/Wappalyzer) on GitHub, clone it and execute `./run links` in [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

``` sh
$ git clone https://github.com/<your_github_username>/Wappalyzer.git
$ cd Wappalyzer
$ ./run links
```

## Drivers

Wappalyzer is a cross-platform application, written in JavaScript. Platform specific code can be found in [`src/drivers`](https://github.com/AliasIO/Wappalyzer/tree/master/src/drivers). Shared functionality is contained within [`src/wappalyzer.js`](https://github.com/AliasIO/Wappalyzer/blob/master/src/wappalyzer.js).

To test your local changes in a browser, refer to the links below. The extension files are located in [`src/drivers/webextension`](https://github.com/AliasIO/Wappalyzer/tree/master/src/drivers/webextension).

* [Google Chrome: load an unpacked extension](https://developer.chrome.com/extensions/getstarted#unpacked)
* [Mozilla Firefox: load a temporary add-on](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)

Installation and usage instructions for NPM and Docker can be found on the [download page](https://www.wappalyzer.com/download).

## Submitting changes

When you're done making changes, run `./run validate`. If no errors are reported, push your commits to a new branch on your own repository.

Finally, open a [pull request](https://help.github.com/articles/about-pull-requests/) on the [Wappalyzer repository](https://github.com/AliasIO/Wappalyzer/pulls). If the automated checks or members of the community report any issues, please resolve them or your pull request may get rejected.

## Adding a new application

To add a new application, edit [`src/apps.json`](https://github.com/AliasIO/Wappalyzer/blob/master/src/apps.json) and add a square icon to [`src/icons`](https://github.com/AliasIO/Wappalyzer/tree/master/src/icons) (preferably an SVG file, otherwise a 64x64 or 32x32 PNG file).

Only widely used applications should be added. When creating a pull request, please include ten or more links to websites that use the application, a GitHub page with at least 1,000 stars or anything that will help establish the size of the user base.

Wappalyzer uses [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to fingerprint web applications. Refer to the [specification](/dev/specification) for more detail.

## Adding a new category

Please [open an issue on GitHub](https://github.com/AliasIO/Wappalyzer/issues) first to discuss the need for a new category. To add one, edit `src/apps.json` and update the [translations](https://github.com/AliasIO/Wappalyzer/tree/master/src/drivers/webextension/_locales) (it's acceptable to include the English string in any or all of them).

## Adding a new translation

To add a new translation, copy the `en` folder in [`src/drivers/webextension/_locales`](https://github.com/AliasIO/Wappalyzer/tree/master/src/drivers/webextension/_locales), rename it to the relevant two-letter country code and update the containing `messages.json`.

## Adding a new feature

Please [open an issue on GitHub](https://github.com/AliasIO/Wappalyzer/issues) first. New features and large changes are rarely accepted without prior discussion.
