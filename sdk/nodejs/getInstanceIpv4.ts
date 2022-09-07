// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Get information about a Vultr instance IPv4.
 *
 * ## Example Usage
 *
 * Get the information for an IPv4 address by `instanceId`:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as vultr from "@pulumi/vultr";
 *
 * const myInstanceIpv4 = pulumi.output(vultr.getInstanceIpv4({
 *     filters: [{
 *         name: "ip",
 *         values: ["123.123.123.123"],
 *     }],
 * }));
 * ```
 */
export function getInstanceIpv4(args?: GetInstanceIpv4Args, opts?: pulumi.InvokeOptions): Promise<GetInstanceIpv4Result> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("vultr:index/getInstanceIpv4:getInstanceIpv4", {
        "filters": args.filters,
    }, opts);
}

/**
 * A collection of arguments for invoking getInstanceIpv4.
 */
export interface GetInstanceIpv4Args {
    /**
     * Query parameters for finding IPv4 address.
     */
    filters?: inputs.GetInstanceIpv4Filter[];
}

/**
 * A collection of values returned by getInstanceIpv4.
 */
export interface GetInstanceIpv4Result {
    readonly filters?: outputs.GetInstanceIpv4Filter[];
    /**
     * The gateway IP address.
     */
    readonly gateway: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The ID of the instance the IPv4 address.
     */
    readonly instanceId: string;
    /**
     * The IPv4 address in canonical format.
     */
    readonly ip: string;
    /**
     * The IPv4 netmask in dot-decimal notation.
     */
    readonly netmask: string;
    /**
     * The reverse DNS information for this IP address.
     */
    readonly reverse: string;
}

export function getInstanceIpv4Output(args?: GetInstanceIpv4OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInstanceIpv4Result> {
    return pulumi.output(args).apply(a => getInstanceIpv4(a, opts))
}

/**
 * A collection of arguments for invoking getInstanceIpv4.
 */
export interface GetInstanceIpv4OutputArgs {
    /**
     * Query parameters for finding IPv4 address.
     */
    filters?: pulumi.Input<pulumi.Input<inputs.GetInstanceIpv4FilterArgs>[]>;
}
