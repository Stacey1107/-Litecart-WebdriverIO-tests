import { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep } from '@cucumber/cucumber';
import { TestStepResultStatus } from '@cucumber/messages'

Before(async function (scenario) {
    console.log(`\n\n\n START OF: ${scenario.pickle.name} SCENARIO \n\n\n`);
});

After(async function (scenario) {
    console.log(`\n\n\n END OF: ${scenario.pickle.name} SCENARIO \n\n\n.
    STATUS OF LAST STEP OF ${scenario.pickle.name} SCENARIO is ${scenario.result.status}`)
});

BeforeAll(async function () {
    console.log('LETS START THE PARTY');
});

AfterAll(async function () {
    console.log('PARTY IS OVER');
});

Before({ tags: "@foo" }, async function (scenario) {
    console.log(`BEFORE ${scenario.pickle.name} SCENARIO`);
});

After({ tags: "@boo" }, async function (scenario) {
    console.log(`AFTER ${scenario.pickle.name} SCENARIO`);
});

BeforeStep(async function ({ testStepId }) {
    console.log(`TEST STEP ID IS ${testStepId}`);
});

AfterStep(async function ({ result }) {
    if (result.status === TestStepResultStatus.FAILED) {
        console.log('AFTER FAILED STEP');
    };
});


