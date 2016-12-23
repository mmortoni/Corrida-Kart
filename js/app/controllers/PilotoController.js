'use strict';

System.register(['../models/ListaPilotos', '../services/PilotoService', '../models/Piloto'], function (_export, _context) {
    "use strict";

    var ListaPilotos, PilotoService, Piloto, _createClass, PilotoController, pilotoController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function pilotoCurrentInstance() {
        return pilotoController;
    }

    _export('pilotoCurrentInstance', pilotoCurrentInstance);

    return {
        setters: [function (_modelsListaPilotos) {
            ListaPilotos = _modelsListaPilotos.ListaPilotos;
        }, function (_servicesPilotoService) {
            PilotoService = _servicesPilotoService.PilotoService;
        }, function (_modelsPiloto) {
            Piloto = _modelsPiloto.Piloto;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('PilotoController', PilotoController = function () {
                function PilotoController() {
                    _classCallCheck(this, PilotoController);

                    this._listaPilotos = new ListaPilotos();

                    this._service = new PilotoService();

                    this._init();
                }

                _createClass(PilotoController, [{
                    key: '_init',
                    value: function _init() {
                        var _this = this;

                        var pilotos = [{ codigo: '002', nome: 'K.RAIKKONEN' }, { codigo: '011', nome: 'S.VETTEL' }, { codigo: '015', nome: 'F.ALONSO' }, { codigo: '023', nome: 'M.WEBBER' }, { codigo: '033', nome: 'R.BARRICHELLO' }, { codigo: '038', nome: 'F.MASSA' }];

                        //pilotos.forEach(piloto => this._service.cadastra(piloto));
                        pilotos.forEach(function (piloto) {
                            return _this._listaPilotos.adiciona(piloto);
                        });
                    }
                }, {
                    key: 'listaPilotos',
                    value: function listaPilotos() {
                        return this._listaPilotos;
                    }
                }]);

                return PilotoController;
            }());

            _export('PilotoController', PilotoController);

            pilotoController = new PilotoController();
        }
    };
});
//# sourceMappingURL=PilotoController.js.map