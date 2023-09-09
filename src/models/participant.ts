export interface Participant { 
    participant_id: number;
    event_id: number;
    user_id: number;
    confirmed?: boolean;
    wishlist?: string;
}