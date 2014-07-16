(function(root) {
    "use strict";
    function PathGenerator() {
        this.bits = [];
    }

    PathGenerator.prototype.append = function(/* ... */) {
        for (var i = 0; i < arguments.length; i++) this.bits.push(arguments[i]);
        return this;
    };
    PathGenerator.prototype.toString = function() {
        return this.bits.join(" ");
    };
    PathGenerator.prototype.moveTo = function(x, y) {
        return this.append("M", x, y);
    };
    PathGenerator.prototype.relMoveTo = function(x, y) {
        return this.append("m", x, y);
    };
    PathGenerator.prototype.close = function() {
        return this.append("Z");
    };
    PathGenerator.prototype.lineTo = function(x, y) {
        return this.append("L", x, y);
    };
    PathGenerator.prototype.relLineTo = function(x, y) {
        return this.append("l", x, y);
    };
    PathGenerator.prototype.hlineTo = function(x) {
        return this.append("H", x);
    };
    PathGenerator.prototype.relHlineTo = function(x) {
        return this.append("h", x);
    };
    PathGenerator.prototype.vlineTo = function(y) {
        return this.append("V", y);
    };
    PathGenerator.prototype.relVlineTo = function(y) {
        return this.append("v", y);
    };
    PathGenerator.prototype.curveTo = function(x1, y1, x2, y2, x, y) {
        return this.append("C", x1, y1, x2, y2, x, y);
    };
    PathGenerator.prototype.relCurveTo = function(x1, y1, x2, y2, x, y) {
        return this.append("c", x1, y1, x2, y2, x, y);
    };
    PathGenerator.prototype.smoothCurveTo = function(x2, y2, x, y) {
        return this.append("S", x2, y2, x, y);
    };
    PathGenerator.prototype.relSmoothCurveTo = function(x2, y2, x, y) {
        return this.append("s", x2, y2, x, y);
    };
    PathGenerator.prototype.quadraticTo = function(x1, y1, x, y) {
        return this.append("Q", x1, y1, x, y);
    };
    PathGenerator.prototype.relQuadraticTo = function(x1, y1, x, y) {
        return this.append("q", x1, y1, x, y);
    };
    PathGenerator.prototype.smoothQuadraticTo = function(x, y) {
        return this.append("T", x, y);
    };
    PathGenerator.prototype.relSmoothQuadraticTo = function(x, y) {
        return this.append("t", x, y);
    };
    PathGenerator.prototype.ellipticalArc = function(rx, ry, xRotation, largeArc, sweep, x, y) {
        return this.append("A", rx, ry, xRotation, largeArc, sweep, x, y);
    };
    PathGenerator.prototype.relEllipticalArc = function(rx, ry, xRotation, largeArc, sweep, x, y) {
        return this.append("a", rx, ry, xRotation, largeArc, sweep, x, y);
    };
    // Snapsvg extensions:
    PathGenerator.prototype.catmullRomTo = function(x1, y1, x, y) {
        return this.append("R", x1, y1, x, y);
    };
    PathGenerator.prototype.relCatmullRomTo = function(x1, y1, x, y) {
        return this.append("r", x1, y1, x, y);
    };

    function Gravelly() {
        return new PathGenerator();
    }

    if (typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports) module.exports = Gravelly;
    else root.Gravelly = Gravelly;
}(this));
