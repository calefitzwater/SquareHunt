#pragma strict

var BulletSpeed : float;

function Start () {

}

function Update () {
	transform.Translate(Vector3.forward * Time.deltaTime * BulletSpeed);
}