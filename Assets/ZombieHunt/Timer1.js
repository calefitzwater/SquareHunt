static public var time : float;

function Update(){
	time = Time.timeSinceLevelLoad;
}

function OnGUI(){ 
    GUI.Label (Rect (52,85, 200, 200), "Time = "+ time);
}
