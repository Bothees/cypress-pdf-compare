# Cypress automation test framework with Typescript for comparing PDF files

This Framework built with Cypress with Typescript.

#### Spec file added with the test to compare pdf files 
````
cypress/e2e/pdf-compare.cy.ts

````
### Scripts are added in the Package json file for running tests 

````
run tests using Cypress open mode
run tests on command line mode
````

#### compare-pdf npm plugin used for pdf comparison

It compares the pdf files and the difference is stored under the folder cypress/fixtures/png/diff
