import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_model from "../../submodules/unresolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type nothing<GAnnotation> = null
    }
    
    export namespace A {
        
        
        export namespace P {
            export type SerializeToFileSystem<GAnnotation> = ($: T.SerializeToFileSystemParameters<GAnnotation>, $i: SYNC.I.nothing<GAnnotation>) => void
        }
    }
}