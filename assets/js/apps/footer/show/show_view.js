/**
 * 
 */
define(["app","tpl!apps/footer/show/tpl/footer.html"], function(EbookManager, headerViewTemplate){
	EbookManager.module("FooterApp.Show.View", function(View, EbookManager, Backbone, Marionette, $, _){
		View.FooterView = Marionette.ItemView.extend({
			template: headerViewTemplate
		});
	});
	return EbookManager.FooterApp.Show.View;
});