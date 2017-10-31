#pragma strict

var Player : Transform;

function Update () {
	transform.position.x = Player.position.x;
	transform.position.y = Player.position.y;
	transform.position.z = Player.position.z - 10;
}