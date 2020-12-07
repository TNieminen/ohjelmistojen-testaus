
# Description

| Build | Coverage|
|:------|:--------|
|![Build Status](https://travis-ci.com/TNieminen/ohjelmistojen-testaus.svg?branch=master)|[![Coverage Status](https://coveralls.io/repos/github/TNieminen/ohjelmistojen-testaus/badge.svg?branch=master)](https://coveralls.io/github/TNieminen/ohjelmistojen-testaus?branch=master)|


The goal of this assignment is to test an open-source JavaScript utility library. The library can be found from [here](https://github.com/tgcslearningtech/COMP.SE.200-2020-assignment). Source codes are available under /src. It also contains a hidden folder ./internals which is not part of the testing process and should be excluded from any plans, test reports and coverage reports.

The testing environment must consists of Travis CI (CI pipeline) and Coveralls (test coverage reporting). The project must be hosted in GitHub. Check out "Setting up the testing environment" below for more details on how to get started with your environment.

After you get your environment running, implement and execute your testing process according to the plan you made in the part one of the assignment (where possible). If your tests turn out impossible to implement, remember to mention it in your testing report. Also, if you notice that your testing plan is lacking, feel free to add new tests and document them. Keep in mind that simply documenting all your test cases as "impossible to implement" will not be acceptable - at least something must be tested to gain points from the second part of the assignment.

A good starting point would be to write a few simple tests and verify that they pass on your local environment. After you get your local tests running, push your code to GitHub and verify that they also pass in the Travis CI pipeline. Make sure to keep an eye out for the coverage reports. Some branches might be a bit hard to get to.

Finally, create a report about your findings and return it using Moodle.


## Assignment doc

Assignment document according to requirements can be found [here](https://docs.google.com/document/d/17Nl4-Gc0_ddfP3dRvmOnMKTZkGDFTHwtupRXtCvq-BM/edit?usp=sharing)

### Requirements for assignment document


**Test report**

Your ultimate goal is to create a test report of your findings. The report is the only document you will be returning in the second part of the assignment. The overall style, format and structure for the report can be freely chosen, but certain crucial parts should be included in the document:

**Cover page**

- Name of the document,
- Course ID and course name,
- The names of students as well as the student numbers,
- URL to the GitHub repository.

**Definitions, acronyms and abbrevations**

- List of any definitions, acronyms and abbrevations used in the document.

**Introduction**

- Short introduction to the contents of the document. 
- What is in the document?
- What is the purpose of the document?

**Test Cases**

- List of changes compared to original test cases (if any). You do not need to make changes to your original plan (pdf). It is enough to add a brief chapter (bulleted list is OK) to your test report.
- Were some cases not tested? Why?
- Description of new test cases.

**Findings and conclusions**

- Make reports of any bugs or issues you happen to find (if any).
- Estimate on the overall quality of the tested library. Would it pass your tests? Is it ready for production?
- Estimate on the test coverage. Was the library "fully tested"? Is there any need for further tests?

**References**

- List of any and all references used in the document.


## Getting started

1. Make sure you have Node >= 12
2. Run yarn install in the root to install dependencies
3. You can lint our ./src code with `yarn lint`, or you can make you IDE to lint on save, but that's a separate setup (recommended)
4. You can add tests to ./src/tests and run them with `yarn test-local` the separation with `yarn test` is because of coveralls reporting which is not enabled for local development

In our tests we use the Jest framework which is documented [here](https://jestjs.io/docs/en/getting-started)

## Repo Structure

- ./assignment/ contains the original testable source code, do not change it
- ./src/utils contains tools that can be helpful for completion of the project
- ./src/tests contains all the tests that are run againts files in ./assignment/*.js
- .eslintingore, .eslintrc.yml and .prettierrc configure linting
- jest.config.js defines settings for our tests