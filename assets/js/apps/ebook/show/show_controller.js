define(["app", "apps/ebook/show/show_view"], function(EbookManager, ShowView) {
	EbookManager.module("EbookApp.Show", function(Show, EbookManager, Backbone, Marionette, $, _) {
		Show.Controller = {
			showEbook: function() {
				var showView = new ShowView.EbookView();
				EbookManager.mainRegion.show(showView);
			}
		};
	});
	return EbookManager.EbookApp.Show.Controller;
});
