// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Vultr reserved IP resource. This can be used to create, read, modify, and delete reserved IP addresses on your Vultr account.
 *
 * ## Example Usage
 *
 * Create a new reserved IP:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as vultr from "@pulumi/vultr";
 *
 * const myReservedIp = new vultr.ReservedIP("my_reserved_ip", {
 *     ipType: "v4",
 *     label: "my-reserved-ip",
 *     region: "sea",
 * });
 * ```
 *
 * Attach a reserved IP to a instance:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as vultr from "@pulumi/vultr";
 *
 * const myReservedIp = new vultr.ReservedIP("my_reserved_ip", {
 *     instanceId: "b9cc6fad-70b1-40ee-ab6a-4d622858962f",
 *     ipType: "v4",
 *     label: "my-reserved-ip",
 *     region: "sea",
 * });
 * ```
 *
 * ## Import
 *
 * Reserved IPs can be imported using the reserved IP `ID`, e.g.
 *
 * ```sh
 *  $ pulumi import vultr:index/reservedIP:ReservedIP my_reserved_ip b9cc6fad-70b1-40ee-ab6a-4d622858962f
 * ```
 */
export class ReservedIP extends pulumi.CustomResource {
    /**
     * Get an existing ReservedIP resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReservedIPState, opts?: pulumi.CustomResourceOptions): ReservedIP {
        return new ReservedIP(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vultr:index/reservedIP:ReservedIP';

    /**
     * Returns true if the given object is an instance of ReservedIP.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReservedIP {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReservedIP.__pulumiType;
    }

    /**
     * The VPS ID you want this reserved IP to be attached to.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * The type of reserved IP that you want. Either "v4" or "v6".
     */
    public readonly ipType!: pulumi.Output<string>;
    /**
     * The label you want to give your reserved IP.
     */
    public readonly label!: pulumi.Output<string | undefined>;
    /**
     * The region ID that you want the reserved IP to be created in.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The reserved IP's subnet.
     */
    public /*out*/ readonly subnet!: pulumi.Output<string>;
    /**
     * The reserved IP's subnet size.
     */
    public /*out*/ readonly subnetSize!: pulumi.Output<number>;

    /**
     * Create a ReservedIP resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReservedIPArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReservedIPArgs | ReservedIPState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReservedIPState | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["ipType"] = state ? state.ipType : undefined;
            resourceInputs["label"] = state ? state.label : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["subnet"] = state ? state.subnet : undefined;
            resourceInputs["subnetSize"] = state ? state.subnetSize : undefined;
        } else {
            const args = argsOrState as ReservedIPArgs | undefined;
            if ((!args || args.ipType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipType'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["ipType"] = args ? args.ipType : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["subnetSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ReservedIP.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ReservedIP resources.
 */
export interface ReservedIPState {
    /**
     * The VPS ID you want this reserved IP to be attached to.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The type of reserved IP that you want. Either "v4" or "v6".
     */
    ipType?: pulumi.Input<string>;
    /**
     * The label you want to give your reserved IP.
     */
    label?: pulumi.Input<string>;
    /**
     * The region ID that you want the reserved IP to be created in.
     */
    region?: pulumi.Input<string>;
    /**
     * The reserved IP's subnet.
     */
    subnet?: pulumi.Input<string>;
    /**
     * The reserved IP's subnet size.
     */
    subnetSize?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ReservedIP resource.
 */
export interface ReservedIPArgs {
    /**
     * The VPS ID you want this reserved IP to be attached to.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The type of reserved IP that you want. Either "v4" or "v6".
     */
    ipType: pulumi.Input<string>;
    /**
     * The label you want to give your reserved IP.
     */
    label?: pulumi.Input<string>;
    /**
     * The region ID that you want the reserved IP to be created in.
     */
    region: pulumi.Input<string>;
}
