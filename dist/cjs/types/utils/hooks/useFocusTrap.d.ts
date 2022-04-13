/// <reference types="react" />
export declare const useFocusTrap: (escapeFunction?: ((props?: any) => any) | undefined) => {
    /** initialise focus trap */
    initFocustTrap: (el: React.RefObject<any>, focusEl?: import("react").RefObject<any> | undefined) => void;
    /** destroy focus trap */
    destroyFocusTrap: () => void;
};
