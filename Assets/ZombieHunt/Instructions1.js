#pragma strict

var customSkin : GUISkin;

function OnGUI(){
	GUI.skin = customSkin;
	GUI.Label(Rect(Screen.width/2- 350,100, 700,400),"Move around with w, a, s, d.  Move your mouse around to aim.  Right click to shoot single rounds.  Left click to shoot a machine gun.  Kill all the other squares.  If they touch you your health will go down.  Good Luck!");
}