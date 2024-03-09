const MULTIPLICATION_EPSILON: bigint = 1_000_000_000n;

export function multiply(bigint: bigint, number: number): bigint {
    return bigint * BigInt(number * Number(MULTIPLICATION_EPSILON)) / MULTIPLICATION_EPSILON
}