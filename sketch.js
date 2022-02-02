// API:

//https://worldtimeapi.org/
//http://worldtimeapi.org/api/timezone/America/Sao_Paulo


const Engine = Matter.Engine;//Módulo responsáveis pelas leis físicas que rejem o mundo
const World = Matter.Composite;/* Modulo responsável pela coleção de Matter.Body, Matter.Constraint e outros objetos Matter.Composite. 
                                    UM COMPOSITE PODE CONTER DESDE UM ÚNICO CORPO ATÉ UM MUNDO INTEIRO 
                                    */
const Bodies = Matter.Bodies;/* O módulo Matter.Bodies contém métodos para criar corpos rígidos com configurações*/
const Constraint = Matter.Constraint;

var engine, world;
var bola, slingshot;

function setup() {
    createCanvas(500, 200);
    bola = new Bola(200, 200, 80, 80);
    //slingshot = new Slingshot(bola(300, 200));

    //ground = new Ground(600, 600, 1200, 20);
    

}
function draw() {
    background('black');
    bola.display();
    //slingshot.display();
    //ground.display();
}




