this["DT"] = this["DT"] || {};
this["DT"]["Templates"] = this["DT"]["Templates"] || {};

this["DT"]["Templates"]["app/templates/dream-team.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Hello precompiled Handlebars template!</h1>\n<ul class=\"dt-dream-team\">\n	<li class=\"dt-dream-team-member\"><a href=\"/teams\">PG</a></li>\n	<li class=\"dt-dream-team-member\"><a href=\"/teams\">SG</a></li>\n	<li class=\"dt-dream-team-member\"><a href=\"/teams\">SF</a></li>\n	<li class=\"dt-dream-team-member\"><a href=\"/teams\">PF</a></li>\n	<li class=\"dt-dream-team-member\"><a href=\"/teams\">C</a></li>\n</ul>";
},"useData":true});

this["DT"]["Templates"]["app/templates/team-player.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)));
},"useData":true});

this["DT"]["Templates"]["app/templates/team.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a href=\"/players/teams/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>";
},"useData":true});