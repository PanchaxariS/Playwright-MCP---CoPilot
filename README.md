# Playwright Automation Portfolio Project

This repository is a polished example of an automation testing framework built with Playwright, designed to demonstrate strong UI and API testing practices in a modern, professional setup.

## Overview

This project highlights my approach to quality engineering through:

- end-to-end browser automation
- API testing with response validation
- reusable test structure and maintainable patterns
- cross-browser execution using Playwright
- practical examples that can scale into a larger automation suite

## What I built

- A UI test flow for searching and validating product-related content on an e-commerce website
- An API test that validates a real REST endpoint and checks the response structure
- A structured test layout that reflects how automation projects are organized for readability and growth
- Playwright configuration suitable for multi-browser execution

## Tech stack

- Playwright Test
- TypeScript
- Node.js
- Playwright MCP
- Ajv for JSON schema validation

## Project structure

- [tests/api.spec.ts](tests/api.spec.ts) - API validation example using the FakeStore API
- [tests/SearchShoes.ts](tests/SearchShoes.ts) - UI automation example for product search flow
- [tests/pages/SearchResultsPage.ts](tests/pages/SearchResultsPage.ts) - page object style structure for maintainable UI tests
- [playwright.config.ts](playwright.config.ts) - Playwright project configuration

## Getting started

1. Install dependencies

```bash
npm install
```

2. Install the required browser binaries

```bash
npx playwright install
```

## Run the tests

Run the full suite:

```bash
npx playwright test
```

Run the API test:

```bash
npx playwright test tests/api.spec.ts --reporter=line
```

Run the UI test:

```bash
npx playwright test tests/SearchShoes.ts
```

Generate an HTML report:

```bash
npx playwright test --reporter=html
```

## Why this project matters

This repository reflects core automation skills that are valuable in real-world software testing environments:

- reliable test design
- clear separation of concerns
- practical use of assertions and validation
- a foundation for scalable test automation

It serves as a strong portfolio example for showcasing automation engineering capabilities and hands-on Playwright experience.
