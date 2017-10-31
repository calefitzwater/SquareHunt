private var mousePos : Vector2;
private var screenPos : Vector3;
var MoveSpeed : float;


function Update () {
    mousePos = Input.mousePosition;
    screenPos = camera.main.ScreenToWorldPoint(Vector3(mousePos.x, mousePos.y, transform.position.z - camera.main.transform.position.z));
 
    transform.rotation.eulerAngles.z = Mathf.Atan2((screenPos.y - transform.position.y), (screenPos.x - transform.position.x))*Mathf.Rad2Deg;
    mousePos.x -= Screen.width/2;
	mousePos.y -= Screen.height/2;
       	
}
