// import * as pd from 'pareto-core-data'

// import * as g_liana from "lib-liana/dist/main"

// import { $ as d_model } from "./models/model.data"

// export const $: g_liana.T.CompileParameters<pd.SourceLocation> = {
//     'outputs': pd.a([
//         {
//             'path': pd.a([`../../pareto/src/data/submodules/resolved/glossary.generated.ts`]),
//             'data': ['liana', {
//                 'settings': {
//                     'annotations': false,
//                     'datamodel': [true, {
//                         'constraints mapping': {
//                             'terminal values': true,
//                             'constraints': [true, ['required', null]]
//                         },
//                     }],
//                     'visitor interface': [false],
//                     'algorithms': {
//                         'serialize': [false],
//                     },
//                 },
//                 'mapped library': {
//                     'library': d_model.model['type library'],

//                     'terminal mapping': pd.d({
//                         "numeric literal": ['number', null],
//                         "string literal": ['string', null],
//                         "identifier": ['string', null],
//                     }),
//                 },
//             }]
//         },
//         {
//             'path': pd.a([`../../pareto/src/data/submodules/possiblyresolved/glossary.generated.ts`]),
//             'data': ['liana', {
//                 'settings': {
//                     'annotations': true,
//                     'datamodel': [true, {
//                         'constraints mapping': {
//                             'terminal values': true,
//                             'constraints': [true, ['optional', null]]
//                         },
//                     }],
//                     'visitor interface': [false],
//                     'algorithms': {
//                         'serialize': [false],
//                     },
//                 },
//                 'mapped library': {
//                     'library': d_model.model['type library'],

//                     'terminal mapping': pd.d({
//                         "numeric literal": ['number', null],
//                         "string literal": ['string', null],
//                         "identifier": ['string', null],
//                     }),
//                 },
//             }]
//         },
//         {
//             'path': pd.a([`../../pareto/src/data/submodules/unresolved/glossary.generated.ts`]),
//             'data': ['liana', {
//                 'settings': {
//                     'annotations': true,
//                     'datamodel': [true, {
//                         'constraints mapping': {
//                             'terminal values': true,
//                             'constraints': [false]
//                         },
//                     }],
//                     'visitor interface': [false],
//                     'algorithms': {
//                         'serialize': [false],
//                     },
//                 },
//                 'mapped library': {
//                     'library': d_model.model['type library'],

//                     'terminal mapping': pd.d({
//                         "numeric literal": ['number', null],
//                         "string literal": ['string', null],
//                         "identifier": ['string', null],
//                     }),
//                 },
//             }]
//         },
//     ])
// }