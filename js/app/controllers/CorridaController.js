'use strict';

System.register(['../models/ListaCorridas', '../models/Mensagem', '../views/CorridaView', '../views/MensagemView', '../services/CorridaService', '../helpers/Bind', '../models/Corrida', '../models/Volta', '../controllers/PilotoController', '../models/ListaPilotos', '../helpers/VoltaHelper'], function (_export, _context) {
    "use strict";

    var ListaCorridas, Mensagem, CorridaView, MensagemView, CorridaService, Bind, Corrida, Volta, PilotoController, ListaPilotos, VoltaHelper, _createClass, CorridaController, corridaController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function corridaCurrentInstance() {

        return corridaController;
    }

    _export('corridaCurrentInstance', corridaCurrentInstance);

    return {
        setters: [function (_modelsListaCorridas) {
            ListaCorridas = _modelsListaCorridas.ListaCorridas;
        }, function (_modelsMensagem) {
            Mensagem = _modelsMensagem.Mensagem;
        }, function (_viewsCorridaView) {
            CorridaView = _viewsCorridaView.CorridaView;
        }, function (_viewsMensagemView) {
            MensagemView = _viewsMensagemView.MensagemView;
        }, function (_servicesCorridaService) {
            CorridaService = _servicesCorridaService.CorridaService;
        }, function (_helpersBind) {
            Bind = _helpersBind.Bind;
        }, function (_modelsCorrida) {
            Corrida = _modelsCorrida.Corrida;
        }, function (_modelsVolta) {
            Volta = _modelsVolta.Volta;
        }, function (_controllersPilotoController) {
            PilotoController = _controllersPilotoController.PilotoController;
        }, function (_modelsListaPilotos) {
            ListaPilotos = _modelsListaPilotos.ListaPilotos;
        }, function (_helpersVoltaHelper) {
            VoltaHelper = _helpersVoltaHelper.VoltaHelper;
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

            CorridaController = function () {
                function CorridaController() {
                    _classCallCheck(this, CorridaController);

                    this._listaPilotos = new ListaPilotos();
                    this._pilotoController = new PilotoController();

                    var $ = document.querySelector.bind(document);

                    this._botaoIniciarLargada = $('#iniciarLargada');

                    var tempo = new Mensagem();

                    this._listaCorridas = new Bind(new ListaCorridas(), new CorridaView($('#corridaView')), 'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

                    this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'texto');

                    this._service = new CorridaService();

                    this._ordemAtual = '';

                    this._init();
                }

                _createClass(CorridaController, [{
                    key: '_init',
                    value: function _init() {
                        this._listaPilotos = this._pilotoController.listaPilotos();
                    }
                }, {
                    key: 'ordena',
                    value: function ordena(coluna) {
                        if (this._ordemAtual == coluna) {
                            this._listaCorridas.inverteOrdem();
                        } else {
                            this._listaCorridas.ordena(function (p, s) {
                                return p[coluna] - s[coluna];
                            });
                        }

                        this._ordemAtual = coluna;
                    }
                }, {
                    key: 'criaLargada',
                    value: function criaLargada() {
                        var hora = void 0,
                            minuto = void 0,
                            segundo = void 0,
                            milissegundo = void 0,
                            volta = void 0,
                            horaVolta = void 0,
                            horaCorrida = void 0,
                            dataDiferenca = void 0,
                            tempoVolta = void 0,
                            tempo = void 0,
                            vm = void 0;

                        this._botaoIniciarLargada.parentNode.style.visibility = 'hidden';

                        [].forEach.call(document.querySelectorAll('div.row.hidden'), function (el) {
                            el.classList.remove("hidden");
                        });

                        var horaLargada = new Date();
                        hora = (Array(2).join("0") + horaLargada.getHours()).slice(-2);
                        minuto = (Array(2).join("0") + horaLargada.getMinutes()).slice(-2);
                        segundo = (Array(2).join("0") + horaLargada.getSeconds()).slice(-2);
                        milissegundo = (Array(3).join("0") + horaLargada.getMilliseconds()).slice(-3);

                        horaCorrida = hora + ':' + minuto + ':' + segundo + '.' + milissegundo;

                        var corrida = new Corrida('1', horaCorrida);

                        this._listaPilotos.pilotos.forEach(function (piloto) {
                            horaVolta = horaLargada;
                            tempo = horaVolta;
                            for (var i = 0; i < 4; i++) {
                                horaVolta = VoltaHelper.geraVoltaCorrida(horaVolta);
                                dataDiferenca = new Date(horaVolta.getTime() - tempo.getTime());

                                minuto = (Array(2).join("0") + dataDiferenca.getMinutes()).slice(-2);
                                segundo = (Array(2).join("0") + dataDiferenca.getSeconds()).slice(-2);
                                milissegundo = (Array(3).join("0") + dataDiferenca.getMilliseconds()).slice(-3);
                                tempoVolta = minuto + ':' + segundo + '.' + milissegundo;

                                vm = parseFloat(1200 / parseInt(minuto + segundo + milissegundo) * 10000).toFixed(3);

                                volta = new Volta(corrida.corrida, i + 1, piloto, VoltaHelper.formataVoltaCorrida(horaVolta), tempoVolta, vm.replace('.', ','));
                                tempo = horaVolta;
                                corrida.adicionaVolta(volta);
                            }

                            horaVolta = null;
                        });

                        this._listaCorridas.adiciona(corrida);
                    }
                }]);

                return CorridaController;
            }();

            corridaController = new CorridaController();
        }
    };
});
//# sourceMappingURL=CorridaController.js.map