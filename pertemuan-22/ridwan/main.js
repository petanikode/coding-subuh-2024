import boostrap from "bootstrap";
import Wallet from "./wallet.js";

const dompet = new Wallet(1000);

console.log(dompet.balance);
