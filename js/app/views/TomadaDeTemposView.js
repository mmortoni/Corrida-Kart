'use strict';

System.register(['./View', '../controllers/TomadaDeTempoController'], function (_export, _context) {
    "use strict";

    var View, tomadaDeTempoCurrentInstance, _createClass, TomadaDeTemposView;

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
        }, function (_controllersTomadaDeTempoController) {
            tomadaDeTempoCurrentInstance = _controllersTomadaDeTempoController.tomadaDeTempoCurrentInstance;
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

            _export('TomadaDeTemposView', TomadaDeTemposView = function (_View) {
                _inherits(TomadaDeTemposView, _View);

                function TomadaDeTemposView(elemento) {
                    _classCallCheck(this, TomadaDeTemposView);

                    var _this = _possibleConstructorReturn(this, (TomadaDeTemposView.__proto__ || Object.getPrototypeOf(TomadaDeTemposView)).call(this, elemento));

                    elemento.addEventListener('click', function (event) {

                        if (event.target.nodeName == 'TH') tomadaDeTempoCurrentInstance().ordena(event.target.textContent.toLowerCase());
                    });
                    return _this;
                }

                _createClass(TomadaDeTemposView, [{
                    key: 'template',
                    value: function template(model) {
                        return '\n        <table class="table table-hover table-bordered">\n        \n            <thead>\n                <tr>\n                    <th>Corrida</th>\n                    <th>Piloto</th>\n                    <th>Tempo</th>\n                </tr>\n            </thead>\n        \n            <tbody>\n                ' + model.tomadaDeTempos.map(function (n) {
                            return '\n                    \n                    <tr>\n                        <td>' + n.corrida + '</td>\n                        <td>' + n.piloto + '</td>\n                        <td>' + n.tempo + '</td>\n                    </tr>\n                    \n                ';
                        }).join('') + '                \n            </tbody>\n        </table>\n        ';
                    }
                }]);

                return TomadaDeTemposView;
            }(View));

            _export('TomadaDeTemposView', TomadaDeTemposView);
        }
    };
});
//# sourceMappingURL=TomadaDeTemposView.js.map