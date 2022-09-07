// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Vultr.Outputs
{

    [OutputType]
    public sealed class KubernetesNodePools
    {
        /// <summary>
        /// Enable the auto scaler for the default node pool.
        /// </summary>
        public readonly bool? AutoScaler;
        /// <summary>
        /// Date node was created.
        /// </summary>
        public readonly string? DateCreated;
        /// <summary>
        /// Date of node pool updates.
        /// </summary>
        public readonly string? DateUpdated;
        /// <summary>
        /// ID of node.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The label to be used as a prefix for nodes in this node pool.
        /// </summary>
        public readonly string Label;
        /// <summary>
        /// The maximum number of nodes to use with the auto scaler.
        /// </summary>
        public readonly int? MaxNodes;
        /// <summary>
        /// The minimum number of nodes to use with the auto scaler.
        /// </summary>
        public readonly int? MinNodes;
        /// <summary>
        /// The number of nodes in this node pool.
        /// </summary>
        public readonly int NodeQuantity;
        /// <summary>
        /// Array that contains information about nodes within this node pool.
        /// </summary>
        public readonly ImmutableArray<Outputs.KubernetesNodePoolsNode> Nodes;
        /// <summary>
        /// The plan to be used in this node pool. [See Plans List](https://www.vultr.com/api/#operation/list-plans) Note the minimum plan requirements must have at least 1 core and 2 gbs of memory.
        /// </summary>
        public readonly string Plan;
        /// <summary>
        /// Status of node.
        /// </summary>
        public readonly string? Status;
        /// <summary>
        /// Tag for node pool.
        /// </summary>
        public readonly string? Tag;

        [OutputConstructor]
        private KubernetesNodePools(
            bool? autoScaler,

            string? dateCreated,

            string? dateUpdated,

            string? id,

            string label,

            int? maxNodes,

            int? minNodes,

            int nodeQuantity,

            ImmutableArray<Outputs.KubernetesNodePoolsNode> nodes,

            string plan,

            string? status,

            string? tag)
        {
            AutoScaler = autoScaler;
            DateCreated = dateCreated;
            DateUpdated = dateUpdated;
            Id = id;
            Label = label;
            MaxNodes = maxNodes;
            MinNodes = minNodes;
            NodeQuantity = nodeQuantity;
            Nodes = nodes;
            Plan = plan;
            Status = status;
            Tag = tag;
        }
    }
}
