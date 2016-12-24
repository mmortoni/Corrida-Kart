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
                            dl = [{ nome: '', hora: '' }],
                            mvc = { piloto: { nome: '' }, tempo: '' },
                            vencedor = { piloto: { nome: '' }, hora: '' },
                            codigo = '',
                            tmvp = [],
                            horaChegadaVencedor = void 0,
                            horaChegadaPiloto = void 0,
                            tempoDiferenca = void 0,
                            diff = void 0;

                        if (model.corridas[0]) {
                            voltas = model.corridas[0].voltas;

                            vencedor = voltas.filter(function (voltaPiloto) {
                                return voltaPiloto.numero == '4';
                            }).reduce(function (prev, current) {
                                return Number(prev.hora.replace(/:/g, '')) < Number(current.hora.replace(/:/g, '')) && prev.numero == '4' ? prev : current;
                            });

                            mvc = voltas.reduce(function (prev, current) {
                                return Number(prev.velocidadeMedia.replace(',', '.')) > Number(current.velocidadeMedia.replace(',', '.')) ? prev : current;
                            });

                            voltas.forEach(function (volta) {
                                if (volta.piloto.codigo != codigo) {
                                    codigo = volta.piloto.codigo;
                                    var voltasPiloto = voltas.filter(function (voltaPiloto) {
                                        return voltaPiloto.piloto.codigo == codigo;
                                    });

                                    tmvp.push(voltasPiloto.reduce(function (prev, current) {
                                        return Number(prev.velocidadeMedia.replace(',', '.')) > Number(current.velocidadeMedia.replace(',', '.')) ? prev : current;
                                    }));
                                }
                            });

                            horaChegadaVencedor = new Date('01/01/1970 ' + vencedor.hora);
                            diff = new Date('01/01/1970 ');

                            dl = [];
                            voltas.filter(function (volta) {
                                return volta.numero == '4';
                            }).map(function (v) {
                                if (v.piloto.codigo != vencedor.piloto.codigo) {
                                    horaChegadaPiloto = new Date('01/01/1970 ' + v.hora);
                                    diff.setTime(horaChegadaPiloto.getTime() - horaChegadaVencedor.getTime());

                                    tempoDiferenca = '';

                                    if (diff.getMinutes() > 0) tempoDiferenca = diff.getMinutes(); //(Array(2).join("0") + diff.getMinutes()).slice(-2);

                                    if (diff.getSeconds() > 0) {
                                        if (tempoDiferenca) {
                                            tempoDiferenca += ':' + (Array(2).join("0") + diff.getSeconds()).slice(-2);
                                        } else {
                                            tempoDiferenca = (Array(2).join("0") + diff.getSeconds()).slice(-2);
                                        }
                                    }

                                    tempoDiferenca += '.' + (Array(3).join("0") + diff.getMilliseconds()).slice(-3);

                                    dl.push({ nome: v.piloto.nome, hora: tempoDiferenca });
                                }
                            });
                        }

                        return '\n         <div class="person">\n            <h2>Hora Largada: \n                ' + model.corridas.map(function (n) {
                            return '\n                    ' + n.horaLargada + '\n                ';
                        }) + ' \n            </h2>\n        </div>\n\n        <table class="table table-hover table-bordered">\n\n            <thead>\n                <tr>\n                    <th>VOL</th>\n                    <th>PILOTO</th>\n                    <th>HORA</th>\n                    <th>TEMPO</th>\n                    <th>VM</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ' + voltas.map(function (n) {
                            return '\n                    <tr>\n                        <td>' + n.numero + '</td>\n                        <td>' + (n.piloto.codigo + ' - ' + n.piloto.nome) + '</td>\n                        <td>' + n.hora + '</td>\n                        <td>' + n.tempo + '</td>\n                        <td>' + n.velocidadeMedia + '</td>\n                    </tr>\n                    \n                ';
                        }).join('') + '\n\n                <tr>\n                    <td colspan="5" bgcolor="#5D7B9D">VENCEDOR: ' + vencedor.piloto.nome + ' &nbsp;&nbsp;&nbsp; CHEGADA = ' + vencedor.hora + '</td>\n                </tr>\n\n                <tr>\n                    <td colspan="5">MVC: ' + mvc.piloto.nome + ' &nbsp;&nbsp;&nbsp; TMV = ' + mvc.tempo + '</td>\n                </tr>\n\n                ' + tmvp.map(function (n) {
                            return '\n                    <tr>\n                        <td colspan="5">TMVP: ' + n.piloto.nome + ' &nbsp;&nbsp;&nbsp; TMV = ' + n.tempo + '</td>\n                    </tr>\n                    \n                ';
                        }).join('') + '\n\n                ' + dl.map(function (n) {
                            return '\n                    <tr>\n                        <td colspan="5">DL: ' + n.nome + ' &nbsp;&nbsp;&nbsp; DIFEREN\xC7A = ' + n.hora + '</td>\n                    </tr>\n                    \n                ';
                        }).join('') + '\n            </tbody>\n\n            <tfoot>\n                <tr>\n                    <td colspan="5">LEGENDA:<br>\n                        <table width="100%">\n                            <tr><td>VOL = N\xBA DA VOLTA</td><td>MVC = MELHOR VOLTA DA CORRIDA</td></tr>\n                            <tr><td>TMVP = TEMPO DA MELHOR VOLTA PILOTO</td><td>DL = DIFEREN\xC7A PARA O L\xCDDER</td></tr>\n                            <tr><td>VM (Km/h) = VELOCIDADE M\xC9DIA</td><td>TAV = TEMPO AP\xD3S O VENCEDOR</td></tr>\n                        </table>\n                    </td>\n                </tr>\n            </tfoot>\n\n        </table>\n        ';
                    }
                }]);

                return CorridaView;
            }(View));

            _export('CorridaView', CorridaView);
        }
    };
});
//# sourceMappingURL=CorridaView.js.map