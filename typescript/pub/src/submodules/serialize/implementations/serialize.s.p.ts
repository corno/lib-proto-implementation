import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import { A } from "../api.generated"

import * as g_in from "../../unresolved"
import * as g_fp from "lib-fountain-pen"
import { Variables } from '../../resolve/implementations/Resolve'

export const $$: A.serialize = ($d) => {
    return ($, $i) => {

        type Block = <Annotation> (
            $: g_in.T.Block<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Boolean__Initialization = <Annotation> (
            $: g_in.T.Boolean__Initialization<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Boolean__Initialization__Or__Selection = <Annotation> (
            $: g_in.T.Boolean__Initialization__Or__Selection<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void
        type Initialization = <Annotation> (
            $: g_in.T.Initialization<Annotation>,
            $p: {
                'wrap group literal': boolean,
            },
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Function__Call = <Annotation> (
            $: g_in.T.Function__Call<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Numerical__Initialization__Or__Selection = <Annotation> (
            $: g_in.T.Numerical__Initialization__Or__Selection<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Numerical__Initialization = <Annotation> (
            $: g_in.T.Numerical__Initialization<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type SourceFile = <Annotation> (
            $: g_in.T.Source__File<Annotation>,
            $i: g_fp.SYNC.I.Block,
        ) => void

        type Source__Selection = <Annotation> (
            $: g_in.T.Source__Selection<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Source__Selection__Tail = <Annotation> (
            $: g_in.T.Source__Selection__Tail<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Statements = <Annotation> (
            $: g_in.T.Statements<Annotation>,
            $i: g_fp.SYNC.I.Block,
        ) => void

        type String__Initialization = <Annotation> (
            $: g_in.T.String__Initialization<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type String__Initialization__Or__Selection = <Annotation> (
            $: g_in.T.String__Initialization__Or__Selection<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Target__Selection = <Annotation> (
            $: g_in.T.Target__Selection<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Target__Selection__Tail = <Annotation> (
            $: g_in.T.Target__Selection__Tail<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Type__Arguments = <Annotation> (
            $: g_in.T.Type__Arguments<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Type__Selection = <Annotation> (
            $: g_in.T.Type__Selection<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Variables = <Annotation> (
            $: g_in.T.Variables<Annotation>,
            $i: g_fp.SYNC.I.Block,
        ) => void

        ////////////////////////////////////////////////////

        const Block: Block = ($, $i) => {
            $i.snippet(`{`)
            $i.indent(($i) => {
                Variables($.variables, $i)
                Statements($.statements, $i)
            })
            $i.snippet(`}`)
        }

        const Boolean__Initialization__Or__Selection: Boolean__Initialization__Or__Selection = ($, $i) => {
            switch ($[0]) {
                case 'initialization':
                    pl.ss($, ($) => {
                        Boolean__Initialization($, $i)
                    })
                    break
                case 'selection':
                    pl.ss($, ($) => {
                        Source__Selection($.selection, $i)
                    })
                    break
                default: pl.au($[0])
            }
        }

        const Boolean__Initialization: Boolean__Initialization = ($, $i) => {
            switch ($[0]) {
                case 'and':
                    pl.ss($, ($) => {
                        $i.snippet(`(`)
                        Boolean__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` && `)
                        Boolean__Initialization__Or__Selection($['right hand side'], $i)
                        $i.snippet(`)`)

                    })
                    break
                case 'false':
                    pl.ss($, ($) => {
                        $i.snippet(`false`)
                    })
                    break
                case 'greater than':
                    pl.ss($, ($) => {
                        Numerical__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` > `)
                        Numerical__Initialization__Or__Selection($['right hand side'], $i)
                    })
                    break
                case 'less than':
                    pl.ss($, ($) => {
                        Numerical__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` < `)
                        Numerical__Initialization__Or__Selection($['right hand side'], $i)
                    })
                    break
                case 'not':
                    pl.ss($, ($) => {
                        $i.snippet(` === `)
                        Boolean__Initialization__Or__Selection($, $i)
                    })
                    break
                case 'number equals':
                    pl.ss($, ($) => {
                        Numerical__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` === `)
                        Numerical__Initialization__Or__Selection($['right hand side'], $i)
                    })
                    break
                case 'number not equals':
                    pl.ss($, ($) => {
                        Numerical__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` !== `)
                        Numerical__Initialization__Or__Selection($['right hand side'], $i)
                    })
                    break
                case 'or':
                    pl.ss($, ($) => {
                        $i.snippet(`(`)
                        Boolean__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` || `)
                        Boolean__Initialization__Or__Selection($['right hand side'], $i)
                        $i.snippet(`)`)
                    })
                    break
                case 'string equals':
                    pl.ss($, ($) => {
                        String__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` === `)
                        String__Initialization__Or__Selection($['right hand side'], $i)
                    })
                    break
                case 'string not equals':
                    pl.ss($, ($) => {
                        String__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` !== `)
                        String__Initialization__Or__Selection($['right hand side'], $i)
                    })
                    break
                case 'true':
                    pl.ss($, ($) => {
                        $i.snippet(`true`)
                    })
                    break
                default: pl.au($[0])
            }
        }


        // const Initialization__Or__Selection: Initialization__Or__Selection = ($, $p, $i) => {
        //     switch ($[0]) {
        //         case 'initialization':
        //             pl.ss($, ($) => {
        //                 Initialization($, $p, $i)
        //             })
        //             break
        //         case 'selection':
        //             pl.ss($, ($) => {
        //                 Source__Selection($.selection, $i)
        //             })
        //             break
        //         default: pl.au($[0])
        //     }
        // }

        const Initialization: Initialization = ($, $p, $i) => {
            switch ($[0]) {

                case 'type':
                    pl.ss($, ($) => {
                        switch ($[0]) {
                            case 'atom':
                                pl.ss($, ($) => {
                                    pl.cc($.type, ($) => {
                                        switch ($[0]) {
                                            case 'boolean':
                                                pl.ss($, ($) => {
                                                    Boolean__Initialization($.initialization, $i)
                                                })
                                                break
                                            case 'copy':
                                                pl.ss($, ($) => {
                                                    Source__Selection($.source, $i)
                                                })
                                                break
                                            case 'string':
                                                pl.ss($, ($) => {
                                                    String__Initialization($.initialization, $i)
                                                })
                                                break
                                            case 'null':
                                                pl.ss($, ($) => {
                                                    $i.snippet(`null`)
                                                })
                                                break
                                            case 'numerical':
                                                pl.ss($, ($) => {
                                                    Numerical__Initialization($.initialization, $i)
                                                })
                                                break
                                            default: pl.au($[0])
                                        }
                                    })
                                })
                                break
                            case 'array':
                                pl.ss($, ($) => {
                                    pl.cc($.type, ($) => {
                                        switch ($[0]) {
                                            case 'literal':
                                                pl.ss($, ($) => {
                                                    $i.snippet(`_pm.wrapRawArray([`)
                                                    $.initialization.__forEach(($) => {
                                                        Initialization($, { 'wrap group literal': false }, $i)
                                                    })
                                                    $i.snippet(`])`)
                                                })
                                                break
                                            case 'map':
                                                pl.ss($, ($) => {
                                                    Source__Selection($.source, $i)

                                                    $i.snippet(`.map(($) => `)
                                                    Initialization($.initialization, { 'wrap group literal': true }, $i)
                                                    $i.snippet(`)`)
                                                })
                                                break
                                            default: pl.au($[0])
                                        }
                                    })
                                })
                                break
                            case 'computed':
                                pl.ss($, ($) => {
                                    $i.snippet(`FIX COMPUTED`)
                                    //Numerical__Initialization($.initialization, $i)
                                })
                                break
                            case 'dictionary':
                                pl.ss($, ($) => {
                                    pl.cc($.type, ($) => {
                                        switch ($[0]) {
                                            case 'literal':
                                                pl.ss($, ($) => {
                                                    $i.snippet(`_pm.wrapRawDictionary({`)
                                                    $i.indent(($i) => {
                                                        $.initialization.dictionary.__mapWithKey(($, key) => {
                                                            $i.nestedLine(($i) => {
                                                                $i.snippet(`${$d.createApostrophedString(key)}:`)
                                                                Initialization($, { 'wrap group literal': false }, $i)
                                                            })
                                                        })
                                                    })
                                                    $i.snippet(`})`)
                                                })
                                                break
                                            case 'map':
                                                pl.ss($, ($) => {
                                                    Source__Selection($.source, $i)
                                                    $i.snippet(`.map(($) => `)
                                                    Initialization($.initialization, { 'wrap group literal': true }, $i)
                                                    $i.snippet(`)`)
                                                })
                                                break
                                            default: pl.au($[0])
                                        }
                                    })
                                })
                                break
                            case 'group':
                                pl.ss($, ($) => {
                                    $d.enrichedDictionaryForEach(
                                        $.properties.dictionary,
                                        {
                                            'onEmpty': () => {
                                                $i.snippet(`null`)
                                            },
                                            'onNotEmpty': ($c) => {

                                                $i.snippet(`${$p['wrap group literal'] ? `(` : ``}{`)
                                                $i.indent(($i) => {
                                                    $c(($) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                                            Initialization($.value.content, { 'wrap group literal': false }, $i)
                                                            $i.snippet(`,`)
                                                        })
                                                    })
                                                })
                                                $i.snippet(`}${$p['wrap group literal'] ? `)` : ``}`)
                                            }
                                        }
                                    )
                                })
                                break
                            case 'initialization function':
                                pl.ss($, ($) => {
                                    $i.snippet(`($${$['temp has parameters'][0] ? `, $p` : ``}) => `)
                                    Initialization($.initialization, { 'wrap group literal': true }, $i)
                                })
                                break
                                case 'lookup':
                                    pl.ss($, ($) => {
                                        $i.snippet(`FIX LOOKUP`)
                                        //Numerical__Initialization($.initialization, $i)
                                    })
                                    break
                            case 'optional':
                                pl.ss($, ($) => {
                                    $i.snippet(`FIX OPTIONAL`)
                                    //Numerical__Initialization($.initialization, $i)
                                })
                                break
                            case 'procedure':
                                pl.ss($, ($) => {
                                    $i.snippet(`($${$['temp has parameters'][0] ? `, $p` : ``}) => `)
                                    Block($.block, $i)
                                })
                                break
                            case 'selection function':
                                pl.ss($, ($) => {
                                    $i.snippet(`($${$['temp has parameters'][0] ? `, $p` : ``}) => `)
                                    Initialization($.initialization, { 'wrap group literal': true }, $i)
                                })
                                break
                            case 'tagged union':
                                pl.ss($, ($) => {
                                    $i.snippet(`[${$d.createApostrophedString($.state.key)}, `)
                                    Initialization($.initialization, $p, $i)
                                    $i.snippet(`]`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    break
                case 'generic':
                    pl.ss($, ($) => {
                        switch ($[0]) {
                            case 'change context':
                                pl.ss($, ($) => {
                                    $i.snippet(`_pl.cc(`)
                                    Source__Selection($.source, $i)
                                    $i.snippet(`, ($) => `)
                                    Initialization($.initialization, { 'wrap group literal': true }, $i)
                                    $i.snippet(`)`)
                                })
                                break
                            case 'implement me':
                                pl.ss($, ($) => {
                                    $i.snippet(`_pd.implementMe(${$d.createQuotedString($)})`)
                                })
                                break
                            case 'panic':
                                pl.ss($, ($) => {
                                    $i.snippet(`_pl.panic(${$d.createQuotedString($)})`)
                                })
                                break
                            case 'switch':
                                pl.ss($, ($) => {
                                    $i.snippet(`_pl.cc(`)
                                    Source__Selection($.source, $i)
                                    $i.snippet(`, ($): _.`)
                                    Type__Selection($['temp type'], $i)
                                    $i.snippet(` => {`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`switch ($[0]) {`)
                                            $i.indent(($i) => {
                                                $.cases.dictionary.__forEach(() => false, ($, key) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`case ${$d.createApostrophedString(key)}: return _pl.ss($, ($) => `)
                                                        Initialization($, { 'wrap group literal': true }, $i)
                                                        $i.snippet(`)`)
                                                    })
                                                })
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`default: return `)
                                                    pl.optional(
                                                        $.default,
                                                        ($) => {
                                                            Initialization($, { 'wrap group literal': false }, $i)
                                                        },
                                                        () => {
                                                            $i.snippet(`_pl.au($[0])`)
                                                        }
                                                    )
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                    })
                                    $i.snippet(`})`)
                                })
                                break
                            case 'variables':
                                pl.ss($, ($) => {
                                    $i.snippet(`_pl.cc($, ($) => {`)
                                    $i.indent(($i) => {
                                        Variables($.variables, $i)
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`return `)
                                            Initialization($.initialization, { 'wrap group literal': false }, $i)
                                        })
                                    })
                                    $i.snippet(`})`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    break
                case 'call':
                    pl.ss($, ($) => {
                        Source__Selection($.function, $i)
                        Function__Call($.call, $i)
                    })
                    break

                default: pl.au($[0])
            }
        }
        const Numerical__Initialization: Numerical__Initialization = ($, $i) => {
            switch ($[0]) {
                case 'minus':
                    pl.ss($, ($) => {
                        $i.snippet(`(`)
                        Numerical__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` - `)
                        Numerical__Initialization__Or__Selection($['right hand side'], $i)
                        $i.snippet(`)`)
                    })
                    break
                case 'numeric literal':
                    pl.ss($, ($) => {
                        $i.snippet(`${$d.number2string($)}`)
                    })
                    break
                case 'plus':
                    pl.ss($, ($) => {
                        $i.snippet(`(`)
                        Numerical__Initialization__Or__Selection($['left hand side'], $i)
                        $i.snippet(` + `)
                        Numerical__Initialization__Or__Selection($['right hand side'], $i)
                        $i.snippet(`)`)

                    })
                    break
                case 'postdecrement':
                    pl.ss($, ($) => {
                        Numerical__Initialization__Or__Selection($, $i)
                        $i.snippet(`--`)
                    })
                    break
                case 'postincrement':
                    pl.ss($, ($) => {
                        Numerical__Initialization__Or__Selection($, $i)
                        $i.snippet(`++`)
                    })
                    break
                case 'predecrement':
                    pl.ss($, ($) => {
                        $i.snippet(`--`)
                        Numerical__Initialization__Or__Selection($, $i)
                    })
                    break
                case 'preincrement':
                    pl.ss($, ($) => {
                        $i.snippet(`++`)
                        Numerical__Initialization__Or__Selection($, $i)
                    })
                    break
                default: pl.au($[0])
            }
        }

        const Numerical__Initialization__Or__Selection: Numerical__Initialization__Or__Selection = ($, $i) => {
            switch ($[0]) {
                case 'initialization':
                    pl.ss($, ($) => {
                        Numerical__Initialization($, $i)
                    })
                    break
                case 'selection':
                    pl.ss($, ($) => {
                        Source__Selection($.selection, $i)
                    })
                    break
                default: pl.au($[0])
            }
        }

        const SourceFile: SourceFile = ($, $i) => {
            $i.line(`import * as _pt from 'pareto-core-types'`)
            $i.line(`import * as _pl from 'pareto-core-lib'`)
            $i.line(`import * as _pm from 'pareto-core-map'`)
            $i.line(`import * as _pd from 'pareto-core-dev'`)
            $i.line(`import * as _ from './typesystem'`)
            $i.line(``)
            $i.nestedLine(($i) => {
                $i.snippet(`export const $: `)
                $i.snippet(`_.`)
                Type__Selection($.type, $i)
                $i.snippet(` = `)
                Initialization($.initialization, { 'wrap group literal': false }, $i)
            })
        }

        const Source__Selection: Source__Selection = ($, $i) => {
            pl.cc($.start, ($) => {
                switch ($[0]) {
                    case 'variable':
                        pl.ss($, ($) => {
                            $i.snippet($d.createIdentifier($.key))
                        })
                        break
                    case 'context':
                        pl.ss($, ($) => {
                            $i.snippet(`$`)
                        })
                        break
                    default: pl.au($[0])
                }

            })
            Source__Selection__Tail($.tail, $i)
        }

        const Function__Call: Function__Call = ($, $i) => {
            Type__Arguments($['type arguments'], $i)
            $i.snippet(`(`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    Source__Selection($.context, $i)
                    $i.snippet(`,`)
                })
                $d.enrichedDictionaryForEach(
                    $.arguments.dictionary,
                    {
                        'onEmpty': () => { },
                        'onNotEmpty': ($c) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`{`)
                                $i.indent(($i) => {
                                    $c(($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                            pl.cc($.value.content, ($) => {
                                                switch ($[0]) {
                                                    case 'initialization':
                                                        pl.ss($, ($) => {
                                                            Initialization($, { 'wrap group literal': false }, $i)
                                                        })
                                                        break
                                                    case 'selection':
                                                        pl.ss($, ($) => {
                                                            Source__Selection($.selection, $i)
                                                        })
                                                        break
                                                    default: pl.au($[0])
                                                }
                                            })
                                            $i.snippet(`,`)
                                        })

                                    })
                                })
                                $i.snippet(`}`)
                            })
                        }
                    }
                )
            })
            $i.snippet(`)`)
        }

        const Source__Selection__Tail: Source__Selection__Tail = ($, $i) => {
            pl.optional(
                $,
                ($) => {
                    pl.cc($.step, ($) => {
                        switch ($[0]) {
                            case 'call':
                                pl.ss($, ($) => {
                                    Function__Call($.call, $i)
                                })
                                break
                            case 'property':
                                pl.ss($, ($) => {
                                    $i.snippet(`[${$d.createApostrophedString($.property.key)}]`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                },
                () => {

                }
            )
        }

        const Statements: Statements = ($, $i) => {
            $.__forEach(($) => {
                $i.nestedLine(($i) => {

                    switch ($[0]) {
                        case 'block':
                            pl.ss($, ($) => {
                                Block($, $i)
                            })
                            break
                        case 'call':
                            pl.ss($, ($) => {

                                Source__Selection($.function, $i)
                                Function__Call($.call, $i)
                            })
                            break
                        case 'change context':
                            pl.ss($, ($) => {
                                $i.snippet(`_pl.cc(`)
                                Source__Selection($.source, $i)
                                $i.snippet(`, ($) => `)
                                Block($.block, $i)
                                $i.snippet(`)`)
                            })
                            break
                        case 'if':
                            pl.ss($, ($) => {
                                $i.snippet(`if (`)
                                Boolean__Initialization__Or__Selection($.condition, $i)
                                $i.snippet(`) `)
                                Block($.then, $i)
                                pl.optional(
                                    $.else,
                                    ($) => {
                                        $i.snippet(` else `)
                                        Block($, $i)
                                    },
                                    () => { }
                                )
                            })
                            break
                        case 'switch':
                            pl.ss($, ($) => {
                                $i.snippet(`_pl.cc(`)
                                Source__Selection($.source, $i)
                                $i.snippet(`, ($) => {`)
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`switch ($[0]) {`)
                                        $i.indent(($i) => {
                                            $.cases.dictionary.__forEach(() => false, ($, key) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`case ${$d.createApostrophedString(key)}: `)
                                                    $i.indent(($i) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`_pl.ss($, ($) => {`)
                                                            Block($, $i)
                                                            $i.snippet(`}`)
                                                        })
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`break`)
                                                        })
                                                    })
                                                })
                                            })
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`default: `)
                                                pl.optional(
                                                    $.default,
                                                    ($) => {
                                                        Block($, $i)
                                                    },
                                                    () => {
                                                        $i.snippet(`_pl.au($[0])`)
                                                    }
                                                )
                                            })
                                        })
                                        $i.snippet(`}`)
                                    })
                                })
                                $i.snippet(`})`)
                            })
                            break
                        case 'with':
                            pl.ss($, ($) => {
                                $i.snippet(`_pl.cc(`)
                                Source__Selection($.source, $i)
                                $i.snippet(`, ($) => `)
                                //Block($.)
                                $i.snippet(`)`)
                            })
                            break
                        case 'while':
                            pl.ss($, ($) => {
                                $i.snippet(`while (`)
                                Boolean__Initialization__Or__Selection($.condition, $i)
                                $i.snippet(`) `)
                                Block($.block, $i)
                            })
                            break
                        default: pl.au($[0])
                    }
                })

            })
        }

        const String__Initialization__Or__Selection: String__Initialization__Or__Selection = ($, $i) => {
            switch ($[0]) {
                case 'initialization':
                    pl.ss($, ($) => {
                        String__Initialization($, $i)
                    })
                    break
                case 'selection':
                    pl.ss($, ($) => {
                        Source__Selection($.selection, $i)
                    })
                    break
                default: pl.au($[0])
            }
        }

        const String__Initialization: String__Initialization = ($, $i) => {
            switch ($[0]) {
                case 'string literal':
                    pl.ss($, ($) => {
                        $i.snippet($d.createQuotedString($))
                    })
                    break

                default: pl.au($[0])
            }
        }

        const Target__Selection: Target__Selection = ($, $i) => {
            $i.snippet($d.createIdentifier($.variable.key))
            Target__Selection__Tail($.tail, $i)
        }

        const Target__Selection__Tail: Target__Selection__Tail = ($, $i) => {
            pl.optional(
                $,
                ($) => {
                    pl.cc($.step, ($) => {
                        switch ($[0]) {
                            case 'property':
                                pl.ss($, ($) => {
                                    $i.snippet(`[${$d.createApostrophedString($.property.key)}]`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                },
                () => {

                }
            )
        }

        const Type__Selection: Type__Selection = ($, $i) => {
            switch ($[0]) {
                case 'child namespace':
                    pl.ss($, ($) => {
                        $i.snippet(`${$d.createIdentifier($.namespacex.key)}.`)
                        Type__Selection($.selection, $i)
                    })
                    break
                case 'current namespaceXXXXX':
                    pl.ss($, ($) => {
                        $i.snippet(`${$d.createIdentifier($.key)}`)
                    })
                    break
                default: pl.au($[0])
            }
        }

        const Type__Arguments: Type__Arguments = ($, $i) => {
            $d.enrichedDictionaryForEach(
                $.dictionary,
                {
                    'onEmpty': () => { },
                    'onNotEmpty': ($c) => {
                        $i.snippet(`<`)
                        $c(($) => {
                            $i.snippet(`_.`)
                            Type__Selection($.value.content.type, $i)
                            $i.snippet($.isLast ? `` : `, `)
                        })
                        $i.snippet(`>`)
                    }
                }
            )
        }

        const Variables: Variables = ($, $i) => {
            $.local.dictionary.__forEach(() => false, ($, key) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`const ${$d.createIdentifier(key)}: `)
                    $i.snippet(`_.`)
                    Type__Selection($.type, $i)
                    $i.snippet(` = `)
                    Initialization($.initialization, { 'wrap group literal': false }, $i)
                })
            })
        }

        return SourceFile($, $i)
    }
}