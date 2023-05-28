import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_model from "../../resolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Number2String<GAnnotation> = ($: g_common.T.Number) => g_common.T.String
        }
        
        
        export namespace P {
            export type Serialize<GAnnotation> = ($: g_model.T.Root, $i: g_fp.SYNC.I.Block) => void
        }
    }
}