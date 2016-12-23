"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaPilotos;

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

            _export("ListaPilotos", ListaPilotos = function () {
                function ListaPilotos() {
                    _classCallCheck(this, ListaPilotos);

                    this._pilotos = [];
                }

                _createClass(ListaPilotos, [{
                    key: "adiciona",
                    value: function adiciona(piloto) {

                        this._pilotos.push(piloto);
                    }
                }, {
                    key: "esvazia",
                    value: function esvazia() {

                        this._pilotos = [];
                    }
                }, {
                    key: "ordena",
                    value: function ordena(criterio) {

                        this._pilotos.sort(criterio);
                    }
                }, {
                    key: "inverteOrdem",
                    value: function inverteOrdem() {

                        this._pilotos.reverse();
                    }
                }, {
                    key: "pilotos",
                    get: function get() {

                        return [].concat(this._pilotos);
                    }
                }]);

                return ListaPilotos;
            }());

            _export("ListaPilotos", ListaPilotos);
        }
    };
});
//# sourceMappingURL=ListaPilotos.js.map