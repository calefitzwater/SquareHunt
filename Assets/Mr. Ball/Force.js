var speed : float = 2.0;
 
function Update() {
    transform.position += Time.deltaTime * speed * transform.forward;
}