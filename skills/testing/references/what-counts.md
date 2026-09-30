# What counts

The decision is in `SKILL.md`. Do not invent a coverage percent, and do not name a test library they should install.

## Libraries and files

- A test library is listed in `package.json` dependencies or devDependencies. Name the package. Do not treat a script named `test` as that library.
- No `package.json`: use the manifest you opened. Say that you did. Do not pretend the Node file is missing tests.
- A test file is one whose name or folder marks it as a test. Quote the path. An unopened file does not count.
- A library and no test file means declared, not written. Do not call that a suite.

## Unit and end to end

- Unit: the file checks a function or a module. It does not drive the running app through a user path.
- End to end: the file drives a user path, or it lives with an end-to-end library and folder. A unit file in a folder named `e2e` is not end to end until you open it and see a user path.
- Report both. One does not stand in for the other.

## Coverage

- Coverage is a script or config whose job is to measure what the tests touch. Name the file.
- No report you opened means the percent is unseen. Unseen is not zero, and it is not a target.
- Coverage tooling with no test files is not coverage.

## The business

- Proof of concept, or no customers: name the gap. Stop before end to end and before a coverage gate.
- Customers: the unit test that matters is on signup or payment. Say revenue and support when that test is missing.
- Revenue, with those unit tests: end to end on that same path is the next step.
- Revenue, with unit and end to end: coverage is the next step. Still no percent.
