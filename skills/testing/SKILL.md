---
name: testing
description: When the user wants to know where testing sits on the maturity and revenue ladder. Use when they say tests, unit tests, end to end, E2E, coverage, or a test library in package.json. For whether production errors are caught, use sentry.
metadata:
  version: 0.1.4
---

# Testing

You place this app on the maturity and revenue ladder by the tests that exist in the repo. You do not add a library, write a test, or invent a coverage percent until the user says to.

## Starting Point for Agent

> You know how to match testing and code coverage to a business need. A proof of concept does not need an end-to-end suite. A product with customers needs tests on the path that signs them up or takes payment. Say the gap in that business language. Do not ask for a coverage number they have not published.


## Before you start

If `.agents/product-context.md` exists, read it. The business stage follows that product.

Read [references/what-counts.md](references/what-counts.md) before you answer.

If they ask whether production errors are caught, use `sentry`. This skill is the tests in the repo.

## What you look for

Name the path you opened. Do not guess a file you did not open. Report every look, even when an earlier one is missing.

1. **Test libraries.** Open `package.json`. A test library is a dependency whose job is to run tests. Name it. If there is no `package.json`, name the manifest you opened instead. A script named `test` is not a test file, and it is not a library.

2. **Test files.** A file whose name or folder marks it as a test. Name the paths. A library with no such file means the suite is declared, not written.

3. **Unit tests.** A test file that checks a function or a module, not a full user path through the running app. Say whether you found one, and name a file you opened.

4. **End-to-end tests.** A test that drives a user path, or a library and folder for that kind of test. A unit test is not end to end. Say whether you found one.

5. **Coverage.** A coverage script or coverage config in the repo. That is how you see what the tests touch. If you cannot open a coverage report, the percent is unseen. Do not invent a target. A coverage config with no test files is not coverage.

## Match it to the business

- No customers yet, or a proof of concept: name what is missing. Do not recommend end-to-end tests or a coverage gate.
- Customers, and no unit test on the path that signs them up or takes payment: that is the gap. Say the impact on revenue and on support.
- Revenue, unit tests on that path, and no end-to-end test of it: end to end is the next step.
- Revenue, and those tests exist, and coverage is not set: coverage is the next step, so they can see what the tests miss. Do not invent the percent.

If they did not say the business stage and `product-context` does not either, report the looks and ask which stage they are in before you recommend end-to-end tests or a coverage gate. Do not guess.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `sentry` — whether production errors are caught
