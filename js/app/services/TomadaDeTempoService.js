'use strict';

System.register(['./HttpService', './ConnectionFactory', '../dao/TomadaDeTempoDao', '../models/TomadaDeTempo'], function (_export, _context) {
    "use strict";

    var HttpService, ConnectionFactory, TomadaDeTempoDao, TomadaDeTempo, _createClass, TomadaDeTempoService;

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
        }, function (_daoTomadaDeTempoDao) {
            TomadaDeTempoDao = _daoTomadaDeTempoDao.TomadaDeTempoDao;
        }, function (_modelsTomadaDeTempo) {
            TomadaDeTempo = _modelsTomadaDeTempo.TomadaDeTempo;
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

            _export('TomadaDeTempoService', TomadaDeTempoService = function () {
                function TomadaDeTempoService() {
                    _classCallCheck(this, TomadaDeTempoService);

                    this._http = new HttpService();
                }

                _createClass(TomadaDeTempoService, [{
                    key: 'cadastra',
                    value: function cadastra(tomadaDeTempo) {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new TomadaDeTempoDao(connection);
                        }).then(function (dao) {
                            return dao.adiciona(tomadaDeTempo);
                        }).then(function () {
                            return 'Tomada de Tempo adicionada com sucesso';
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível adicionar a tomada de tempo!');
                        });
                    }
                }, {
                    key: 'lista',
                    value: function lista() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new TomadaDeTempoDao(connection);
                        }).then(function (dao) {
                            return dao.listaTodos();
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível obter as tomadas de tempos!');
                        });
                    }
                }, {
                    key: 'apaga',
                    value: function apaga() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new TomadaDeTempoDao(connection);
                        }).then(function (dao) {
                            return dao.apagaTodos();
                        }).then(function () {
                            return 'Tomadas de Tempos apagadas com sucesso!';
                        }).catch(function (erro) {
                            console.log(erro);
                            throw new Error('Não foi possível apagar as tomadas de tempos!');
                        });
                    }
                }]);

                return TomadaDeTempoService;
            }());

            _export('TomadaDeTempoService', TomadaDeTempoService);
        }
    };
});
//# sourceMappingURL=TomadaDeTempoService.js.map