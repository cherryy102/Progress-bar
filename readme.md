

## Progress-bar
To use the progress bar, you must add to your document style.css and progress-bar.js. To run a function it is enough to call it `progressBar(percent,time,barID) //percent - the percentage we want, time - length of execution(in seconds), varID - which bar is in order, start from 0`

Example: 

     <script>
         progressBar(80, 1.5, 0);
        </script>
HTML code:

    <div class="progress__bar">
	    <div class="progress__bar__percent">0%</div>
	    <div class="progress__bar__rail">
		    <div class="progress__bar__line"></div>
	    </div>
    </div>
    
If we want to have several progress bars, we have to call this function as many times as there are bars.

You can change width, height, bar color and font color in style.css. Variables are responsible for this:

    //start values
    --barWidth: 700px;
    --barHeight: 10px;
    --barBgcColor: #cecece;
    --barColor: #009E66;
    --fontColor: black;
   ## [Demo](http://portfolio.gryimprezowe.pl/progress-bar)
    










