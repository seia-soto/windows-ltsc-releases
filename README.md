# Seia-Soto/Windows-LTSC-Releases

Simple tool to fetch latest download URLs of LTSC and Enterprise releases from Windows Evaluation Center.

## Table of Contents

- [Usage](#usage)
- [LICENSE](#license)

----

# Usage

There are few ways to use this package.

## as Binary

Go to releases tab and download right one for you.
We're currently exporting Linux, macOS, Windows binaries.

```sh
index-<os> <language>

# e.g. index-win.exe ko
```

## as File

With Vercel's ncc, we also exported into one file.
Download the file and execute it with your own Node installation.

```sh
node index.js
```

## as Library

To install this library, use following command:

```sh
yarn add git+https://github.com/Seia-Soto/windows-ltsc-releases
```

After install, do following:

```js
const getEnterpriseWinReleases = require('windows-ltsc-releases')

getEnterpriseWinReleases()
  .then(data => console.log(data))
```

# LICENSE

This project is distributed under MIT License.
