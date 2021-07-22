"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoapBar = exports.sbPosition = void 0;
/* eslint-disable no-unused-vars */
var react_1 = __importStar(require("react"));
var sbPosition;
(function (sbPosition) {
    sbPosition["top"] = "top";
    sbPosition["topRight"] = "top-right";
    sbPosition["right"] = "right";
    sbPosition["bottomRight"] = "bottom-right";
    sbPosition["bottom"] = "bottom";
    sbPosition["bottomLeft"] = "bottom-left";
    sbPosition["left"] = "left";
    sbPosition["topLeft"] = "top-left";
    sbPosition["none"] = "none";
})(sbPosition = exports.sbPosition || (exports.sbPosition = {}));
function SoapBar(props) {
    var children = props.children, _a = props.show, show = _a === void 0 ? false : _a, _b = props.type, type = _b === void 0 ? 'success' : _b, _c = props.closable, closable = _c === void 0 ? false : _c, _d = props.position, position = _d === void 0 ? sbPosition.top : _d;
    var _e = react_1.useState(false), showComp = _e[0], setShowComp = _e[1];
    var _f = react_1.useState(''), showMsg = _f[0], setShowMsg = _f[1];
    react_1.useEffect(function () {
        console.log(children, show, type, closable, position);
        if (show) {
            setShowComp(true);
            setShowMsg(children);
            setTimeout(function () {
                setShowComp(false);
                setShowMsg('');
                props.show = false;
                props.children = '';
            }, 3000);
        }
    }, [show]);
    var classFiller = ['soapbar'];
    if (showComp)
        classFiller.push('show');
    return react_1.default.createElement("div", { className: classFiller.join(' ') }, showMsg);
}
exports.SoapBar = SoapBar;
