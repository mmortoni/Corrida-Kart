"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, VoltaHelper;

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

            _export("VoltaHelper", VoltaHelper = function () {
                function VoltaHelper() {
                    _classCallCheck(this, VoltaHelper);

                    throw new Error('Esta classe não pode ser instanciada');
                }

                _createClass(VoltaHelper, null, [{
                    key: "geraVolta",
                    value: function geraVolta() {
                        var minuto = void 0,
                            segundo = void 0,
                            milissegundo = void 0;
                        minuto = VoltaHelper.getRandomInt(1, 2);
                        segundo = VoltaHelper.getRandomInt(1, 59);
                        milissegundo = VoltaHelper.getRandomInt(1, 999);

                        minuto = (Array(2).join("0") + minuto).slice(-2);
                        segundo = (Array(2).join("0") + segundo).slice(-2);
                        milissegundo = (Array(3).join("0") + milissegundo).slice(-3);

                        return minuto + ':' + segundo + '.' + milissegundo;
                    }
                }, {
                    key: "geraVoltaCorrida",
                    value: function geraVoltaCorrida(dataCorrida) {
                        var horaVolta = new Date(dataCorrida);
                        horaVolta.setMinutes(horaVolta.getMinutes() + VoltaHelper.getRandomInt(1, 2));
                        horaVolta.setSeconds(horaVolta.getSeconds() + VoltaHelper.getRandomInt(1, 59));
                        horaVolta.setMilliseconds(horaVolta.getMilliseconds() + VoltaHelper.getRandomInt(1, 999));

                        return horaVolta;
                    }
                }, {
                    key: "formataVoltaCorrida",
                    value: function formataVoltaCorrida(dataCorrida) {
                        var hora = void 0,
                            minuto = void 0,
                            segundo = void 0,
                            milissegundo = void 0;

                        hora = (Array(2).join("0") + dataCorrida.getHours()).slice(-2);
                        minuto = (Array(2).join("0") + dataCorrida.getMinutes()).slice(-2);
                        segundo = (Array(2).join("0") + dataCorrida.getSeconds()).slice(-2);
                        milissegundo = (Array(3).join("0") + dataCorrida.getMilliseconds()).slice(-3);

                        return hora + ':' + minuto + ':' + segundo + '.' + milissegundo;
                    }
                }, {
                    key: "getRandomInt",
                    value: function getRandomInt(min, max) {
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    }
                }]);

                return VoltaHelper;
            }());

            _export("VoltaHelper", VoltaHelper);
        }
    };
});
//# sourceMappingURL=VoltaHelper.js.map