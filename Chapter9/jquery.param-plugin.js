(function ($) {
    $.fn.spotlight = function (hue) {
        var hue = hue || "yellow"
        this.css("background", hue);
        return this;
    }
}(jQuery));
