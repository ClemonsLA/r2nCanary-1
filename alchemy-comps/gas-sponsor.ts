import { provider } from "@/alchemy-comps/index";

// Find your Gas Manager policy id at:
//dashboard.alchemy.com/gas-manager/policy/create
const GAS_MANAGER_POLICY_ID = "YourGasManagerPolicyId";

// Link the provider with the Gas Manager. This ensures UOs
// sent with this provider get sponsorship from the Gas Manager.
provider.withAlchemyGasManager({
  policyId: GAS_MANAGER_POLICY_ID,
});
/*
// Here's how to send a sponsored UO from your smart account:
const { hash } = await provider.sendUserOperation({
  target: "0xTargetAddress",
  data: "0xCallData",
  value: 0n, // value in bigint or leave undefined
});*/