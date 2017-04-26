(function(app) {
    var Hero = ng.core.Class({
        constructor: function Hero(id, name) {
            this.id = id;
            this.name = name;
        }
    });

    app.HeroDetailsComponent =
        ng.core.Component({
            selector: 'hero-details',
            templateUrl: '/app/templates/hero-details.template.html',
            inputs: ['hero']
        }).Class({
            constructor: function HeroDetailsComponent() {
                this.title = "Tour of Heroes";
            }
        });
})(window.app || (window.app = {}));