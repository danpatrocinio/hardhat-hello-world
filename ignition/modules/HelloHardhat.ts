import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HelloHardhat", (m) => {
  const contrato = m.contract("HelloHardhat");

  m.call(contrato, "getMessage", []);
  m.call(contrato, "setMessage", ["Contrato HelloHardhat deployed"]);
  m.call(contrato, "getMessage", []);

  return { contrato };
});