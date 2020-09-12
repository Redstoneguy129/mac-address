import { fail } from "https://deno.land/std/testing/asserts.ts";
import { getMac } from './get-mac-address.ts'

Deno.test("get mac address", async (): Promise<void> => {

    const actualMacAddress = await getMac()

    if (actualMacAddress === null || actualMacAddress === undefined || actualMacAddress.length > 17) {
        fail(`I got an unexpected Mac Address: ${actualMacAddress}`)
    }

    await Deno.close(4)
    await Deno.close(5)
});