$.getScript(islive.js);

if (islive.islive == "True") {
  $("#pageContent #link img").attr("src", "https://i.ytimg.com/vi/" + islive.liveid + "/mqdefault.jpg");
  $("#pageContent #link a").attr("href", "https://youtu.be/" + islive.liveid);
  $("#pageContent #link title").text(islive.livetitle);
} else {
  $("#pageContent #link img").attr("src", "https://code-it-ytb.github.io/extention-google-chrome/offline.jpg");
  $("#pageContent #link title").text("Pas de live ...");
}
