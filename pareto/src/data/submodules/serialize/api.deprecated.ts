import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serialize": algorithm(procedure("this", {}, "Serialize"), { "Annotation": "Annotation" }, dependent(null, {
            //"resolveDictionary": sfunction("resolve", {}, "SafeResolveDictionary")
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),
            "createApostrophedString": sfunction("typescript", {}, "CreateApostrophedString"),
            "createQuotedString": sfunction("typescript", {}, "CreateQuotedString"),
            "createIdentifier": sfunction("typescript", {}, "CreateIdentifier"),
            "number2string": sfunction("this", { "Annotation": "GAnnotation" }, "Number2String")
        }, {}))
    }),
}