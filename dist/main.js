this.DT=this.DT||{},this.DT.Templates=this.DT.Templates||{},this.DT.Templates["app/templates/dream-team.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,a,t,m,s){return'<h1>Hello precompiled Handlebars template!</h1>\n<ul class="dt-dream-team">\n\t<li class="dt-dream-team-member">Member 1</li>\n\t<li class="dt-dream-team-member">Member 2</li>\n\t<li class="dt-dream-team-member">Member 3</li>\n\t<li class="dt-dream-team-member">Member 4</li>\n\t<li class="dt-dream-team-member">Member 5</li>\n</ul>'},useData:!0}),define("templates/compiled",function(){}),define("views/dream-team",[],function(){var e=Backbone.View.extend({className:"dream-team-container",template:DT.Templates["app/templates/dream-team.hbs"],render:function(){this.$el.html(this.template())}});return e}),require(["templates/compiled","views/dream-team"],function(e,a){var t=Backbone.Router.extend({routes:{"":"showDreamTeamView","my-team":"showDreamTeamView",teams:"showTeams","team/:teamId/players":"showTeamPlayers"},showDreamTeamView:function(){var e=new a;e.render(),$("main").append(e.el)}}),m=(new t,function(){$(function(){Backbone.history.start({pushState:!0})})});m()}),define("main.js",function(){});