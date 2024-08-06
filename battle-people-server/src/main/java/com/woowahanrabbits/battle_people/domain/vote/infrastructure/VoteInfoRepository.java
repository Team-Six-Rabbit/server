package com.woowahanrabbits.battle_people.domain.vote.infrastructure;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.woowahanrabbits.battle_people.domain.vote.domain.VoteInfo;

@Repository
public interface VoteInfoRepository extends JpaRepository<VoteInfo, Long> {

	Page<VoteInfo> findAllByCurrentState(int currentState, Pageable pageable);

	Page<VoteInfo> findAllByCategoryAndCurrentState(Integer category, int currentState, Pageable pageable);

	List<VoteInfo> findByEndDateBeforeAndCurrentState(Date now, int currentState);

	List<VoteInfo> findByStartDateBeforeAndCurrentState(Date time, int currentState);
}

