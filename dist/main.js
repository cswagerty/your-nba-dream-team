define("models/player",[],function(){var e=Backbone.Model.extend({defaults:{id:void 0,teamId:void 0,name:void 0}});return e}),define("models/dream-team-member",["models/player"],function(e){var t=e.extend({defaults:function(){var t={};return t=_.clone(e.prototype.defaults),_(t).extend({position:void 0}),t}});return t}),define("events",[],function(){return Object.create(Backbone.Events)}),define("collections/dream-team-members",["models/dream-team-member","events"],function(e,t){var n=Backbone.Collection.extend({model:e,positions:["PG","SG","SF","PF","C"],initialize:function(){this.listenTo(t,"dreamTeamMembers:add",this.handleDreamTeamMembersAddEvent),this.listenTo(t,"dreamTeamMembers:update",this.handleDreamTeamMembersUpdateEvent),this.createPlaceholderDreamTeamMembers(this.positions)},createPlaceholderDreamTeamMembers:function(e){if(!this.length){var t=[];t=e.map(function(e){return{position:e}}),this.addDreamTeamMembers(t)}},addDreamTeamMembers:function(e){t.trigger("dreamTeamMembers:add",e)},handleDreamTeamMembersAddEvent:function(e){this.add(e)},handleDreamTeamMembersUpdateEvent:function(e){this.findWhere({position:e.position}).set(e),t.trigger("dreamTeamMembers:updated")}});return n}),define("views/dream-team-member-view",["events"],function(e){var t=Backbone.View.extend({className:"dream-team-member",tagName:"li",template:DT.Templates["app/templates/dream-team-member.hbs"],events:{click:"handleClick"},render:function(){this.$el.html(this.template(this.model.toJSON()))},handleClick:function(){this.setPosition(),this.navigateToTeamsList()},setPosition:function(){e.trigger("position:set",this.model.get("position"))},navigateToTeamsList:function(){e.trigger("navigate","/teams")}});return t}),define("views/dream-team-members-view",["views/dream-team-member-view"],function(e){var t=Backbone.View.extend({className:"dream-team-members",tagName:"ul",render:function(){this.collection.forEach(function(t){var n=new e({model:t});n.render(),this.$el.append(n.el)},this)}});return t}),define("views/team-view",["events"],function(e){var t=Backbone.View.extend({className:"team",tagName:"li",template:DT.Templates["app/templates/team.hbs"],events:{click:"handleTeamClick"},render:function(){this.$el.html(this.template(this.model.toJSON()))},handleTeamClick:function(){var e=this.getTeamPlayersPath();this.navigateToTeamPlayersList(e)},getTeamPlayersPath:function(){return"/players/teams/"+this.model.get("id")},navigateToTeamPlayersList:function(t){e.trigger("navigate",t)}});return t}),define("views/teams-view",["views/team-view"],function(e){var t=Backbone.View.extend({className:"teams",tagName:"ul",initialize:function(){this.listenTo(this.collection,"sync",this.render)},render:function(){this.collection.forEach(function(t){var n=new e({model:t});n.render(),this.$el.append(n.el)},this)}});return t}),define("collections/teams",[],function(){var e=Backbone.Collection.extend({url:"/api/teams"});return e}),define("views/team-player-view",["events"],function(e){var t=Backbone.View.extend({className:"team-player",tagName:"li",template:DT.Templates["app/templates/team-player.hbs"],events:{click:"handleClick"},render:function(){this.$el.html(this.template(this.model.toJSON()))},handleClick:function(){this.listenToOnce(e,"position:return",this.handlePositionReturn),this.getActivePosition()},getActivePosition:function(){e.trigger("position:get")},handlePositionReturn:function(t){var n=_(this.model.toJSON()).extend({position:t});e.trigger("dreamTeamMembers:update",n)}});return t}),define("views/team-players-view",["views/team-player-view","events"],function(e,t){var n=Backbone.View.extend({className:"team-players",tagName:"ul",initialize:function(){this.listenTo(this.collection,"sync",this.render),this.listenTo(t,"dreamTeamMembers:updated",this.handleDreamTeamUpdated)},render:function(){this.collection.forEach(function(t){var n=new e({model:t});n.render(),this.$el.append(n.el)},this)},handleDreamTeamUpdated:function(){this.showDreamTeamMembers()},showDreamTeamMembers:function(){t.trigger("navigate","/dream-team-members")}});return n}),define("collections/players",[],function(){var e=Backbone.Collection.extend({initialize:function(e){e=e||{},this.teamId=e.teamId},url:function(){return"/api/players/teams/"+this.teamId}});return e}),define("router",["collections/dream-team-members","views/dream-team-members-view","views/teams-view","collections/teams","views/team-players-view","collections/players","events"],function(e,t,n,a,i,s,o){var r=Backbone.Router.extend({initialize:function(){this.listenTo(o,"navigate",this.handleNavigateEvent),this.listenTo(o,"position:set",this.setPosition),this.listenTo(o,"position:get",this.sendPosition)},routes:{"":"showDreamTeamMembers","dream-team-members":"showDreamTeamMembers",teams:"showTeams","players/teams/:teamId":"showTeamPlayers"},mainElSelector:"section.main-content",getMainEl:function(){return $(this.mainElSelector).get(0)},showDreamTeamMembers:function(){this.dreamTeamMembers||(this.dreamTeamMembers=new e);var n=new t({collection:this.dreamTeamMembers});n.render(),this.showView(n.el)},showTeams:function(){var e=new a,t=new n({collection:e});this.showView(t.el),e.fetch()},showTeamPlayers:function(e){var t=new s({teamId:e}),n=new i({collection:t});this.showView(n.el),t.fetch()},showView:function(e){$(this.getMainEl()).html(e)},handleNavigateEvent:function(e){e=e||"/",this.navigate(e,{trigger:!0})},setPosition:function(e){this.position=e},sendPosition:function(){var e=this;setTimeout(function(){o.trigger("position:return",e.position)},10)}});return r}),this.DT=this.DT||{},this.DT.Templates=this.DT.Templates||{},this.DT.Templates["app/templates/dream-team-member.hbs"]=Handlebars.template({1:function(e,t,n,a,i){var s;return'<span class="name">'+e.escapeExpression((s=null!=(s=n.name||(null!=t?t.name:t))?s:n.helperMissing,"function"==typeof s?s.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i}):s))+"</span>"},compiler:[7,">= 4.0.0"],main:function(e,t,n,a,i){var s,o,r=null!=t?t:e.nullContext||{};return'<span class="position">'+e.escapeExpression((o=null!=(o=n.position||(null!=t?t.position:t))?o:n.helperMissing,"function"==typeof o?o.call(r,{name:"position",hash:{},data:i}):o))+"</span>\n"+(null!=(s=n.if.call(r,null!=t?t.name:t,{name:"if",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i}))?s:"")+'\n<span class="add-icon">+</span>'},useData:!0}),this.DT.Templates["app/templates/team-player.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,t,n,a,i){var s;return"<li>"+e.escapeExpression((s=null!=(s=n.name||(null!=t?t.name:t))?s:n.helperMissing,"function"==typeof s?s.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i}):s))+"</li>"},useData:!0}),this.DT.Templates["app/templates/team.hbs"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,t,n,a,i){var s,o=null!=t?t:e.nullContext||{},r=n.helperMissing,m="function",l=e.escapeExpression;return"<li>"+l((s=null!=(s=n.city||(null!=t?t.city:t))?s:r,typeof s===m?s.call(o,{name:"city",hash:{},data:i}):s))+" "+l((s=null!=(s=n.name||(null!=t?t.name:t))?s:r,typeof s===m?s.call(o,{name:"name",hash:{},data:i}):s))+"</li>"},useData:!0}),define("templates/compiled",function(){}),require(["router","events","templates/compiled"],function(e,t,n){var a=function(){new e;$(function(){Backbone.history.start({pushState:!0}),$("main").on("click","a",function(e){e.preventDefault(),t.trigger("link:click",{path:$(this).attr("href")})})})};a()}),define("main.js",function(){});