"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaTomadaDeTempos;

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

            _export("ListaTomadaDeTempos", ListaTomadaDeTempos = function () {
                function ListaTomadaDeTempos() {
                    _classCallCheck(this, ListaTomadaDeTempos);

                    this._tomadaDeTempos = [];
                }

                _createClass(ListaTomadaDeTempos, [{
                    key: "adiciona",
                    value: function adiciona(tomadaDeTempo) {

                        this._tomadaDeTempos.push(tomadaDeTempo);
                    }
                }, {
                    key: "esvazia",
                    value: function esvazia() {

                        this._tomadaDeTempos = [];
                    }
                }, {
                    key: "ordena",
                    value: function ordena(criterio) {

                        this._tomadaDeTempos.sort(criterio);
                    }
                }, {
                    key: "inverteOrdem",
                    value: function inverteOrdem() {

                        this._tomadaDeTempos.reverse();
                    }
                }, {
                    key: "tomadaDeTempos",
                    get: function get() {

                        return [].concat(this._tomadaDeTempos);
                    }
                }]);

                return ListaTomadaDeTempos;
            }());

            _export("ListaTomadaDeTempos", ListaTomadaDeTempos);
        }
    };
});
//# sourceMappingURL=ListaTomadaDeTempos.js.map