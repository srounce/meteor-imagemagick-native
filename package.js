Package.describe({
  summary: "meteor-imagemagick-native"
});

Npm.depends({
  'imagemagick-native': '0.2.8'
});

Package.on_use(function (api) {
  /**
   * Add all the files, in the order of their dependence (eg, if A.js depends on B.js, B.js must be before A.js)
   */
  api.add_files([
    'wrapper.js' // <-- include all the necessary files in the package
    ],
    'server'); // Can be 'server', 'client' , ['client','server']

  if (typeof api.export !== 'undefined') {
    api.export(['Imagemagick'], 'server'); // 1st arg can be array of exported constructors/objects, 2nd can be 'server', 'client', ['client', 'server']
  }
});
