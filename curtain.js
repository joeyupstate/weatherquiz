/*These  are the function that rotates the thermometer
note that the step on the first function is positive and the second is negative, pos makes it go right neg makes it go left */
        $.fn.rotate = function(degrees, step, current) {
            var self = $(this);
            current = current || 0;
            step = step ||0.5;
            current += step;
            self.css({
                '-webkit-transform' : 'rotate(' + current + 'deg)',
                '-moz-transform' : 'rotate(' + current + 'deg)',
                '-ms-transform' : 'rotate(' + current + 'deg)',
                'transform' : 'rotate(' + current + 'deg)'
            });
            if (current != degrees) {
                setTimeout(function() {
                    self.rotate(degrees, step, current);
                }, 5);
            }
       
        };

       
        /*This jquery makes the animation come to life */

        $(document).ready(function() { $("#earth").rotate(-360); });

        $("#start").click(function(){$("#curtain").fadeOut(1000);});
        
        