const ComparePdf = require("compare-pdf");
const comparePdfConfig = require('../../comparePdfConfig');

export interface Details {
    status: string;
    numDiffPixels: string;
    diffPng: string;
}

interface Results {
    status: string;
    message: string;
    details?: Details;
}

export const comparePdfFiles = async ({
                                          actualPdf,
                                          baselinePdf,
                                          opts
                                      }: {
    actualPdf: any,
    baselinePdf: any,
    opts: { croppings: any; skipPageIndexes: any; }
}) => {

    const result: Results = new ComparePdf(comparePdfConfig)
        .actualPdfFile(actualPdf)
        .baselinePdfFile(baselinePdf)
        .cropPages(opts.croppings ? opts.croppings : []) //check if opts.croppings exists else its an empty array
        .skipPageIndexes(opts.skipPageIndexes ? opts.skipPageIndexes : []) //check if opts.skipPageIndexes exists else its an empty array
        .compare();
    return result;
};