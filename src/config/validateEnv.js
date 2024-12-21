import { nonEmptyString, booleanString } from "../utils/zod/envZodConst.js";
import { z } from "zod";

const envValidationResult = z.object({}).safeParse({});

if (!envValidationResult.success) {
  console.error(
    "Invalid or missing environment variables:",
    envValidationResult.error.errors[0]?.path,
    envValidationResult.error.errors[0]?.message
  );
  process.exit(1);
}

const {} = envValidationResult.data;

if (
  Object.values(envValidationResult.data).some((value) => value === undefined)
) {
  console.error("Required environment variables are missing or invalid.");
  process.exit(1);
}

export const env = {};
