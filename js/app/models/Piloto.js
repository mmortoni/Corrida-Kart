"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Piloto;

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

            _export("Piloto", Piloto = function () {
                function Piloto(codigo, nome) {
                    _classCallCheck(this, Piloto);

                    this._codigo = codigo;
                    this._nome = nome;

                    Object.freeze(this);
                }

                _createClass(Piloto, [{
                    key: "codigo",
                    get: function get() {
                        return this._codigo;
                    }
                }, {
                    key: "nome",
                    get: function get() {
                        return this._nome;
                    }
                }]);

                return Piloto;
            }());

            _export("Piloto", Piloto);
        }
    };
});
//# sourceMappingURL=Piloto.js.map