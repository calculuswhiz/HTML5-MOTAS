function transform(color, tMat)
{
	let newColor = 
	[
		color.substr(0, 2),
		color.substr(2, 2),
		color.substr(4, 2)
	].map(colorStr => Number(`0x${colorStr}`));

	for (let i = 0; i < 3; i++)
		newColor[i] = (newColor[i] * tMat[2 * i] + tMat[2 * i + 1]) | 0;

	return newColor.map(num => num.toString(16).padStart(2, '0')).join('').toUpperCase();
}

let matrix = [.58, 7, .58, 2, .58, 0];
let colors = 
[
	'999966',
	'666633',
	
];

console.log(colors.map(color => transform(color, matrix)));