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
	50, 51, 
	50, 0, 
	50, 20
];
let colors = 
[
	'000000',
	'333333',
	'666666',
	'999999'
];

console.log(colors.map(color => transform(color, matrix)));