export function classNames(...classes : string[]) {
    return classes.filter(Boolean).join(' ')
}

export function isValidUrl(url:string) {
    try {
        new URL(url)
        return true
    } catch (error) {
        return false
    }

}

export const isHexColor = (color?: string) => {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color || "");
};