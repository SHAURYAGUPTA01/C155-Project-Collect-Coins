AFRAME.registerComponent("coins", {
    init: function () {
    for (var i = 1; i <= 10; i++) {
    var id = `coins${i}`;
    
    var posX = Math.floor(Math.random() * 100 + -50);
    var posY = Math.floor(Math.random() * 5 + 5);
    var posZ = Math.floor(Math.random() * 60 + -40);
    
    var position = { x: posX, y: posY, z: posZ };
    
    this.createCoins(id, position);
    }
    },
    createCoins: (id, position) => {
    var treasureEntity = document.querySelector("#treasureCoins");
    
    var coinEl = document.createElement("a-entity");
    
    coinEl.setAttribute("id", id);
    
    coinEl.setAttribute("position", position);
    coinEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
    coinEl.setAttribute("material", "color","#ff9100");
    coinEl.setAttribute("geometry", {primitive: "cylinder",radius: 1});
    coinEl.setAttribute("static-body" , {
        shape : "sphere",
        sphereRadius : 2
      })
    
      coinEl.setAttribute("game-play" , {
        elementId: `#${id}`,
      })
    treasureEntity.appendChild(coinEl);
    }
    });