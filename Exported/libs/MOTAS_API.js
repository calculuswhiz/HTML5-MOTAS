let MOTAS = 
{
};

function setText(text)
{
	console.log(text);
}

function setVar(key, value)
{
	MOTAS[key] = value;
}

function playMIDI(src)
{

}

// Attach APIs
let scriptSources = 
[
	'http://www.midijs.net/lib/midi.js'
];

scriptSources.forEach(function (src) 
{
	let scriptTag = document.createElement('script');
	scriptTag.setAttribute('src', src);
	document.head.appendChild(scriptTag);
});
