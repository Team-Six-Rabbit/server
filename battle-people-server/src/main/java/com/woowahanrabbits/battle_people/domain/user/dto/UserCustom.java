package com.woowahanrabbits.battle_people.domain.user.dto;

import lombok.Builder;

@Builder
public class UserCustom {
	private String email;
	private String password;
	private String nickname;
}
