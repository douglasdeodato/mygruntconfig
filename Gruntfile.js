module.exports = function (grunt) {
  var config = {};

  //src ===============================
  var src;
  config.src = src = {
    sassMain: 'scss/main.scss',
    distFolder: 'public/stylesheets/myapp.production.css',
    devFolder: 'public/stylesheets/myapp.development.css',
    libFolder: 'lib/**/*.js',
    sassFolder: 'scss/**/*.scss',
    imageminCwd: 'public/images/',
    imageminDest: 'public/images/min',
    spriteCssFolder: 'scss/helpers/_sprite.scss',
    spriteDestImg: 'public/images/sprite/spritesheet.png',
    spriteSrc: 'public/images/min/*.{png,jpg,gif}',
    serverPort: 8000
  };


  //Handlebars ===============================

  //setup the configuration object
  var hbs;
  config.handlebars = hbs = {};

  hbs.dist = {
    options: {
      namespace: "myapp.templates",
      processName: function (path) {
        console.log("=>", path);
        return path.replace(/^templates\/(.*?)\.hbs$/, "$1");
      }
    },
    files: {
      "tmp/templates.js": "templates/**/*.hbs"
    }
  };


  //Concat ===============================

  var concat;
  config.concat = concat = {};

  concat.dev = {
    files: {
      "public/myapp.development.js": [
        "lib/vendor",
        "node_modules/handlebars-runtime/handlebars.runtime.js",
        "tmp/templates.js",
        "lib/**/*.js",
        "calc/**/*.js"
      ]
    }
  };


  //Uglify ===============================
  config.uglify = {
    dist: {
      options: { sourceMap: "public/myapp.production.js.map", report: "gzip" },
      files: {
        "public/myapp.production.js": ["public/myapp.development.js"]
      }
    }
  }


  //Jasmine ===============================
  var jasmine;
  config.jasmine = jasmine = {};

  jasmine.calc = {
    src: "calc/calc.js",
    options: {
      specs: "spec/calc.spec.js"
    }
  };

  //Jshint ===============================
  var jshint;
  config.jshint = jshint = {};


  jshint.dist = {
    options: { jshintrc: ".jshintrc" },
    files: { all: ["lib/main.js", "lib/test.js"] }
  };

  jshint.dev = {
    options: { jshintrc: ".jshintrc.dev" },
    files: { all: ["lib/main.js", "lib/test.js"] }
  };


  //Watch ===============================

  config.watch = {
    scripts: {
      files: ["<%= src.libFolder %>",
        "<%= src.sassFolder %>",
        "jade/**/*.jade"
      ],
      tasks: ["dev"]
    }
  }


  //Sass ===============================
  var sass;
  config.sass = sass = {};

  //production
  sass.dist = {
    options: { style: "compressed" },
    files: {
      "<%= src.distFolder %>": "<%= src.sassMain %>"
    }
  };

  //development env.
  sass.dev = {
    options: { style: "expanded", lineNumber: true },
    files: {
      "<%= src.devFolder %>": "<%= src.sassMain %>"
    }
  };

  //Jade ===============================
  config.jade = {
    compile: {
      options: {
        client: false,
        pretty: true
      },
      files: [{
        cwd: "jade/templates",
        src: "**/*.jade",
        dest: "jade/compiled-templates",
        expand: true,
        ext: ".html"
      }]
    }
  }


  //Html Minifier ===============================

  var htmlmin;
  config.htmlmin = htmlmin = {};

  htmlmin.dist = {
    options: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      // minifyCSS: true,
      // minifyJS: true,
      removeAttributeQuotes: true,
      removeComments: true
    },
    files: {
      'layout.min.html': 'jade/compiled-templates/layout.html'
    }
  };

  //Image min ===============================
  var imagemin;
  config.imagemin = imagemin = {};

  imagemin.dist = {
    options: {
      optimizationLevel: 5,
      progressive: true,
    },

    files: [{
      expand: true,
      cwd: '<%= src.imageminCwd %>',
      src: ['**/*.{png,jpg,gif}'],
      dest: '<%= src.imageminDest %>'
    }]
  };


  //Sprite ===============================
  var sprite;
  config.sprite = sprite = {};

  sprite.dist = {
    src: '<%= src.spriteSrc %>',
    dest: '<%= src.spriteDestImg %>',
    destCss: '<%= src.spriteCssFolder %>'

  };

  //grunt serve ===============================
  config.connect = {
    server: {
      options: {
        livereload: true,
        port: "<%= src.serverPort %>"
      }
    }
  };


  //Register custom tasks ===============================
  grunt.registerTask('default', ['dev']);
  grunt.registerTask('dev', ['jshint:dev', 'jasmine', 'handlebars', 'concat:dev', 'jade', 'sass:dev']);
  grunt.registerTask('dist', ['jshint:dist', 'jasmine', 'handlebars', 'htmlmin', 'sprite', 'concat:dev', 'jade', 'uglify', 'sass:dist']);
  grunt.registerTask('serve', ['connect:server', 'watch']);
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });
  //grunt.registerTask('dev',['imagemin']);


  //General setup ===============================
  grunt.initConfig(config);

};
