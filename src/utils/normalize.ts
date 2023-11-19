export function normalizeNDF(value: string): string {
    return !value ? '' : value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function normalizeNDFI(value: string): string {
    return !value ? '' : value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}