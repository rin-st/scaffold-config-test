export const preConfigContent = `
// Custom variables
const CUSTOM_API_KEY = process.env.CUSTOM_API_KEY;
`;

export const configOverrides = {
  targetNetworks: ["$$chains.base$$"],
  pollingInterval: 12_345,
  onlyLocalBurnerWallet: false,
};
