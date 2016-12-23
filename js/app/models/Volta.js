"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Volta;

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

            _export("Volta", Volta = function () {
                function Volta(corrida, numero, piloto, hora, tempo, velocidadeMedia) {
                    _classCallCheck(this, Volta);

                    this._corrida = corrida;
                    this._numero = numero;
                    this._piloto = piloto;
                    this._hora = hora;
                    this._tempo = tempo;
                    this._velocidadeMedia = velocidadeMedia; // calculada pelo tempo e o comprimento da pista

                    Object.freeze(this);
                }

                _createClass(Volta, [{
                    key: "corrida",
                    get: function get() {
                        return this._corrida;
                    }
                }, {
                    key: "numero",
                    get: function get() {
                        return this._numero;
                    }
                }, {
                    key: "piloto",
                    get: function get() {
                        return this._piloto;
                    }
                }, {
                    key: "hora",
                    get: function get() {
                        return this._hora;
                    }
                }, {
                    key: "tempo",
                    get: function get() {
                        return this._tempo;
                    }
                }, {
                    key: "velocidadeMedia",
                    get: function get() {
                        return this._velocidadeMedia;
                    }
                }]);

                return Volta;
            }());

            _export("Volta", Volta);
        }
    };
});
//# sourceMappingURL=Volta.js.map