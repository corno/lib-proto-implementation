import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import { A } from "../api.generated"

import * as g_in from "../../unresolved"
import * as g_fp from "lib-fountain-pen"

export const $$: A.serialize = ($d) => {
    return ($, $i) => {

        type Address__Selection = <Annotation> (
            $: g_in.T.Address__Selection<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Address__Selection__Tail = <Annotation> (
            $: g_in.T.Address__Selection__Tail<Annotation>,
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
            $i: g_fp.SYNC.I.Line,
        ) => void

        type Initialization__Or__Selection = <Annotation> (
            $: g_in.T.Initialization__Or__Selection<Annotation>,
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

        type String__Initialization = <Annotation> (
            $: g_in.T.String__Initialization<Annotation>,
            $i: g_fp.SYNC.I.Line,
        ) => void

        type String__Initialization__Or__Selection = <Annotation> (
            $: g_in.T.String__Initialization__Or__Selection<Annotation>,
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

        ////////////////////////////////////////////////////

        const Address__Selection: Address__Selection = ($, $i) => {
            $i.snippet($d.createIdentifier($.variable.key))
            Address__Selection__Tail($.tail, $i)
        }

        const Address__Selection__Tail: Address__Selection__Tail = ($, $i) => {
            pl.optional(
                $,
                ($) => {
                    pl.cc($.step, ($) => {
                        switch ($[0]) {
                            case 'call':
                                pl.ss($, ($) => {
                                    Type__Arguments($['type arguments'], $i)
                                    $i.snippet(`(`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            Initialization($.context, $i)
                                            $i.snippet(`,`)
                                        })
                                        $d.enrichedDictionaryForEach(
                                            $.arguments.dictionary,
                                            {
                                                'onEmpty': () => {},
                                                'onNotEmpty': ($c) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`{`)
                                                        $i.indent(($i) => {
                                                            $c(($) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                                                    Initialization($.value.content, $i)
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
            //$i.snippet($d.createIdentifier($.variable.key))

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
                        Address__Selection($.selection, $i)
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


        const Initialization__Or__Selection: Initialization__Or__Selection = ($, $i) => {
            switch ($[0]) {
                case 'initialization':
                    pl.ss($, ($) => {
                        Initialization($, $i)
                    })
                    break
                case 'selection':
                    pl.ss($, ($) => {
                        Address__Selection($.selection, $i)
                    })
                    break
                default: pl.au($[0])
            }
        }

        const Initialization: Initialization = ($, $i) => {
            switch ($[0]) {
                case 'array literal':
                    pl.ss($, ($) => {
                        $i.snippet(`[`)
                        $.__forEach(($) => {
                            Initialization__Or__Selection($.initialization, $i)
                        })
                        $i.snippet(`]`)
                    })
                    break
                case 'boolean':
                    pl.ss($, ($) => {
                        Boolean__Initialization($.x, $i)
                    })
                    break
                case 'null':
                    pl.ss($, ($) => {
                        $i.snippet(`null`)
                    })
                    break
                case 'numerical':
                    pl.ss($, ($) => {
                        Numerical__Initialization($.x, $i)
                    })
                    break
                case 'object literal':
                    pl.ss($, ($) => {
                        $d.enrichedDictionaryForEach(
                            $.properties.dictionary,
                            {
                                'onEmpty': () => {
                                    $i.snippet(`null`)
                                },
                                'onNotEmpty': ($c) => {
                                    $i.snippet(`{`)
                                    $i.indent(($i) => {
                                        $c(($) => {
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                                Initialization__Or__Selection($.value.content, $i)
                                                $i.snippet(`,`)
                                            })
                                        })
                                    })
                                    $i.snippet(`}`)
                                }
                            }
                        )
                        $i.snippet(`{`)
                    })
                    break
                case 'string':
                    pl.ss($, ($) => {
                        $.x
                        String__Initialization($.x, $i)
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
                        Address__Selection($.selection, $i)
                    })
                    break
                default: pl.au($[0])
            }
        }

        const SourceFile: SourceFile = ($, $i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`const $: `)
                Type__Selection($.type, $i)
                $i.snippet(` = `)
                Initialization($.initialization, $i)
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
                        Address__Selection($.selection, $i)
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

        const Type__Selection: Type__Selection = ($, $i) => {
            switch ($[0]) {
                case 'child namespace':
                    pl.ss($, ($) => {
                        $i.snippet($d.createIdentifier($.namespacex.key))
                        Type__Selection($.selection, $i)
                    })
                    break
                case 'current namespaceXXXXX':
                    pl.ss($, ($) => {
                        $i.snippet($d.createIdentifier($.key))
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
                            Type__Selection($.value.content.type, $i)
                            $i.snippet($.isLast ? `` : `, `)
                        })
                        $i.snippet(`>`)
                    }
                }
            )
        }

        return SourceFile
    }
}