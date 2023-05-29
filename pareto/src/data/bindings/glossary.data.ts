import * as pd from 'pareto-core-data'

import {
    aExternalInterfaceReference,
    aInterface,
    aInterfaceMethod,
    constructor, data, externalTypeReference,
    glossaryParameter,
    group,
    imp,
    member,
    procedure,
    ref,
    sInterface,
    sInterfaceReference,
    type,
    typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "common": imp(),
        "model": imp(),
    }),

    'glossary parameters': d({
        "Annotation": null
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "SerializeToFileSystemParameters": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
                "data": member(ref(externalTypeReference("model", "Root", { "Annotation": glossaryParameter("Annotation") }))),
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },
    'synchronous': {
        'interfaces': d({
            "nothing": sInterface(['group', { 'members': d({}) }])
        }),
        'algorithms': d({
            "SerializeToFileSystem": procedure(data(typeReference("SerializeToFileSystemParameters")), sInterfaceReference("nothing")),
        }),

    },
}