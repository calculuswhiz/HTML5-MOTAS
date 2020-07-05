// A little hack to freeze all movieclips on the timelines
let freezeRegistry = new Set();
function applyFreezeHacks()
{
	stage.on('drawstart', () => 
	{
		freezeRegistry.forEach((clip) =>
		{
			if (clip)
				clip.gotoAndStop(0);
		})
	// All that matters is the true so that it only fires once
	}, null, true);
}
function addFreezeClips()
{
	applyFreezeHacks();
	for (let clip of arguments)
	{
		if (clip instanceof createjs.MovieClip)
			freezeRegistry.add(clip);
	}
}

let MOTAS = parent.MOTAS;
