/// <reference types="react" />
export declare enum sbPosition {
    top = "top",
    topRight = "top-right",
    right = "right",
    bottomRight = "bottom-right",
    bottom = "bottom",
    bottomLeft = "bottom-left",
    left = "left",
    topLeft = "top-left",
    none = "none"
}
interface SoapBarInf {
    children: any;
    type?: 'success' | 'error' | 'info' | 'warning';
    closable?: boolean;
    position?: sbPosition;
    show?: boolean;
}
export declare function SoapBar(props: SoapBarInf): JSX.Element;
export {};
