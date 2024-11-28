describe('PDF file comparison', () => {
    const opts = {
        croppings: [ { pageIndex: 0, coordinates: { width: 600, height: 155, x: 0, y: 195} } ],
        skipPageIndexes: [1]
    };
    it('Should compare same pdf files and assert', () => {

        cy.task('comparePdfFiles', {
            actualPdf: 'actualDraftReport_same.pdf',
            baselinePdf: 'baselineDraftReport.pdf',
            opts
        }).then((result: any) => {
            console.log(result.status);
            expect(result.status).to.equal('passed');
        });
    })

    it('Should compare two Different PDF and assert',  () => {
        cy.task('comparePdfFiles', {
            actualPdf: 'actualDraftReport_different.pdf',
            baselinePdf: 'baselineDraftReport.pdf',
            opts
        }).then((result: any) => {
            console.log(result.status);
            expect(result.status).to.equal('failed');
        });
    });
})