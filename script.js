function nextPage(page){
  window.location.href = page;
}

// SECRET KEY
document.addEventListener("keydown", function(e){
  if(e.key === "L"){
    window.location.href = "secret.html";
  }
});

// SEND DATA TO GOOGLE SHEET
function sendData(data){
  return fetch("https://script.google.com/macros/s/AKfycbzo1rCEFlb69edjqXXkKEtaZHSVfQPW7jTkld4LdOmcI3NBqwauBLh5khq3u0OU9u8B/exec", {
    method:"POST",
    body: JSON.stringify(data)
  });
}

// AUTO PLAY FIX
window.addEventListener("load", () => {
  let music = document.getElementById("bgMusic");

  if (music) {
    let playPromise = music.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // autoplay blocked → wait for user click
        document.body.addEventListener("click", () => {
          music.play();
        }, { once: true });
      });
    }
  }
});