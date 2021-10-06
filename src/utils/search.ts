export const normaliseInput = (text: string) => text.replace(/\s/g, "");

export const isValidBarcode = (text: string) => !!text.match(/^\d+$/);
