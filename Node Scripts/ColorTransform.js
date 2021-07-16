function transform(color, tMat)
{
	let newColor = 
	[
		color.substr(0, 2),
		color.substr(2, 2),
		color.substr(4, 2)
	].map(colorStr => Number(`0x${colorStr}`));

	for (let i = 0; i < 3; i++)
	{
		let scale = tMat[2 * i];
		if (scale > 1)
			scale /= 100;
		let offset = tMat[2 * i + 1];
		newColor[i] = (newColor[i] * scale + offset) | 0;
	}

	return newColor.map(num => num.toString(16).padStart(2, '0')).join('').toUpperCase();
}

let matrix = 
[
	47, 63, 
	47, 39, 
	47, 0
];
let colors = 
[
	'999999',
	'666666',
	'333333',
];

console.log(colors.map(color => transform(color, matrix)));