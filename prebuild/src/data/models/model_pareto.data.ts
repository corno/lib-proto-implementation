import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'

import * as g_pld from "lib-pareto-lang-data/dist/submodules/unresolved"

import { $ as d_typesystem } from "../imports/typesystem/model.data"

import {
    atom,
    array,
     constrainedDictionary,
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
    imprt,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

import * as xx from "lib-pareto-lang-data/dist/split"
import * as g_pareto_lang_data_settings from "lib-pareto-lang-data/dist/submodules/2submodules"
import * as g_pareto_lang_data from "lib-pareto-lang-data"

const d = pd.d
const a = pd.a

const imp = typeLibrary(
    {
        "typesystem": imprt("proto typesystem"),
    },
    {
        "numeric literal": null,
        "string literal": null,
        "identifier": null,
    },
    // {
    //     "Aggregated Variable": globalTypeDeclaration({}),
    //     "Aggregated Variables": globalTypeDeclaration({}),
    //     "Assign": globalTypeDeclaration({}),
    //     "Block": globalTypeDeclaration({}),
    //     "Boolean Initialization Or Selection": globalTypeDeclaration({}),
    //     "Boolean Initialization": globalTypeDeclaration({}),
    //     "Function Call": globalTypeDeclaration({}),
    //     "Generic Initialization": globalTypeDeclaration({}),
    //     "Initialization": globalTypeDeclaration({}),
    //     "Local Variables": globalTypeDeclaration({}),
    //     "Numerical Initialization Or Selection": globalTypeDeclaration({}),
    //     "Numerical Initialization": globalTypeDeclaration({}),
    //     "Root": globalTypeDeclaration({}),
    //     "Source File": globalTypeDeclaration({}),
    //     "Source Selection Tail": globalTypeDeclaration({}),
    //     "Source Selection": globalTypeDeclaration({}),
    //     "Statements": globalTypeDeclaration({}),
    //     "String Initialization Or Selection": globalTypeDeclaration({}),
    //     "String Initialization": globalTypeDeclaration({}),
    //     "Target Selection Tail": globalTypeDeclaration({}),
    //     "Target Selection": globalTypeDeclaration({}),
    //     "Type Arguments": globalTypeDeclaration({}),
    //     "Type Selection": globalTypeDeclaration({}),
    //     "Variables": globalTypeDeclaration({}),
    // },
    {

        "Generic Initialization": globalType(
            {},
            stateGroup({
                "change context": state(group({
                    "source": prop(component(typeRef("Source Selection", true), {})),
                    "content": prop(component(typeRef("Initialization", true), {})),
                })),
                "implement me": state(atom("string literal")),
                "panic": state(atom("string literal")),
                "switch": state(group({
                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
                    "temp type": prop(component(typeRef("Type Selection"), {})),
                    "source": prop(component(typeRef("Source Selection", true), {})),
                    "cases": prop(constrainedDictionary(
                        {

                        },
                        component(typeRef("Initialization", true), {})
                    )),
                    "default": prop(optional(component(typeRef("Initialization", true), {})))
                })),
                "variables": state(group({
                    "variables": prop(component(typeRef("Variables"), {})),
                    "content": prop(component(typeRef("Initialization", true), {})),
                }))
            }),
        ),
        "Generic Selection": globalType(
            {},
            stateGroup({
                "change context": state(group({
                    "source": prop(component(typeRef("Source Selection", true), {})),
                    "content": prop(component(typeRef("Source Selection Tail", true), {})),
                })),
                "implement me": state(atom("string literal")),
                "optional": state(group({
                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("optional")))),
                    "temp type": prop(component(typeRef("Type Selection"), {})),
                    "source": prop(component(typeRef("Source Selection", true), {})),
                    "set": prop(component(typeRef("Source Selection Tail", true), {})),
                    "not set": prop(component(typeRef("Source Selection Tail", true), {})),
                })),
                "panic": state(atom("string literal")),
                "switch": state(group({
                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
                    "temp type": prop(component(typeRef("Type Selection"), {})),
                    "source": prop(component(typeRef("Source Selection", true), {})),
                    "cases": prop(constrainedDictionary(
                        {

                        },
                        component(typeRef("Source Selection Tail", true), {})
                    )),
                    "default": prop(optional(component(typeRef("Source Selection Tail", true), {})))
                })),
                "variables": state(group({
                    "variables": prop(component(typeRef("Variables"), {})),
                    "content": prop(component(typeRef("Source Selection Tail", true), {})),
                }))
            }),
        ),
        "Generic Statement": globalType(
            {},
            stateGroup({
                "change context": state(group({
                    "source": prop(component(typeRef("Source Selection"), {})),
                    "content": prop(component(typeRef("Statements", true), {})),
                })),
                "implement me": state(atom("string literal")),
                "panic": state(atom("string literal")),
                "switch": state(group({
                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
                    "temp type": prop(component(typeRef("Type Selection"), {})),
                    "source": prop(component(typeRef("Source Selection"), {})),
                    "cases": prop(constrainedDictionary(
                        {

                        },
                        component(typeRef("Statements", true), {})
                    )),
                    "default": prop(optional(component(typeRef("Statements", true), {})))
                })),
                "variables": state(group({
                    "variables": prop(component(typeRef("Variables"), {})),
                    "content": prop(component(typeRef("Statements", true), {})),
                }))
            }),
        ),
        "Type Selection": globalType(
            {},
            stateGroup(
                {
                    "current namespaceXXXXX": state(
                        dictionaryReference(externalTypeSelection("typesystem", "Namespace", t_grp("types"))),
                    ),
                    "child namespace": state(
                        group({
                            "namespacex": prop(dictionaryReference(externalTypeSelection("typesystem", "Namespace", t_grp("namespaces")))),
                            "selection": prop(component(typeRef("Type Selection", true), {})),
                        }),
                    )
                }
            )
        ),
        "Type Arguments": globalType(
            {},
            constrainedDictionary(
                { "x": dictionaryConstraint(externalTypeSelection("typesystem", "Type Parameters", t_grp("local")), true) },
                group({
                    "type": prop(component(typeRef("Type Selection"), {}))
                })
            )
        ),
        "Local Variables": globalType(
            {},
            dictionary(group({
                "type": prop(component(typeRef("Type Selection"), {})),
                "initialization": prop(component(typeRef("Initialization", true), {})),
            }))
        ),
        "Aggregated Variable": globalType(
            {},
            group({
                "type": prop(stateGroup({
                    //FIXME "parameter": state(group({
                    //     "parameter": prop(dictionaryReference(valSel("parameters"), tempExternalTypeSelection("typesystem", "Parameters"))),
                    // }), tailSel(s_group("parameter", s_reference(s_group("type"))))),
                    "variable stack2": state(group({
                        "variable": prop(lookupReference(typeRef("Aggregated Variable", true))),
                    })),
                    "local": state(group({
                        //"variable": prop(dictionaryReference(typeSelection("Local Variables"))),
                    })),
                })),
            })
        ),
        "Aggregated Variables": globalType(
            {},
            dictionary(component(typeRef("Aggregated Variable"), {}))
        ),
        "Variables": globalType(
            {},
            group({
                "local": prop(component(typeRef("Local Variables"), {})),
                "aggregated": prop(component(typeRef("Aggregated Variables"), {}))
            })
        ),
        "Target Selection Tail": globalType(
            {},
            optional(
                group({
                    "step": prop(stateGroup({
                        "property": state(
                            group({
                                "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                "property": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                            }),
                        ),
                    })),
                    "tail": prop(component(typeRef("Target Selection Tail", true), {}))
                }),
            )
        ),
        "Target Selection": globalType(
            {},
            group({
                "variable": prop(dictionaryReference(typeSelection("Aggregated Variables"))),
                "tail": prop(component(typeRef("Target Selection Tail"), {})),
            })
        ),
        "Function Call": globalType(
            {},
            group({
                // "function": prop(component(typeRef("Source Selection", {
                //     "namespace": aResolvedValue(valSel("namespace")),
                //     "variable stack": aResolvedValue(valSel("variable stack"))
                // })), /*constraint tagged union: type === address function*/
                "type arguments": prop(component(typeRef("Type Arguments"), {})),
                "context": prop(component(typeRef("Source Selection", true), {})),
                "arguments": prop(constrainedDictionary(
                    {
                        "parameter": dictionaryConstraint(externalTypeSelection("typesystem", "Function Declaration", t_grp("parameters")), true)
                    },
                    stateGroup({
                        "initialization": state(component(typeRef("Initialization", true), {})),
                        "selection": state(group({
                            "selection": prop(component(typeRef("Source Selection", true), {})),
                        })),
                    })
                ))
            })
        ),
        "Source Selection Tail": globalType(
            {},
            optional(
                group({
                    "step": prop(stateGroup({
                        "call": state(group({
                            "selection function": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("selection function")))),
                            "call": prop(component(typeRef("Function Call"), {})),
                        })),
                        "property": state(
                            group({
                                "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                "property": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                            }),
                        ),
                    })),
                    "tail": prop(component(typeRef("Source Selection Tail", true), {}))
                }),
            )
        ),
        "Source Selection": globalType(
            {},
            group({
                "start": stateGroup({
                    "context": state(group({})),
                    "variable": state(dictionaryReference(typeSelection("Aggregated Variables"))),
                    "generic": state(component(typeRef("Generic Selection"), {})),
                }),
                "tail": prop(component(typeRef("Source Selection Tail"), {})),
            }),
        ),

        ///////////////////////////////////////////////////////////////////////////////
        //Expressions
        "String Initialization Or Selection": globalType(
            {},
            stateGroup({
                "initialization": state(component(typeRef("String Initialization", true), {})),
                "selection": state(group({
                    "selection": prop(component(typeRef("Source Selection"), {})),
                    "string": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("string"))))),
                })),
            })
        ),
        "Numerical Initialization Or Selection": globalType(
            {},
            stateGroup({
                "initialization": state(component(typeRef("Numerical Initialization", true), {})),
                "selection": state(group({
                    "selection": prop(component(typeRef("Source Selection"), {})),
                    "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
                })),

            })
        ),
        "Boolean Initialization Or Selection": globalType(
            {},
            stateGroup({
                "initialization": state(component(typeRef("Boolean Initialization", true), {})),
                "selection": state(group({
                    "selection": prop(component(typeRef("Source Selection"), {})),
                    "boolean": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("boolean")))))
                })),
            })
        ),
        "Boolean Initialization": globalType(
            {},
            stateGroup({
                "and": state(group({
                    "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                })),
                "or": state(group({
                    "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                })),
                "false": state(group({})),
                "not": state(component(typeRef("Boolean Initialization Or Selection"), {})),
                "true": state(group({})),
                // //boolean/string
                "string equals": state(group({
                    "left hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
                })),
                "string not equals": state(group({
                    "left hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
                })),
                // //boolean/number
                "number equals": state(group({
                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                })),
                "number not equals": state(group({
                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                })),
                "greater than": state(group({
                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                })),
                "less than": state(group({
                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                })),
            })
        ),
        "Numerical Initialization": globalType(
            {},
            stateGroup({
                "minus": state(group({
                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                })),
                "plus": state(group({
                    "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                    "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                })),
                "predecrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
                "preincrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
                "postdecrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
                "postincrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
                "numeric literal": state(atom("numeric literal")),
            })
        ),
        "String Initialization": globalType(
            {},
            stateGroup({
                "string literal": state(atom("string literal")),
            })
        ),
        "Initialization": globalType(
            {},
            stateGroup({
                "generic": state(component(typeRef("Generic Initialization"), {})),
                "call": state(group({
                    "function": prop(component(typeRef("Source Selection"), {})),
                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("initialization function")))),
                    "call": prop(component(typeRef("Function Call"), {})),
                })),
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
                "type": state(stateGroup({
                    "array": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("array")))),
                        "type": prop(stateGroup({
                            "literal": state(group({
                                "initialization": prop(array(component(typeRef("Initialization", true), {}))),
                            })),
                            "map": state(group({
                                "source": prop(component(typeRef("Source Selection"), {})),
                                "initialization": prop(component(typeRef("Initialization", true), {})),
                            })),
                        }))
                    })),
                    "atom": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom")))),
                        "type": prop(stateGroup({
                            "boolean": state(group({
                                "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("boolean"))))),
                                "initialization": prop(component(typeRef("Boolean Initialization"), {})),
                            })),
                            "copy": state(group({
                                "source": prop(component(typeRef("Source Selection", true), {})),
                            })),
                            "null": state(group({
                                "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("null"))))),
                            })),
                            "numerical": state(group({
                                "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
                                "initialization": prop(component(typeRef("Numerical Initialization"), {})),
                            })),
                            "string": state(group({
                                "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("string"))))),
                                "initialization": prop(component(typeRef("String Initialization"), {})),
                            })),

                        })),
                    })),
                    "computed": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("computed")))),
                        //FIXME
                    })),
                    "dictionary": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("dictionary")))),
                        "type": prop(stateGroup({
                            "literal": state(group({
                                "initialization": prop(dictionary(component(typeRef("Initialization", true), {}))),
                            })),
                            "map": state(group({
                                "source": prop(component(typeRef("Source Selection"), {})),
                                "initialization": prop(component(typeRef("Initialization", true), {})),
                            })),
                        }))
                    })),
                    "group": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                        "properties": prop(constrainedDictionary(
                            {
                                "definition": dictionaryConstraint(externalTypeSelection("typesystem", "Type", t_sg("group")), true)
                            },
                            component(typeRef("Initialization", true), {}),
                        )),
                    })),
                    "initialization function": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("initialization function")))),
                        "temp has parameters": prop(optional(group({}))),
                        "variables": prop(component(typeRef("Aggregated Variables"), {})),
                        "initialization": prop(component(typeRef("Initialization", true), {}))
                    })),
                    "lookup": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("lookup")))),
                        //FIXME
                    })),
                    "optional": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("optional")))),
                        //"initialization": prop(component(typeRef("Boolean Initialization"), {})),
                    })),
                    "procedure": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("procedure")))),
                        "temp has parameters": prop(optional(group({}))),
                        "variables": prop(component(typeRef("Aggregated Variables"), {})),
                        "block": prop(component(typeRef("Block", true), {}))
                    })),
                    "selection function": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("selection function")))),
                        "temp has parameters": prop(optional(group({}))),
                        "variables": prop(component(typeRef("Aggregated Variables"), {})),
                        "selection": prop(component(typeRef("Source Selection", true), {}))
                    })),
                    "tagged union": state(group({
                        "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
                        "state": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
                        "initialization": prop(component(typeRef("Initialization", true), {})),
                    })),
                })),
            })
        ),


        //Statements
        "Block": globalType(
            {},
            group({
                "variables": prop(component(typeRef("Variables"), {})),
                "statements": prop(component(typeRef("Statements", true), {}))
            })
        ),
        "Assign": globalType(
            {},
            group({
                "target": prop(component(typeRef("Target Selection"), {})),
                "initialization": prop(component(typeRef("Initialization"), {})),
            }),
        ),
        "Statements": globalType(
            {},
            array(stateGroup({
                "block": state(component(typeRef("Block"), {})),
                "call": state(group({
                    "function": prop(component(typeRef("Source Selection"), {})),
                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("procedure")))),
                    "call": prop(component(typeRef("Function Call"), {})),
                })),
                "generic": state(component(typeRef("Generic Statement"), {})),
                "if": state(group({
                    "condition": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                    "then": prop(component(typeRef("Block"), {})),
                    "else": prop(optional(component(typeRef("Block"), {}))),
                })),
                "with": state(group({
                    "source": prop(component(typeRef("Source Selection"), {})),
                    "action": prop(stateGroup({
                        // "call": constrainedstate({
                        //     "procedure address": optionConstraint(valSel("address", s_component()), "procedure", externalTypeSelection("typesystem", "Type", [tu("procedure")]))
                        // }, group({
                        //     "type arguments": prop(component(typeRef("Type Arguments", {
                        //         "type parameters": aResolvedValue(valSel("function")),
                        //         "namespace": aResolvedValue(valSel("namespace")),
                        //     })),
                        //         "arguments": prop(constrainedDictionary(
                        //             { "parameter": dictConstraint(valSel("function"), externalTypeSelection("typesystem", "Parameters")) },
                        //             component(typeRef("Initialization", {
                        //                 "expected type": aResolvedValue(valSel("parameter")),
                        //                 "variable stack": aResolvedValue(valSel("variable stack")),
                        //                 "namespace": aResolvedValue(valSel("namespace")),
                        //             })
                        //             )),
                        //         })),
                        "assign": state(component(typeRef("Assign"), {})),
                        "minus assign": state(group({/*must be number*/
                            "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
                            "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                        })),
                        "plus assign": state(group({/*must be number*/
                            "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
                            "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                        })),


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
                // // "labeled": composite("LabeledStatement", group({
                // //     "label": member(component(typeRef("identifier"), {}),
                // //     "statement": member(component(typeRef("statement"), {}),
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
                // //         "variable": prop(component(typeRef("variableDeclaration"), {}),
                // //         "block": member(component(typeRef("block"), {}),
                // //     }))),
                // // }))),
                "while": state(group({
                    "condition": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                    "block": prop(component(typeRef("Block"), {})),
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
            {},
            group({
                "type": prop(component(typeRef("Type Selection"), {})),
                "initialization": prop(component(typeRef("Initialization", true), {})),
            })
        ),
        "Root": globalType(
            {},
            component(typeRef("Source File"), {})
        )
    }
)

export const $: g_pareto_lang_data_settings.T.GenerateSubmodulesParameters = {
    'path': a([`../../pareto/src/data/submodules`]),
    'data': {
        'library': g_pareto_lang_data.$b.resolve({
            'onError': ($) => {
                pv.logDebugMessage(`XX: ${$.message[0]}`)
            }
        })({
            // 'imports': d({
            //     "typesystem": g_pareto_lang_data.$b.resolve({
            //         'onError': ($) => {
            //             pv.logDebugMessage(`XX: ${$.message[0]}`)
            //         }
            //     })({
            //         'root': {
            //             'type libraries': {
            //                 'annotation': null,
            //                 'dictionary': d({
            //                     "xx": xxx
            //                 })
            //             }
            //         },
            //     })['type libraries'].__unsafeGetEntry("xx"),
            // }),
            'root': {
                'type libraries': {
                    'annotation': null,
                    'dictionary': d({
                        "proto typesystem": xx.split(d_typesystem),
                        "imp": xx.split(imp)
                    }),
                }
            }
        })['type libraries'].__unsafeGetEntry("imp"),
        'atom mappings': d({
            "identifier": ['string', null],
            //"text": ['string', null],
            "numeric literal": ['number', null],
            "string literal": ['string', null],
        })
    }

}
