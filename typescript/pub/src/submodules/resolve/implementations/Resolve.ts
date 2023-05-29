import * as pt from 'pareto-core-types'

import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"
import * as g_out_typesystem from "lib-proto-typesystem/dist/submodules/resolved"

export type Assign<Annotation> = (
    $: g_in.T.Assign<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.Assign

export type Block<Annotation> = (
    $: g_in.T.Block<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
        'type parameters': pt.OptionalValue<g_out_typesystem.T.Type__Parameters>,
    },
) => g_out.T.Block

export type Boolean__Initialization<Annotation> = (
    $: g_in.T.Boolean__Initialization<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.Boolean__Initialization

export type Boolean__Initialization__Or__Selection<Annotation> = (
    $: g_in.T.Boolean__Initialization__Or__Selection<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.Boolean__Initialization__Or__Selection

export type Initialization<Annotation> = (
    $: g_in.T.Initialization<Annotation>,
    $p: {
        'expected type': pt.OptionalValue<g_out_typesystem.T.Type>,
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.Initialization

export type Initialization__Or__Selection<Annotation> = (
    $: g_in.T.Initialization__Or__Selection<Annotation>,
    $p: {
        'expected type': pt.OptionalValue<g_out_typesystem.T.Type>,
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.Initialization__Or__Selection

export type Numerical__Initialization<Annotation> = (
    $: g_in.T.Numerical__Initialization<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.Numerical__Initialization

export type Numerical__Initialization__Or__Selection<Annotation> = (
    $: g_in.T.Numerical__Initialization__Or__Selection<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.Numerical__Initialization__Or__Selection

export type Source__File<Annotation> = (
    $: g_in.T.Source__File<Annotation>,
) => g_out.T.Source__File

export type Source__Selection<Annotation> = (
    $: g_in.T.Source__Selection<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>
        'variable stack': pt.OptionalValue<g_out.T.Variables>
    },
) => g_out.T.Source__Selection

export type Source__Selection__Tail<Annotation> = (
    $: g_in.T.Source__Selection__Tail<Annotation>,
    $p: {
        'current address': pt.OptionalValue<g_out_typesystem.T.Type>,
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.Source__Selection__Tail

export type Statements<Annotation> = (
    $: g_in.T.Statements<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
        'type parameters': pt.OptionalValue<g_out_typesystem.T.Type__Parameters>,
    },
) => g_out.T.Statements

export type String__Initialization<Annotation> = (
    $: g_in.T.String__Initialization<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.String__Initialization

export type String__Initialization__Or__Selection<Annotation> = (
    $: g_in.T.String__Initialization__Or__Selection<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.String__Initialization__Or__Selection

export type Target__Selection<Annotation> = (
    $: g_in.T.Target__Selection<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>
        'variable stack': pt.OptionalValue<g_out.T.Variables>
    },
) => g_out.T.Target__Selection

export type Target__Selection__Tail<Annotation> = (
    $: g_in.T.Target__Selection__Tail<Annotation>,
    $p: {
        'current address': pt.OptionalValue<g_out_typesystem.T.Type>,
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'variable stack': pt.OptionalValue<g_out.T.Variables>,
    },
) => g_out.T.Target__Selection__Tail


export type Type__Arguments<Annotation> = (
    $: g_in.T.Type__Arguments<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
        'type parameters': pt.OptionalValue<g_out_typesystem.T.Type__Parameters>,
    },
) => g_out.T.Type__Arguments

export type Type__Selection<Annotation> = (
    $: g_in.T.Type__Selection<Annotation>,
    $p: {
        'namespace': pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
    },
) => g_out.T.Type__Selection

export type Variables<Annotation> = (
    $: g_in.T.Variables<Annotation>,
    $v_namespace: pt.OptionalValue<g_out_typesystem.T.Local__Namespace>,
    $v_variable__stack: pt.OptionalValue<g_out.T.Variables>,
) => g_out.T.Variables

export type Resolve<Annotation> = {
    Assign: Assign<Annotation>
    Block: Block<Annotation>
    Boolean__Initialization: Boolean__Initialization<Annotation>
    Boolean__Initialization__Or__Selection: Boolean__Initialization__Or__Selection<Annotation>
    Initialization: Initialization<Annotation>
    Initialization__Or__Selection: Initialization__Or__Selection<Annotation>
    Numerical__Initialization: Numerical__Initialization<Annotation>
    Numerical__Initialization__Or__Selection: Numerical__Initialization__Or__Selection<Annotation>
    Source__Selection: Source__Selection<Annotation>
    Source__Selection__Tail: Source__Selection__Tail<Annotation>
    Source__File: Source__File<Annotation>
    Statements: Statements<Annotation>
    String__Initialization: String__Initialization<Annotation>
    String__Initialization__Or__Selection: String__Initialization__Or__Selection<Annotation>
    Target__Selection: Target__Selection<Annotation>
    Target__Selection__Tail: Target__Selection__Tail<Annotation>
    Type__Arguments: Type__Arguments<Annotation>
    Type__Selection: Type__Selection<Annotation>
    Variables: Variables<Annotation>
}
