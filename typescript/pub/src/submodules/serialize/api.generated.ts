import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"
import * as g_typescript from "res-typescript"

export namespace D {
    
    export type serialize<GAnnotation> = {
        readonly 'createApostrophedString': g_typescript.SYNC.A.F.CreateApostrophedString
        readonly 'createIdentifier': g_typescript.SYNC.A.F.CreateIdentifier
        readonly 'createQuotedString': g_typescript.SYNC.A.F.CreateQuotedString
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
        readonly 'number2string': g_this.SYNC.A.F.Number2String<GAnnotation>
    }
}

export namespace A {
    
    export type serialize = <GAnnotation>($d: D.serialize<GAnnotation>, ) => g_this.SYNC.A.P.Serialize<GAnnotation>
}

export type API = {
    readonly 'serialize': A.serialize
}