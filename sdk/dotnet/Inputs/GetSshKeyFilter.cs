// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Vultr.Inputs
{

    public sealed class GetSshKeyFilterArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// Attribute name to filter with.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        [Input("values", required: true)]
        private List<string>? _values;

        /// <summary>
        /// One or more values filter with.
        /// </summary>
        public List<string> Values
        {
            get => _values ?? (_values = new List<string>());
            set => _values = value;
        }

        public GetSshKeyFilterArgs()
        {
        }
        public static new GetSshKeyFilterArgs Empty => new GetSshKeyFilterArgs();
    }
}
