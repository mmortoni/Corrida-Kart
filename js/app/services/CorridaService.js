'use strict';

System.register(['./HttpService', './ConnectionFactory', '../dao/CorridaDao', '../models/Corrida'], function (_export, _context) {
    "use strict";

    var HttpService, ConnectionFactory, CorridaDao, Corrida, _createClass, CorridaService;

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
        }, function (_daoCorridaDao) {
            CorridaDao = _daoCorridaDao.CorridaDao;
        }, function (_modelsCorrida) {
            Corrida = _modelsCorrida.Corrida;
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

            _export('CorridaService', CorridaService = function () {
                function CorridaService() {
                    _classCallCheck(this, CorridaService);

                    this._http = new HttpService();
                }

                _createClass(CorridaService, [{
                    key: 'cadastra',
                    value: function cadastra(corrida) {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new CorridaDao(connection);
                        }).then(function (dao) {
                            return dao.adiciona(corrida);
                        }).then(function () {
                            return 'Corrida adicionada com sucesso';
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível adicionar a corrida!');
                        });
                    }
                }, {
                    key: 'lista',
                    value: function lista() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new CorridaDao(connection);
                        }).then(function (dao) {
                            return dao.listaTodos();
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível obter as corridas!');
                        });
                    }
                }, {
                    key: 'apaga',
                    value: function apaga() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new CorridaDao(connection);
                        }).then(function (dao) {
                            return dao.apagaTodos();
                        }).then(function () {
                            return 'Corridas apagadas com sucesso!';
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível apagar as corridas!');
                        });
                    }
                }]);

                return CorridaService;
            }());

            _export('CorridaService', CorridaService);
        }
    };
});
//# sourceMappingURL=CorridaService.js.map