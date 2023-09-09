export interface Prediction {
  prediction_id: number;
  event_id: number;
  user_id: number;
  giver_participant_id: number;
  receiver_participant_id: number;
  prediction_status: boolean;
}
