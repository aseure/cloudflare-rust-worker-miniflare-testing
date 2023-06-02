export default {
  files: ["test/**/*.ts"],
  nodeArguments: ["--loader=ts-node/esm", "--experimental-vm-modules"],
  extensions: {
    ts: "module",
  },
};
