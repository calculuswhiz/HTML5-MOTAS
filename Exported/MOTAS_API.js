// Access given to the game iframe, not main html src.
let MOTAS = (function ()
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
		}
	};

	this.setText = function (text)
	{
		parent.$('#game-text').text(text);
		console.log(text);
	};

	this.setFlavorText = function (object, tooltip, gameText)
	{
		object.on('rollover', () => {MOTAS.cursor.setText(tooltip)});
		object.on('rollout', () => {MOTAS.cursor.setText()});

		if (typeof(gameText) === 'string')
			object.on('click', () => {MOTAS.setText(gameText)});
		else
			object.on('click', gameText);
	};

	let _activeObject = null;
	function generateInvHandler(itemNo)
	{
		return function (evt) 
		{
			if (_activeObject === MOTAS.inventory[itemNo])
				_activeObject = null;
			else
				MOTAS.inventory.select(itemNo);
			parent.$('#active-object').text(_activeObject);
		};
	}
	this.inventory = 
	{
		add: function (slot, invObj)
		{
			MOTAS.inventory[slot] = invObj;
			MOTAS.inventory.dump();
		},
		remove: function (slot)
		{
			MOTAS.inventory[slot] = null;
			MOTAS.inventory.dump();
			MOTAS.inventory.unselect();
			_activeObject = null;
		},
		dump: function ()
		{
			parent.$('#inventory').empty();
			for (let i = 0; i < 20; i++)
			{
				if (MOTAS.inventory[i])
				{
					parent.$('#inventory').append(
						parent.$('<button>')
							.on('click', generateInvHandler(i))
							.text(MOTAS.inventory[i])
					);
				}
			}
		},
		select: function (num)
		{
			_activeObject = MOTAS.inventory[num];
		},
		unselect: function (num)
		{
			_activeObject = null;
			parent.$('#active-object').text('');
		},
		get activeObject() { return _activeObject; }
	};

	// Allocate objects for levels:
	this.lv1 = {};

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
