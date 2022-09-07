// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Vultr bare metal server resource. This can be used to create, read, modify, and delete bare metal servers on your Vultr account.
 *
 * ## Example Usage
 *
 * Create a new bare metal server:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as vultr from "@pulumi/vultr";
 *
 * const myServer = new vultr.BareMetalServer("my_server", {
 *     osId: 270,
 *     plan: "vbm-4c-32gb",
 *     region: "ewr",
 * });
 * ```
 *
 * Create a new bare metal server with options:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as vultr from "@pulumi/vultr";
 *
 * const myServer = new vultr.BareMetalServer("my_server", {
 *     activationEmail: false,
 *     enableIpv6: true,
 *     hostname: "my-server-hostname",
 *     label: "my-server-label",
 *     osId: 270,
 *     plan: "vbm-4c-32gb",
 *     region: "ewr",
 *     tags: ["my-server-tag"],
 *     userData: "this is my user data",
 * });
 * ```
 *
 * ## Import
 *
 * Bare Metal Servers can be imported using the server `ID`, e.g.
 *
 * ```sh
 *  $ pulumi import vultr:index/bareMetalServer:BareMetalServer my_server b6a859c5-b299-49dd-8888-b1abbc517d08
 * ```
 */
export class BareMetalServer extends pulumi.CustomResource {
    /**
     * Get an existing BareMetalServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BareMetalServerState, opts?: pulumi.CustomResourceOptions): BareMetalServer {
        return new BareMetalServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vultr:index/bareMetalServer:BareMetalServer';

    /**
     * Returns true if the given object is an instance of BareMetalServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BareMetalServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BareMetalServer.__pulumiType;
    }

    /**
     * Whether an activation email will be sent when the server is ready.
     */
    public readonly activationEmail!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Vultr application to be installed on the server. [See List Applications](https://www.vultr.com/api/#operation/list-applications)
     */
    public readonly appId!: pulumi.Output<number>;
    /**
     * The number of CPUs available on the server.
     */
    public /*out*/ readonly cpuCount!: pulumi.Output<number>;
    /**
     * The date the server was added to your Vultr account.
     */
    public /*out*/ readonly dateCreated!: pulumi.Output<string>;
    /**
     * The server's default password.
     */
    public /*out*/ readonly defaultPassword!: pulumi.Output<string>;
    /**
     * The description of the disk(s) on the server.
     */
    public /*out*/ readonly disk!: pulumi.Output<string>;
    /**
     * Whether the server has IPv6 networking activated.
     */
    public readonly enableIpv6!: pulumi.Output<boolean | undefined>;
    /**
     * The server's IPv4 gateway.
     */
    public /*out*/ readonly gatewayV4!: pulumi.Output<string>;
    /**
     * The hostname to assign to the server.
     */
    public readonly hostname!: pulumi.Output<string | undefined>;
    /**
     * The ID of the Vultr marketplace application to be installed on the server. [See List Applications](https://www.vultr.com/api/#operation/list-applications) Note marketplace applications are denoted by type: `marketplace` and you must use the `imageId` not the id.
     */
    public readonly imageId!: pulumi.Output<string>;
    /**
     * A label for the server.
     */
    public readonly label!: pulumi.Output<string | undefined>;
    /**
     * The MAC address associated with the server.
     */
    public /*out*/ readonly macAddress!: pulumi.Output<number>;
    /**
     * The server's main IP address.
     */
    public /*out*/ readonly mainIp!: pulumi.Output<string>;
    /**
     * The server's IPv4 netmask.
     */
    public /*out*/ readonly netmaskV4!: pulumi.Output<string>;
    /**
     * The string description of the operating system installed on the server.
     */
    public /*out*/ readonly os!: pulumi.Output<string>;
    /**
     * The ID of the operating system to be installed on the server. [See List OS](https://www.vultr.com/api/#operation/list-os)
     */
    public readonly osId!: pulumi.Output<number>;
    /**
     * The ID of the plan that you want the server to subscribe to. [See List Plans](https://www.vultr.com/api/#tag/plans)
     */
    public readonly plan!: pulumi.Output<string>;
    /**
     * The amount of memory available on the server in MB.
     */
    public /*out*/ readonly ram!: pulumi.Output<string>;
    /**
     * The ID of the region that the server is to be created in. [See List Regions](https://www.vultr.com/api/#operation/list-regions)
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * IP address of the floating IP to use as the main IP of this server.
     */
    public readonly reservedIpv4!: pulumi.Output<string>;
    /**
     * The ID of the startup script you want added to the server.
     */
    public readonly scriptId!: pulumi.Output<string | undefined>;
    /**
     * The ID of the Vultr snapshot that the server will restore for the initial installation. [See List Snapshots](https://www.vultr.com/api/#operation/list-snapshots)
     */
    public readonly snapshotId!: pulumi.Output<string | undefined>;
    /**
     * A list of SSH key IDs to apply to the server on install (only valid for Linux/FreeBSD).
     */
    public readonly sshKeyIds!: pulumi.Output<string[] | undefined>;
    /**
     * The status of the server's subscription.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * (Optional) The tag to assign to the server.
     *
     * @deprecated tag has been deprecated and should no longer be used. Instead, use tags
     */
    public readonly tag!: pulumi.Output<string | undefined>;
    /**
     * A list of tags to apply to the servier.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Generic data store, which some provisioning tools and cloud operating systems use as a configuration file. It is generally consumed only once after an instance has been launched, but individual needs may vary.
     */
    public readonly userData!: pulumi.Output<string>;
    /**
     * The main IPv6 network address.
     */
    public /*out*/ readonly v6MainIp!: pulumi.Output<string>;
    /**
     * The IPv6 subnet.
     */
    public /*out*/ readonly v6Network!: pulumi.Output<string>;
    /**
     * The IPv6 network size in bits.
     */
    public /*out*/ readonly v6NetworkSize!: pulumi.Output<number>;

    /**
     * Create a BareMetalServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BareMetalServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BareMetalServerArgs | BareMetalServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BareMetalServerState | undefined;
            resourceInputs["activationEmail"] = state ? state.activationEmail : undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["cpuCount"] = state ? state.cpuCount : undefined;
            resourceInputs["dateCreated"] = state ? state.dateCreated : undefined;
            resourceInputs["defaultPassword"] = state ? state.defaultPassword : undefined;
            resourceInputs["disk"] = state ? state.disk : undefined;
            resourceInputs["enableIpv6"] = state ? state.enableIpv6 : undefined;
            resourceInputs["gatewayV4"] = state ? state.gatewayV4 : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["label"] = state ? state.label : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["mainIp"] = state ? state.mainIp : undefined;
            resourceInputs["netmaskV4"] = state ? state.netmaskV4 : undefined;
            resourceInputs["os"] = state ? state.os : undefined;
            resourceInputs["osId"] = state ? state.osId : undefined;
            resourceInputs["plan"] = state ? state.plan : undefined;
            resourceInputs["ram"] = state ? state.ram : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["reservedIpv4"] = state ? state.reservedIpv4 : undefined;
            resourceInputs["scriptId"] = state ? state.scriptId : undefined;
            resourceInputs["snapshotId"] = state ? state.snapshotId : undefined;
            resourceInputs["sshKeyIds"] = state ? state.sshKeyIds : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["userData"] = state ? state.userData : undefined;
            resourceInputs["v6MainIp"] = state ? state.v6MainIp : undefined;
            resourceInputs["v6Network"] = state ? state.v6Network : undefined;
            resourceInputs["v6NetworkSize"] = state ? state.v6NetworkSize : undefined;
        } else {
            const args = argsOrState as BareMetalServerArgs | undefined;
            if ((!args || args.plan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'plan'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["activationEmail"] = args ? args.activationEmail : undefined;
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["enableIpv6"] = args ? args.enableIpv6 : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["osId"] = args ? args.osId : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["reservedIpv4"] = args ? args.reservedIpv4 : undefined;
            resourceInputs["scriptId"] = args ? args.scriptId : undefined;
            resourceInputs["snapshotId"] = args ? args.snapshotId : undefined;
            resourceInputs["sshKeyIds"] = args ? args.sshKeyIds : undefined;
            resourceInputs["tag"] = args ? args.tag : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
            resourceInputs["cpuCount"] = undefined /*out*/;
            resourceInputs["dateCreated"] = undefined /*out*/;
            resourceInputs["defaultPassword"] = undefined /*out*/;
            resourceInputs["disk"] = undefined /*out*/;
            resourceInputs["gatewayV4"] = undefined /*out*/;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["mainIp"] = undefined /*out*/;
            resourceInputs["netmaskV4"] = undefined /*out*/;
            resourceInputs["os"] = undefined /*out*/;
            resourceInputs["ram"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["v6MainIp"] = undefined /*out*/;
            resourceInputs["v6Network"] = undefined /*out*/;
            resourceInputs["v6NetworkSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BareMetalServer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering BareMetalServer resources.
 */
export interface BareMetalServerState {
    /**
     * Whether an activation email will be sent when the server is ready.
     */
    activationEmail?: pulumi.Input<boolean>;
    /**
     * The ID of the Vultr application to be installed on the server. [See List Applications](https://www.vultr.com/api/#operation/list-applications)
     */
    appId?: pulumi.Input<number>;
    /**
     * The number of CPUs available on the server.
     */
    cpuCount?: pulumi.Input<number>;
    /**
     * The date the server was added to your Vultr account.
     */
    dateCreated?: pulumi.Input<string>;
    /**
     * The server's default password.
     */
    defaultPassword?: pulumi.Input<string>;
    /**
     * The description of the disk(s) on the server.
     */
    disk?: pulumi.Input<string>;
    /**
     * Whether the server has IPv6 networking activated.
     */
    enableIpv6?: pulumi.Input<boolean>;
    /**
     * The server's IPv4 gateway.
     */
    gatewayV4?: pulumi.Input<string>;
    /**
     * The hostname to assign to the server.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The ID of the Vultr marketplace application to be installed on the server. [See List Applications](https://www.vultr.com/api/#operation/list-applications) Note marketplace applications are denoted by type: `marketplace` and you must use the `imageId` not the id.
     */
    imageId?: pulumi.Input<string>;
    /**
     * A label for the server.
     */
    label?: pulumi.Input<string>;
    /**
     * The MAC address associated with the server.
     */
    macAddress?: pulumi.Input<number>;
    /**
     * The server's main IP address.
     */
    mainIp?: pulumi.Input<string>;
    /**
     * The server's IPv4 netmask.
     */
    netmaskV4?: pulumi.Input<string>;
    /**
     * The string description of the operating system installed on the server.
     */
    os?: pulumi.Input<string>;
    /**
     * The ID of the operating system to be installed on the server. [See List OS](https://www.vultr.com/api/#operation/list-os)
     */
    osId?: pulumi.Input<number>;
    /**
     * The ID of the plan that you want the server to subscribe to. [See List Plans](https://www.vultr.com/api/#tag/plans)
     */
    plan?: pulumi.Input<string>;
    /**
     * The amount of memory available on the server in MB.
     */
    ram?: pulumi.Input<string>;
    /**
     * The ID of the region that the server is to be created in. [See List Regions](https://www.vultr.com/api/#operation/list-regions)
     */
    region?: pulumi.Input<string>;
    /**
     * IP address of the floating IP to use as the main IP of this server.
     */
    reservedIpv4?: pulumi.Input<string>;
    /**
     * The ID of the startup script you want added to the server.
     */
    scriptId?: pulumi.Input<string>;
    /**
     * The ID of the Vultr snapshot that the server will restore for the initial installation. [See List Snapshots](https://www.vultr.com/api/#operation/list-snapshots)
     */
    snapshotId?: pulumi.Input<string>;
    /**
     * A list of SSH key IDs to apply to the server on install (only valid for Linux/FreeBSD).
     */
    sshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The status of the server's subscription.
     */
    status?: pulumi.Input<string>;
    /**
     * (Optional) The tag to assign to the server.
     *
     * @deprecated tag has been deprecated and should no longer be used. Instead, use tags
     */
    tag?: pulumi.Input<string>;
    /**
     * A list of tags to apply to the servier.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Generic data store, which some provisioning tools and cloud operating systems use as a configuration file. It is generally consumed only once after an instance has been launched, but individual needs may vary.
     */
    userData?: pulumi.Input<string>;
    /**
     * The main IPv6 network address.
     */
    v6MainIp?: pulumi.Input<string>;
    /**
     * The IPv6 subnet.
     */
    v6Network?: pulumi.Input<string>;
    /**
     * The IPv6 network size in bits.
     */
    v6NetworkSize?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a BareMetalServer resource.
 */
export interface BareMetalServerArgs {
    /**
     * Whether an activation email will be sent when the server is ready.
     */
    activationEmail?: pulumi.Input<boolean>;
    /**
     * The ID of the Vultr application to be installed on the server. [See List Applications](https://www.vultr.com/api/#operation/list-applications)
     */
    appId?: pulumi.Input<number>;
    /**
     * Whether the server has IPv6 networking activated.
     */
    enableIpv6?: pulumi.Input<boolean>;
    /**
     * The hostname to assign to the server.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The ID of the Vultr marketplace application to be installed on the server. [See List Applications](https://www.vultr.com/api/#operation/list-applications) Note marketplace applications are denoted by type: `marketplace` and you must use the `imageId` not the id.
     */
    imageId?: pulumi.Input<string>;
    /**
     * A label for the server.
     */
    label?: pulumi.Input<string>;
    /**
     * The ID of the operating system to be installed on the server. [See List OS](https://www.vultr.com/api/#operation/list-os)
     */
    osId?: pulumi.Input<number>;
    /**
     * The ID of the plan that you want the server to subscribe to. [See List Plans](https://www.vultr.com/api/#tag/plans)
     */
    plan: pulumi.Input<string>;
    /**
     * The ID of the region that the server is to be created in. [See List Regions](https://www.vultr.com/api/#operation/list-regions)
     */
    region: pulumi.Input<string>;
    /**
     * IP address of the floating IP to use as the main IP of this server.
     */
    reservedIpv4?: pulumi.Input<string>;
    /**
     * The ID of the startup script you want added to the server.
     */
    scriptId?: pulumi.Input<string>;
    /**
     * The ID of the Vultr snapshot that the server will restore for the initial installation. [See List Snapshots](https://www.vultr.com/api/#operation/list-snapshots)
     */
    snapshotId?: pulumi.Input<string>;
    /**
     * A list of SSH key IDs to apply to the server on install (only valid for Linux/FreeBSD).
     */
    sshKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (Optional) The tag to assign to the server.
     *
     * @deprecated tag has been deprecated and should no longer be used. Instead, use tags
     */
    tag?: pulumi.Input<string>;
    /**
     * A list of tags to apply to the servier.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Generic data store, which some provisioning tools and cloud operating systems use as a configuration file. It is generally consumed only once after an instance has been launched, but individual needs may vary.
     */
    userData?: pulumi.Input<string>;
}