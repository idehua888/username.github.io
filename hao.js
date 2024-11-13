const myImage = document.getElementById("img");

myImage.onclik = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/pic_trulli.jpg") {
        myImage.setAttribute("src", "images/pic_castle.jpg");
    } else {
        myImage.setAttribute("src", "images/pic_trulli.jpg");
    }
}