import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'
import * as pd from 'pareto-core-dev'

import * as Resolve from "./Resolve"

import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"
import * as g_out_typesystem from "lib-proto-typesystem/dist/submodules/resolved"

function tempoptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => pt.OptionalValue<RT>,
    b: () => pt.OptionalValue<RT>,
): pt.OptionalValue<RT> {
    return tempoptional($, a, b)
}

export function resolve<Annotation>(
    $d: {

    },
    $se: {
        'error': ($: string) => void
    }
): Resolve.Resolve<Annotation> {

    return pd.implementMe(`RESOLVERS`)

    // const Address__Selection: Resolve.Address__Selection<Annotation> = ($, $p) => {
    //     const $p_variable: g_out.T.Address__Selection.variable = pl.cc($['variable'], ($) => pl.cc($, ($) => {
    //         const refkey = $.key
    //         const referent: pt.OptionalValue<g_out.T.Variables.D> = tempoptional/*3*/(
    //             $p['variable stack'],
    //             ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D>>(
    //                 refkey,
    //                 ($) => [true, $],
    //                 () => {
    //                     $se.error("no such entry")
    //                     return [false]
    //                 },
    //             ),
    //             () => [false],
    //         )
    //         return {
    //             'referent': referent,
    //             'key': $.key,
    //         }
    //     }))
    //     const $v_variable: pt.OptionalValue<g_out.T.Address__Selection.variable> = [true, $p_variable]
    //     const $p_tail: g_out.T.Address__Selection.tail = pl.cc($['tail'], ($) => Address__Selection__Tail(
    //         $,
    //         {
    //             'namespace': $p.namespace,
    //             'variable stack': $p['variable stack'],
    //         },
    //         tempoptional/*3*/(
    //             $v_variable,
    //             ($) => tempoptional/*1*/(
    //                 $.constraint,
    //                 ($) => pl.cc($['type'], ($) => tempoptional(
    //                     $.result,
    //                     ($) => [true, $],
    //                     () => [false],
    //                 )),
    //                 () => [false],
    //             ),
    //             () => [false],
    //         ),//$v_current__address
    //     ))
    //     const $v_tail: pt.OptionalValue<g_out.T.Address__Selection.tail> = [true, $p_tail]
    //     return {
    //         'tail': $p_tail,
    //         'variable': $p_variable,
    //     }
    // }

    // const Address__Selection__Tail: Resolve.Address__Selection__Tail<Annotation> = ($, $p) => {
    //     const content: g_out.T.Address__Selection__Tail = tempoptional/*4*/(
    //         $,
    //         ($): g_out.T.Address__Selection__Tail => [true, pl.cc($, ($) => {
    //             const $p_step: g_out.T.Address__Selection__Tail.O.step = pl.cc($['step'], ($) => pl.cc($, ($): g_out.T.Address__Selection__Tail.O.step => {
    //                 switch ($[0]) {
    //                     case 'call': return pl.ss($, ($) => { //option with result
    //                         const /*option constraint*/$v_address__function: pt.OptionalValue<g_out_typesystem.T.Type.address__function> = pl.cc($, ($) => {
    //                             const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type.address__function> = tempoptional/*3*/(
    //                                 $v_current__address,
    //                                 ($) => ($[0] === 'address function')
    //                                     ? [true, $[1]]
    //                                     : pl.cc($, ($) => {
    //                                         $se.error("option constraint")
    //                                         return [false]
    //                                     })
    //                                 ,
    //                                 () => [false],
    //                             )
    //                             return optConstraint
    //                         })
    //                         const stateData: g_out.T.Address__Selection__Tail.O.step.call = pl.cc($, ($) => {
    //                             return {
    //                                 'annotation': $.annotation,
    //                                 'constraints': {
    //                                     'address function': $v_address__function,
    //                                 },
    //                                 'content': pl.cc($, ($) => pl.cc($, ($) => {
    //                                     const $p_type__arguments: g_out.T.Address__Selection__Tail.O.step.call.type__arguments = pl.cc($['type arguments'], ($) => Type__Arguments(
    //                                         $,
    //                                         {
    //                                             'namespace': $p.namespace,
    //                                             'variable stack': $p['variable stack'],
    //                                         },
    //                                         tempoptional/*3*/(
    //                                             $v_address__function,
    //                                             ($) => pl.cc($['declaration'], ($) => pl.cc($['type parameters'], ($) => [true, $])),
    //                                             () => [false],
    //                                         ),//$v_type__parameters
    //                                     ))
    //                                     const $v_type__arguments: pt.OptionalValue<g_out.T.Address__Selection__Tail.O.step.call.type__arguments> = [true, $p_type__arguments]
    //                                     return {
    //                                         'type arguments': $p_type__arguments,
    //                                     }
    //                                 })),
    //                             }
    //                         })
    //                         return {
    //                             'content': ['call', stateData],
    //                             'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type> => tempoptional/*3*/(
    //                                 $v_address__function,
    //                                 ($) => pl.cc($['return type'], ($) => [true, $]),
    //                                 () => [false],
    //                             )),
    //                         }
    //                     })
    //                     case 'property': return pl.ss($, ($) => { //option with result
    //                         const /*option constraint*/$v_group: pt.OptionalValue<g_out_typesystem.T.Type.group> = pl.cc($, ($) => {
    //                             const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type.group> = tempoptional/*3*/(
    //                                 $v_current__address,
    //                                 ($) => ($[0] === 'group')
    //                                     ? [true, $[1]]
    //                                     : pl.cc($, ($) => {
    //                                         $se.error("option constraint")
    //                                         return [false]
    //                                     })
    //                                 ,
    //                                 () => [false],
    //                             )
    //                             return optConstraint
    //                         })
    //                         const stateData: g_out.T.Address__Selection__Tail.O.step.property = pl.cc($, ($) => {
    //                             return {
    //                                 'annotation': $.annotation,
    //                                 'constraints': {
    //                                     'group': $v_group,
    //                                 },
    //                                 'content': pl.cc($, ($) => pl.cc($, ($) => {
    //                                     const refkey = $.key
    //                                     const constraint: pt.OptionalValue<g_out_typesystem.T.Type.group.D> = tempoptional/*3*/(
    //                                         $v_group,
    //                                         ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Type.group.D>>(
    //                                             refkey,
    //                                             ($) => [true, $],
    //                                             () => {
    //                                                 $se.error("no such entry")
    //                                                 return [false]
    //                                             },
    //                                         ),
    //                                         () => [false],
    //                                     )
    //                                     return {
    //                                         'annotation': $.annotation,
    //                                         'constraint': constraint,
    //                                         'key': $.key,
    //                                     }
    //                                 })),
    //                             }
    //                         })
    //                         return {
    //                             'content': ['property', stateData],
    //                             'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type> => tempoptional/*1*/(
    //                                 $.constraint,
    //                                 ($) => [true, $],
    //                                 () => [false],
    //                             )),
    //                         }
    //                     })
    //                     default: return pl.au($[0])
    //                 }
    //             }))
    //             const $v_step: pt.OptionalValue<g_out.T.Address__Selection__Tail.O.step> = [true, $p_step]
    //             const $p_tail: g_out.T.Address__Selection__Tail.O.tail = pl.cc($['tail'], ($) => Address__Selection__Tail(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //                 tempoptional/*3*/(
    //                     $v_step,
    //                     ($) => tempoptional(
    //                         $.result,
    //                         ($) => [true, $],
    //                         () => [false],
    //                     ),
    //                     () => [false],
    //                 ),//$v_current__address
    //             ))
    //             const $v_tail: pt.OptionalValue<g_out.T.Address__Selection__Tail.O.tail> = [true, $p_tail]
    //             return {
    //                 'step': $p_step,
    //                 'tail': $p_tail,
    //             }
    //         })],
    //         () => [false],
    //     )
    //     return {
    //         'content': content,
    //         'result': tempoptional(
    //             content,
    //             ($) => pl.cc($['tail'], ($) => tempoptional(
    //                 $.result,
    //                 ($) => [true, $],
    //                 () => [false],
    //             )),
    //             () => tempoptional/*3*/(
    //                 $v_current__address,
    //                 ($) => [true, $],
    //                 () => [false],
    //             ),
    //         ),
    //     }
    // }


    // const Assign: Resolve.Assign<Annotation> = ($, $p) => {
    //     return pl.cc($, ($) => {
    //         const $p_target: g_out.T.Assign.target = pl.cc($['target'], ($) => Address__Selection(
    //             $,
    //             {
    //                 'namespace': $p.namespace,
    //                 'variable stack': $p['variable stack'],
    //             },
    //         ))
    //         const $v_target: pt.OptionalValue<g_out.T.Assign.target> = [true, $p_target]
    //         const $p_right__hand__side: g_out.T.Assign.initialization = pl.cc($.initialization, ($) => Initialization(
    //             $,
    //             {
    //                 'namespace': $p.namespace,
    //                 'variable stack': $p['variable stack'],
    //             },
    //             tempoptional/*3*/(
    //                 $v_target,
    //                 ($) => tempoptional(
    //                     $.result,
    //                     ($) => [true, $],
    //                     () => [false],
    //                 ),
    //                 () => [false],
    //             ),//$v_expected__type
    //         ))
    //         const $v_right__hand__side: pt.OptionalValue<g_out.T.Assign.right__hand__side> = [true, $p_right__hand__side]
    //         return {
    //             'right hand side': $p_right__hand__side,
    //             'target': $p_target,
    //         }
    //     })
    // }


    // const Block: Resolve.Block<Annotation> = ($, $p) => {
    //     return pl.cc($, ($) => {
    //         const $p_variables: g_out.T.Block.variables = pl.cc($['variables'], ($) => Variables(
    //             $,
    //             {
    //                 'namespace': $p.namespace,
    //                 'variable stack': $p['variable stack'],
    //             },
    //         ))
    //         const $v_variables: pt.OptionalValue<g_out.T.Block.variables> = [true, $p_variables]
    //         const $p_statements: g_out.T.Block.statements = pl.cc($['statements'], ($) => Statements(
    //             $,
    //             {
    //                 'namespace': $p.namespace,
    //                 'type parameters': $p['type parameters'],
    //                 'variable stack': $p['variable stack'],
    //             },
    //         ))
    //         const $v_statements: pt.OptionalValue<g_out.T.Block.statements> = [true, $p_statements]
    //         return {
    //             'statements': $p_statements,
    //             'variables': $p_variables,
    //         }
    //     })
    // }

    // const Boolean__Initialization: Resolve.Boolean__Initialization<Annotation> = ($, $p) => {
    //     return pl.cc($, ($): g_out.T.Boolean__Initialization => {
    //         switch ($[0]) {
    //             case 'and': return pl.ss($, ($) => ['and', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Boolean__Initialization.and.left__hand__side = pl.cc($['left hand side'], ($) => Boolean__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.and.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Boolean__Initialization.and.right__hand__side = pl.cc($['right hand side'], ($) => Boolean__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.and.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'false': return pl.ss($, ($) => ['false', pl.cc($, ($) => {
    //                 return null
    //             })])
    //             case 'greater than': return pl.ss($, ($) => ['greater than', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Boolean__Initialization.greater__than.left__hand__side = pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.greater__than.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Boolean__Initialization.greater__than.right__hand__side = pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.greater__than.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'less than': return pl.ss($, ($) => ['less than', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Boolean__Initialization.less__than.left__hand__side = pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.less__than.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Boolean__Initialization.less__than.right__hand__side = pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.less__than.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'not': return pl.ss($, ($) => ['not', Boolean__Initialization__Or__Selection(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //             )])
    //             case 'number equals': return pl.ss($, ($) => ['number equals', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Boolean__Initialization.number__equals.left__hand__side = pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.number__equals.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Boolean__Initialization.number__equals.right__hand__side = pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.number__equals.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'number not equals': return pl.ss($, ($) => ['number not equals', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Boolean__Initialization.number__not__equals.left__hand__side = pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.number__not__equals.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Boolean__Initialization.number__not__equals.right__hand__side = pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.number__not__equals.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'or': return pl.ss($, ($) => ['or', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Boolean__Initialization.or.left__hand__side = pl.cc($['left hand side'], ($) => Boolean__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.or.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Boolean__Initialization.or.right__hand__side = pl.cc($['right hand side'], ($) => Boolean__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.or.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'string equals': return pl.ss($, ($) => ['string equals', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Boolean__Initialization.string__equals.left__hand__side = pl.cc($['left hand side'], ($) => String__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.string__equals.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Boolean__Initialization.string__equals.right__hand__side = pl.cc($['right hand side'], ($) => String__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.string__equals.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'string not equals': return pl.ss($, ($) => ['string not equals', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Boolean__Initialization.string__not__equals.left__hand__side = pl.cc($['left hand side'], ($) => String__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.string__not__equals.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Boolean__Initialization.string__not__equals.right__hand__side = pl.cc($['right hand side'], ($) => String__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Boolean__Initialization.string__not__equals.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'true': return pl.ss($, ($) => ['true', pl.cc($, ($) => {
    //                 return null
    //             })])
    //             default: return pl.au($[0])
    //         }
    //     })
    // }


    // const Boolean__Initialization__Or__Selection: Resolve.Boolean__Initialization__Or__Selection<Annotation> = ($, $p) => {
    //     return pl.cc($, ($): g_out.T.Boolean__Initialization__Or__Selection => {
    //         switch ($[0]) {
    //             case 'initialization': return pl.ss($, ($) => ['initialization', Boolean__Initialization(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //             )])
    //             case 'selection': return pl.ss($, ($) => ['selection', pl.cc($, ($): g_out.T.Boolean__Initialization__Or__Selection.selection => {
    //                 return pv.
    //                 // const $v_selection: g_out.T.Boolean__Initialization__Or__Selection.selection.selection = pl.cc($['selection'], ($) => Address__Selection(
    //                 //     $,
    //                 //     {
    //                 //         'namespace': $p.namespace,
    //                 //         'variable stack': $p['variable stack'],
    //                 //     },
    //                 // ))

    //                 // const optConstraint = pl.cc($v_selection, ($) => (select.Address__Selection__Tail($.tail).[0] === 'boolean')
    //                 // ? [true, $[1]]
    //                 // : pl.cc($, ($) => {
    //                 //     $se.error("option constraint")
    //                 //     return [false]
    //                 // }))
    //                 // return {
    //                 //     'selection': $v_selection,
    //                 //     'boolean': xxxx
    //                 // }
    //             })])
    //             default: return pl.au($[0])
    //         }
    //     })
    // }

    // // const Initialization: Resolve.Initialization<Annotation> = ($, $p) => {
    // //     return pl.cc($, ($): g_out.T.Initialization => {
    // //         switch ($[0]) {
    // //             case 'array literal': return pl.ss($, ($) => {
    // //                 const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type.array> = pl.cc($, ($) => {
    // //                     const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type.array> = tempoptional/*3*/(
    // //                         $v_expected__type,
    // //                         ($) => ($[0] === 'array')
    // //                             ? [true, $[1]]
    // //                             : pl.cc($, ($) => {
    // //                                 $se.error("option constraint")
    // //                                 return [false]
    // //                             })
    // //                         ,
    // //                         () => [false],
    // //                     )
    // //                     return optConstraint
    // //                 })
    // //                 return ['array literal', pl.cc($, ($) => {
    // //                     return {
    // //                         'annotation': $.annotation,
    // //                         'constraints': {
    // //                             'out': $v_out,
    // //                         },
    // //                         'content': pl.cc($, ($) => $.map(($) => Initialization(
    // //                             $,
    // //                             {
    // //                                 'namespace': $p.namespace,
    // //                                 'variable stack': $p['variable stack'],
    // //                             },
    // //                             tempoptional/*3*/(
    // //                                 $v_out,
    // //                                 ($) => [true, $],
    // //                                 () => [false],
    // //                             ),//$v_expected__type
    // //                         ))),
    // //                     }
    // //                 })]
    // //             })
    // //             case 'boolean': return pl.ss($, ($) => {
    // //                 const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type._lboolean> = pl.cc($, ($) => {
    // //                     const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lboolean> = tempoptional/*3*/(
    // //                         $v_expected__type,
    // //                         ($) => ($[0] === 'boolean')
    // //                             ? [true, $[1]]
    // //                             : pl.cc($, ($) => {
    // //                                 $se.error("option constraint")
    // //                                 return [false]
    // //                             })
    // //                         ,
    // //                         () => [false],
    // //                     )
    // //                     return optConstraint
    // //                 })
    // //                 return ['boolean', pl.cc($, ($) => {
    // //                     return {
    // //                         'annotation': $.annotation,
    // //                         'constraints': {
    // //                             'out': $v_out,
    // //                         },
    // //                         'content': pl.cc($, ($) => Boolean__Initialization(
    // //                             $,
    // //                             {
    // //                                 'namespace': $p.namespace,
    // //                                 'variable stack': $p['variable stack'],
    // //                             },
    // //                         )),
    // //                     }
    // //                 })]
    // //             })
    // //             case 'null': return pl.ss($, ($) => {
    // //                 const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type._lnull> = pl.cc($, ($) => {
    // //                     const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnull> = tempoptional/*3*/(
    // //                         $v_expected__type,
    // //                         ($) => ($[0] === 'null')
    // //                             ? [true, $[1]]
    // //                             : pl.cc($, ($) => {
    // //                                 $se.error("option constraint")
    // //                                 return [false]
    // //                             })
    // //                         ,
    // //                         () => [false],
    // //                     )
    // //                     return optConstraint
    // //                 })
    // //                 return ['null', pl.cc($, ($) => {
    // //                     return {
    // //                         'annotation': $.annotation,
    // //                         'constraints': {
    // //                             'out': $v_out,
    // //                         },
    // //                         'content': pl.cc($, ($) => pl.cc($, ($) => {
    // //                             return null
    // //                         })),
    // //                     }
    // //                 })]
    // //             })
    // //             case 'numerical': return pl.ss($, ($) => {
    // //                 const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type._lnumber> = pl.cc($, ($) => {
    // //                     const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnumber> = tempoptional/*3*/(
    // //                         $v_expected__type,
    // //                         ($) => ($[0] === 'number')
    // //                             ? [true, $[1]]
    // //                             : pl.cc($, ($) => {
    // //                                 $se.error("option constraint")
    // //                                 return [false]
    // //                             })
    // //                         ,
    // //                         () => [false],
    // //                     )
    // //                     return optConstraint
    // //                 })
    // //                 return ['numerical', pl.cc($, ($) => {
    // //                     return {
    // //                         'annotation': $.annotation,
    // //                         'constraints': {
    // //                             'out': $v_out,
    // //                         },
    // //                         'content': pl.cc($, ($) => Numerical__Initialization(
    // //                             $,
    // //                             {
    // //                                 'namespace': $p.namespace,
    // //                                 'variable stack': $p['variable stack'],
    // //                             },
    // //                             ),//$v_variable__stack
    // //                         )),
    // //                     }
    // //                 })]
    // //             })
    // //             case 'object literal': return pl.ss($, ($) => {
    // //                 const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type.group> = pl.cc($, ($) => {
    // //                     const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type.group> = tempoptional/*3*/(
    // //                         $v_expected__type,
    // //                         ($) => ($[0] === 'group')
    // //                             ? [true, $[1]]
    // //                             : pl.cc($, ($) => {
    // //                                 $se.error("option constraint")
    // //                                 return [false]
    // //                             })
    // //                         ,
    // //                         () => [false],
    // //                     )
    // //                     return optConstraint
    // //                 })
    // //                 return ['object literal', pl.cc($, ($) => {
    // //                     return {
    // //                         'annotation': $.annotation,
    // //                         'constraints': {
    // //                             'out': $v_out,
    // //                         },
    // //                         'content': pl.cc($, ($) => pl.cc($, ($) => {
    // //                             const $p_properties: g_out.T.Initialization.object__literal.properties = pl.cc($['properties'], ($) => $d.resolveDictionary<g_in.T.Initialization.object__literal.properties.D, g_out.T.Initialization.object__literal.properties.D>($, {
    // //                                 'map': ($, $l) => {
    // //                                     const entrykey = $.key
    // //                                     return pl.cc($.value, ($) => {
    // //                                         const /*dict constraint*/$v_prop: pt.OptionalValue<g_out_typesystem.T.Type.group.D> = tempoptional/*3*/(
    // //                                             $v_out,
    // //                                             ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Type.group.D>>(
    // //                                                 entrykey,
    // //                                                 ($) => [true, $],
    // //                                                 () => {
    // //                                                     $se.error("no such entry")
    // //                                                     return [false]
    // //                                                 },
    // //                                             ),
    // //                                             () => [false],
    // //                                         )
    // //                                         return {
    // //                                             'annotation': $.annotation,
    // //                                             'constraints': {
    // //                                                 'prop': $v_prop,
    // //                                             },
    // //                                             'content': pl.cc($, ($) => Initialization(
    // //                                                 $,
    // //                                                 {
    // //                                                     'namespace': $p.namespace,
    // //                                                     'variable stack': $p['variable stack'],
    // //                                                 },
    // //                                                 tempoptional/*3*/(
    // //                                                     $v_prop,
    // //                                                     ($) => [true, $],
    // //                                                     () => [false],
    // //                                                 ),//$v_expected__type
    // //                                             )),
    // //                                         }
    // //                                     })
    // //                                 }
    // //                             }))
    // //                             const $v_properties: pt.OptionalValue<g_out.T.Initialization.object__literal.properties> = [true, $p_properties]
    // //                             return {
    // //                                 'properties': $p_properties,
    // //                             }
    // //                         })),
    // //                     }
    // //                 })]
    // //             })
    // //             case 'string': return pl.ss($, ($) => {
    // //                 const /*option constraint*/$v_out: pt.OptionalValue<g_out_typesystem.T.Type._lstring> = pl.cc($, ($) => {
    // //                     const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lstring> = tempoptional/*3*/(
    // //                         $v_expected__type,
    // //                         ($) => ($[0] === 'string')
    // //                             ? [true, $[1]]
    // //                             : pl.cc($, ($) => {
    // //                                 $se.error("option constraint")
    // //                                 return [false]
    // //                             })
    // //                         ,
    // //                         () => [false],
    // //                     )
    // //                     return optConstraint
    // //                 })
    // //                 return ['string', pl.cc($, ($) => {
    // //                     return {
    // //                         'annotation': $.annotation,
    // //                         'constraints': {
    // //                             'out': $v_out,
    // //                         },
    // //                         'content': pl.cc($, ($) => String__Initialization(
    // //                             $,
    // //                             {
    // //                                 'namespace': $p.namespace,
    // //                                 'variable stack': $p['variable stack'],
    // //                             },
    // //                         )),
    // //                     }
    // //                 })]
    // //             })
    // //             default: return pl.au($[0])
    // //         }
    // //     })
    // // }

    // const Initialization__Or__Selection: Resolve.Initialization__Or__Selection<Annotation> = ($, $p) => {
    // }



    // const Numerical__Initialization: Resolve.Numerical__Initialization<Annotation> = ($, $p) => {
    //     return pl.cc($, ($): g_out.T.Numerical__Initialization => {
    //         switch ($[0]) {
    //             case 'minus': return pl.ss($, ($) => ['minus', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Numerical__Initialization.minus.left__hand__side = pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Numerical__Initialization.minus.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Numerical__Initialization.minus.right__hand__side = pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Numerical__Initialization.minus.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'numeric literal': return pl.ss($, ($) => ['numeric literal', $])
    //             case 'plus': return pl.ss($, ($) => ['plus', pl.cc($, ($) => {
    //                 const $p_left__hand__side: g_out.T.Numerical__Initialization.plus.left__hand__side = pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_left__hand__side: pt.OptionalValue<g_out.T.Numerical__Initialization.plus.left__hand__side> = [true, $p_left__hand__side]
    //                 const $p_right__hand__side: g_out.T.Numerical__Initialization.plus.right__hand__side = pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_right__hand__side: pt.OptionalValue<g_out.T.Numerical__Initialization.plus.right__hand__side> = [true, $p_right__hand__side]
    //                 return {
    //                     'left hand side': $p_left__hand__side,
    //                     'right hand side': $p_right__hand__side,
    //                 }
    //             })])
    //             case 'postdecrement': return pl.ss($, ($) => ['postdecrement', Numerical__Initialization__Or__Selection(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //             )])
    //             case 'postincrement': return pl.ss($, ($) => ['postincrement', Numerical__Initialization__Or__Selection(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //             )])
    //             case 'predecrement': return pl.ss($, ($) => ['predecrement', Numerical__Initialization__Or__Selection(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //             )])
    //             case 'preincrement': return pl.ss($, ($) => ['preincrement', Numerical__Initialization__Or__Selection(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //             )])
    //             default: return pl.au($[0])
    //         }
    //     })
    // }


    // const Numerical__Initialization__Or__Selection: Resolve.Numerical__Initialization__Or__Selection<Annotation> = ($, $p) => {
    //     return pl.cc($, ($): g_out.T.Numerical__Initialization__Or__Selection => {
    //         switch ($[0]) {
    //             case 'initialization': return pl.ss($, ($) => ['initialization', Numerical__Initialization(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //             )])
    //             case 'selection': return pl.ss($, ($) => ['selection', pl.cc($, ($) => {
    //                 const $p_selection: g_out.T.Numerical__Initialization__Or__Selection.selection.selection = pl.cc($['selection'], ($) => Address__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_selection: pt.OptionalValue<g_out.T.Numerical__Initialization__Or__Selection.selection.selection> = [true, $p_selection]
    //                 const $p_cast__to__number: g_out.T.Numerical__Initialization__Or__Selection.selection.cast__to__number = pl.cc($['cast to number'], ($) => pl.cc($, ($): g_out.T.Numerical__Initialization__Or__Selection.selection.cast__to__number => {
    //                     switch ($[0]) {
    //                         case 'number': return pl.ss($, ($) => {
    //                             const /*option constraint*/$v__lnumber: pt.OptionalValue<g_out_typesystem.T.Type._lnumber> = pl.cc($, ($) => {
    //                                 const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnumber> = tempoptional/*3*/(
    //                                     $v_selection,
    //                                     ($) => tempoptional(
    //                                         $.result,
    //                                         ($) => ($[0] === 'number')
    //                                             ? [true, $[1]]
    //                                             : pl.cc($, ($) => {
    //                                                 $se.error("option constraint")
    //                                                 return [false]
    //                                             })
    //                                         ,
    //                                         () => [false],
    //                                     ),
    //                                     () => [false],
    //                                 )
    //                                 return optConstraint
    //                             })
    //                             return ['number', pl.cc($, ($) => {
    //                                 return {
    //                                     'annotation': $.annotation,
    //                                     'constraints': {
    //                                         'number': $v__lnumber,
    //                                     },
    //                                     'content': pl.cc($, ($) => pl.cc($, ($) => {
    //                                         return null
    //                                     })),
    //                                 }
    //                             })]
    //                         })
    //                         default: return pl.au($[0])
    //                     }
    //                 }))
    //                 const $v_cast__to__number: pt.OptionalValue<g_out.T.Numerical__Initialization__Or__Selection.selection.cast__to__number> = [true, $p_cast__to__number]
    //                 return {
    //                     'cast to number': $p_cast__to__number,
    //                     'selection': $p_selection,
    //                 }
    //             })])
    //             default: return pl.au($[0])
    //         }
    //     })
    // }


    // const Source__File: Resolve.Source__File<Annotation> = ($, $p) => {
    // }


    // const Statements: Resolve.Statements<Annotation> = ($, $p) => {
    //     return $.map(($) => pl.cc($, ($): g_out.T.Statements.A => {
    //         switch ($[0]) {
    //             case 'block': return pl.ss($, ($) => ['block', Block(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //                 tempoptional/*3*/(
    //                     $v_type__parameters,
    //                     ($) => [true, $],
    //                     () => [false],
    //                 ),//$v_type__parameters
    //             )])
    //             case 'if': return pl.ss($, ($) => ['if', pl.cc($, ($) => {
    //                 const $p_condition: g_out.T.Statements.A._lif.condition = pl.cc($['condition'], ($) => Boolean__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_condition: pt.OptionalValue<g_out.T.Statements.A._lif.condition> = [true, $p_condition]
    //                 const $p_then: g_out.T.Statements.A._lif.then = pl.cc($['then'], ($) => Block(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'type parameters': $p['type parameters'],
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_then: pt.OptionalValue<g_out.T.Statements.A._lif.then> = [true, $p_then]
    //                 const $p__lelse: g_out.T.Statements.A._lif._lelse = pl.cc($['else'], ($) => tempoptional/*4*/(
    //                     $,
    //                     ($): g_out.T.Statements.A._lif._lelse => [true, Block(
    //                         $,
    //                         {
    //                             'namespace': $p.namespace,
    //                             'type parameters': $p['type parameters'],
    //                             'variable stack': $p['variable stack'],
    //                         },
    //                     )],
    //                     () => [false],
    //                 ))
    //                 const $v__lelse: pt.OptionalValue<g_out.T.Statements.A._lif._lelse> = [true, $p__lelse]
    //                 return {
    //                     'condition': $p_condition,
    //                     'else': $p__lelse,
    //                     'then': $p_then,
    //                 }
    //             })])
    //             case 'while': return pl.ss($, ($) => ['while', pl.cc($, ($) => {
    //                 const $p_condition: g_out.T.Statements.A._lwhile.condition = pl.cc($['condition'], ($) => Boolean__Initialization__Or__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_condition: pt.OptionalValue<g_out.T.Statements.A._lwhile.condition> = [true, $p_condition]
    //                 const $p_block: g_out.T.Statements.A._lwhile.block = pl.cc($['block'], ($) => Block(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'type parameters': $p['type parameters'],
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_block: pt.OptionalValue<g_out.T.Statements.A._lwhile.block> = [true, $p_block]
    //                 return {
    //                     'block': $p_block,
    //                     'condition': $p_condition,
    //                 }
    //             })])
    //             case 'with': return pl.ss($, ($) => ['with', pl.cc($, ($) => {
    //                 const $p_address: g_out.T.Statements.A._lwith.address = pl.cc($['address'], ($) => Address__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_address: pt.OptionalValue<g_out.T.Statements.A._lwith.address> = [true, $p_address]
    //                 const $p_action: g_out.T.Statements.A._lwith.action = pl.cc($['action'], ($) => pl.cc($, ($): g_out.T.Statements.A._lwith.action => {
    //                     switch ($[0]) {
    //                         case 'assign': return pl.ss($, ($) => ['assign', Assign(
    //                             $,
    //                             {
    //                                 'namespace': $p.namespace,
    //                                 'variable stack': $p['variable stack'],
    //                             },
    //                         )])
    //                         case 'minus assign': return pl.ss($, ($) => {
    //                             const /*option constraint*/$v_number__address: pt.OptionalValue<g_out_typesystem.T.Type._lnumber> = pl.cc($, ($) => {
    //                                 const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnumber> = tempoptional/*3*/(
    //                                     $v_address,
    //                                     ($) => tempoptional(
    //                                         $.result,
    //                                         ($) => ($[0] === 'number')
    //                                             ? [true, $[1]]
    //                                             : pl.cc($, ($) => {
    //                                                 $se.error("option constraint")
    //                                                 return [false]
    //                                             })
    //                                         ,
    //                                         () => [false],
    //                                     ),
    //                                     () => [false],
    //                                 )
    //                                 return optConstraint
    //                             })
    //                             return ['minus assign', pl.cc($, ($) => {
    //                                 return {
    //                                     'annotation': $.annotation,
    //                                     'constraints': {
    //                                         'number address': $v_number__address,
    //                                     },
    //                                     'content': pl.cc($, ($) => pl.cc($, ($) => {
    //                                         const $p_right__hand__side: g_out.T.Statements.A._lwith.action.minus__assign.right__hand__side = pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                                             $,
    //                                             {
    //                                                 'namespace': $p.namespace,
    //                                                 'variable stack': $p['variable stack'],
    //                                             },
    //                                         ))
    //                                         const $v_right__hand__side: pt.OptionalValue<g_out.T.Statements.A._lwith.action.minus__assign.right__hand__side> = [true, $p_right__hand__side]
    //                                         return {
    //                                             'right hand side': $p_right__hand__side,
    //                                         }
    //                                     })),
    //                                 }
    //                             })]
    //                         })
    //                         case 'plus assign': return pl.ss($, ($) => {
    //                             const /*option constraint*/$v_number__address: pt.OptionalValue<g_out_typesystem.T.Type._lnumber> = pl.cc($, ($) => {
    //                                 const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lnumber> = tempoptional/*3*/(
    //                                     $v_address,
    //                                     ($) => tempoptional(
    //                                         $.result,
    //                                         ($) => ($[0] === 'number')
    //                                             ? [true, $[1]]
    //                                             : pl.cc($, ($) => {
    //                                                 $se.error("option constraint")
    //                                                 return [false]
    //                                             })
    //                                         ,
    //                                         () => [false],
    //                                     ),
    //                                     () => [false],
    //                                 )
    //                                 return optConstraint
    //                             })
    //                             return ['plus assign', pl.cc($, ($) => {
    //                                 return {
    //                                     'annotation': $.annotation,
    //                                     'constraints': {
    //                                         'number address': $v_number__address,
    //                                     },
    //                                     'content': pl.cc($, ($) => pl.cc($, ($) => {
    //                                         const $p_right__hand__side: g_out.T.Statements.A._lwith.action.plus__assign.right__hand__side = pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection(
    //                                             $,
    //                                             {
    //                                                 'namespace': $p.namespace,
    //                                                 'variable stack': $p['variable stack'],
    //                                             },
    //                                         ))
    //                                         const $v_right__hand__side: pt.OptionalValue<g_out.T.Statements.A._lwith.action.plus__assign.right__hand__side> = [true, $p_right__hand__side]
    //                                         return {
    //                                             'right hand side': $p_right__hand__side,
    //                                         }
    //                                     })),
    //                                 }
    //                             })]
    //                         })
    //                         default: return pl.au($[0])
    //                     }
    //                 }))
    //                 const $v_action: pt.OptionalValue<g_out.T.Statements.A._lwith.action> = [true, $p_action]
    //                 return {
    //                     'action': $p_action,
    //                     'address': $p_address,
    //                 }
    //             })])
    //             default: return pl.au($[0])
    //         }
    //     }))
    // }

    // const String__Initialization: Resolve.String__Initialization<Annotation> = ($, $p) => {
    //     return pl.cc($, ($): g_out.T.String__Initialization => {
    //         switch ($[0]) {
    //             case 'string literal': return pl.ss($, ($) => ['string literal', $])
    //             default: return pl.au($[0])
    //         }
    //     })
    // }

    // const String__Initialization__Or__Selection: Resolve.String__Initialization__Or__Selection<Annotation> = ($, $p) => {
    //     return pl.cc($, ($): g_out.T.String__Initialization__Or__Selection => {
    //         switch ($[0]) {
    //             case 'initialization': return pl.ss($, ($) => ['initialization', String__Initialization(
    //                 $,
    //                 {
    //                     'namespace': $p.namespace,
    //                     'variable stack': $p['variable stack'],
    //                 },
    //             )])
    //             case 'selection': return pl.ss($, ($) => ['selection', pl.cc($, ($) => {
    //                 const $p_selection: g_out.T.String__Initialization__Or__Selection.selection.selection = pl.cc($['selection'], ($) => Address__Selection(
    //                     $,
    //                     {
    //                         'namespace': $p.namespace,
    //                         'variable stack': $p['variable stack'],
    //                     },
    //                 ))
    //                 const $v_selection: pt.OptionalValue<g_out.T.String__Initialization__Or__Selection.selection.selection> = [true, $p_selection]
    //                 const $p_cast__to__string: g_out.T.String__Initialization__Or__Selection.selection.cast__to__string = pl.cc($['cast to string'], ($) => pl.cc($, ($): g_out.T.String__Initialization__Or__Selection.selection.cast__to__string => {
    //                     switch ($[0]) {
    //                         case 'string': return pl.ss($, ($) => {
    //                             const /*option constraint*/$v__lstring: pt.OptionalValue<g_out_typesystem.T.Type._lstring> = pl.cc($, ($) => {
    //                                 const optConstraint: pt.OptionalValue<g_out_typesystem.T.Type._lstring> = tempoptional/*3*/(
    //                                     $v_selection,
    //                                     ($) => tempoptional(
    //                                         $.result,
    //                                         ($) => ($[0] === 'string')
    //                                             ? [true, $[1]]
    //                                             : pl.cc($, ($) => {
    //                                                 $se.error("option constraint")
    //                                                 return [false]
    //                                             })
    //                                         ,
    //                                         () => [false],
    //                                     ),
    //                                     () => [false],
    //                                 )
    //                                 return optConstraint
    //                             })
    //                             return ['string', pl.cc($, ($) => {
    //                                 return {
    //                                     'annotation': $.annotation,
    //                                     'constraints': {
    //                                         'string': $v__lstring,
    //                                     },
    //                                     'content': pl.cc($, ($) => pl.cc($, ($) => {
    //                                         return null
    //                                     })),
    //                                 }
    //                             })]
    //                         })
    //                         default: return pl.au($[0])
    //                     }
    //                 }))
    //                 const $v_cast__to__string: pt.OptionalValue<g_out.T.String__Initialization__Or__Selection.selection.cast__to__string> = [true, $p_cast__to__string]
    //                 return {
    //                     'cast to string': $p_cast__to__string,
    //                     'selection': $p_selection,
    //                 }
    //             })])
    //             default: return pl.au($[0])
    //         }
    //     })
    // }

    // const Type__Arguments: Resolve.Type__Arguments<Annotation> = ($, $p) => {
    //     return $d.resolveDictionary<g_in.T.Type__Arguments.D, g_out.T.Type__Arguments.D>($, {
    //         'map': ($, $l) => {
    //             const entrykey = $.key
    //             return pl.cc($.value, ($) => {
    //                 const /*dict constraint*/$v_x: pt.OptionalValue<g_out_typesystem.T.Type__Parameters.D> = tempoptional/*3*/(
    //                     $v_type__parameters,
    //                     ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Type__Parameters.D>>(
    //                         entrykey,
    //                         ($) => [true, $],
    //                         () => {
    //                             $se.error("no such entry")
    //                             return [false]
    //                         },
    //                     ),
    //                     () => [false],
    //                 )
    //                 return {
    //                     'annotation': $.annotation,
    //                     'constraints': {
    //                         'x': $v_x,
    //                     },
    //                     'content': pl.cc($, ($) => pl.cc($, ($) => {
    //                         const $p__ltype: g_out.T.Type__Arguments.D._ltype = pl.cc($['type'], ($) => Type__Selection(
    //                             $,
    //                             {
    //                                 'namespace': $p.namespace,
    //                             },
    //                         ))
    //                         const $v__ltype: pt.OptionalValue<g_out.T.Type__Arguments.D._ltype> = [true, $p__ltype]
    //                         return {
    //                             'type': $p__ltype,
    //                         }
    //                     })),
    //                 }
    //             })
    //         }
    //     })
    // }

    // const Type__Selection: Resolve.Type__Selection<Annotation> = ($, $p) => {
    //     const content = pl.cc($, ($): g_out.T.Type__Selection => {
    //         switch ($[0]) {
    //             case 'child namespace': return pl.ss($, ($) => { //option with result
    //                 const stateData: g_out.T.Type__Selection.child__namespace = pl.cc($, ($) => {
    //                     const $p_namespacex: g_out.T.Type__Selection.child__namespace.namespacex = pl.cc($['namespacex'], ($) => pl.cc($, ($) => {
    //                         const refkey = $.key
    //                         const constraint: pt.OptionalValue<g_out_typesystem.T.Local__Namespace.namespaces.D> = tempoptional/*3*/(
    //                             $v_namespace,
    //                             ($) => pl.cc($['namespaces'], ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Namespace.namespaces.D>>(
    //                                 refkey,
    //                                 ($) => [true, $],
    //                                 () => {
    //                                     $se.error("no such entry")
    //                                     return [false]
    //                                 },
    //                             )),
    //                             () => [false],
    //                         )
    //                         return {
    //                             'annotation': $.annotation,
    //                             'constraint': constraint,
    //                             'key': $.key,
    //                         }
    //                     }))
    //                     const $v_namespacex: pt.OptionalValue<g_out.T.Type__Selection.child__namespace.namespacex> = [true, $p_namespacex]
    //                     const $p_selection: g_out.T.Type__Selection.child__namespace.selection = pl.cc($['selection'], ($) => Type__Selection(
    //                         $,
    //                         {
    //                             'namespace': $v_namespacex,
    //                         },
    //                     ))
    //                     const $v_selection: pt.OptionalValue<g_out.T.Type__Selection.child__namespace.selection> = [true, $p_selection]
    //                     return {
    //                         'namespacex': $p_namespacex,
    //                         'selection': $p_selection,
    //                     }
    //                 })
    //                 return {
    //                     'content': ['child namespace', stateData],
    //                     'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type> => pl.cc($['selection'], ($) => tempoptional(
    //                         $.result,
    //                         ($) => [true, $],
    //                         () => [false],
    //                     ))),
    //                 }
    //             })
    //             case 'current namespace': return pl.ss($, ($) => { //option with result
    //                 const stateData: g_out.T.Type__Selection.current__namespace = pl.cc($, ($) => {
    //                     const refkey = $.key
    //                     const constraint: pt.OptionalValue<g_out_typesystem.T.Namespace.types.D> = tempoptional/*3*/(
    //                         $v_namespace,
    //                         ($) => pl.cc($['types'], ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Namespace.types.D>>(
    //                             refkey,
    //                             ($) => [true, $],
    //                             () => {
    //                                 $se.error("no such entry")
    //                                 return [false]
    //                             },
    //                         )),
    //                         () => [false],
    //                     )
    //                     return {
    //                         'annotation': $.annotation,
    //                         'constraint': constraint,
    //                         'key': $.key,
    //                     }
    //                 })
    //                 return {
    //                     'content': ['current namespace', stateData],
    //                     'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type> => tempoptional/*1*/(
    //                         $.constraint,
    //                         ($) => [true, $],
    //                         () => [false],
    //                     )),
    //                 }
    //             })
    //             default: return pl.au($[0])
    //         }
    //     })
    //     return {
    //         'content': content,
    //         'result': pl.cc(content, ($): pt.OptionalValue<g_out_typesystem.T.Type> => tempoptional(
    //             $.result,
    //             ($) => [true, $],
    //             () => [false],
    //         )),
    //     }
    // }

    // const Variables: Resolve.Variables<Annotation> = ($, $p) => {
    //     return $d.resolveDictionary<g_in.T.Variables.D, g_out.T.Variables.D>($, {
    //         'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
    //             const $p__ltype: g_out.T.Variables.D._ltype = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Variables.D._ltype => {
    //                 switch ($[0]) {
    //                     case 'local': return pl.ss($, ($) => { //option with result
    //                         const stateData: g_out.T.Variables.D._ltype.local = pl.cc($, ($) => {
    //                             const $p__ltype: g_out.T.Variables.D._ltype.local._ltype = pl.cc($['type'], ($) => Type__Selection(
    //                                 $,
    //                                 {
    //                                     'namespace': $p.namespace,
    //                                 },
    //                             ))
    //                             const $v__ltype: pt.OptionalValue<g_out.T.Variables.D._ltype.local._ltype> = [true, $p__ltype]
    //                             const $p_initializer: g_out.T.Variables.D._ltype.local.initializer = pl.cc($['initializer'], ($) => Initialization(
    //                                 $,
    //                                 {
    //                                     'expected type': $v__ltype,
    //                                     'namespace': $p.namespace,
    //                                     'variable stack': $p['variable stack'],
    //                                 },
    //                             ))
    //                             const $v_initializer: pt.OptionalValue<g_out.T.Variables.D._ltype.local.initializer> = [true, $p_initializer]
    //                             return {
    //                                 'initializer': $p_initializer,
    //                                 'type': $p__ltype,
    //                             }
    //                         })
    //                         return {
    //                             'content': ['local', stateData],
    //                             'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type> => pl.cc($['type'], ($) => tempoptional(
    //                                 $.result,
    //                                 ($) => [true, $],
    //                                 () => [false],
    //                             ))),
    //                         }
    //                     })
    //                     case 'variable stack2': return pl.ss($, ($) => { //option with result
    //                         const stateData: g_out.T.Variables.D._ltype.variable__stack2 = pl.cc($, ($) => {
    //                             const $p_variable: g_out.T.Variables.D._ltype.variable__stack2.variable = pl.cc($['variable'], ($) => pl.cc($, ($) => {
    //                                 const refkey = $.key
    //                                 const constraint: pt.OptionalValue<g_out.T.Variables.D> = tempoptional/*3*/(
    //                                     $v_variable__stack,
    //                                     ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D>>(
    //                                         refkey,
    //                                         ($) => [true, $],
    //                                         () => {
    //                                             $se.error("no such entry")
    //                                             return [false]
    //                                         },
    //                                     ),
    //                                     () => [false],
    //                                 )
    //                                 return {
    //                                     'annotation': $.annotation,
    //                                     'constraint': constraint,
    //                                     'key': $.key,
    //                                 }
    //                             }))
    //                             const $v_variable: pt.OptionalValue<g_out.T.Variables.D._ltype.variable__stack2.variable> = [true, $p_variable]
    //                             return {
    //                                 'variable': $p_variable,
    //                             }
    //                         })
    //                         return {
    //                             'content': ['variable stack2', stateData],
    //                             'result': pl.cc(stateData, ($): pt.OptionalValue<g_out_typesystem.T.Type> => pl.cc($['variable'], ($) => tempoptional/*1*/(
    //                                 $.constraint,
    //                                 ($) => pl.cc($['type'], ($) => tempoptional(
    //                                     $.result,
    //                                     ($) => [true, $],
    //                                     () => [false],
    //                                 )),
    //                                 () => [false],
    //                             ))),
    //                         }
    //                     })
    //                     default: return pl.au($[0])
    //                 }
    //             }))
    //             const $v__ltype: pt.OptionalValue<g_out.T.Variables.D._ltype> = [true, $p__ltype]
    //             return {
    //                 'type': $p__ltype,
    //             }
    //         }))
    //     })
    // }

    // return {
    //     Address__Selection__Tail: Address__Selection__Tail,
    //     Address__Selection: Address__Selection,
    //     Assign: Assign,
    //     Block: Block,
    //     Boolean__Initialization__Or__Selection: Boolean__Initialization__Or__Selection,
    //     Boolean__Initialization: Boolean__Initialization,
    //     Initialization: Initialization,
    //     Initialization__Or__Selection: Initialization__Or__Selection,
    //     Numerical__Initialization: Numerical__Initialization,
    //     Numerical__Initialization__Or__Selection: Numerical__Initialization__Or__Selection,
    //     Source__File: Source__File,
    //     Statements: Statements,
    //     String__Initialization: String__Initialization,
    //     String__Initialization__Or__Selection: String__Initialization__Or__Selection,
    //     Type__Arguments: Type__Arguments,
    //     Type__Selection: Type__Selection,
    //     Variables: Variables,
    // }
}
