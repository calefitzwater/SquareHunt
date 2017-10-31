#pragma strict


function Update () {
	if(Input.GetKey("w")){
		transform.position.y = transform.position.y + .07;
	}
	if(Input.GetKey("s")){
		transform.position.y = transform.position.y - .07;
	}
	if(Input.GetKey("a")){
		transform.position.x = transform.position.x - .07;
	}
	if(Input.GetKey("d")){
		transform.position.x = transform.position.x + .07;
	}
}