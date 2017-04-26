(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule ],
            declarations: [ app.AppComponent ],
            bootstrap: [ app.AppComponent ]
        })
            .Class({
                constructor: function AppModule() {}
            })

})(window.app || (window.app = {}));