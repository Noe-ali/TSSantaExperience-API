import * as z from "zod";

export interface Prediction {
  prediction_id: number;
  event_id: number;
  user_id: number;
  giver_participant_id: number;
  receiver_participant_id: number;
  prediction_status: boolean;
}

const predictionSchema = z.object({
  prediction_id: z.number(),
  event_id: z.number({
    required_error: "Event ID is required",
  }),
  user_id: z.number({
    required_error: "User ID is required",
  }),
  giver_participant_id: z.number({
    required_error: "Giver participant ID is required",
  }),
  receiver_participant_id: z.number({
    required_error: "Receiver participant ID is required",
  }),
  prediction_status: z.boolean({
    required_error: "Prediction status is required",
  }),
});

export function validatePartialPrediction(prediction: Partial<Prediction>) {
  return predictionSchema.partial().safeParse(prediction);
}