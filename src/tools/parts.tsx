export const cnAmount = ' w-min-6c text-end ms-2';
export const weekday = '日一二三四五六';
const numberFormat = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function numToStr(value: number, fixed?: number): string {
    return numberFormat.format(value ?? 0);
}

export function renderNum(value: number, unit?: string, fixed?: number): JSX.Element {
    let vUnit: any;
    if (unit !== undefined) vUnit = <small className="text-muted">{unit}</small>;
    if (fixed === undefined) fixed = 2;
    return <>{numToStr(value, fixed)} {vUnit}</>;
}
