/**
 * 
 */
define(["app", "apps/footer/show/show_controller"], function(EbookManager, ShowController){
	EbookManager.module("FooterApp", function(FooterApp, EbookManager, Backbone, Marionette, $, _){
		var API = {
			showFooter: function(pagination){
				ShowController.showFooter(pagination);
			}
		};
		EbookManager.commands.setHandler("show:footer", function(pagination){
			API.showFooter(pagination);
		});
	});
	return EbookManager.FooterApp;
});