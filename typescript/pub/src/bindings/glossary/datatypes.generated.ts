import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_model from "../../submodules/unresolved"

export namespace N {}

export namespace T {
    
    export namespace SerializeToFileSystemParameters {
        
        export type data<GAnnotation> = g_model.T.Root<GAnnotation>
        
        export type path<GAnnotation> = g_common.T.Path
    }
    
    export type SerializeToFileSystemParameters<GAnnotation> = {
        readonly 'data': g_model.T.Root<GAnnotation>
        readonly 'path': g_common.T.Path
    }
}