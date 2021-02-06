let duplicateLookup = {};
(function ()
{
	// Determined with md5sum
	const duplicates = {
		"mystery18" : [],
		"mystery1" : ["mystery11", "mystery12", "mystery3"],
		"mystery19" : [],
		"mystery16" : [],
		"mystery20" : [],
		"mystery14" : [],
		"mystery15" : [],
		"mystery2" : ["mystery10", "mystery5", "mystery7"],
		"mystery8" : [],
		"mystery9" : ["mystery13"],
		"menu" : ["mystery4", "mystery6"],
		"mystery17" : []
	};
	
	for (let key in duplicates)
	{
		// Key maps to self
		duplicateLookup[key] = key;
		duplicates[key].forEach(dupe => 
		{
			duplicateLookup[dupe] = key;
		});
	}
})();
