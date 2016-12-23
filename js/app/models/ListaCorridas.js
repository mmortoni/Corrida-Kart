"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaCorridas;

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

            _export("ListaCorridas", ListaCorridas = function () {
                function ListaCorridas() {
                    _classCallCheck(this, ListaCorridas);

                    this._corridas = [];
                }

                _createClass(ListaCorridas, [{
                    key: "adiciona",
                    value: function adiciona(corrida) {

                        this._corridas.push(corrida);
                    }
                }, {
                    key: "esvazia",
                    value: function esvazia() {

                        this._corridas = [];
                    }
                }, {
                    key: "ordena",
                    value: function ordena(criterio) {

                        this._corridas.sort(criterio);
                    }
                }, {
                    key: "inverteOrdem",
                    value: function inverteOrdem() {

                        this._corridas.reverse();
                    }
                }, {
                    key: "corridas",
                    get: function get() {

                        return [].concat(this._corridas);
                    }
                }]);

                return ListaCorridas;
            }());

            _export("ListaCorridas", ListaCorridas);
        }
    };
});
//# sourceMappingURL=ListaCorridas.js.map