
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.startX = 0;
  this.startY = 0;
  this.endX = 0;
  this.endY = 0;

 // this.canvas = canvas; 

  this.isClicked = false;
  this.interactor = interactor; 

  this.onMouseDown = function (evt) {
  // Récupérer les coordonnées du point de départ
    var mousePos = getMousePosition(canvas, evt);
    this.startX = mousePos.x;
    this.startY = mousePos.y;
    this.interactor.onInteractionStart(this);
  //   console.log("Pression - X: " + this.startX + ", Y: " + this.startY);
    this.isClicked = true;
  }.bind(this);
  
  // Fonction pour gérer l'événement de déplacement de la souris
    this.onMouseMove = function (evt) {
      if (this.isClicked) {
          var mousePos = getMousePosition(canvas, evt);
          this.endX = mousePos.x;
          this.endY = mousePos.y;
          this.interactor.onInteractionUpdate(this);
     //   console.log("Déplacement - X: " + this.endX + ", Y: " + this.endY);
      }
    }.bind(this);

    // Fonction pour gérer l'événement de relâchement de la souris
  this.onMouseUp = function (evt) {
    var mousePos = getMousePosition(canvas, evt);
    this.endX = mousePos.x;
    this.endY = mousePos.y;
    this.isClicked = false;
    this.interactor.onInteractionEnd(this);
  //  console.log("Relâchement - X: " + this.endX + ", Y: " + this.endY);

  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas
    canvas.addEventListener("mousedown", this.onMouseDown);
    canvas.addEventListener("mousemove", this.onMouseMove);
    canvas.addEventListener("mouseup", this.onMouseUp);


// Place le point de l'événement evt relativement à la position du canvas.
  function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  };


}
