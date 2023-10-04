import * as z from "zod";
export interface Assignment {
  assignment_id: number;
  event_id: string;
  giver_participant: number;
  receiver_participant: number;
}

const assignmentSchema = z.object({
  assignment_id: z.number(),
  event_id: z.string({
    required_error: "Event ID is required",
  }),
  giver_participant: z.number({
    required_error: "Giver participant ID is required",
  }),
  receiver_participant: z.number({
    required_error: "Receiver participant ID is required",
  }),
});


export function validatePartialAssignment(assignment: Partial<Assignment>) {
  return assignmentSchema.partial().safeParse(assignment);
}