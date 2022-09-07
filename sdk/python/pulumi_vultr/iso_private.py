# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['IsoPrivateArgs', 'IsoPrivate']

@pulumi.input_type
class IsoPrivateArgs:
    def __init__(__self__, *,
                 url: pulumi.Input[str]):
        """
        The set of arguments for constructing a IsoPrivate resource.
        """
        pulumi.set(__self__, "url", url)

    @property
    @pulumi.getter
    def url(self) -> pulumi.Input[str]:
        return pulumi.get(self, "url")

    @url.setter
    def url(self, value: pulumi.Input[str]):
        pulumi.set(self, "url", value)


@pulumi.input_type
class _IsoPrivateState:
    def __init__(__self__, *,
                 date_created: Optional[pulumi.Input[str]] = None,
                 filename: Optional[pulumi.Input[str]] = None,
                 md5sum: Optional[pulumi.Input[str]] = None,
                 sha512sum: Optional[pulumi.Input[str]] = None,
                 size: Optional[pulumi.Input[int]] = None,
                 status: Optional[pulumi.Input[str]] = None,
                 url: Optional[pulumi.Input[str]] = None):
        """
        Input properties used for looking up and filtering IsoPrivate resources.
        """
        if date_created is not None:
            pulumi.set(__self__, "date_created", date_created)
        if filename is not None:
            pulumi.set(__self__, "filename", filename)
        if md5sum is not None:
            pulumi.set(__self__, "md5sum", md5sum)
        if sha512sum is not None:
            pulumi.set(__self__, "sha512sum", sha512sum)
        if size is not None:
            pulumi.set(__self__, "size", size)
        if status is not None:
            pulumi.set(__self__, "status", status)
        if url is not None:
            pulumi.set(__self__, "url", url)

    @property
    @pulumi.getter(name="dateCreated")
    def date_created(self) -> Optional[pulumi.Input[str]]:
        return pulumi.get(self, "date_created")

    @date_created.setter
    def date_created(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "date_created", value)

    @property
    @pulumi.getter
    def filename(self) -> Optional[pulumi.Input[str]]:
        return pulumi.get(self, "filename")

    @filename.setter
    def filename(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "filename", value)

    @property
    @pulumi.getter
    def md5sum(self) -> Optional[pulumi.Input[str]]:
        return pulumi.get(self, "md5sum")

    @md5sum.setter
    def md5sum(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "md5sum", value)

    @property
    @pulumi.getter
    def sha512sum(self) -> Optional[pulumi.Input[str]]:
        return pulumi.get(self, "sha512sum")

    @sha512sum.setter
    def sha512sum(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "sha512sum", value)

    @property
    @pulumi.getter
    def size(self) -> Optional[pulumi.Input[int]]:
        return pulumi.get(self, "size")

    @size.setter
    def size(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "size", value)

    @property
    @pulumi.getter
    def status(self) -> Optional[pulumi.Input[str]]:
        return pulumi.get(self, "status")

    @status.setter
    def status(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "status", value)

    @property
    @pulumi.getter
    def url(self) -> Optional[pulumi.Input[str]]:
        return pulumi.get(self, "url")

    @url.setter
    def url(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "url", value)


class IsoPrivate(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 url: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        Create a IsoPrivate resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: IsoPrivateArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Create a IsoPrivate resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param IsoPrivateArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(IsoPrivateArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 url: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = IsoPrivateArgs.__new__(IsoPrivateArgs)

            if url is None and not opts.urn:
                raise TypeError("Missing required property 'url'")
            __props__.__dict__["url"] = url
            __props__.__dict__["date_created"] = None
            __props__.__dict__["filename"] = None
            __props__.__dict__["md5sum"] = None
            __props__.__dict__["sha512sum"] = None
            __props__.__dict__["size"] = None
            __props__.__dict__["status"] = None
        super(IsoPrivate, __self__).__init__(
            'vultr:index/isoPrivate:IsoPrivate',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            date_created: Optional[pulumi.Input[str]] = None,
            filename: Optional[pulumi.Input[str]] = None,
            md5sum: Optional[pulumi.Input[str]] = None,
            sha512sum: Optional[pulumi.Input[str]] = None,
            size: Optional[pulumi.Input[int]] = None,
            status: Optional[pulumi.Input[str]] = None,
            url: Optional[pulumi.Input[str]] = None) -> 'IsoPrivate':
        """
        Get an existing IsoPrivate resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _IsoPrivateState.__new__(_IsoPrivateState)

        __props__.__dict__["date_created"] = date_created
        __props__.__dict__["filename"] = filename
        __props__.__dict__["md5sum"] = md5sum
        __props__.__dict__["sha512sum"] = sha512sum
        __props__.__dict__["size"] = size
        __props__.__dict__["status"] = status
        __props__.__dict__["url"] = url
        return IsoPrivate(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="dateCreated")
    def date_created(self) -> pulumi.Output[str]:
        return pulumi.get(self, "date_created")

    @property
    @pulumi.getter
    def filename(self) -> pulumi.Output[str]:
        return pulumi.get(self, "filename")

    @property
    @pulumi.getter
    def md5sum(self) -> pulumi.Output[str]:
        return pulumi.get(self, "md5sum")

    @property
    @pulumi.getter
    def sha512sum(self) -> pulumi.Output[str]:
        return pulumi.get(self, "sha512sum")

    @property
    @pulumi.getter
    def size(self) -> pulumi.Output[int]:
        return pulumi.get(self, "size")

    @property
    @pulumi.getter
    def status(self) -> pulumi.Output[str]:
        return pulumi.get(self, "status")

    @property
    @pulumi.getter
    def url(self) -> pulumi.Output[str]:
        return pulumi.get(self, "url")

