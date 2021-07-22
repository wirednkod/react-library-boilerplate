/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
export var sbPosition;
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
})(sbPosition || (sbPosition = {}));
export function SoapBar(props) {
    var children = props.children, _a = props.show, show = _a === void 0 ? false : _a, _b = props.type, type = _b === void 0 ? 'success' : _b, _c = props.closable, closable = _c === void 0 ? false : _c, _d = props.position, position = _d === void 0 ? sbPosition.top : _d;
    var _e = useState(false), showComp = _e[0], setShowComp = _e[1];
    var _f = useState(''), showMsg = _f[0], setShowMsg = _f[1];
    useEffect(function () {
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
    return React.createElement("div", { className: classFiller.join(' ') }, showMsg);
}
