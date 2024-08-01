import { Battle } from "./battle";
import { Opinion, Vote } from "./vote";

export interface ApiResponse<T> {
	code: "success" | "fail";
	msg?: string;
	data?: T;
}

export interface PageableResponse<T> {
	content: T;
	pageable: "INSTANCE";
	last: boolean;
	totalPages: number;
	totalElements: number;
	first: boolean;
	numberOfElements: number;
	size: number;
	number: number;
	sort: {
		empty: boolean;
		sorted: boolean;
		unsorted: boolean;
	};
	empty: boolean;
}

export interface JoinRequest {
	email: string;
	password: string;
	nickname: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface PageableParm {
	page?: number;
	size?: number;
	sort?: string;
}

export interface BattleInviteRequest extends Vote {
	oppositeUserId: number;
	opinions: string[];
	minPeopleCount: number;
	maxPeopleCount: number;
	battleRule: string;
}

export interface BattleHistoryRequestParam extends PageableParm {
	type: "received" | "sent";
}

export interface BattleResponse {
	battle: Battle;
	opinions: Opinion[];
}

export interface BattleInviteRespondRequest {
	battleId: number;
	respond: "accept" | "decline";
	content: string;
}

export interface SearchRecruitingBattleRequestParam extends PageableParm {
	category: number;
}

export interface ApplyBattleRequest {
	battleId: number;
	selectedOpinion: number;
}

export interface CreateBalanceGameRequest extends Vote {
	opinions: string[];
}

export interface SearchBalanceGameRequestParam extends PageableParm {
	category: number;
	status: number;
}

export interface BalanceGameResponse extends Vote {
	opinions: Opinion[];
	currentState: number;
	userVote?: number;
}
