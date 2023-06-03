import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<null> = {
    'imports': d({
        "typesystem": null,
    }),
    'glossary parameters': d({}),
    'root': {
        'types': d({
            "Aggregated Variable": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "local": <g_glossary.T.Type<null>>['group', d({})],
                            "variable stack2": <g_glossary.T.Type<null>>['group', d({
                                "variable": {
                                    'type': <g_glossary.T.Type<null>>['group', d({
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                        "referent": {
                                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Aggregated Variable",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                    })],
                                },
                            })],
                        })],
                    },
                })]
            },
            "Aggregated Variables": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Aggregated Variable",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]]
            },
            "Assign": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "initialization": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Initialization Or Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "target": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Target Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Block": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "statements": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Statements",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "variables": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Variables",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Boolean Initialization": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "and": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "false": <g_glossary.T.Type<null>>['group', d({})],
                    "greater than": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "less than": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "not": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Boolean Initialization Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "number equals": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "number not equals": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "or": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "string equals": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "string not equals": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "true": <g_glossary.T.Type<null>>['group', d({})],
                })]
            },
            "Boolean Initialization Or Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "initialization": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Boolean Initialization",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "selection": <g_glossary.T.Type<null>>['group', d({
                        "boolean": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "boolean",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "selection": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Initialization": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "array literal": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "array",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['array', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]]],
                        },
                    })],
                    "array map": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "array",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "source": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "boolean": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "boolean",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Initialization",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "change context": <g_glossary.T.Type<null>>['group', d({
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "source": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "dictionary literal": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "dictionary",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]]],
                        },
                    })],
                    "dictionary map": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "dictionary",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "source": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "group literal": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "group",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "properties": {
                            'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                "constraints": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                                        "definition": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['import', {
                                                    'glossary': {
                                                        'glossary':{
                                                            'annotation': null,
                                                            'key': "typesystem",
                                                        },
                                                        'glossary arguments': d({}),
                                                    },
                                                }],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "group",
                                                    "D",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Initialization Or Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })]],
                        },
                    })],
                    "implement me": <g_glossary.T.Type<null>>['string', null],
                    "null": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "null",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                    })],
                    "numerical": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "number",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "optional": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "optional",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                    })],
                    "procedure": <g_glossary.T.Type<null>>['group', d({
                        "block": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "procedure",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "temp has parameters": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({})]],
                        },
                        "variables": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Aggregated Variables",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "string": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "string",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Initialization",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "switch": <g_glossary.T.Type<null>>['group', d({
                        "cases": {
                            'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "default": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "tagged union",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "source": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "tagged union literal": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "tagged union",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "state": {
                            'type': <g_glossary.T.Type<null>>['group', d({
                                "key": {
                                    'type': <g_glossary.T.Type<null>>['string', null],
                                },
                                "referent": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': null,
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({}),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "tagged union",
                                            "D",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                    })],
                    "value function": <g_glossary.T.Type<null>>['group', d({
                        "definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "procedure",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "temp has parameters": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({})]],
                        },
                        "variables": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Aggregated Variables",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "variables": <g_glossary.T.Type<null>>['group', d({
                        "initialization": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "variables": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Variables",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Initialization Or Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "initialization": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Initialization",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "selection": <g_glossary.T.Type<null>>['group', d({
                        "selection": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Local Variables": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                    "initialization": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Initialization",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]]
            },
            "Numerical Initialization": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "minus": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "numeric literal": <g_glossary.T.Type<null>>['number', null],
                    "plus": <g_glossary.T.Type<null>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "postdecrement": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Initialization Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "postincrement": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Initialization Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "predecrement": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Initialization Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "preincrement": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Initialization Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                })]
            },
            "Numerical Initialization Or Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "initialization": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Initialization",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "selection": <g_glossary.T.Type<null>>['group', d({
                        "number": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "number",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "selection": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Root": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Source File",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]
            },
            "Source File": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "initialization": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Initialization",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Source Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "start": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "context": <g_glossary.T.Type<null>>['group', d({})],
                            "variable": <g_glossary.T.Type<null>>['group', d({
                                "key": {
                                    'type': <g_glossary.T.Type<null>>['string', null],
                                },
                                "referent": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Aggregated Variables",
                                        'tailXX': a([
                                            "D",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        })],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Source Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Source Selection Tail": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                    "step": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "call": <g_glossary.T.Type<null>>['group', d({
                                "address function": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': null,
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({}),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "address function",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                                "arguments": {
                                    'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                        "constraints": {
                                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                                                "parameter": {
                                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                        'context': ['import', {
                                                            'glossary': {
                                                                'glossary':{
                                                                    'annotation': null,
                                                                    'key': "typesystem",
                                                                },
                                                                'glossary arguments': d({}),
                                                            },
                                                        }],
                                                        'typeXX': "Function Declaration",
                                                        'tailXX': a([
                                                            "parameters",
                                                            "D",
                                                        ]),
                                                        'type arguments': d({}),
                                                    }]],
                                                },
                                            })]],
                                        },
                                        "content": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Initialization",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                                "context": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Initialization",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "type arguments": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type Arguments",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "property": <g_glossary.T.Type<null>>['group', d({
                                "group": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': null,
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({}),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "group",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                                "property": {
                                    'type': <g_glossary.T.Type<null>>['group', d({
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                        "referent": {
                                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['import', {
                                                    'glossary': {
                                                        'glossary':{
                                                            'annotation': null,
                                                            'key': "typesystem",
                                                        },
                                                        'glossary arguments': d({}),
                                                    },
                                                }],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "group",
                                                    "D",
                                                ]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                    })],
                                },
                            })],
                        })],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Source Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]]
            },
            "Statements": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['array', <g_glossary.T.Type<null>>['taggedUnion', d({
                    "block": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Block",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "call": <g_glossary.T.Type<null>>['group', d({
                        "arguments": {
                            'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                "constraints": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                                        "parameter": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['import', {
                                                    'glossary': {
                                                        'glossary':{
                                                            'annotation': null,
                                                            'key': "typesystem",
                                                        },
                                                        'glossary arguments': d({}),
                                                    },
                                                }],
                                                'typeXX': "Function Declaration",
                                                'tailXX': a([
                                                    "parameters",
                                                    "D",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Initialization Or Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })]],
                        },
                        "context": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "context definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "procedure",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "function": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "change context": <g_glossary.T.Type<null>>['group', d({
                        "block": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "source": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "if": <g_glossary.T.Type<null>>['group', d({
                        "condition": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "else": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "then": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "switch": <g_glossary.T.Type<null>>['group', d({
                        "cases": {
                            'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "context definition": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "tagged union",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "default": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "source": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "while": <g_glossary.T.Type<null>>['group', d({
                        "block": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "condition": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Initialization Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "with": <g_glossary.T.Type<null>>['group', d({
                        "action": {
                            'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                "assign": <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Assign",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                                "minus assign": <g_glossary.T.Type<null>>['group', d({
                                    "number": {
                                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                            'context': ['import', {
                                                'glossary': {
                                                    'glossary':{
                                                        'annotation': null,
                                                        'key': "typesystem",
                                                    },
                                                    'glossary arguments': d({}),
                                                },
                                            }],
                                            'typeXX': "Type",
                                            'tailXX': a([
                                                "number",
                                            ]),
                                            'type arguments': d({}),
                                        }]]],
                                    },
                                    "right hand side": {
                                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Numerical Initialization Or Selection",
                                            'tailXX': a([]),
                                            'type arguments': d({}),
                                        }]],
                                    },
                                })],
                                "plus assign": <g_glossary.T.Type<null>>['group', d({
                                    "number": {
                                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                            'context': ['import', {
                                                'glossary': {
                                                    'glossary':{
                                                        'annotation': null,
                                                        'key': "typesystem",
                                                    },
                                                    'glossary arguments': d({}),
                                                },
                                            }],
                                            'typeXX': "Type",
                                            'tailXX': a([
                                                "number",
                                            ]),
                                            'type arguments': d({}),
                                        }]]],
                                    },
                                    "right hand side": {
                                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Numerical Initialization Or Selection",
                                            'tailXX': a([]),
                                            'type arguments': d({}),
                                        }]],
                                    },
                                })],
                            })],
                        },
                        "source": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]]
            },
            "String Initialization": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "string literal": <g_glossary.T.Type<null>>['string', null],
                })]
            },
            "String Initialization Or Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "initialization": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "String Initialization",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "selection": <g_glossary.T.Type<null>>['group', d({
                        "selection": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Source Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "string": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Type",
                                'tailXX': a([
                                    "string",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                    })],
                })]
            },
            "Target Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Target Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "variable": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Aggregated Variables",
                                    'tailXX': a([
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                })]
            },
            "Target Selection Tail": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                    "step": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "property": <g_glossary.T.Type<null>>['group', d({
                                "group": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': null,
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({}),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "group",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                                "property": {
                                    'type': <g_glossary.T.Type<null>>['group', d({
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                        "referent": {
                                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['import', {
                                                    'glossary': {
                                                        'glossary':{
                                                            'annotation': null,
                                                            'key': "typesystem",
                                                        },
                                                        'glossary arguments': d({}),
                                                    },
                                                }],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "group",
                                                    "D",
                                                ]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                    })],
                                },
                            })],
                        })],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Target Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]]
            },
            "Type Arguments": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                    "constraints": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                            "x": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['import', {
                                        'glossary': {
                                            'glossary':{
                                                'annotation': null,
                                                'key': "typesystem",
                                            },
                                            'glossary arguments': d({}),
                                        },
                                    }],
                                    'typeXX': "Type Parameters",
                                    'tailXX': a([
                                        "local",
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })]],
                    },
                    "content": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "type": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type Selection",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                })]]
            },
            "Type Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "child namespace": <g_glossary.T.Type<null>>['group', d({
                        "namespacex": {
                            'type': <g_glossary.T.Type<null>>['group', d({
                                "key": {
                                    'type': <g_glossary.T.Type<null>>['string', null],
                                },
                                "referent": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': null,
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({}),
                                            },
                                        }],
                                        'typeXX': "Namespace",
                                        'tailXX': a([
                                            "namespaces",
                                            "D",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                        "selection": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Type Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "current namespaceXXXXX": <g_glossary.T.Type<null>>['group', d({
                        "key": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                        "referent": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['import', {
                                    'glossary': {
                                        'glossary':{
                                            'annotation': null,
                                            'key': "typesystem",
                                        },
                                        'glossary arguments': d({}),
                                    },
                                }],
                                'typeXX': "Namespace",
                                'tailXX': a([
                                    "types",
                                    "D",
                                ]),
                                'type arguments': d({}),
                            }]]],
                        },
                    })],
                })]
            },
            "Variables": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "aggregated": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Aggregated Variables",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "local": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Local Variables",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
        }),
        'namespaces': d({
            "Aggregated Variable": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "type": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "local": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "variable stack2": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "variable": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Aggregated Variables": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "Assign": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "initialization": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "target": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Block": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "statements": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "variables": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Boolean Initialization": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "and": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "false": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "greater than": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "less than": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "not": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "number equals": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "number not equals": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "or": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "string equals": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "string not equals": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "true": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Boolean Initialization Or Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "initialization": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "selection": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "boolean": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "selection": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Initialization": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "array literal": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "A": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "array map": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "source": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "boolean": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "change context": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "source": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "dictionary literal": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "D": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "dictionary map": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "source": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "group literal": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "properties": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "D": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "implement me": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "null": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "numerical": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "optional": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "procedure": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "block": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "temp has parameters": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "variables": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "string": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "switch": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "cases": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "D": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "default": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "source": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "tagged union literal": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "state": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "value function": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "definition": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "temp has parameters": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "variables": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "variables": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "initialization": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "variables": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Initialization Or Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "initialization": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "selection": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "selection": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Local Variables": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "initialization": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "type": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Numerical Initialization": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "minus": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "numeric literal": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "plus": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "postdecrement": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "postincrement": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "predecrement": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "preincrement": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Numerical Initialization Or Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "initialization": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "selection": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "number": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "selection": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Root": {
                'types': d({}),
                'namespaces': d({}),
            },
            "Source File": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "initialization": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Source Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "start": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "context": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "variable": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "tail": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Source Selection Tail": {
                'types': d({}),
                'namespaces': d({
                    "O": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "step": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "TU": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "call": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "address function": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "arguments": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "D": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "context": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "type arguments": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                    "property": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "group": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "property": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "tail": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Statements": {
                'types': d({}),
                'namespaces': d({
                    "A": {
                        'types': d({}),
                        'namespaces': d({
                            "TU": {
                                'types': d({}),
                                'namespaces': d({
                                    "block": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "call": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "arguments": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "D": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                    "context": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "context definition": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "function": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "change context": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "block": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "source": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "if": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "condition": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "else": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "O": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                    "then": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "switch": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "cases": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "D": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                    "context definition": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "default": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "O": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                    "source": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "while": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "block": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "condition": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "with": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "action": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "assign": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "minus assign": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "number": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "right hand side": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "plus assign": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "number": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "right hand side": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                    "source": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "String Initialization": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "string literal": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "String Initialization Or Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "initialization": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "selection": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "selection": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "string": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Target Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "tail": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "variable": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Target Selection Tail": {
                'types': d({}),
                'namespaces': d({
                    "O": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "step": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "TU": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "property": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "group": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "property": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "tail": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Type Arguments": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "type": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Type Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "child namespace": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "namespacex": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "selection": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "current namespaceXXXXX": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Variables": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "aggregated": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "local": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}