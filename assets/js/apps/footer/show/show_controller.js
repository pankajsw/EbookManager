/**
 * 
 */
define(["app", "apps/footer/show/show_view"], function(EbookManager, ShowView){
	EbookManager.module("FooterApp.Show", function(Show, EbookManager, Backbone, Marionette, $, _){
		Show.Controller = {
			showFooter: function(pagination){
				var footerView = new ShowView.FooterView({
					model: new Backbone.Model({
						pagination: pagination
					})
				});
				EbookManager.footerRegion.show(footerView);
			}
		};
	});
	return EbookManager.FooterApp.Show.Controller;
});