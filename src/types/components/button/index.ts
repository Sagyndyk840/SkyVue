import colors from '@/utils/colors';
export default interface SkyButtonProps {
    type: BtnType, // Ready
    density: BtnDensity, // Ready
    size: BtnSize, // Ready
    rounded: BtnRounded, // Ready
    align: BtnAlign, // Ready
    outlined: boolean, // Ready
    color:  Colors, // Ready
    textColor: Colors, // Ready
    label: string, // Ready
    loading: boolean,
    icon?: string,
    iconLeft?: string,
    iconRight?: string,
    disabled?: boolean
}

type Colors = typeof colors[number]

type BtnType =
    | "button"
    | "submit"
    | "reset";

type BtnDensity =
    | "default"
    | "compact"
    | "comfortable";

type BtnSize =
    | "x-small"
    | "small"
    | "large"
    | "x-large"
    | "normal";

type BtnRounded =
    | "0"
    | "sm"
    | "normal"
    | "lg"
    | "xl"
    | "pill"
    | "circle";

type BtnAlign =
    | "center"
    | "left"
    | "right";


