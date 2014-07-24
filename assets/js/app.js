define(["marionette"], function(Marionette) {
	
	var EbookManager = new Marionette.Application();

	EbookManager.navigate = function(route,  options){
		options || (options = {});
		Backbone.history.navigate(route, options);
	};

	EbookManager.getCurrentRoute = function(){
		return Backbone.history.fragment;
	};

	EbookManager.addRegions({
		headerRegion: "#header-region",
	    mainRegion: "#main-region",
	    footerRegion: "#footer-region"
	});

	
	EbookManager.on("start", function() {
		if(Backbone.history){
			require(["common/views","apps/ebook/ebook_app"], function (CommonViews) {
				var loadingView = new CommonViews.Loading();
				EbookManager.mainRegion.show(loadingView);
				
				Backbone.history.start();

				if(EbookManager.getCurrentRoute() === ""){
					EbookManager.trigger("ebook:show");
				}
			});
		}
	});
	return EbookManager;
});
