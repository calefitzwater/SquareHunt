#pragma strict



function OnGUI () {
		
	var halfScreenWidth : float = Screen.width / 2;
	var halfScreenHeight : float = Screen.height /2;

	GUI.Label (Rect (halfScreenWidth - 100, 200, 200, 500), "Move around with w, a, s, d.  Move your mouse around to aim.  Right click to shoot single rounds.  Left click to shoot machine gun.  Kill all the other squares.  If they touch you your health will go down.  Good Luck!" );
	
}