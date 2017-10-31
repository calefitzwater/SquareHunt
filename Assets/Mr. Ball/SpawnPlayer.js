#pragma strict

var player : GameObject;
var spawn : Transform;


function Start () {
	Instantiate(player, spawn.position, spawn.rotation);
}
