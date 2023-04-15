const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function rnav(url) {
      event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
}

function p(preset) {
  if (preset == 1) {
    rnav("http://mathsspot.com")
  } else if (preset == 2) {
    rnav("http://yt.be")
  } else if (preset == 3) {
    rnav("http://google.com")
  } else if (preset == 4) {
    rnav("https://noodles.gq/games/minecraft.html")
  } else if (preset == 5) {
    rnav("http://yolk.best")
  }
}
document.getElementById("p1").innerText = "Roblox";
document.getElementById("p2").innerText = "YouTube";
document.getElementById("p3").innerText = "Google";
document.getElementById("p4").innerText = "Minecraft";
document.getElementById("p5").innerText = "ShellShock";