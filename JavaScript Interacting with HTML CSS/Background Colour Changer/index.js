const themeChanger = () => {
    if(document.body.style.backgroundColor==='white'){
  document.body.style.cssText = "background:black";
  document.getElementById("AppText").style.cssText =
    "background: linear-gradient(90deg,orange,red);-webkit-background-clip: text;-webkit-text-fill-color: transparent;";
  document.getElementById("theme").style.cssText =
    "color: black;background: white;";}
    else
    {
        document.body.style.cssText = "background:white;color:black;";
        document.getElementById("AppText").style.cssText =
            "background: linear-gradient(90deg, aqua, indigo);-webkit-background-clip: text;-webkit-text-fill-color: transparent;";
        document.getElementById("theme").style.cssText =
            "color: white;background: black;";
    }
};
