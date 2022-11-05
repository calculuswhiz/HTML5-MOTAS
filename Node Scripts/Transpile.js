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
	/_currentframe/g,
		'this.currentFrame',
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
	/\b_root\.mysound_fx.gotoAndStop/g,
		'MOTAS.playSfx',
	/\b_root\.object = "0";/g, 
		'moInv.unselect();',
	/\btellTarget\("_root\/obj(\d)"\)\s+\{\s+this\.gotoAndStop\((.+?)\);\s+\}/g, 
		'moInv.add($1, $2);',
	/\b_root[\/.]cursor[:.]look = (.*);/g, 
		'moCur.setText($1);',
	/\b_root\.(?:my|obj)(Translation\.mytxt\d+)/g, 
		'my$1',
	/\btellTarget\("_root\/pointer"\)\s+\{\s+this\.gotoAndStop\((.+?)\);\s+\}/g, 
		'moCur.setState($1);',
	/\bcall\(_root\.(text\w+)\)/g,
		'MOTAS.setText(generalText.$1)',

	// Clean-up:
	// Clean up of single-digit math and non-borrow subtraction
	/\b(\d*)1 - 1\b/g, '$10', /\b(\d*)2 - 1\b/g, '$11', /\b(\d*)3 - 1\b/g, '$12',
	/\b(\d*)4 - 1\b/g, '$13', /\b(\d*)5 - 1\b/g, '$14', /\b(\d*)6 - 1\b/g, '$15',
	/\b(\d*)7 - 1\b/g, '$16', /\b(\d*)8 - 1\b/g, '$17', /\b(\d*)9 - 1\b/g, '$18',
	// Booleans
	/!!1/g, 'true', /!!0/g, 'false',
];

function processCode(code)
{
	// Globally uncomment:
	if (code.startsWith('/* ') && code.endsWith('*/\n'))
		code = code.slice(3, -3);

	// Get rid of button-attached evt listeners
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
`/* if(../:wheelr1 eq "2")
{
	stop();
}
else
{
	nextFrame();
}
*/
`
));
