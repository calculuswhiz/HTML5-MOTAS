// Access given to the game iframe, not main html src.
// No need to import this one per level. Use LevelMethods.js instead.
// Game state data goes here.
var MOTAS = (function ()
{
	let _level = null;
	
	this.language = 'english';
	this.loadText = LanguageLoader.loadFile;

	Object.defineProperty(this, 'level', 
	{
		get: () => _level
	});

	this.winLevel = () => void alert('Dude, you friggin won the level!');

	// TODO: Redo the midi system. midi.js is kinda bad.
	// TODO: how do I loop?
	this.sound = 
	{
		playing: false,
		currentTrack: null,
		mute: () => void MIDIjs.pause(),
		unmute: () => void MIDIjs.resume(),
		playTrack: (track) => 
		{
			MOTAS.sound.currentTrack = track;
			MIDIjs.play(track);
		}
	};

	this.playSfx = function (sndFile) 
	{
		console.warn('TODO: Play sfx');
	};

	this.cursor = 
	{
		setText(text)
		{
			text = text || '';
			parent.$('#cursor-text').text('Cursor:' + text);
			// console.log('Cursor: ' + text);
		},
		setState(state)
		{
			parent.$('#cursor-state').text('Cursor State:' + state);
			// console.log('Cursor State: ' + state);
		},
		setBoth(text, state)
		{
			MOTAS.cursor.setText(text);
			MOTAS.cursor.setState(state);
		}
	};

	this.setText = function (text)
	{
		parent.$('#game-text').text(text);
		console.log(text);
	};

	let flavorTextTracker = new Set();
	// gameText - can be a static string or a string returning function
	this.setFlavorText = function (object, tooltip, gameText)
	{
		if (!flavorTextTracker.has(object))
			flavorTextTracker.add(object);
		else
			return;
		object.on('rollover', () => { MOTAS.cursor.setText(tooltip) });
		object.on('rollout', () => { MOTAS.cursor.setText() });

		if (typeof(gameText) === 'string')
			object.on('click', () => {MOTAS.setText(gameText)});
		else
			object.on('click', gameText);
	};

	let quadStateTracker = new Set();
	this.setQuadState = function (object, rollover, click, rollout, mousedown)
	{
		if (!quadStateTracker.has(object))
			quadStateTracker.add(object);
		else
			return;
		object.on('rollover', rollover || (()=>{}));
		object.on('click', click || (()=>{}));
		object.on('rollout', rollout || (()=>{}));
		object.on('mousedown', mousedown || (()=>{}));
	};

	let _activeObject = null;
	let _activeSlot = null;
	function generateInvHandler(itemNo)
	{
		return function (evt) 
		{
			if (_activeObject === MOTAS.inventory[itemNo])
				_activeObject = null;
			else
				MOTAS.inventory.select(itemNo);
			parent.$('#active-object').text(_activeObject);
			parent._tmpActive = (
			{
				activeObject: _activeObject,
				itemNo: itemNo
			});
		};
	}

	const numSpaces = 8;
	// Inventory management is handled at the top level here. 
	// This means we can save space in the slot. Slot names are 1-indexed.
	// If you want to add/remove from the inventory iframe, stop the event from propagating
	this.inventory = 
	{
		// Inventory.html adds a function called showItem to display an item
		// params are (slot, item)

		add(slot, invObj)
		{
			this[slot] = invObj;
			this.unselect();
			this.showItem(slot, invObj);
		},
		// Can be either slot number or item name
		remove(target)
		{
			if (typeof target === 'string')
				target = this.querySlot(target);

			this[target] = null;
			this.unselect();
			this.showItem(target, null);
		},
		clear()
		{
			for (let i = 1; i <= numSpaces; i++)
				this.remove(i);
		},
		dump()
		{
			for (let i = 1; i <= numSpaces; i++)
			{
				if (this[i] != null)
					console.log(i, this[i]);
			}
		},
		select(slotNum)
		{
			_activeObject = this[slotNum];
			_activeSlot = slotNum;
			this.dump();
			this.hideSelected();
			this.showSelected(slotNum);
		},
		unselect()
		{
			_activeObject = null;
			_activeSlot = null;
			this.dump();
			this.hideSelected();
		},
		includes(queryObj)
		{
			for (let i = 1; i <= numSpaces; i++)
			{
				if (this[i] === queryObj)
					return true;
			}

			return false;
		},
		querySlot(queryObj)
		{
			for (let i = 1; i <= numSpaces; i++)
			{
				if (this[i] === queryObj)
					return i;
			}

			return 0;
		},
		get activeObject() { return _activeObject; },
		get activeSlot() { return _activeSlot; },
		// Good to start level
		ready : false
	};


	// Allocate objects for levels:
	this.lv1 = {};
	this.lv2 = {};

	return this;
})();

(function ()
{
	// Attach APIs
	let scriptSources = 
	[
		// 'http://www.midijs.net/lib/midi.js',
		'https://code.jquery.com/jquery-3.5.1.min.js'
	];

	scriptSources.forEach(function (src) 
	{
		let scriptTag = document.createElement('script');
		scriptTag.setAttribute('src', src);
		document.head.appendChild(scriptTag);
	});
})();
