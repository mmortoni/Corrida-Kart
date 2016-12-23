'use strict';

System.register(['./HttpService', './ConnectionFactory', '../dao/PilotoDao', '../models/Piloto'], function (_export, _context) {
    "use strict";

    var HttpService, ConnectionFactory, PilotoDao, Piloto, _createClass, PilotoService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_HttpService) {
            HttpService = _HttpService.HttpService;
        }, function (_ConnectionFactory) {
            ConnectionFactory = _ConnectionFactory.ConnectionFactory;
        }, function (_daoPilotoDao) {
            PilotoDao = _daoPilotoDao.PilotoDao;
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

            _export('PilotoService', PilotoService = function () {
                function PilotoService() {
                    _classCallCheck(this, PilotoService);

                    this._http = new HttpService();
                }

                _createClass(PilotoService, [{
                    key: 'cadastra',
                    value: function cadastra(piloto) {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new PilotoDao(connection);
                        }).then(function (dao) {
                            return dao.adiciona(piloto);
                        }).then(function () {
                            return 'Piloto adicionado com sucesso!';
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível adicionar o piloto!');
                        });
                    }
                }, {
                    key: 'lista',
                    value: function lista() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new PilotoDao(connection);
                        }).then(function (dao) {
                            return dao.listaTodos();
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível obter os pilotos!');
                        });
                    }
                }, {
                    key: 'apaga',
                    value: function apaga() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new PilotoDao(connection);
                        }).then(function (dao) {
                            return dao.apagaTodos();
                        }).then(function () {
                            return 'Pilotos apagados com sucesso!';
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível apagar os pilotos!');
                        });
                    }
                }]);

                return PilotoService;
            }());

            _export('PilotoService', PilotoService);
        }
    };
});
//# sourceMappingURL=PilotoService.js.map