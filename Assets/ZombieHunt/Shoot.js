#pragma strict

var projectile : Rigidbody;
var Spawn : GameObject;
var speed : float;
var shooter : GameObject;
var ammo : int;
var MachineGunAmmo : int;
var NoAmmo = false;
var Max : boolean;
var MaxClip : int;
var NoAmmoM = false;
var MaxM : boolean;
var MaxClipM : int;
static public var taken : boolean;


function Update () {
	if (Input.GetMouseButtonDown(0) && !NoAmmo) {
		var clone = Instantiate(projectile, Spawn.transform.position, Spawn.transform.rotation);
		clone.rigidbody.AddForce(transform.right * speed);
		ammo--;
	}
	
	if (Input.GetMouseButton(1) && !NoAmmoM) {
		var clone1 = Instantiate(projectile, Spawn.transform.position, Spawn.transform.rotation);
		clone1.rigidbody.AddForce(transform.right * speed);
		MachineGunAmmo--;
	}
	
	AmmoCheck();
}

function OnGUI() { 
    GUI.Label (Rect (52,25, 200, 200), "Regular Ammo = "+ammo);
    GUI.Label (Rect (52,45, 200, 200), "Machine Gun Ammo = "+MachineGunAmmo);
  }

function OnTriggerEnter(other : Collider){
	if(other.tag == "AmmoBox"){
			ammo = ammo + 10;
			MachineGunAmmo = MachineGunAmmo + 35;
			Destroy(other.gameObject);
	}
}

function AmmoCheck(){
	
	if(ammo <= 0){
		NoAmmo = true;
		ammo = 0;
	}
	if(ammo > 0){
		NoAmmo = false;
	}
	
	if(ammo > MaxClip){
		ammo = MaxClip;
	}
	
	if(ammo >= MaxClip){
		Max = true;
	}
	
	if(ammo < MaxClip){
		Max = false;
	}
	
	if(MachineGunAmmo <= 0){
		NoAmmoM = true;
		MachineGunAmmo = 0;
	}
	
	if(MachineGunAmmo > 0){
		NoAmmoM = false;
	}
			
	if(MachineGunAmmo > MaxClipM){
		MachineGunAmmo = MaxClipM;
	}
	
	if(MachineGunAmmo >= MaxClipM){
		MaxM = true;
	}
	
	if(MachineGunAmmo < MaxClipM){
		MaxM = false;
	}
}

