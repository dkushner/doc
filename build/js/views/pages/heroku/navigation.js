define(["views/base/view","text!templates/shared/navigation.html","jquery"],function(e,t,n){return e.extend({template:t,className:"pages heroku navigation",container:"body > nav",render:function(){this.options.elements=n("h3").map(function(){var e=n(this),t=e.parents(".row");return{url:"#"+t.first().attr("id"),title:t.data("title")||e.text()}}).toArray(),e.prototype.render.apply(this,arguments),this.jumpToAnchor()}})});