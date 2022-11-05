# HTML5-MOTAS
My attempt at a port of the classic Flash game, Mystery of Time and Space by Jan Albartus.

# Project status update 05 Nov 22
Hi, everyone. I appreciate all the support you've given me. You deserve to know what's going on. In short, I just don't have the time or motivation to continue the project at this point. However, I won't leave it at that. I have put all the unfinished .fla files into the **Not Done** folder. You will need Adobe Animate (not free) and JPEXS Flash Decompiler (free). I will be happy to answer any questions about the workflow as well in the project **Issues** page.

- This is something I started doing (had time for) when the pandemic hit. I found it increasingly hard to make time for as things went back to normal. Also, the Adobe Animate Editor is subscription-driven, like everything else now.

- This project has been extremely tedious at points:
  - There's a feature in old Flash called "color tween" that allowed the swf to transform the color of a flash object procedurally. Such a feature is not supported in EaselJS. Once the emulated effect is applied to the object, it is no longer able to be animated and glitches out the whole animation. What I end up having to do is duplicate the instance, calculate the colors of each shape, and recolor them manually using a transparency (alpha) tween to mask them.

  Why is this such a problem? Well, it honestly wasn't that bad until Level 7: The color wheel level. I'd either have to create an instance for every primary color combination or just emulate it programatically. Either would be annoying to make, the latter because I'd have to create an API and manually locate every single usage on the stage.

  - Converting ActionScript 2 to JS is not fun. Even with my translator Node script, there were still far too many exceptions to account for.

  - Even if everything exports right in a level, I have to spend an obscene amount of time optimizing the graphics and squashing animation bugs. To be clear, a direct export and translate of simple scripts are not guaranteed to work the same way. The worst offender is when nested movieClips ignore any scripts an the first frame upon re-entering the parent frame. Even with my [workaround](https://community.adobe.com/t5/animate-discussions/html5-canvas-movieclips-on-main-timeline-playing-automatically/m-p/11521942#M336375), I still have to go find the clips and freeze them manually.

# About me
I'm just some dude who remembers playing MOTAS back in the 2000's. I've never really been a fan of room escape games, but for some reason, the surreal nature of MOTAS really just stuck with me throughout the years. In fact, if I were to name my top Flash game of all time, MOTAS would be it.

My qualifications: I got a job as a Flash Developer back in late 2016, and my big project was to convert our entire Flash library (over 3000 .FLA files) to HTML5, so this is not a new thing for me (yay). I'm also pretty good at HTML/JS as well as I'm a Full Stack developer now.

Also, I'm very busy with life stuff, and this project sat on the back burner for a while. I can't guarantee this will be done quickly. I'll try to be better about making time for this though.

# This Repo
I would like to upload the ported game files as I go. Hopefully, I can make some meaningful progress in the next few weeks/months/years.

The wiki is where I will document my progress through porting MOTAS to HTML5. There will be difficulties, I'm sure, but I think this is going to be fun.

# What actually works right now?
- Levels 1-6! Live demo [here][1].
- I have rendered the original sounds as OGGs using the Windows soundfont under the midi folder.
	- There are now mp3s for Apple devices as well.

# Links
- [Wiki][2]
- [Testing Demo][1]
- [The MOTAS Reddit][3]

[1]: https://calculuswhiz.github.io/HTML5-MOTAS/Exported/MOTASMain.html
[2]: https://github.com/calculuswhiz/HTML5-MOTAS/wiki
[3]: https://www.reddit.com/r/MOTAS/
