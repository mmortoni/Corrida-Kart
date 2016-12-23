'use strict';

System.register(['../models/TomadaDeTempo'], function (_export, _context) {
    "use strict";

    var TomadaDeTempo, _createClass, TomadaDeTempoDao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsTomadaDeTempo) {
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

            _export('TomadaDeTempoDao', TomadaDeTempoDao = function () {
                function TomadaDeTempoDao(connection) {
                    _classCallCheck(this, TomadaDeTempoDao);

                    this._connection = connection;
                    this._store = 'tomadadetempos';
                }

                _createClass(TomadaDeTempoDao, [{
                    key: 'adiciona',
                    value: function adiciona(tomadaDeTempo) {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            var request = _this._connection.transaction([_this._store], 'readwrite').objectStore(_this._store).add(tomadaDeTempo);

                            request.onsuccess = function (e) {

                                resolve();
                            };

                            request.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Não foi possível adicionar a tomada de tempo!');
                            };
                        });
                    }
                }, {
                    key: 'listaTodos',
                    value: function listaTodos() {
                        var _this2 = this;

                        return new Promise(function (resolve, reject) {

                            var cursor = _this2._connection.transaction([_this2._store], 'readwrite').objectStore(_this2._store).openCursor();

                            var tomadaDeTempos = [];

                            cursor.onsuccess = function (e) {
                                var atual = e.target.result;

                                if (atual) {
                                    var dado = atual.value;
                                    tomadaDeTempos.push(new Negociacao(dado._corrida, dado._piloto, dado._tempo));
                                    atual.continue();
                                } else {
                                    resolve(tomadaDeTempos);
                                }
                            };

                            cursor.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Não foi possível listar as tomadas de tempos!');
                            };
                        });
                    }
                }, {
                    key: 'apagaTodos',
                    value: function apagaTodos() {
                        var _this3 = this;

                        return new Promise(function (resolve, reject) {
                            var request = _this3._connection.transaction([_this3._store], 'readwrite').objectStore(_this3._store).clear();

                            request.onsuccess = function (e) {
                                return resolve('Tomadas de tempos apagadas com sucesso!');
                            };

                            request.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Não foi possível apagar as tomadas de tempos!');
                            };
                        });
                    }
                }]);

                return TomadaDeTempoDao;
            }());

            _export('TomadaDeTempoDao', TomadaDeTempoDao);
        }
    };
});
//# sourceMappingURL=TomadaDeTempoDao.js.map