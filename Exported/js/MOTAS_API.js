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
	// gameText - can be a static string or a function
	this.setFlavorText = function (object, tooltip, gameText)
	{
		if (flavorTextTracker.has(object))
			return;
		
		flavorTextTracker.add(object);
		object.on('rollover', () => { MOTAS.cursor.setText(tooltip) });
		object.on('rollout', () => { MOTAS.cursor.setText() });

		object.on(
			'click', 
			typeof(gameText) === 'string' 
				? () => {MOTAS.setText(gameText)}
				: gameText
		);
	};

	let quadStateTracker = new Set();
	this.setQuadState = function (object, rollover, click, rollout, mousedown)
	{
		if (quadStateTracker.has(object))
			return;
		quadStateTracker.add(object);
		object.on('rollover', rollover || (()=>{}));
		object.on('click', click || (()=>{}));
		object.on('rollout', rollout || (()=>{}));
		object.on('mousedown', mousedown || (()=>{}));
	};

	// null - holding nothing
	let _activeObject = null;
	// null - no slot active
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
			for (let slot = 1; slot <= numSpaces; slot++)
				this.remove(slot);
		},
		dump()
		{
			for (let slot = 1; slot <= numSpaces; slot++)
			{
				if (this[slot] != null)
					console.log(slot, this[slot]);
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
			for (let slot = 1; slot <= numSpaces; slot++)
			{
				if (this[slot] === queryObj)
					return true;
			}

			return false;
		},
		// Look for an object by name, and return the slot number. 0 if not found
		querySlot(queryObj)
		{
			for (let slot = 1; slot <= numSpaces; slot++)
			{
				if (this[slot] === queryObj)
					return slot;
			}

			return 0;
		},
		get activeObject() { return _activeObject; },
		get activeSlot() { return _activeSlot; },
		// Good to start level
		ready : false
	};

	return this;
})();

(function ()
{
	// Attach APIs
	let scriptSources = 
	[
		'https://code.jquery.com/jquery-3.5.1.min.js'
	];

	scriptSources.forEach(function (src) 
	{
		let scriptTag = document.createElement('script');
		scriptTag.setAttribute('src', src);
		document.head.appendChild(scriptTag);
	});
})();
