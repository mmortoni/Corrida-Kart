"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaVoltas;

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

            _export("ListaVoltas", ListaVoltas = function () {
                function ListaVoltas() {
                    _classCallCheck(this, ListaVoltas);

                    this._voltas = [];
                }

                _createClass(ListaVoltas, [{
                    key: "adiciona",
                    value: function adiciona(volta) {

                        this._voltas.push(volta);
                    }
                }, {
                    key: "esvazia",
                    value: function esvazia() {

                        this._voltas = [];
                    }
                }, {
                    key: "ordena",
                    value: function ordena(criterio) {

                        this._voltas.sort(criterio);
                    }
                }, {
                    key: "inverteOrdem",
                    value: function inverteOrdem() {

                        this._voltas.reverse();
                    }
                }, {
                    key: "voltas",
                    get: function get() {

                        return [].concat(this._voltas);
                    }
                }]);

                return ListaVoltas;
            }());

            _export("ListaVoltas", ListaVoltas);
        }
    };
});
//# sourceMappingURL=ListaVoltas.js.map