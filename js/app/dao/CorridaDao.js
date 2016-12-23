'use strict';

System.register(['../models/Corrida'], function (_export, _context) {
    "use strict";

    var Corrida, _createClass, CorridaDao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsCorrida) {
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

            _export('CorridaDao', CorridaDao = function () {
                function CorridaDao(connection) {
                    _classCallCheck(this, CorridaDao);

                    this._connection = connection;
                    this._store = 'corridas';
                }

                _createClass(CorridaDao, [{
                    key: 'adiciona',
                    value: function adiciona(corrida) {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            var request = _this._connection.transaction([_this._store], 'readwrite').objectStore(_this._store).add(corrida);

                            request.onsuccess = function (e) {
                                resolve();
                            };

                            request.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Não foi possível adicionar a corrida!');
                            };
                        });
                    }
                }, {
                    key: 'listaTodos',
                    value: function listaTodos() {
                        var _this2 = this;

                        return new Promise(function (resolve, reject) {
                            var cursor = _this2._connection.transaction([_this2._store], 'readwrite').objectStore(_this2._store).openCursor();

                            var corridas = [];

                            cursor.onsuccess = function (e) {
                                var atual = e.target.result;

                                if (atual) {
                                    var dado = atual.value;
                                    corridas.push(new Corrida(dado._corrida, dado._horaLargada));
                                    atual.continue();
                                } else {
                                    resolve(corridas);
                                }
                            };

                            cursor.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Não foi possível listar as corridas!');
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
                                return resolve('Corridas apagadas com sucesso!');
                            };

                            request.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Não foi possível apagar as corridas!');
                            };
                        });
                    }
                }]);

                return CorridaDao;
            }());

            _export('CorridaDao', CorridaDao);
        }
    };
});
//# sourceMappingURL=CorridaDao.js.map