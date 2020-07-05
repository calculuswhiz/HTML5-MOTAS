// Access given to the game iframe, not main html src.
var MOTAS = (function ()
{
	let _level = null;
	this.level = () => _level;
	Object.defineProperty(this, 'level', 
	{
		get: function() 
		{
			return _level;
		}
	});

	this.winLevel = function ()
	{
		alert(`You win this level!`);
	};

	// TODO: how do I loop?
	this.sound = 
	{
		playing: false,
		currentTrack: null,
		mute: function ()
		{
			MIDIjs.pause();
		},
		unmute: function ()
		{
			MIDIjs.resume();
		},
		playTrack: function (track)
		{
			MOTAS.sound.currentTrack = track;
			MIDIjs.play(track);
		}
	};

	this.cursor = 
	{
		setText: function (text)
		{
			text = text || '';
			parent.$('#cursor-text').text('Cursor:' + text);
			console.log('Cursor: ' + text);
		},
		setState: function (state)
		{
			parent.$('#cursor-state').text('Cursor State:' + state);
			console.log('Cursor State: ' + state);
		},
		setBoth: function (text, state)
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
	this.setFlavorText = function (object, tooltip, gameText)
	{
		if (!flavorTextTracker.has(object))
			flavorTextTracker.add(object);
		else
			return;
		object.on('rollover', () => {MOTAS.cursor.setText(tooltip)});
		object.on('rollout', () => {MOTAS.cursor.setText()});

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
			parent._tmpActive = 
			{
				activeObject: _activeObject,
				itemNo: itemNo
			};
		};
	}
	// Inventory management is handled at the top level here. This means we can save space in the slot.
	// TODO: remember to set the canvases to .25 alpha
	this.inventory = 
	{
		add: function (slot, invObj)
		{
			MOTAS.inventory[slot] = invObj;
			MOTAS.inventory.unselect();
		},
		remove: function (slot)
		{
			MOTAS.inventory[slot] = null;
			MOTAS.inventory.unselect();
		},
		dump: function ()
		{
			// There are a total of 8 inventory spaces
			for (let i = 1; i <= 8; i++)
			{
				let $inventory = parent.$('#inventory');
				let itemName = MOTAS.inventory[i];
				let invRoot = parent.$('#obj' + i)[0]
					.contentWindow
					.exportRoot;
				// This just displays the item.
				invRoot.gotoAndStop(itemName ? itemName : 0);
				if (i !== _activeSlot)
					invRoot.alpha = 1;
			}
		},
		select: function (num)
		{
			_activeObject = MOTAS.inventory[num];
			_activeSlot = num;
			MOTAS.inventory.dump();
		},
		unselect: function ()
		{
			_activeObject = null;
			_activeSlot = null;
			MOTAS.inventory.dump();
		},
		get activeObject() { return _activeObject; },
		get activeSlot() { return _activeSlot; }
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
		'http://www.midijs.net/lib/midi.js',
		'https://code.jquery.com/jquery-3.5.1.min.js'
	];

	scriptSources.forEach(function (src) 
	{
		let scriptTag = document.createElement('script');
		scriptTag.setAttribute('src', src);
		document.head.appendChild(scriptTag);
	});
})();
