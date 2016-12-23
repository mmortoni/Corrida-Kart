"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, TomadaDeTempo;

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

            _export("TomadaDeTempo", TomadaDeTempo = function () {
                function TomadaDeTempo(corrida, piloto, tempo) {
                    _classCallCheck(this, TomadaDeTempo);

                    this._corrida = corrida;
                    this._piloto = piloto;
                    this._tempo = tempo;

                    Object.freeze(this);
                }

                _createClass(TomadaDeTempo, [{
                    key: "corrida",
                    get: function get() {
                        return this._corrida;
                    }
                }, {
                    key: "piloto",
                    get: function get() {
                        return this._piloto;
                    }
                }, {
                    key: "tempo",
                    get: function get() {
                        return this._tempo;
                    }
                }]);

                return TomadaDeTempo;
            }());

            _export("TomadaDeTempo", TomadaDeTempo);
        }
    };
});
//# sourceMappingURL=TomadaDeTempo.js.map