
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.strokeRect(this.startX,this.startY,this.width,this.height);

  };
  
  Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
    console.log('test Line painting');
  };
  
  Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapArray.forEach(function(arrayElem){
      arrayElem.paint(ctx);
    })
  };
  