define(["app", "tpl!common/templates/loading.tpl", "spin.jquery"], function(EbookManager, loadingTpl){
	EbookManager.module("Common.Views", function(Views, EbookManager, Backbone, Marionette, $, _){
		Views.Loading = Marionette.ItemView.extend({
			template: loadingTpl,

			initialize: function(options){
				var options = options || {};
				this.title = options.title || "";
				this.message = options.message || "";
			},

			serializeData: function(){
				return {
					title: this.title,
					message: this.message
				};
			},

			onShow: function(){
				var opts = {
						lines: 13, // The number of lines to draw
						length: 20, // The length of each line
						width: 10, // The line thickness
						radius: 30, // The radius of the inner circle
						corners: 1, // Corner roundness (0..1)
						rotate: 0, // The rotation offset
						direction: 1, // 1: clockwise, -1: counterclockwise
						color: "#000", // #rgb or #rrggbb
						speed: 1, // Rounds per second
						trail: 60, // Afterglow percentage
						shadow: true, // Whether to render a shadow
						hwaccel: true, // Whether to use hardware acceleration
						className: "spinner", // The CSS class to assign to the spinner
						zIndex: 2e9, // The z-index (defaults to 2000000000)
						top: "50%", // Top position relative to parent in px
						left: "50%" // Left position relative to parent in px
				};
				$("#spinner").spin(opts);
			}
		});
	});

	return EbookManager.Common.Views;
});
