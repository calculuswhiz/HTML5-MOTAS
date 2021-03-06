const reSubMap = 
[
	// AS2 translation:
	// General props
	/getProperty\("(\w+)", (\w+)\)/g,
		'this.$1.$2',
	/setProperty\("(\w+)", (\w+), (.*)\)/g,
		'this.$1.$2 = $3',
	// MC props
	/gotoAnd(Stop|Play)\((\d+)\)/g,
		'gotoAnd$1($2 - 1)',
	/prevFrame\(\)/g, 
		'this.gotoAndStop(this.currentFrame - 1)',
	/nextFrame\(\)/g, 
		'this.gotoAndStop(this.currentFrame + 1)',
	/^(\s*)(gotoAnd(Stop|Play))/gm,
		'$1this.$2',
	/^(\s*)(play|stop)\(\)/gm,
		'$1this.$2()',
	/[:.]_visible/g,
		'.visible',
	/(visible = )"(\d)"/g,
		'$1!!$2',
	// Boolean ops
	/\bne\b/g, '!==', 
	/\beq\b/g, '===',

	// Framework/API Conventions:
	/_root\/:object === "0"/g,
		'moInv.activeObject === null',
	/_root\/:object\b/g,
		'moInv.activeObject',
	/(_root(?:\/:|\.))?text = _root\.(myTranslation.mytxt\d+);/g, 
		'MOTAS.setText($2);',
	/\.\.\/:(\w+) =/g,
		'exportRoot.flags.$1 =',

	// Style:
	// Space after control keywords and parens
	/(if|for|while)\(/g,
		'$1 (',
	// Remove braces around single line controls:
	/(if *\(.*\)\n|else\n)\s*\{\n([^}\n]*)\n\s*\}/g,
		'$1$2',

	// API stuff:
	/_root\.mysound_fx.gotoAndStop/g,
		'MOTAS.playSfx',
	/_root\.object = "0";/g, 
		'moInv.unselect();',
	/tellTarget\("_root\/obj(\d)"\)\s+\{\s+this\.gotoAndStop\((.+?)\);\s+\}/g, 
		'moInv.add($1, $2);',
	/_root[\/.]cursor[:.]look = _root\.(myTranslation\.mytxt\d+);/g, 
		'moCur.setText($1);',
	/tellTarget\("_root\/pointer"\)\s+\{\s+this\.gotoAndStop\((.+?)\);\s+\}/g, 
		'moCur.setState($1);',

	// Clean-up:
	// Clean up of single-digit math
	/\b1 - 1\b/g, '0', /\b2 - 1\b/g, '1', /\b3 - 1\b/g, '2',
	/\b4 - 1\b/g, '3', /\b5 - 1\b/g, '4', /\b6 - 1\b/g, '5',
	/\b7 - 1\b/g, '6', /\b8 - 1\b/g, '7', /\b9 - 1\b/g, '8',
	// Booleans
	/!!1/g, 'true', /!!0/g, 'false',
];

function processCode(code)
{
	// Globally uncomment:
	if (code.startsWith('/* ') && code.endsWith('*/\n'))
		code = code.slice(3, -3);

	if (code.startsWith('on('))
	{
		let excessLinesEnd = code.endsWith('}\n') ? -2 : -3;
		code = code
			.split('\n')
			.slice(1, excessLinesEnd)
			.map(line => line.replace(/^(\t|    )/, ''))
			.join('\n');
	}

	for (let i = 0; i < reSubMap.length; i += 2)
	{
		let re = reSubMap[i];
		let swapText = reSubMap[i + 1];
		code = code.replace(re, swapText);
	}

	return code;
}

console.log(processCode(
`on(release){
	_root.text = _root.myTranslation.mytxt68;
}

`
));
