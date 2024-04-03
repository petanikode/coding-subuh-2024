import { test, expect } from "vitest";
import Wallet, { BalanceError } from "./Wallet.js";

test("Buat object wallet", () => {
  const dompet = new Wallet(1000);
  expect(dompet).toBeInstanceOf(Wallet);
  expect(dompet.balance).toEqual(1000);
});

test("Topup dengan amount yang valid", () => {
  const dompet = new Wallet(1000);
  dompet.topUp(1000);
  expect(dompet.balance).toEqual(2000);
});

test("Topup dengan amount yang invalid", () => {
  const dompet = new Wallet(1000);
  expect(() => {
   dompet.topUp(-1000) 
  }).toThrowError(BalanceError);

  expect(() => {
   dompet.topUp("SEJUTA") 
  }).toThrowError(BalanceError);
});


test("Withdraw dengan amount yang valid", () => {
  const dompet = new Wallet(1000);
  dompet.withdraw(500);
  expect(dompet.balance).toEqual(500);
});

test("Withdraw dengan amount yang invalid", () => {
  const dompet = new Wallet(1000);
  expect(() => {
   dompet.withdraw(-1000) 
  }).toThrowError(BalanceError);

  expect(() => {
   dompet.withdraw(999999) 
  }).toThrowError(BalanceError);

  expect(() => {
   dompet.withdraw("SEJUTA") 
  }).toThrowError(BalanceError);
});
