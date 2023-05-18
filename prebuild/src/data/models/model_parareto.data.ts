import * as pd from 'pareto-core-data'

import * as g_pld from "lib-pareto-lang-data/dist/submodules/unresolved"

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

const d = pd.d

export const $: g_pld.T.Type__Library<pd.SourceLocation> = typeLibrary(
    {
        //"typesystem": null,
    },
    {
        "numeric literal": null,
        "string literal": null,
        "identifier": null,
    },
    {

        "Block": globalType(
            group({
                "variables": prop(component(typeRef("Variables"))),
                "statements": prop(component(typeRef("Statements")))
            })
        ),
        "Boolean Expression": globalType(
            stateGroup({
                "and": state(group({
                    "left hand side": prop(component(typeRef("Boolean Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("Boolean Expression Or Selection"))),
                })),
                "or": state(group({
                    "left hand side": prop(component(typeRef("Boolean Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("Boolean Expression Or Selection"))),
                })),
                "false": state(group({})),
                "not": state(component(typeRef("Boolean Expression Or Selection"))),
                "true": state(group({})),
                // //boolean/string
                "string equals": state(group({
                    "left hand side": prop(component(typeRef("String Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("String Expression Or Selection"))),
                })),
                "string not equals": state(group({
                    "left hand side": prop(component(typeRef("String Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("String Expression Or Selection"))),
                })),
                // //boolean/number
                "number equals": state(group({
                    "left hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                })),
                "number not equals": state(group({
                    "left hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                })),
                "greater than": state(group({
                    "left hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                })),
                "less than": state(group({
                    "left hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                })),
            })
        ),
        "Boolean Expression Or Selection": globalType(
            stateGroup({
                "expression": state(component(typeRef("Boolean Expression"))),
                "selection": state(group({
                    "selection": prop(component(typeRef("Address Selection"))),
                    "boolean": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("boolean"))))
                })),
            })
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
                            // "arguments": prop(constrainedDictionary({
                            //     "parameter": dictConstraint(valSel("address function", s_group("declaration", s_group("parameters"))), tempExternalTypeSelection("typesystem", "Function Declaration", t_grp("parameters")))
                            // }, component(typeRef("Expression", {
                            //     "expected type": aResolvedValue(valSel("parameter", /*s_group("type")*/)),
                            //     "namespace": aResolvedValue(valSel("namespace")),
                            //     "variable stack": aResolvedValue(valSel("variable stack")),
                            // }))),
                        })),
                        "property": state(
                            group({
                                "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                "property": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("group", t_grp("properties"))))),
                            }),
                        ),
                    })),
                    "tail": prop(component(typeRef("Address Selection Tail")))
                }),
            )
        ),
        "Address Selection": globalType(
            group({
                "variable": prop(dictionaryReference(typeSelection("Variables"))),
                "tail": prop(component(typeRef("Address Selection Tail"))),
            })
        ),
        "Expression": globalType(
            stateGroup({
                // //array
                "array literal": state(array(group({
                    "array": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("array")))),
                    "x": prop(component(typeRef("Expression")))
                }))),
                // //object
                "object literal": state(group({
                    "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                    "properties": prop(constrainedDictionary(
                        {
                            "prop": dictionaryConstraint(externalTypeSelection("typesystem", "Type", t_sg("group", t_grp("properties"))), true)
                        },
                        component(typeRef("Expression")
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
                //     "return expression": prop(component(typeRef("Expression", {
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
                    "x": prop(component(typeRef("Boolean Expression"))),
                })),
                "numerical": state(group({
                    "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                    "x": prop(component(typeRef("Numerical Expression"))),
                })),
                "string": state(group({
                    "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("string")))),
                    "x": prop(component(typeRef("String Expression"))),
                })),
                // //any
                // "conditional": state(group({
                //     "test": prop(component(typeRef("Boolean Expression Or Selection", {
                //         "namespace": aResolvedValue(valSel("namespace")),
                //         "variable stack": aResolvedValue(valSel("variable stack"))
                //     })),
                //     "true": prop(component(typeRef("Expression", {
                //         "variable stack": aResolvedValue(valSel("variable stack")),
                //         "namespace": aResolvedValue(valSel("namespace")),
                //         "type": aResolvedValue(valSel("type")),
                //     })),
                //     "false": prop(component(typeRef("Expression", {
                //         "expected type": aResolvedValue(valSel("expected type")),
                //         "variable stack": aResolvedValue(valSel("variable stack")),
                //         "namespace": aResolvedValue(valSel("namespace")),
                //     })),
                // })),
                // //"identifier": state(atom("identifier")),
                // // "new": state(group({
                // //     "class": prop(atom("identifier")),
                // //     "parameters": prop(dictionary(component(typeRef("Expression", {}))),
                // // })),
                // // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
                "null": state(group({
                    "null": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("null")))),
                })),
                // //"parenthesized": state(component(typeRef("Expression", {})),
                // "symbol": state(component(typeRef("Address Selection", { //something that is stored
                //     "namespace": aResolvedValue(valSel("namespace")),
                //     "variable stack": aResolvedValue(valSel("variable stack"))
                // })),
                // // "template": composite("TemplateExpression", group({
                // //     "head": member(empty("TemplateHead", { "text": atom() })),
                // //     "spans": member(array(composite("TemplateSpan", group({
                // //         "expression": member(component(typeRef("Expression")),
                // //         "type": member(choice({
                // //             "middle": empty("TemplateMiddle", { "text": atom() }),
                // //             "tail": empty("TemplateTail", { "text": atom() }),
                // //         })),
                // //     })))),
                // // })),
            })
        ),
        "Numerical Expression": globalType(
            stateGroup({
                "minus": state(group({
                    "left hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                })),
                "plus": state(group({
                    "left hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                    "right hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                })),
                "predecrement": state(component(typeRef("Numerical Expression Or Selection"))),
                "preincrement": state(component(typeRef("Numerical Expression Or Selection"))),
                "postdecrement": state(component(typeRef("Numerical Expression Or Selection"))),
                "postincrement": state(component(typeRef("Numerical Expression Or Selection"))),
                "numeric literal": state(atom("numeric literal")),
            })
        ),
        "Numerical Expression Or Selection": globalType(
            stateGroup({
                "expression": state(component(typeRef("Numerical Expression"))),
                "selection": state(group({
                    "selection": prop(component(typeRef("Address Selection"))),
                    "cast to number": prop(stateGroup({
                        "number": state(group({
                            "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                        }))
                    }))
                })),

            })
        ),
        "Source File": globalType(
            group({
                // "symbols": prop(component(typeRef("Symbols", {
                //     "namespace": aResolvedValue(valSel("namespace"))
                // })),
            })),
        "Assign": globalType(
            group({
                "target": prop(component(typeRef("Address Selection"))),
                "right hand side": prop(component(typeRef("Expression"))),
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
                        //                 component(typeRef("Expression", {
                        //                     "expected type": aResolvedValue(valSel("parameter")),
                        //                     "variable stack": aResolvedValue(valSel("variable stack")),
                        //                     "namespace": aResolvedValue(valSel("namespace")),
                        //                 })
                        //             )),
                        //         })),
                        "assign": state(component(typeRef("Assign"))),
                        "minus assign": state(group({/*must be number*/
                            "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                            "right hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
                        })),
                        "plus assign": state(group({/*must be number*/
                            "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                            "right hand side": prop(component(typeRef("Numerical Expression Or Selection"))),
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
                //     "condition": prop(component(typeRef("Boolean Expression", {
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
                    "condition": prop(component(typeRef("Boolean Expression Or Selection"))),
                    "then": prop(component(typeRef("Block"))),
                    "else": prop(optional(component(typeRef("Block")))),
                })),
                // // "labeled": composite("LabeledStatement", group({
                // //     "label": member(component(typeRef("identifier")),
                // //     "statement": member(component(typeRef("statement")),
                // // })),
                // // "return": state(group({
                // //     "expression": prop(optional(component(typeRef("Expression", {
                // //         "expected type": aResolvedValue(valSel("function", s_group("return type", result()))),
                // //         "variable stack": aResolvedValue(valSel("variable stack")),
                // //         "namespace": aResolvedValue(valSel("namespace")),
                // //     })))
                // // })),
                // // "throw": state(component(typeRef("Expression", {})),
                // // "try": state(group({
                // //     "block": prop(component(typeRef("Block", {})),
                // //     "catchClause": prop(group({
                // //         "variable": prop(component(typeRef("variableDeclaration")),
                // //         "block": member(component(typeRef("block")),
                // //     }))),
                // // }))),
                "while": state(group({
                    "condition": prop(component(typeRef("Boolean Expression Or Selection"))),
                    "block": prop(component(typeRef("Block"))),
                })),
            }))
        ),
        "String Expression": globalType(
            stateGroup({
                "string literal": state(atom("string literal")),
            })
        ),
        "String Expression Or Selection": globalType(
            stateGroup({
                "expression": state(component(typeRef("String Expression"))),
                "selection": state(group({
                    "selection": prop(component(typeRef("Address Selection"))),
                    "cast to string": prop(stateGroup({
                        "string": state(group({
                            "string": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("string")))),


                        }))
                    }))
                })),
            })
        ),
        // "Symbols": globalType({
        //     "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
        // }, dictionary(stateGroup({
        //     "namespace": state(group({
        //         "symbols": prop(component(typeRef("Symbols", {
        //             "namespace": aResolvedValue(valSel("namespace"))
        //         }))
        //     })),
        //     "symbol": state(group({
        //         "type path": prop(component(typeRef("Type Selection", {
        //             "namespace": aResolvedValue(valSel("namespace"))
        //         })),
        //     })),
        // }))),
        "Type Arguments": globalType(
            constrainedDictionary(
                { "x": dictionaryConstraint(externalTypeSelection("typesystem", "Type Parameters"), true) },
                group({
                    "type": prop(component(typeRef("Type Selection")))
                })
            )
        ),
        // "Type Selection Tail": globalType(
        //     {
        //         "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
        //     },
        //     optional(
        //         group({
        //             //"step type": prop(dictionaryReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/))),
        //             "tail": prop(component(typeRef("Type Selection Tail", {
        //                 "namespace": aResolvedValue(valSel("namespace"))
        //             })),
        //         }),
        //         optionalResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_group("tail", s_component())), valSel("namespace"))),
        //     globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_optional()))
        // ),
        "Type Selection": globalType(
            stateGroup(
                {
                    "current namespace": state(
                        dictionaryReference(externalTypeSelection("typesystem", "Namespace", t_grp("types"))),
                    ),
                    "child namespace": state(
                        group({
                            "namespacex": prop(dictionaryReference(externalTypeSelection("typesystem", "Namespace", t_grp("namespaces")))),
                            "selection": prop(component(typeRef("Type Selection"))),
                        }),
                    )
                }
            )
        ),
        "Variables": globalType(
            dictionary(group({
                "type": prop(stateGroup({
                    //FIXME "parameter": state(group({
                    //     "parameter": prop(dictionaryReference(valSel("parameters"), tempExternalTypeSelection("typesystem", "Parameters"))),
                    // }), tailSel(s_group("parameter", s_reference(s_group("type"))))),
                    "variable stack2": state(group({
                        "variable": prop(dictionaryReference(typeSelection("Variables"))),
                    })),
                    "local": state(group({
                        "type": prop(component(typeRef("Type Selection"))),
                            "initializer": prop(component(typeRef("Expression"))),
                    })),
                })),
            }))
        ),
    }
)