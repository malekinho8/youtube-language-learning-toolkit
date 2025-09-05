# youtube-language-learning-toolkit
Allows user to go backwards/forwards by specified time, and also to use the keyboard to easily switch between languages auto-translated by YouTube automatically.
# Usage

Note that for the time being the code only works for switching from videos that are in Arabic natively to English auto-translated captions. However, the code could easily be updated to generalize functionality to switching from a video which is natively in some language to another language of interest. To use the code, perform the following steps:

1. Open a YouTube video (that is in Arabic), make sure captions are turned on.
2. Copy the code from `main.js` 
3. Open the Developer View by pressing `F12` on your keyboard
4. Paste the code from `main.js` into the `Console` command line, and then press `Enter`
5. Play the video, and now you should have more controls to be able to move forward and backward in the video by a specified amount (this functionality taken from vdegenne's [youtube-seconds](https://github.com/vdegenne/youtube-seconds) repository) *and* to be able to easily toggle between English captions and Arabic captions, which is very helpful for learning new words and quickly mapping words from Arabic to English and vice versa. Use `Alt` / `Option` + `C` to toggle between languages, and use `Alt` / `Option` + `->` / `<-` to go forward or backward 1 second (default is 1 second but this can be changed in `main.js`)
6. That's it!