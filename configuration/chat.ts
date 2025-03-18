import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hi there! I'm ${AI_NAME}, your startup idea assistant created by ${OWNER_NAME}. Ready to turn your ideas into business success!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Hmm, I’m having trouble generating a response right now. Let’s try again in a moment!`;
export const WORD_CUTOFF: number = 8000;
export const WORD_BREAK_MESSAGE: string = `You've reached the limit of this session. Let's take a short break and continue with fresh ideas!`;
export const HISTORY_CONTEXT_LENGTH: number = 7;
