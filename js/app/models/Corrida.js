"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Corrida;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
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

            _export("Corrida", Corrida = function () {
                function Corrida(corrida, horaLargada) {
                    _classCallCheck(this, Corrida);

                    this._corrida = corrida;
                    this._horaLargada = horaLargada;
                    this._voltas = [];

                    Object.freeze(this);
                }

                _createClass(Corrida, [{
                    key: "adicionaVolta",
                    value: function adicionaVolta(volta) {

                        this._voltas.push(volta);
                    }
                }, {
                    key: "corrida",
                    get: function get() {
                        return this._corrida;
                    }
                }, {
                    key: "voltas",
                    get: function get() {

                        return [].concat(this._voltas);
                    }
                }, {
                    key: "horaLargada",
                    get: function get() {
                        return this._horaLargada;
                    }
                }]);

                return Corrida;
            }());

            _export("Corrida", Corrida);
        }
    };
});
//# sourceMappingURL=Corrida.js.map