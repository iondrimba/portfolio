/* global TweenLite */
define([], function () {
    var AnimateColors = function (Grid3D) {
        this.el = 'grid3d';
        this.njq = Grid3D.$$;
        this.grid = Grid3D;
        this.totalColors = this.grid.colors.length;
        this.duration = 2;
        this.delay = 1000 * this.duration;

        function hexToRgbTreeJs(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16) / 255,
                g: parseInt(result[2], 16) / 255,
                b: parseInt(result[3], 16) / 255
            } : null;
        }

        function TweenProp(prop, rgb, material, duration) {
            TweenLite.to(prop, duration, {
                r: rgb.r, g: rgb.g, b: rgb.b, onUpdate: function (material) {
                    material.verticesNeedUpdate = true;
                }, onUpdateParams: [material]
            });
        }

        this.getRandomIndex = function () {
            return Math.floor(Math.random() * (this.totalColors - 1));
        };

        this.initialize = function () {
            setInterval(function () {
                var index = this.getRandomIndex();
                this.changeColors(index);

            }.bind(this), this.delay);
        };

        this.changeColors = function (index) {
            var rgbColor = hexToRgbTreeJs(this.grid.colors[index].materialColor),
                rgbSpecular = hexToRgbTreeJs(this.grid.colors[index].specularColor);

            //MATERIAL COLOR
            TweenProp(this.grid.materials[0].color, rgbColor, this.grid.materials[0], this.duration);

            //SPECULAR
            TweenProp(this.grid.materials[0].specular, rgbSpecular, this.grid.materials[0], this.duration);

            //MATERIAL AUX COLOR
            TweenProp(this.grid.materialsAux[0].color, rgbColor, this.grid.materialsAux[0], this.duration);

            //SPECULAR AUX
            TweenProp(this.grid.materialsAux[0].specular, rgbSpecular, this.grid.materialsAux[0], this.duration);


        };

        this.execute = function () {
        };

        this.initialize();
    };
    return AnimateColors;
});