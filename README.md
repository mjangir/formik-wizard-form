# Formik Wizard Form

![npm type definitions](https://img.shields.io/npm/types/typescript)
![npm](https://img.shields.io/npm/v/formik-wizard-form)
[![compressed size](https://github.com/mjangir/formik-wizard-form/actions/workflows/size.yml/badge.svg)](https://github.com/mjangir/formik-wizard-form/actions/workflows/size.yml)
[![build](https://github.com/mjangir/formik-wizard-form/actions/workflows/test.yml/badge.svg)](https://github.com/mjangir/formik-wizard-form/actions/workflows/test.yml)
[![e2e tests](https://github.com/mjangir/formik-wizard-form/actions/workflows/integration.yml/badge.svg)](https://github.com/mjangir/formik-wizard-form/actions/workflows/integration.yml)
![GitHub](https://img.shields.io/github/license/mjangir/formik-wizard-form?label=license)

## Getting Started

Formik wizard form is a library which lets you build multistep form wizards in React with ease. It has been written over the famous form library formik and provides the enhanced versions of formik's `<Formik />` and `useFormik` hook. Formik wizard form requires few additional props along with `<Formik />` original props as well as adds some properties to the render props object.

Apart from that, the library is style or css framework agnostic and leaves the rendering part completely up to you. It just provides render props and you build your UI out of them.

For more information on usage, please refer to the How To Use and Examples section.

## How To Install

Install the package from npm or yarn registry.

### Install From Yarn

```bash
yarn add formik-wizard-form
```

### Install From NPM

```bash
npm install formik-wizard-form --save
```

## How To Use?

Formik wizard form exports two components `<FormWizard />` and `useFormikWizard` similar to Formik's `<Formik />` and `useFormik` hook and their original props have been left untouched. Rather they require you to provide few additional props to create a form wizard.

```javascript
import { FormikWizard, useFormikWizard } from 'formik-wizard-form';
```

## Visit [formikwizard.manishjangir.com](https://formikwizard.manishjangir.com) for docs and examples!

## Based On

[Formik](https://github.com/formium/formik)

## Maintainers

[Manish Jangir](https://github.com/mjangir)
