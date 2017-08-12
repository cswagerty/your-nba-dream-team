# Your NBA Dream Team
Your NBA Dream Team allows you build your own custom dream team using your favorite players.

by Corbin Swagerty

# THIS IS A WORK IN PROGRESS

# Technical Highlights
- **Object-oriented** approach and utilizes inheritance (/app/models/dream-team-member.js)
- Uses **Backbone.js** to simplify **AJAX** interactions with **Node.js** REST API (/app/router.js)
- Uses **Backbone.Router** to match paths and render views
- **Publish/Subscribe** pattern used to prevent global variables (/app/events.js)
- Created **RESTful APIs in Node.js** (Express) from poorly formatted data from stats.nba.com
- **Handlebars** templating (/app/templates)
- **Comprehensive Unit Tests for Models, Views, Collections, Router, and Event Bus using Jasmine** (/tests)
- **Require.js AMD** for organization and separating concerns
- **Stylus** for preprocessing CSS (/app/styles) ONLY BASIC STYLES BETTER STYLES COMING SOON :)
- **Grunt** used for compiling templates, combining/minifying JS into one file, running tests, and compiling Stylus (/Gruntfile.js)
 - Usage of native **ES5 Javascript** for performance (IE 11+ support)

# Create Your Dream Team
http://your-nba-dream-team.herokuapp.com

# View the Unit Tests
https://your-nba-dream-team.herokuapp.com/_SpecRunner.html
