export interface CustomizationOption {
    name: string;
    choices: string[];
    priceImpacts?: number[]; // matching index for price changes
}