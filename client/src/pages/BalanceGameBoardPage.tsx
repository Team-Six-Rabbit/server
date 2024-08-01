import Header from "@/components/header";
import BoardHeader from "@/components/Board/BoardHeader";
import { useEffect, useState } from "react";
import { categories } from "@/constant/boardCategory";
import { LiveStatus } from "@/types/Board/liveStatus";
import PlusButton from "@/components/Board/fanning/PlusButton";
import BalanceGameCard from "@/components/Board/bonfire/BalanceGameCard";
import { BalanceGameCardType } from "@/types/Board/balancegameCard";
import styled from "styled-components";
import { getBalanceGames } from "@/services/balanceGameService";
import { ApiResponse, BalanceGameResponse } from "@/types/api";

const BalanceGameBoardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const BoardCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 10px;
	width: 100%;
	max-width: 1050px;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

function BalanceGameBoardPage() {
	const [selectedCategory, setSelectedCategory] = useState<string>("전체");
	const [selectedStatus, setSelectedStatus] = useState<LiveStatus>("live");
	const [balanceGameState, setBalanceGameState] = useState<
		BalanceGameCardType[]
	>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchBalanceGames = async () => {
			try {
				setIsLoading(true);
				const categoryIndex = categories.findIndex(
					(category) => category.name === selectedCategory,
				);
				const status = selectedStatus === "live" ? 6 : 7;
				const response: ApiResponse<BalanceGameResponse[]> =
					await getBalanceGames(1, 10, categoryIndex, status);
				if (response.data)
					setBalanceGameState(
						response.data as unknown as BalanceGameCardType[],
					);
			} catch (error) {
				console.error("Failed to fetch balance games:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchBalanceGames();
	}, [selectedCategory, selectedStatus]);

	const handleCategorySelect = (category: string) => {
		setSelectedCategory(category);
	};

	const handleStatusSelect = (status: LiveStatus) => {
		setSelectedStatus(status);
	};

	const handleVote = (cardId: number, option: number) => {
		setBalanceGameState((prevState) => {
			const newState = prevState.map((card) => {
				if (card.id === cardId) {
					const updatedCard = { ...card };

					if (option === 0) {
						updatedCard.opinions[0].count += 1;
					} else {
						updatedCard.opinions[1].count += 1;
					}

					const newTotalVotes = updatedCard.opinions.reduce(
						(total, opinion) => total + opinion.count,
						0,
					);

					let percentage1 = Math.round(
						(updatedCard.opinions[0].count / newTotalVotes) * 100,
					);
					const percentage2 = Math.round(
						(updatedCard.opinions[1].count / newTotalVotes) * 100,
					);

					if (percentage1 + percentage2 !== 100) {
						percentage1 = 100 - percentage2;
					}

					updatedCard.opinions[0].percentage = percentage1;
					updatedCard.opinions[1].percentage = percentage2;

					return updatedCard;
				}
				return card;
			});
			return newState;
		});
	};

	const filteredBalanceGameState = balanceGameState.filter((card) => {
		if (selectedStatus === "live") {
			return card.currentState === 6;
		}
		if (selectedStatus === "ended") {
			return card.currentState === 7;
		}
		return false;
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Header />
			<div className="p-10 pt-20">
				<BoardHeader
					boardName="모닥불"
					categories={categories}
					selectedCategory={selectedCategory}
					onCategorySelect={handleCategorySelect}
					selectedStatus={selectedStatus}
					onStatusSelect={handleStatusSelect}
				/>
				<BalanceGameBoardContainer>
					<BoardCardContainer>
						{filteredBalanceGameState.map((card) => (
							<BalanceGameCard
								key={card.id}
								data={card}
								onVote={handleVote}
								disabled={selectedStatus === "ended"}
							/>
						))}
					</BoardCardContainer>
				</BalanceGameBoardContainer>
			</div>
			<PlusButton />
		</div>
	);
}

export default BalanceGameBoardPage;
