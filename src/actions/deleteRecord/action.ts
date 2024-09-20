"use server";

import { emirecords } from "../../api";
import { DeleteRecordProps } from "./types";

const errorMessage = "Deleting recprd failed.";

export async function deleteRecord({ event, start }: DeleteRecordProps) {
  try {
    const { error, response } = await emirecords.DELETE(
      "/records/{event}/{start}",
      {
        params: {
          path: { event, start },
        },
      },
    );

    return { error: error || !response.ok ? errorMessage : undefined };
  } catch (error) {
    return { error: errorMessage };
  }
}
