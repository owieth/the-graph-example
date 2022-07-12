import { task } from "hardhat/config";
import { VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE } from "../constants";
//import { run } from "hardhat";
const hre = require("hardhat");

task("verifyTask", "Verifies Contract")
    .addParam("address", "The contract's address")
    .setAction(async (taskArgs) => {
        await hre.run("verify:verify", {
            address: taskArgs.address,
            constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
        });

        console.log("Contract has been verified!")
    });