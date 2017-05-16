var specs = [
	"tests/dream-team-view.spec.js"
];

define(specs, function() {
	afterEach(function(){
		$("main").remove();
	});
});