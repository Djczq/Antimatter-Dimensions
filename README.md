# Antimatter-Dimensions
This repository contains the scripts I use to automate some of the actions in the game [Antimatter Dimensions](http://ivark.github.io/).

There is two way to use the script.
The first one is to copy the code contained in the script in this repository then paste it in the console of the webrowser.
The second one is to use the following function to load it from [here (GitHub)](https://github.com/Djczq/Antimatter-Dimensions) through [jsDelivr](https://www.jsdelivr.com/) then load the latest version of my `script.js`.
You can explore how `jsDelivr` works to select the version of the file which interests you.
Please remember that `jsDelivr` updates are not up to me so the latest available on `jsDelivr` may not correspond to the latest version on `GitHub`.

```
loadScript(url) {
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =  url;
    head.appendChild(script);
}
loadScript('https://cdn.jsdelivr.net/gh/Djczq/Antimatter-Dimensions/script.js');
```
