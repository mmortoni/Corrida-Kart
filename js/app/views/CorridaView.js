'use strict';

System.register(['./View', '../helpers/DateHelper', '../controllers/CorridaController'], function (_export, _context) {
    "use strict";

    var View, DateHelper, corridaCurrentInstance, _createClass, CorridaView;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_View2) {
            View = _View2.View;
        }, function (_helpersDateHelper) {
            DateHelper = _helpersDateHelper.DateHelper;
        }, function (_controllersCorridaController) {
            corridaCurrentInstance = _controllersCorridaController.corridaCurrentInstance;
        }],
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

            _export('CorridaView', CorridaView = function (_View) {
                _inherits(CorridaView, _View);

                function CorridaView(elemento) {
                    _classCallCheck(this, CorridaView);

                    var _this = _possibleConstructorReturn(this, (CorridaView.__proto__ || Object.getPrototypeOf(CorridaView)).call(this, elemento));

                    elemento.addEventListener('click', function (event) {

                        if (event.target.nodeName == 'TH') corridaCurrentInstance().ordena(event.target.textContent.toLowerCase());
                    });
                    return _this;
                }

                _createClass(CorridaView, [{
                    key: 'template',
                    value: function template(model) {
                        var voltas = [],
                            max = { piloto: { nome: '' }, tempo: '' };

                        if (model.corridas[0]) {
                            voltas = model.corridas[0].voltas;

                            max = voltas.reduce(function (prev, current) {
                                return Number(prev.velocidadeMedia.replace(',', '.')) > Number(current.velocidadeMedia.replace(',', '.')) ? prev : current;
                            });
                        }

                        return '\n         <div class="person">\n            <h2>Hora Largada: \n                ' + model.corridas.map(function (n) {
                            return '\n                    ' + n.horaLargada + '\n                ';
                        }) + ' \n            </h2>\n        </div>\n\n        <table class="table table-hover table-bordered">\n\n            <thead>\n                <tr>\n                    <th>VOL</th>\n                    <th>PILOTO</th>\n                    <th>HORA</th>\n                    <th>TEMPO</th>\n                    <th>VM</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ' + voltas.map(function (n) {
                            return '\n                    <tr>\n                        <td>' + n.numero + '</td>\n                        <td>' + (n.piloto.codigo + ' - ' + n.piloto.nome) + '</td>\n                        <td>' + n.hora + '</td>\n                        <td>' + n.tempo + '</td>\n                        <td>' + n.velocidadeMedia + '</td>\n                    </tr>\n                    \n                ';
                        }).join('') + '                \n            </tbody>\n\n            <tfoot>\n                <tr>\n                    <td colspan="5">MELHOR VOLTA CORRIDA: ' + max.piloto.nome + ' &nbsp;&nbsp;&nbsp; TMV = ' + max.tempo + '</td>\n                </tr>\n\n                <tr>\n                    <td colspan="5">LEGENDA:<br>\n                        <table width="100%">\n                            <tr><td>VOL = N\xBA DA VOLTA</td><td>MV = N\xBA DA MELHOR VOLTA</td></tr>\n                            <tr><td>TMV = TEMPO DA MELHOR VOLTA</td><td>DL = DIFEREN\xC7A PARA O L\xCDDER</td></tr>\n                            <tr><td>VM (Km/h) = VELOCIDADE M\xC9DIA</td><td>TAV = TEMPO AP\xD3S O VENCEDOR</td></tr>\n                        </table>\n                    </td>\n                </tr>\n            </tfoot>\n\n        </table>\n        ';
                    }
                }]);

                return CorridaView;
            }(View));

            _export('CorridaView', CorridaView);
        }
    };
});
//# sourceMappingURL=CorridaView.js.map