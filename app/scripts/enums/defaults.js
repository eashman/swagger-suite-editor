'use strict';
PhonicsApp.config(function ($provide) {
  $provide.constant('defaults',

  // BEGIN-DEFAULTS-JSON
  {
    codegen: {
      servers: 'http://generator.wordnik.com/online/api/gen/servers',
      clients: 'http://generator.wordnik.com/online/api/gen/clients',
      server: 'http://generator.wordnik.com/online/api/gen/servers/{language}',
      client: 'http://generator.wordnik.com/online/api/gen/clients/{language}'
    },
    disableCodeGen: true,

    examplesFolder: '/spec-files/',
    exampleFiles: [
      'default.yaml',
      'minimal.yaml',
      'heroku-pets.yaml',
      'petstore.yaml'
    ],

    backendEndpoint: '/editor/spec',
    useBackendForStorage: true,
    backendHelathCheckTimeout: 5000,
    useYamlBackend: true,

    disableNewUserIntro: true,
    disableFileMenu: true,
    headerBranding: false,
    brandingCssClass: '',
    schemaUrl: '/schema/swagger.json'
  }
  // END-DEFAULTS-JSON

  );
});
