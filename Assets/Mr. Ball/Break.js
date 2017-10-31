var peg : GameObject;
var Green : boolean;
var Yellow : boolean;
var Cracked : Texture;
private var hits : int;


function OnCollisionExit2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Ball"){
		if(Green){
			hits++;
			if(hits == 2){
				Destroy(peg);
			}
			else if(hits == 1){
				peg.renderer.material.mainTexture = Cracked;
			}
		}
		else if(!Green && !Yellow){		
			Destroy(peg);
		}
		else if(Yellow){
			Destroy(peg);
		}
	}
}

