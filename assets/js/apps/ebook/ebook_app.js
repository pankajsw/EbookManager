/**
 * 
 */
define(["app"], function(EbookManager){
	EbookManager.module("EbookApp", function(EbookApp, EbookManager, Backbone, Marionette, $, _){

	});

	EbookManager.module("Routers.EbookApp", function(EbookAppRouter, EbookManager, Backbone, Marionette, $, _){
		EbookAppRouter.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"ebooks": "showEbook",
				"zoomIn": "onZoomIn"
			}
		});
	
		var API = {
			onZoomIn: function() {
				console.log("sayHello");
			},
			
			showEbook: function() {
				console.log("showBook");
				require(["apps/ebook/show/show_controller"], function(ShowController){
					//ShowController.showEbook();
					EbookManager.execute("set:active:header", "Book Namesdsdfs ABC");
					EbookManager.execute("show:footer", "1-2");
				});
			}	
		};
		
		EbookManager.on("ebook:show", function(){
			EbookManager.navigate("ebooks");
		    API.showEbook();
		});
		
		EbookManager.addInitializer(function(){
			new EbookAppRouter.Router({
				controller: API
			});
		});
	});
	
	return EbookManager.EbookAppRouter;
});