const reSubMap = 
[
	// AS2 translation:
	/_root(?:\/:|\.)text = _root\.(myTranslation.mytxt\d+);/g, 
		'MOTAS.setText($1);',
	/gotoAndStop\((\d+)\)/g,
		'gotoAndStop($1 - 1)',
	/prevFrame\(\)/g, 
		'this.gotoAndStop(this.currentFrame - 1)',
	/nextFrame\(\)/g, 
		'this.gotoAndStop(this.currentFrame + 1)',
	/\t(play|stop)\(\)/g,
		'\tthis.$1()',

	// Style:
	// Space after control keywords and parens
	/(if|for|while)\(/g,
		'$1 (',
	// Remove braces around single line controls:
	/(if *\(.*\)\n|else\n)\s*\{\n([^}\n]*)\n\s*\}/g,
		'$1$2',

	// API stuff:
	/_root\.object = "0";/g, 
		'moInv.unselect();',
	/tellTarget\("_root\/obj(\d)"\)\s+\{\s+gotoAndStop\((.+?)\);\s+\}/g, 
		'moInv.add($1, $2);',
	/_root\.cursor\.look = _root\.(myTranslation\.mytxt\d+);/g, 
		'moCur.setText($1);',
	/tellTarget\("_root\/pointer"\)\s+\{\s+gotoAndStop\((.+?)\);\s+\}/g, 
		'moCur.setState($1);'
];

function processCode(code)
{
	for (let i = 0; i < reSubMap.length; i += 2)
	{
		let re = reSubMap[i];
		let swapText = reSubMap[i + 1];
		code = code.replace(re, swapText);
	}

	return code;
}

console.log(processCode(
`this.xnew = exportRoot.player.x;
this.ynew = exportRoot.player.y;
let player = exportRoot.back.ratmove.player;
let walkBox = player.walk;

if (this.xold == this.xnew)
{
	if (this.yold == this.ynew)
		walkBox.text = "no";
}
if (this.xold > this.xnew)
{
	walkBox.text = "yes";
	player.gotoAndStop("_270");
}
if (this.xold < this.xnew)
{
	walkBox.text = "yes";
	player.gotoAndStop("_90");
}
if (this.yold > this.ynew)
{
	walkBox.text = "yes";
	if (this.xold == this.xnew)
	{
		player.gotoAndStop("_0");
	}
	if (this.xold > this.xnew)
	{
		player.gotoAndStop("_315");
	}
	if (this.xold < this.xnew)
	{
		player.gotoAndStop("_45");
	}
}
if (this.yold < this.ynew)
{
	walkBox.text = "yes";
	if (this.xold == this.xnew)
	{
		player.gotoAndStop("_180");
	}
	if (this.xold > this.xnew)
	{
		player.gotoAndStop("_225");
	}
	if (this.xold < this.xnew)
	{
		player.gotoAndStop("_135");
	}
}
`
));
