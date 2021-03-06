Canvas_Poppers
==============

DEPENDENCIES: jQuery

Interactive party poppers that can be added to an HTML5 canvas element for some party fun.

To use the poppers, all you need to do is attach a "popperCanvas" class to your html canvas element and then push new PartyPopper objects onto the popperArr array.  Currently, there are red, blue and green poppers.  A new popper is created with the following parameters:

        1) x-coordinate (int)
        2) y-coordinate (int)
        3) angle (double)
        4) context (the context of your canvas where you want the popper drawn)
        5) color (string {"red", "green", "blue"})
        
For angles, straight down is 0 degrees, up is 180, the bottom of the popper facing right is 90 and facing left is -90.

So if I wanted a red popper in the middle of my canvas (HEIGHT = 800px and WIDTH = 1000px) facing down and to the right (45 degree angle), the code would look like this:

        var ctx = $('.popperCanvas')[0].getContext("2d");
        popperArr.push(new PartyPopper(500, 400, ctx, "red"));
        
You should be able to place multiple canvas elements on the screen and put poppers in each of them, as long as each has the 'popperCanvas' class attached.

Clicking on a popper will animate it and cause it to shoot colored confetti across the screen.  After clicking on a popper, it can't be clicked again unless you reload the page.

A 'complete' function is available that can be called to let you know if the popper's image src has been loaded before you start trying to draw it.

A 'pop' function is available if you want to manually pop a popper instead of having somebody click on it.

An 'isPopped' function is available to let you know if a popper has been popped and all of its confetti is off the canvas screen.

2 sound files for the popping noise are included; the party_popper.js file handles embedding the audio tag on your web page with a $(document).ready event.  Only one audio element is embedded, and all poppers share that element.


The Adobe Photoshop and Adobe Illustrator files for the popper images are also provided.  To create a new color of popper, all you have to do is change the gradient colors in the Illustrator file and then move the image into the Photoshop file and use it as a new layer.  Then just save one image as a .png with the "Popped String" layer on and another with the "Unpopped String" layer.  So for a new purple party popper (dat alliteration), the 2 files you'd need would be:

        party_popper_purple.png
                and
        party_popper_purple-popped.png
        
Then just stick those two files in the img/ directory with the rest and you're good to go!


An example page is provided in the Example folder (creative name, I know).  It has 6 poppers facing different directions on one big canvas.


CURRENT KNOWN BUG: For some reason, sometimes poppers that you DON'T click will go off when you click one.  The first popper in the array will ALWAYS go off the first time you click any of the poppers.  Sometimes, other ones will go off prematurely as well.


STUFF TO ADD:

        1) Convert entire thing into a jQuery plugin
        2) Add reset ability so the page doesn't have to be refreshed
        3) Change some of the functionality so the user doesn't have to know as much and the poppers can be implemented easier (such as making it so the user doesn't have to know about the popperArr array)
