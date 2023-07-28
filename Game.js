AFRAME.registerComponent("game-play", {
schema: {
  elementId: { type: "string", default: "#coin1" },
},
isCollided: function (elemntId) {
  var element = document.querySelector(elemntId);
  element.addEventListener("collide", (e) => {
    if (elemntId.includes("#coin")) {
      element.setAttribute("visible", false);
      console.log("coin collision")
    }
    if (elemntId.includes("#fish")) {
      console.log("fish collision")
    }
    });
},
});
