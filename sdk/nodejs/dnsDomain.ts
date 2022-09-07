// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Vultr DNS Domain resource. This can be used to create, read, modify, and delete DNS Domains.
 *
 * ## Example Usage
 *
 * Create a new DNS Domain
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as vultr from "@pulumi/vultr";
 *
 * const myDomain = new vultr.DnsDomain("my_domain", {
 *     domain: "domain.com",
 *     ip: "66.42.94.227",
 * });
 * ```
 *
 * ## Import
 *
 * DNS Domains can be imported using the Dns Domain `domain`, e.g.
 *
 * ```sh
 *  $ pulumi import vultr:index/dnsDomain:DnsDomain name domain.com
 * ```
 */
export class DnsDomain extends pulumi.CustomResource {
    /**
     * Get an existing DnsDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsDomainState, opts?: pulumi.CustomResourceOptions): DnsDomain {
        return new DnsDomain(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vultr:index/dnsDomain:DnsDomain';

    /**
     * Returns true if the given object is an instance of DnsDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DnsDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DnsDomain.__pulumiType;
    }

    /**
     * The date the domain was added to your account.
     */
    public /*out*/ readonly dateCreated!: pulumi.Output<string>;
    /**
     * The Domain's DNSSEC status. Valid options are `enabled` or `disabled`. Note `disabled` is default
     */
    public readonly dnsSec!: pulumi.Output<string | undefined>;
    /**
     * Name of domain.
     */
    public readonly domain!: pulumi.Output<string>;
    /**
     * Instance IP you want associated to domain. If omitted this will create a domain with no records.
     */
    public readonly ip!: pulumi.Output<string | undefined>;

    /**
     * Create a DnsDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsDomainArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnsDomainArgs | DnsDomainState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnsDomainState | undefined;
            resourceInputs["dateCreated"] = state ? state.dateCreated : undefined;
            resourceInputs["dnsSec"] = state ? state.dnsSec : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
        } else {
            const args = argsOrState as DnsDomainArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            resourceInputs["dnsSec"] = args ? args.dnsSec : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["dateCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DnsDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DnsDomain resources.
 */
export interface DnsDomainState {
    /**
     * The date the domain was added to your account.
     */
    dateCreated?: pulumi.Input<string>;
    /**
     * The Domain's DNSSEC status. Valid options are `enabled` or `disabled`. Note `disabled` is default
     */
    dnsSec?: pulumi.Input<string>;
    /**
     * Name of domain.
     */
    domain?: pulumi.Input<string>;
    /**
     * Instance IP you want associated to domain. If omitted this will create a domain with no records.
     */
    ip?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DnsDomain resource.
 */
export interface DnsDomainArgs {
    /**
     * The Domain's DNSSEC status. Valid options are `enabled` or `disabled`. Note `disabled` is default
     */
    dnsSec?: pulumi.Input<string>;
    /**
     * Name of domain.
     */
    domain: pulumi.Input<string>;
    /**
     * Instance IP you want associated to domain. If omitted this will create a domain with no records.
     */
    ip?: pulumi.Input<string>;
}
