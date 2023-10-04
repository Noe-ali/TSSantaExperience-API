import * as z from "zod";
export interface Participant { 
    participant_id: number;
    event_id: number;
    user_id: number;
    confirmed?: boolean;
    wishlist?: string;
}

const participantSchema = z.object({
    participant_id: z.number(),
    event_id: z.number({
        required_error: "Event ID is required",
    }),
    user_id: z.number({
        required_error: "User ID is required",
    }),
    confirmed: z.boolean().optional(),
    wishlist: z.string().optional(),
});

export function validatePartialParticipant(participant: Partial<Participant>) {
    return participantSchema.partial().safeParse(participant);
}