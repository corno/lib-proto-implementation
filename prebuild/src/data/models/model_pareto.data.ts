import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'

import * as g_pld from "lib-pareto-lang-data/dist/submodules/unresolved"

import { $ as d_typesystem } from "../imports/typesystem/model.data"

import {
    atom,
    array, constrainedDictionary,
    dictionary,
    globalType,
    group,
    state,
    optional,
    prop,
    t_grp,
    t_sg,
    stateGroup,
    typeSelection,
    component,
    typeRef,
    dictionaryReference,
    lookupConstraint,
    cyclicReference,
    lookupReference,
    constraint,
    dictionaryConstraint,
    typeLibrary,
    externalTypeSelection,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

import * as g_pareto_lang_data_settings from "lib-pareto-lang-data/dist/submodules/2submodules"
import * as g_pareto_lang_data from "lib-pareto-lang-data"



const d = pd.d
const a = pd.a

export const $: g_pareto_lang_data_settings.T.GenerateSubmodulesParameters = {
    'path': a([`../../pareto/src/data/submodules`]),
    'data': {
        'library': g_pareto_lang_data.$b.resolve({
            'onError': ($) => {
                pv.logDebugMessage(`XX: ${$.message[0]}`)
            }
        })({
            'imports': d({
                "typesystem": g_pareto_lang_data.$b.resolve({
                    'onError': ($) => {
                        pv.logDebugMessage(`XX: ${$.message[0]}`)
                    }
                })({
                    'imports': d({}),
                    'root': {
                        'type library': d_typesystem,
                        'root': {
                            'annotation': pd.getLocationInfo(0),
                            'key': "Root"
                        },
                    },
                })['type library'],
            }),
            'root': {
                'type library': typeLibrary(
                    {
                        "typesystem": {
                            'annotation': pd.getLocationInfo(0),
                            'content': null
                        },
                    },
                    {
                        "numeric literal": null,
                        "string literal": null,
                        "identifier": null,
                    },
                    {
                        "Type Selection": globalType(
                            stateGroup(
                                {
                                    "current namespaceXXXXX": state(
                                        dictionaryReference(externalTypeSelection("typesystem", "Local Namespace", t_grp("types"))),
                                    ),
                                    "child namespace": state(
                                        group({
                                            "namespacex": prop(dictionaryReference(externalTypeSelection("typesystem", "Local Namespace", t_grp("namespaces")))),
                                            "selection": prop(component(typeRef("Type Selection", true))),
                                        }),
                                    )
                                }
                            )
                        ),
                        "Type Arguments": globalType(
                            constrainedDictionary(
                                { "x": dictionaryConstraint(externalTypeSelection("typesystem", "Type Parameters", t_grp("local")), true) },
                                group({
                                    "type": prop(component(typeRef("Type Selection")))
                                })
                            )
                        ),
                        "Address Selection Tail": globalType(
                            optional(
                                group({
                                    "step": prop(stateGroup({
                                        "call": state(group({
                                            "address function": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("address function")))),
                                            // "function": prop(component(typeRef("Address Selection", {
                                            //     "namespace": aResolvedValue(valSel("namespace")),
                                            //     "variable stack": aResolvedValue(valSel("variable stack"))
                                            // })), /*constraint tagged union: type === address function*/
                                            "type arguments": prop(component(typeRef("Type Arguments"))),
                                            "context": prop(component(typeRef("Initialization", true))),
                                            "arguments": prop(constrainedDictionary(
                                                {
                                                    "parameter": dictionaryConstraint(externalTypeSelection("typesystem", "Function Declaration", t_grp("parameters")), true)
                                                },
                                                component(typeRef("Initialization", true))
                                            ))
                                            // "arguments": prop(constrainedDictionary({
                                            //     "parameter": dictConstraint(valSel("address function", s_group("declaration", s_group("parameters"))), tempExternalTypeSelection("typesystem", "Function Declaration", t_grp("parameters")))
                                            // }, component(typeRef("Initialization", {
                                            //     "expected type": aResolvedValue(valSel("parameter", /*s_group("type")*/)),
                                            //     "namespace": aResolvedValue(valSel("namespace")),
                                            //     "variable stack": aResolvedValue(valSel("variable stack")),
                                            // }))),
                                        })),
                                        "property": state(
                                            group({
                                                "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                                "property": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                            }),
                                        ),
                                    })),
                                    "tail": prop(component(typeRef("Address Selection Tail", true)))
                                }),
                            )
                        ),
                        "Variables": globalType(
                            dictionary(group({
                                "type": prop(stateGroup({
                                    //FIXME "parameter": state(group({
                                    //     "parameter": prop(dictionaryReference(valSel("parameters"), tempExternalTypeSelection("typesystem", "Parameters"))),
                                    // }), tailSel(s_group("parameter", s_reference(s_group("type"))))),
                                    "variable stack2": state(group({
                                        "variable": prop(lookupReference(typeRef("Variables", true))),
                                    })),
                                    "local": state(group({
                                        "type": prop(component(typeRef("Type Selection"))),
                                        "initialization": prop(component(typeRef("Initialization", true))),
                                    })),
                                })),
                            }))
                        ),
                        "Address Selection": globalType(
                            group({
                                "variable": prop(dictionaryReference(typeSelection("Variables"))),
                                "tail": prop(component(typeRef("Address Selection Tail"))),
                            })
                        ),

                        ///////////////////////////////////////////////////////////////////////////////
                        //Expressions
                        "Initialization Or Selection": globalType(
                            stateGroup({
                                "initialization": state(component(typeRef("Initialization", true))),
                                "selection": state(group({
                                    "selection": prop(component(typeRef("Address Selection"))),
                                    "string": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("string")))),
                                })),
                            })
                        ),
                        "String Initialization Or Selection": globalType(
                            stateGroup({
                                "initialization": state(component(typeRef("String Initialization", true))),
                                "selection": state(group({
                                    "selection": prop(component(typeRef("Address Selection"))),
                                    "string": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("string")))),
                                })),
                            })
                        ),
                        "Numerical Initialization Or Selection": globalType(
                            stateGroup({
                                "initialization": state(component(typeRef("Numerical Initialization", true))),
                                "selection": state(group({
                                    "selection": prop(component(typeRef("Address Selection"))),
                                    "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                                })),

                            })
                        ),
                        "Boolean Initialization Or Selection": globalType(
                            stateGroup({
                                "initialization": state(component(typeRef("Boolean Initialization", true))),
                                "selection": state(group({
                                    "selection": prop(component(typeRef("Address Selection"))),
                                    "boolean": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("boolean"))))
                                })),
                            })
                        ),
                        "Boolean Initialization": globalType(
                            stateGroup({
                                "and": state(group({
                                    "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"))),
                                })),
                                "or": state(group({
                                    "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"))),
                                })),
                                "false": state(group({})),
                                "not": state(component(typeRef("Boolean Initialization Or Selection"))),
                                "true": state(group({})),
                                // //boolean/string
                                "string equals": state(group({
                                    "left hand side": prop(component(typeRef("String Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("String Initialization Or Selection"))),
                                })),
                                "string not equals": state(group({
                                    "left hand side": prop(component(typeRef("String Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("String Initialization Or Selection"))),
                                })),
                                // //boolean/number
                                "number equals": state(group({
                                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                })),
                                "number not equals": state(group({
                                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                })),
                                "greater than": state(group({
                                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                })),
                                "less than": state(group({
                                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                })),
                            })
                        ),
                        "Numerical Initialization": globalType(
                            stateGroup({
                                "minus": state(group({
                                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                })),
                                "plus": state(group({
                                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                })),
                                "predecrement": state(component(typeRef("Numerical Initialization Or Selection"))),
                                "preincrement": state(component(typeRef("Numerical Initialization Or Selection"))),
                                "postdecrement": state(component(typeRef("Numerical Initialization Or Selection"))),
                                "postincrement": state(component(typeRef("Numerical Initialization Or Selection"))),
                                "numeric literal": state(atom("numeric literal")),
                            })
                        ),
                        "String Initialization": globalType(
                            stateGroup({
                                "string literal": state(atom("string literal")),
                            })
                        ),
                        "Initialization": globalType(
                            stateGroup({
                                // //array
                                "array literal": state(array(group({
                                    "array": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("array")))),
                                    "initialization": prop(component(typeRef("Initialization Or Selection")))
                                }))),
                                // //object
                                "object literal": state(group({
                                    "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                    "properties": prop(constrainedDictionary(
                                        {
                                            "prop": dictionaryConstraint(externalTypeSelection("typesystem", "Type", t_sg("group")), true)
                                        },
                                        component(typeRef("Initialization Or Selection")
                                        )
                                    )),
                                })),
                                // //function (inline function)
                                // "address function": constrainedstate({
                                //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                                // }, group({
                                //     "parameters": prop(dictionary(group({}))), //no type info needed
                                //     //"signature": prop(component(typeRef("FunctionSignature", {})),
                                //     "variables": prop(component(typeRef("Variables", {
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                                //         "variable stack": aResolvedValue(valSel("variable stack")),
                                //     })),
                                //     "statements": prop(component(typeRef("Statements", {
                                //         "function": aResolvedValue(valSel("out")),
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //         "variable stack": aResolvedValue(valSel("variables"))
                                //     })),
                                //     "return selection": prop(component(typeRef("Address Selection", {
                                //         // "function": aResolvedValue(valSel("out")),
                                //         // "namespace": aResolvedValue(valSel("namespace")),
                                //         // "variable stack": aResolvedValue(valSel("variables"))
                                //     })),
                                // })),
                                // "value function": constrainedstate({
                                //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                                // }, group({
                                //     "parameters": prop(dictionary(group({}))), //no type info needed
                                //     //"signature": prop(component(typeRef("FunctionSignature", {})),
                                //     "variables": prop(component(typeRef("Variables", {
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                                //         "variable stack": aResolvedValue(valSel("variable stack")),
                                //     })),
                                //     "statements": prop(component(typeRef("Statements", {
                                //         "function": aResolvedValue(valSel("out")),
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //         "variable stack": aResolvedValue(valSel("variables"))
                                //     })),
                                //     "return expression": prop(component(typeRef("Initialization", {
                                //         // "function": aResolvedValue(valSel("out")),
                                //         // "namespace": aResolvedValue(valSel("namespace")),
                                //         // "variable stack": aResolvedValue(valSel("variables"))
                                //     })),
                                // })),
                                // // "procedure": constrainedstate({
                                // //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                                // // }, group({
                                // //     "parameters": prop(dictionary(group({}))), //no type info needed
                                // //     //"signature": prop(component(typeRef("FunctionSignature", {})),
                                // //     "variables": prop(component(typeRef("Variables", {
                                // //         "namespace": aResolvedValue(valSel("namespace")),
                                // //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                                // //         "variable stack": aResolvedValue(valSel("variable stack")),
                                // //     })),
                                // //     "statements": prop(component(typeRef("Statements", {
                                // //         "function": aResolvedValue(valSel("out")),
                                // //         "namespace": aResolvedValue(valSel("namespace")),
                                // //         "variable stack": aResolvedValue(valSel("variables"))
                                // //     })),
                                // // })),
                                //boolean
                                "boolean": state(group({
                                    "boolean": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("boolean")))),
                                    "x": prop(component(typeRef("Boolean Initialization"))),
                                })),
                                "numerical": state(group({
                                    "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                                    "x": prop(component(typeRef("Numerical Initialization"))),
                                })),
                                "string": state(group({
                                    "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("string")))),
                                    "x": prop(component(typeRef("String Initialization"))),
                                })),
                                // //any
                                // "conditional": state(group({
                                //     "test": prop(component(typeRef("Boolean Initialization Or Selection", {
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //         "variable stack": aResolvedValue(valSel("variable stack"))
                                //     })),
                                //     "true": prop(component(typeRef("Initialization", {
                                //         "variable stack": aResolvedValue(valSel("variable stack")),
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //         "type": aResolvedValue(valSel("type")),
                                //     })),
                                //     "false": prop(component(typeRef("Initialization", {
                                //         "expected type": aResolvedValue(valSel("expected type")),
                                //         "variable stack": aResolvedValue(valSel("variable stack")),
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //     })),
                                // })),
                                // //"identifier": state(atom("identifier")),
                                // // "new": state(group({
                                // //     "class": prop(atom("identifier")),
                                // //     "parameters": prop(dictionary(component(typeRef("Initialization", {}))),
                                // // })),
                                // // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
                                "null": state(group({
                                    "null": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("null")))),
                                })),
                                // //"parenthesized": state(component(typeRef("Initialization", {})),
                                // "symbol": state(component(typeRef("Address Selection", { //something that is stored
                                //     "namespace": aResolvedValue(valSel("namespace")),
                                //     "variable stack": aResolvedValue(valSel("variable stack"))
                                // })),
                                // // "template": composite("TemplateExpression", group({
                                // //     "head": member(empty("TemplateHead", { "text": atom() })),
                                // //     "spans": member(array(composite("TemplateSpan", group({
                                // //         "Initialization": member(component(typeRef("Initialization")),
                                // //         "type": member(choice({
                                // //             "middle": empty("TemplateMiddle", { "text": atom() }),
                                // //             "tail": empty("TemplateTail", { "text": atom() }),
                                // //         })),
                                // //     })))),
                                // // })),
                            })
                        ),


                        //Statements
                        "Block": globalType(
                            group({
                                "variables": prop(component(typeRef("Variables"))),
                                "statements": prop(component(typeRef("Statements", true)))
                            })
                        ),
                        "Assign": globalType(
                            group({
                                "target": prop(component(typeRef("Address Selection"))),
                                "initialization": prop(component(typeRef("Initialization Or Selection"))),
                            }),
                        ),
                        "Statements": globalType(
                            array(stateGroup({
                                "block": state(component(typeRef("Block"))),
                                "with": state(group({
                                    "address": prop(component(typeRef("Address Selection"))),
                                    "action": prop(stateGroup({
                                        //         "call": constrainedstate({
                                        //             "procedure address": optionConstraint(valSel("address", s_component()), "procedure", externalTypeSelection("typesystem", "Type", [tu("procedure")]))
                                        //         }, group({
                                        //             "type arguments": prop(component(typeRef("Type Arguments", {
                                        //                 "type parameters": aResolvedValue(valSel("function")),
                                        //                 "namespace": aResolvedValue(valSel("namespace")),
                                        //             })),
                                        //             "arguments": prop(constrainedDictionary(
                                        //                 { "parameter": dictConstraint(valSel("function"), externalTypeSelection("typesystem", "Parameters")) },
                                        //                 component(typeRef("Initialization", {
                                        //                     "expected type": aResolvedValue(valSel("parameter")),
                                        //                     "variable stack": aResolvedValue(valSel("variable stack")),
                                        //                     "namespace": aResolvedValue(valSel("namespace")),
                                        //                 })
                                        //             )),
                                        //         })),
                                        "assign": state(component(typeRef("Assign"))),
                                        "minus assign": state(group({/*must be number*/
                                            "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                                            "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                        })),
                                        "plus assign": state(group({/*must be number*/
                                            "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                                            "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                                        })),

                                        //         "switch": constrainedstate({
                                        //             "tagged union address": optionConstraint(valSel("address", s_component()), "tagged union", typeSelection("Foo"))
                                        //         }, group({
                                        //             "cases": prop(constrainedDictionary(
                                        //                 { "option": dictConstraint(valSel("tagged union address", s_group("options")), externalTypeSelection("typesystem", "Type", [tu("tagged union"), grp("options")])) },
                                        //                 group({
                                        //                     "block": prop(component(typeRef("Block", {
                                        //                         "function": aResolvedValue(valSel("function")),
                                        //                         "namespace": aResolvedValue(valSel("namespace")),
                                        //                         "variable stack": aResolvedValue(valSel("variable stack")),
                                        //                     }))
                                        //                 })
                                        //             )),
                                        //             "default": prop(optional(component(typeRef("Block", {
                                        //                 "function": aResolvedValue(valSel("function")),
                                        //                 "namespace": aResolvedValue(valSel("namespace")),
                                        //                 "variable stack": aResolvedValue(valSel("variable stack")),
                                        //             }))),
                                        //         })),
                                    }))
                                })),
                                // "for": state(group({
                                //     "condition": prop(component(typeRef("Boolean Initialization", {
                                //         "variable stack": aResolvedValue(valSel("variable stack")),
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //     })),
                                //     "incrementer": prop(component(typeRef("Assign", {
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //         "variable stack": aResolvedValue(valSel("variable stack")),
                                //     })),
                                //     "block": prop(component(typeRef("Block", {
                                //         "function": aResolvedValue(valSel("function")),
                                //         "namespace": aResolvedValue(valSel("namespace")),
                                //         "variable stack": aResolvedValue(valSel("variable stack")),
                                //     })),
                                ///})),
                                "if": state(group({
                                    "condition": prop(component(typeRef("Boolean Initialization Or Selection"))),
                                    "then": prop(component(typeRef("Block"))),
                                    "else": prop(optional(component(typeRef("Block")))),
                                })),
                                // // "labeled": composite("LabeledStatement", group({
                                // //     "label": member(component(typeRef("identifier")),
                                // //     "statement": member(component(typeRef("statement")),
                                // // })),
                                // // "return": state(group({
                                // //     "Initialization": prop(optional(component(typeRef("Initialization", {
                                // //         "expected type": aResolvedValue(valSel("function", s_group("return type", result()))),
                                // //         "variable stack": aResolvedValue(valSel("variable stack")),
                                // //         "namespace": aResolvedValue(valSel("namespace")),
                                // //     })))
                                // // })),
                                // // "throw": state(component(typeRef("Initialization", {})),
                                // // "try": state(group({
                                // //     "block": prop(component(typeRef("Block", {})),
                                // //     "catchClause": prop(group({
                                // //         "variable": prop(component(typeRef("variableDeclaration")),
                                // //         "block": member(component(typeRef("block")),
                                // //     }))),
                                // // }))),
                                "while": state(group({
                                    "condition": prop(component(typeRef("Boolean Initialization Or Selection"))),
                                    "block": prop(component(typeRef("Block"))),
                                })),
                            }))
                        ),

                        // // "Symbols": globalType({
                        // //     "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                        // // }, dictionary(stateGroup({
                        // //     "namespace": state(group({
                        // //         "symbols": prop(component(typeRef("Symbols", {
                        // //             "namespace": aResolvedValue(valSel("namespace"))
                        // //         }))
                        // //     })),
                        // //     "symbol": state(group({
                        // //         "type path": prop(component(typeRef("Type Selection", {
                        // //             "namespace": aResolvedValue(valSel("namespace"))
                        // //         })),
                        // //     })),
                        // // }))),
                        // // "Type Selection Tail": globalType(
                        // //     {
                        // //         "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                        // //     },
                        // //     optional(
                        // //         group({
                        // //             //"step type": prop(dictionaryReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/))),
                        // //             "tail": prop(component(typeRef("Type Selection Tail", {
                        // //                 "namespace": aResolvedValue(valSel("namespace"))
                        // //             })),
                        // //         }),
                        // //         optionalResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_group("tail", s_component())), valSel("namespace"))),
                        // //     globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_optional()))
                        // // ),

                        "Source File": globalType(
                            group({
                                "type": prop(component(typeRef("Type Selection"))),
                                "initialization": prop(component(typeRef("Initialization", true))),
                            })
                        ),
                        "Root": globalType(
                            component(typeRef("Source File"))
                        )
                    }
                ),
                'root': {
                    'annotation': pd.getLocationInfo(0),
                    'key': "Root"
                }
            }
        })['type library'],
        'atom mappings': d({
            "identifier": ['string', null],
            //"text": ['string', null],
            "numeric literal": ['number', null],
            "string literal": ['string', null],
        })
    }

}
