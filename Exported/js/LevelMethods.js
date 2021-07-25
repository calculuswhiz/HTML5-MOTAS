/* 
This file gets imported per level. Contains common functions that the game iframe needs to run. Contains several hooks back to the scripts setup by MOTASMain.
Import this as url:
js/LevelMethods.js
*/

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

// Accepts arbitrary movieclip arguments to freeze on entry. Be careful how you use this.
function addFreezeClips(/*...*/)
{
	applyFreezeHacks();
	for (let clip of arguments)
	{
		if (clip == null)
			console.warn('Null clip supplied.');
		if (clip instanceof createjs.MovieClip)
			freezeRegistry.add(clip);
	}
}

// Fill a textbox with a variable from
function loadTextBox(thisCtx, varName)
{
	// TODO: Don't forget that you changed this from the symbols.
	thisCtx[varName].text = exportRoot.myTranslation[varName];
}

let MOTAS = parent.MOTAS;
// These were getting really tedious to typeo out.
moCur = MOTAS.cursor;
moInv = MOTAS.inventory;

let LanguageLoader = parent.LanguageLoader;
let generalText = LanguageLoader.loadFile(`general_${MOTAS.language}`);
(function ()
{
	let offsets = (
	{
		nothing : 12000,
		locked : 14000,
		wrongobject : 15000,
		unlocked : 16000,
		closedoor : 18000,
		walkdoor : 19000,
		lighton : 20000,
		lightoff : 21000,
		pressbutton : 23000,
		table : 22000,
		opendoor : 17000,
		chair : 10000
	});

	function generateGetter(offset, key)
	{
		return (function ()
		{
			let numElements = Number(generalText['mytxt' + offset]);
			let newTxtOffset = Math.random() * numElements + offset + 1 | 0;
			return generalText['mytxt' + newTxtOffset];
		});
	}

	for (let key in offsets)
	{
		let offset = offsets[key];
		// The first entry tells us how many elements are in the text category.
		// Lookup a random text string within the bound of the specified argument
		// The roason the 'text' is a part of the prefix is so you can simply replace
		// `_root` with `generalText`.
		Object.defineProperty(generalText, 'text' + key, 
		{
			get : generateGetter(offset, key)
		});
	}
})();

// Call runPreloadCheck(this) on init frame
function runPreloadCheck(thisObj)
{
	console.info('Run Preload Check...');
	let checkInv = thisObj.on('tick', () => 
	{
		if (moInv.ready && myTranslation.mytxt0 != null)
		{
			console.info('Preload Complete.');
			thisObj.off('tick', checkInv);
			thisObj.gotoAndStop(thisObj.currentFrame + 1);
		}
	});

	thisObj.stop();
}

// Call me on game frame 1
function registerNothingHandler()
{
	exportRoot.on('click', (evt) => 
	{
		if (evt.target.name === null)
		{
			MOTAS.setText(generalText.textnothing);
			MOTAS.inventory.unselect();
		}
	});
}
