
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.shapArray = new Map()
}

function Shape(startX,startY,size,color){
    this.startX=startX;
    this.startY=startY;
    this.size=size;
    this.color=color;
}

function Rectangle(startX,startY,size,color,height,width){
    Shape.call(this,startX,startY,size,color);
    this.height=height;
    this.width=width;
}

function Line(startX,startY,size,color,endX,endY){
    Shape.call(this,startX,startY,size,color);
    this.endX=endX;
    this.endY=endY;
}