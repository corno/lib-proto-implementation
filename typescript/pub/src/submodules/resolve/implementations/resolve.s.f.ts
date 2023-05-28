import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'
import * as pd from 'pareto-core-dev'

import * as Resolve from "./Resolve"

import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"
import * as g_out_typesystem from "lib-proto-typesystem/dist/submodules/resolved"

import { A } from "../api.generated"
import { resolve } from './resolveImp'

export const $$: A.resolve = ($d) => {
    
    pd.implementMe("RESOLVE")
    // const res = resolve($d, $se)
    
    // // function map_Source__File(
    // //     $: g_in.T.Source__File<Annotation>,
    // // ): g_out.T.Source__File {
    // //     return pl.cc($, ($) => {
    // //         return null
    // //     })
    // // }
    
    // return ($) => {
    //     return res.Source__File($)
    // }
}