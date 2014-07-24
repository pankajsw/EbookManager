/**
 * 
 */
define(["app", "apps/header/show/show_controller"], function(EbookManager, ShowController){
	EbookManager.module("HeaderApp", function(HeaderApp, EbookManager, Backbone, Marionette, $, _){
		var API = {
			showHeader: function(headerName){
				ShowController.showHeader(headerName);
			}
		};
		EbookManager.commands.setHandler("set:active:header", function(headerName){
			API.showHeader(headerName);
		});
	});
	return EbookManager.HeaderApp;
});