define(["app", "tpl!apps/ebook/show/tpl/main.html"], function(EbookManager, ebookTemplate){
	EbookManager.module('EbookApp.Show.View', function(View, EbookManager, Backbone, Marionette, $, _){
		View.EbookView = Marionette.ItemView.extend({
			template : ebookTemplate
		});
		
	});
	return EbookManager.EbookApp.Show.View;
});