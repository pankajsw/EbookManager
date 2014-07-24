/**
 * 
 */
define(["app", "apps/header/show/show_view"], function(EbookManager, ShowView){
	EbookManager.module("HeaderApp.Show", function(Show, EbookManager, Backbone, Marionette, $, _){
		Show.Controller = {
			showHeader: function(headerName){
				var headerView = new ShowView.HeaderView({
					model: new Backbone.Model({
						header: headerName
					})
				});
				this.listenTo(headerView, "header:zoomin", this.onZoomIn);
				EbookManager.headerRegion.show(headerView);
			},
			onZoomIn: function() {
				console.log("zoomIn");
				EbookManager.navigate("zoomIn");
			}
		};
		_.extend(Show.Controller, Backbone.Events);
	});
	return EbookManager.HeaderApp.Show.Controller;
});