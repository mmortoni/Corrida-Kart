'use strict';

System.register(['./polyfill/fetch', './controllers/PilotoController', './controllers/TomadaDeTempoController', './controllers/CorridaController'], function (_export, _context) {
  "use strict";

  var pilotoCurrentInstance, tomadaDeTempoCurrentInstance, corridaCurrentInstance, pilotoController, tomadaDeTempoController, corridaController;
  return {
    setters: [function (_polyfillFetch) {}, function (_controllersPilotoController) {
      pilotoCurrentInstance = _controllersPilotoController.pilotoCurrentInstance;
    }, function (_controllersTomadaDeTempoController) {
      tomadaDeTempoCurrentInstance = _controllersTomadaDeTempoController.tomadaDeTempoCurrentInstance;
    }, function (_controllersCorridaController) {
      corridaCurrentInstance = _controllersCorridaController.corridaCurrentInstance;
    }],
    execute: function () {
      pilotoController = pilotoCurrentInstance();
      tomadaDeTempoController = tomadaDeTempoCurrentInstance();
      corridaController = corridaCurrentInstance();


      //document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
      //document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController);

      document.querySelector('#iniciarTomadaDeTempo').onclick = tomadaDeTempoController.criaTomadaDeTempo.bind(tomadaDeTempoController);
      document.querySelector('#iniciarLargada').onclick = corridaController.criaLargada.bind(corridaController);
    }
  };
});
//# sourceMappingURL=boot.js.map