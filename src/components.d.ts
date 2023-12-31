/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CustomizableButton {
        "backgroundColor": string;
        "border": string;
        "borderRadius": string;
        "buttonText": string;
        "fontFamily": string;
        "fontSize": string;
        "fontWeight": string;
        "icon": string;
        "iconRight": boolean;
        "lineHeight": string;
        "paddingBottom": string;
        "paddingLeft": string;
        "paddingRight": string;
        "paddingTop": string;
        "textColor": string;
        "textDecoration": string;
    }
    interface MyComponent {
    }
}
export interface CustomizableButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCustomizableButtonElement;
}
declare global {
    interface HTMLCustomizableButtonElement extends Components.CustomizableButton, HTMLStencilElement {
    }
    var HTMLCustomizableButtonElement: {
        prototype: HTMLCustomizableButtonElement;
        new (): HTMLCustomizableButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "customizable-button": HTMLCustomizableButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CustomizableButton {
        "backgroundColor"?: string;
        "border"?: string;
        "borderRadius"?: string;
        "buttonText"?: string;
        "fontFamily"?: string;
        "fontSize"?: string;
        "fontWeight"?: string;
        "icon"?: string;
        "iconRight"?: boolean;
        "lineHeight"?: string;
        "onButtonClick"?: (event: CustomizableButtonCustomEvent<void>) => void;
        "paddingBottom"?: string;
        "paddingLeft"?: string;
        "paddingRight"?: string;
        "paddingTop"?: string;
        "textColor"?: string;
        "textDecoration"?: string;
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "customizable-button": CustomizableButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "customizable-button": LocalJSX.CustomizableButton & JSXBase.HTMLAttributes<HTMLCustomizableButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
