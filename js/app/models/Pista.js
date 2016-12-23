"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Pista;

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

            _export("Pista", Pista = function () {
                function Pista(codigo, comprimento) {
                    _classCallCheck(this, Pista);

                    this._codigo = codigo;
                    this._comprimento = comprimento;

                    Object.freeze(this);
                }

                _createClass(Pista, [{
                    key: "codigo",
                    get: function get() {
                        return this._codigo;
                    }
                }, {
                    key: "comprimento",
                    get: function get() {
                        return this._comprimento;
                    }
                }]);

                return Pista;
            }());

            _export("Pista", Pista);
        }
    };
});
//# sourceMappingURL=Pista.js.map