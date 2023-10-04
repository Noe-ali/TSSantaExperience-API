import * as z from "zod";
export interface Event {
  event_id: number;
  event_name: string;
  event_date: string;
  event_admin_id: number;
  event_description: string;
  event_location: string;
}

const eventSchema = z.object({
  event_id: z.number(),
  event_name: z.string({
    required_error: "Event name is required",
  }),
  event_date: z.string({
    required_error: "Event date is required",
  }),
  event_admin_id: z.number({
    required_error: "Event admin ID is required",
  }),
  event_description: z.string().optional(),
  event_location: z.string().optional(),
});

export function validatePartialEvent(event: Partial<Event>) {
  return eventSchema.partial().safeParse(event);
}