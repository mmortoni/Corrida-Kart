'use strict';

System.register(['../models/ListaTomadaDeTempos', '../models/Mensagem', '../views/TomadaDeTemposView', '../views/MensagemView', '../services/TomadaDeTempoService', '../helpers/Bind', '../models/TomadaDeTempo', '../controllers/PilotoController', '../models/ListaPilotos', '../helpers/VoltaHelper'], function (_export, _context) {
    "use strict";

    var ListaTomadaDeTempos, Mensagem, TomadaDeTemposView, MensagemView, TomadaDeTempoService, Bind, TomadaDeTempo, PilotoController, ListaPilotos, VoltaHelper, _createClass, TomadaDeTempoController, tomadaDeTempoController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function tomadaDeTempoCurrentInstance() {

        return tomadaDeTempoController;
    }

    _export('tomadaDeTempoCurrentInstance', tomadaDeTempoCurrentInstance);

    return {
        setters: [function (_modelsListaTomadaDeTempos) {
            ListaTomadaDeTempos = _modelsListaTomadaDeTempos.ListaTomadaDeTempos;
        }, function (_modelsMensagem) {
            Mensagem = _modelsMensagem.Mensagem;
        }, function (_viewsTomadaDeTemposView) {
            TomadaDeTemposView = _viewsTomadaDeTemposView.TomadaDeTemposView;
        }, function (_viewsMensagemView) {
            MensagemView = _viewsMensagemView.MensagemView;
        }, function (_servicesTomadaDeTempoService) {
            TomadaDeTempoService = _servicesTomadaDeTempoService.TomadaDeTempoService;
        }, function (_helpersBind) {
            Bind = _helpersBind.Bind;
        }, function (_modelsTomadaDeTempo) {
            TomadaDeTempo = _modelsTomadaDeTempo.TomadaDeTempo;
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

            TomadaDeTempoController = function () {
                function TomadaDeTempoController() {
                    _classCallCheck(this, TomadaDeTempoController);

                    this._listaPilotos = new ListaPilotos();
                    this._pilotoController = new PilotoController();

                    var $ = document.querySelector.bind(document);

                    this._botaoIniciarTomadaDeTempo = $('#iniciarTomadaDeTempo');

                    var tempo = new Mensagem();

                    this._listaTomadaDeTempos = new Bind(new ListaTomadaDeTempos(), new TomadaDeTemposView($('#tomadaDeTempoView')), 'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

                    this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'texto');

                    this._service = new TomadaDeTempoService();

                    this._ordemAtual = '';

                    this._init();
                }

                _createClass(TomadaDeTempoController, [{
                    key: '_init',
                    value: function _init() {
                        this._listaPilotos = this._pilotoController.listaPilotos();
                    }
                }, {
                    key: 'ordena',
                    value: function ordena(coluna) {
                        if (this._ordemAtual == coluna) {
                            this._listaTomadaDeTempos.inverteOrdem();
                        } else {
                            this._listaTomadaDeTempos.ordena(function (p, s) {
                                return p[coluna] - s[coluna];
                            });
                        }

                        this._ordemAtual = coluna;
                    }
                }, {
                    key: 'criaTomadaDeTempo',
                    value: function criaTomadaDeTempo() {
                        var _this = this;

                        this._botaoIniciarTomadaDeTempo.parentNode.style.visibility = 'hidden';

                        [].forEach.call(document.querySelectorAll('div.row.hidden'), function (el) {
                            el.classList.remove("hidden");
                        });

                        this._listaPilotos.pilotos.forEach(function (piloto) {
                            return _this._listaTomadaDeTempos.adiciona(new TomadaDeTempo('1', piloto.nome, VoltaHelper.geraVolta()));
                        });
                    }
                }]);

                return TomadaDeTempoController;
            }();

            tomadaDeTempoController = new TomadaDeTempoController();
        }
    };
});
//# sourceMappingURL=TomadaDeTempoController.js.map