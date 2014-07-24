/**
 * 
 */
define(["app","tpl!apps/header/show/tpl/header.html"], function(EbookManager, headerViewTemplate){
	EbookManager.module("HeaderApp.Show.View", function(View, EbookManager, Backbone, Marionette, $, _){
		View.HeaderView = Marionette.ItemView.extend({
			template: headerViewTemplate,
			events: {
				"click .glyphicon-zoom-in": "onZoonIn" 
			},
			onZoonIn: function(e) {
				e.preventDefault();
				this.trigger("header:zoomin");
			}
		});
	});
	return EbookManager.HeaderApp.Show.View;
});