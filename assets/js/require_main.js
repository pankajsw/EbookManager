requirejs.config({
	baseUrl: "assets/js",
	paths: {
		jquery: "bower_components/jquery/dist/jquery",
		underscore: "bower_components/underscore/underscore",
		backbone: "bower_components/backbone/backbone",
		marionette: "bower_components/marionette/lib/backbone.marionette",
		bootstrap: "bower_components/bootstrap/dist/js/bootstrap",
		tpl: "bower_components/requirejs-tpl/tpl",
		spin: "bower_components/spin.js/spin",
	    "spin.jquery": "bower_components/spin.js/jquery.spin"
	},
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},
		marionette: {
			deps: ["backbone"],
			exports: "Marionette"
		},
		"spin.jquery": ["spin", "jquery"],
		bootstrap: {
			deps: ["jquery"]
		}
	}
});

require(["app", "bootstrap", "apps/header/header_app", "apps/footer/footer_app"], 
		function(EbookManager){
	EbookManager.start();
});