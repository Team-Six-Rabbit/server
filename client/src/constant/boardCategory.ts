import { CardType } from "@/types/Board/liveBoardCard";

export const categories = [
	{ id: 7, name: "전체" },
	{ id: 0, name: "사랑" },
	{ id: 1, name: "일상" },
	{ id: 2, name: "음식" },
	{ id: 3, name: "연예" },
	{ id: 4, name: "게임" },
	{ id: 5, name: "스포츠" },
	{ id: 6, name: "기타" },
];

export const sampleCards: CardType[] = [
	{
		id: 1,
		title: "하늘에서 음식이 떨어진다면?",
		regist_user_id: "맛탐정",
		opposite_user_id: "식신",
		start_date: "2024-07-12T14:00:00",
		end_date: "2024-07-12T16:00:00",
		max_people_count: 50000,
		live_apply_user_count: 32000,
		category: 5,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/1",
		status: "live",
	},
	{
		id: 2,
		title: "당신의 집이 공중에 떠오른다면?",
		regist_user_id: "집순이",
		opposite_user_id: "탐험가",
		start_date: "2024-07-13T17:00:00",
		end_date: "2024-07-13T19:00:00",
		max_people_count: 200,
		live_apply_user_count: 150,
		category: 2,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/2",
		status: "upcoming",
	},
	{
		id: 3,
		title: "사람이 갑자기 거인이 된다면?",
		regist_user_id: "큰손",
		opposite_user_id: "작은손",
		start_date: "2024-07-14T14:00:00",
		end_date: "2024-07-14T16:00:00",
		max_people_count: 1000,
		live_apply_user_count: 800,
		category: 3,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/3",
		status: "ended",
	},
	{
		id: 4,
		title: "무중력 상태에서 요리하기",
		regist_user_id: "셰프왕",
		opposite_user_id: "요리사",
		start_date: "2024-07-15T14:00:00",
		end_date: "2024-07-15T16:00:00",
		max_people_count: 500,
		live_apply_user_count: 450,
		category: 4,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/4",
		status: "live",
	},
	{
		id: 5,
		title: "투명 인간이 된다면?",
		regist_user_id: "투명인",
		opposite_user_id: "보이지않음",
		start_date: "2024-07-16T14:00:00",
		end_date: "2024-07-16T16:00:00",
		max_people_count: 600,
		live_apply_user_count: 550,
		category: 1,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/5",
		status: "upcoming",
	},
	{
		id: 6,
		title: "동물과 대화할 수 있다면?",
		regist_user_id: "동물사",
		opposite_user_id: "말하는자",
		start_date: "2024-07-17T14:00:00",
		end_date: "2024-07-17T16:00:00",
		max_people_count: 700,
		live_apply_user_count: 680,
		category: 6,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/6",
		status: "ended",
	},
	{
		id: 7,
		title: "타임머신을 탄다면?",
		regist_user_id: "시간여행",
		opposite_user_id: "과거여행",
		start_date: "2024-07-18T14:00:00",
		end_date: "2024-07-18T16:00:00",
		max_people_count: 800,
		live_apply_user_count: 700,
		category: 7,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/7",
		status: "live",
	},
	{
		id: 8,
		title: "하늘을 날 수 있다면?",
		regist_user_id: "날개달림",
		opposite_user_id: "하늘바람",
		start_date: "2024-07-19T14:00:00",
		end_date: "2024-07-19T16:00:00",
		max_people_count: 900,
		live_apply_user_count: 850,
		category: 3,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/8",
		status: "upcoming",
	},
	{
		id: 9,
		title: "불을 조종할 수 있다면?",
		regist_user_id: "불꽃남자",
		opposite_user_id: "화염여자",
		start_date: "2024-07-20T14:00:00",
		end_date: "2024-07-20T16:00:00",
		max_people_count: 1000,
		live_apply_user_count: 950,
		category: 5,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/9",
		status: "ended",
	},
	{
		id: 10,
		title: "무한한 체력을 가진다면?",
		regist_user_id: "강철체력",
		opposite_user_id: "무한체력",
		start_date: "2024-07-21T14:00:00",
		end_date: "2024-07-21T16:00:00",
		max_people_count: 1100,
		live_apply_user_count: 1050,
		category: 2,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/10",
		status: "live",
	},
	{
		id: 11,
		title: "음악을 눈으로 본다면?",
		regist_user_id: "음악귀",
		opposite_user_id: "노래눈",
		start_date: "2024-07-22T14:00:00",
		end_date: "2024-07-22T16:00:00",
		max_people_count: 1200,
		live_apply_user_count: 1150,
		category: 4,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/11",
		status: "upcoming",
	},
	{
		id: 12,
		title: "빛의 속도로 달린다면?",
		regist_user_id: "빛달림",
		opposite_user_id: "속도마스터",
		start_date: "2024-07-23T14:00:00",
		end_date: "2024-07-23T16:00:00",
		max_people_count: 1300,
		live_apply_user_count: 1250,
		category: 1,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/12",
		status: "ended",
	},
	{
		id: 13,
		title: "빛의 속도로 달린다면?",
		regist_user_id: "빛달림",
		opposite_user_id: "속도마스터",
		start_date: "2024-07-23T14:00:00",
		end_date: "2024-07-23T16:00:00",
		max_people_count: 1300,
		live_apply_user_count: 1250,
		category: 1,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/12",
		status: "upcoming",
	},
	{
		id: 14,
		title: "빛의 속도로 달린다면?",
		regist_user_id: "빛달림",
		opposite_user_id: "속도마스터",
		start_date: "2024-07-23T14:00:00",
		end_date: "2024-07-23T16:00:00",
		max_people_count: 1300,
		live_apply_user_count: 1250,
		category: 1,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/12",
		status: "upcoming",
	},
	{
		id: 15,
		title: "바닷속에서 숨쉴 수 있다면?",
		regist_user_id: "스쿠버",
		opposite_user_id: "해양탐험가",
		start_date: "2024-07-24T14:00:00",
		end_date: "2024-07-24T16:00:00",
		max_people_count: 1400,
		live_apply_user_count: 1300,
		category: 5,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/15",
		status: "upcoming",
	},
	{
		id: 16,
		title: "동시에 두 곳에 있을 수 있다면?",
		regist_user_id: "분신술사",
		opposite_user_id: "쌍둥이",
		start_date: "2024-07-25T14:00:00",
		end_date: "2024-07-25T16:00:00",
		max_people_count: 1500,
		live_apply_user_count: 1400,
		category: 3,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/16",
		status: "ended",
	},
	{
		id: 17,
		title: "모든 언어를 이해할 수 있다면?",
		regist_user_id: "언어학자",
		opposite_user_id: "통역사",
		start_date: "2024-07-26T14:00:00",
		end_date: "2024-07-26T16:00:00",
		max_people_count: 1600,
		live_apply_user_count: 1500,
		category: 2,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/17",
		status: "live",
	},
	{
		id: 18,
		title: "중력을 조종할 수 있다면?",
		regist_user_id: "중력술사",
		opposite_user_id: "무중력",
		start_date: "2024-07-27T14:00:00",
		end_date: "2024-07-27T16:00:00",
		max_people_count: 1700,
		live_apply_user_count: 1600,
		category: 6,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/18",
		status: "upcoming",
	},
	{
		id: 19,
		title: "시간을 멈출 수 있다면?",
		regist_user_id: "시간지배자",
		opposite_user_id: "타임스탑",
		start_date: "2024-07-28T14:00:00",
		end_date: "2024-07-28T16:00:00",
		max_people_count: 1800,
		live_apply_user_count: 1700,
		category: 7,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/19",
		status: "ended",
	},
	{
		id: 20,
		title: "모든 것을 투명하게 만들 수 있다면?",
		regist_user_id: "투명화",
		opposite_user_id: "시각화",
		start_date: "2024-07-29T14:00:00",
		end_date: "2024-07-29T16:00:00",
		max_people_count: 1900,
		live_apply_user_count: 1800,
		category: 4,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/20",
		status: "live",
	},
	{
		id: 21,
		title: "생각만으로 물체를 움직일 수 있다면?",
		regist_user_id: "텔레키네시스",
		opposite_user_id: "마음의힘",
		start_date: "2024-07-30T14:00:00",
		end_date: "2024-07-30T16:00:00",
		max_people_count: 2000,
		live_apply_user_count: 1900,
		category: 1,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/21",
		status: "upcoming",
	},
	{
		id: 22,
		title: "사람의 마음을 읽을 수 있다면?",
		regist_user_id: "마음읽기",
		opposite_user_id: "심리학자",
		start_date: "2024-07-31T14:00:00",
		end_date: "2024-07-31T16:00:00",
		max_people_count: 2100,
		live_apply_user_count: 2000,
		category: 2,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/22",
		status: "live",
	},
	{
		id: 23,
		title: "불사신이 된다면?",
		regist_user_id: "불사신",
		opposite_user_id: "영원불멸",
		start_date: "2024-08-01T14:00:00",
		end_date: "2024-08-01T16:00:00",
		max_people_count: 2200,
		live_apply_user_count: 2100,
		category: 3,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/23",
		status: "ended",
	},
	{
		id: 24,
		title: "동물을 조종할 수 있다면?",
		regist_user_id: "동물왕",
		opposite_user_id: "동물의힘",
		start_date: "2024-08-02T14:00:00",
		end_date: "2024-08-02T16:00:00",
		max_people_count: 2300,
		live_apply_user_count: 2200,
		category: 6,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/24",
		status: "upcoming",
	},
	{
		id: 25,
		title: "어둠 속에서도 볼 수 있다면?",
		regist_user_id: "어둠의눈",
		opposite_user_id: "밤의눈",
		start_date: "2024-08-03T14:00:00",
		end_date: "2024-08-03T16:00:00",
		max_people_count: 2400,
		live_apply_user_count: 2300,
		category: 7,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/25",
		status: "ended",
	},
	{
		id: 26,
		title: "얼음을 생성할 수 있다면?",
		regist_user_id: "얼음왕",
		opposite_user_id: "빙하의힘",
		start_date: "2024-08-04T14:00:00",
		end_date: "2024-08-04T16:00:00",
		max_people_count: 2500,
		live_apply_user_count: 2400,
		category: 4,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/26",
		status: "live",
	},
	{
		id: 27,
		title: "순간이동할 수 있다면?",
		regist_user_id: "텔레포터",
		opposite_user_id: "이동마스터",
		start_date: "2024-08-05T14:00:00",
		end_date: "2024-08-05T16:00:00",
		max_people_count: 2600,
		live_apply_user_count: 2500,
		category: 1,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/27",
		status: "upcoming",
	},
	{
		id: 28,
		title: "빛을 조종할 수 있다면?",
		regist_user_id: "빛의지배자",
		opposite_user_id: "광선술사",
		start_date: "2024-08-06T14:00:00",
		end_date: "2024-08-06T16:00:00",
		max_people_count: 2700,
		live_apply_user_count: 2600,
		category: 5,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/28",
		status: "ended",
	},
	{
		id: 29,
		title: "우주를 여행할 수 있다면?",
		regist_user_id: "우주탐험가",
		opposite_user_id: "행성탐험가",
		start_date: "2024-08-07T14:00:00",
		end_date: "2024-08-07T16:00:00",
		max_people_count: 2800,
		live_apply_user_count: 2700,
		category: 7,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/29",
		status: "live",
	},
	{
		id: 30,
		title: "지구를 지배할 수 있다면?",
		regist_user_id: "지배자",
		opposite_user_id: "통치자",
		start_date: "2024-08-08T14:00:00",
		end_date: "2024-08-08T16:00:00",
		max_people_count: 2900,
		live_apply_user_count: 2800,
		category: 6,
		image_uri: "https://picsum.photos/400/400",
		live_uri: "https://live.example.com/30",
		status: "upcoming",
	},
];
