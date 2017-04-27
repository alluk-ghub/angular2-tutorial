(function(app) {
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
    //System.import('/app/models/hero.model.js')
    //    .then(function(HeroModel) {
    //        app.HeroDetailsComponent =
    //            ng.core.Component({
    //                selector: 'hero-details',
    //                templateUrl: '/app/templates/hero-details.template.html',
    //                inputs: ['hero']
    //            }).Class({
    //                constructor: function HeroDetailsComponent() {
    //                    this.title = "Tour of Heroes";
    //                    console.log(new HeroModel(11, "asd"));
    //                }
    //            });
    //    })
    //    .then(null, function(error) {
    //        console.error('Failed to load:', error);
    //    });
})(window.app || (window.app = {}));