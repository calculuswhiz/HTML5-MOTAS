# HTML5-MOTAS
My attempt at a port of the classic Flash game, Mystery of Time and Space by Jan Albartus.

# About me
I'm just some dude who remembers playing MOTAS back in the 2000's. I've never really been a fan of room escape games, but for some reason, the surreal nature of MOTAS really just stuck with me throughout the years. In fact, if I were to name my top Flash game of all time, MOTAS would be it.

My qualifications: I got a job as a Flash Developer back in late 2016, and my big project was to convert our entire Flash library (over 3000 .FLA files) to HTML5, so this is not a new thing for me (yay). I'm also pretty good at HTML/JS as well as I'm a Full Stack developer now.

Also, I'm very busy with life stuff, and this project sat on the back burner for a while. I can't guarantee this will be done quickly. I'll try to be better about making time for this though.

# This Repo
I would like to upload the ported game files as I go. Hopefully, I can make some meaningful progress in the next few weeks.

The wiki is where I will document my progress through porting MOTAS to HTML5. There will be difficulties, I'm sure, but I think this is going to be fun.

# What actually works right now?
- Levels 1-3, but I don't have a live demo yet, unfortunately (working on it). Currently to play a level:
	- Download this repo
	- Install http-server from `pip`
	- Run the server from the directory with MOTASMain.html in it.
	- To change the level you want to play, change `testingLevel` to the level you want to test.
	- Navigate to http://localhost:8080/MOTASMain.html.
	- Be warned that this is a little bit janky right now. There's a weird caching issue I haven't figure out yet. If you change something and it doesn't work, that's probably what's happening. You can get around this by either clearing cache from localhost, or disabling cache while your F12 console is open.
	- There is also no sound yet as I decided to render the midis instead so that it integrates with HTML5 better. That's on the list.
- I have rendered the original sounds as OGGs using the Windows soundfont under the midi folder.
- I have also "remastered" the midi tracks under Exported/midi (first draft) with a better soundfont using MuseScore 3. I'll probably redo this later. Some articulations are missing upon import it seems.

# The MOTAS Reddit
https://www.reddit.com/r/MOTAS/
