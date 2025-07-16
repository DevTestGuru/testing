package com.vk.notesApp.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
@Data
public class Note {
	private int id;

	@NotBlank(message = "Title cannot be blank")
	private String title;

	@NotBlank(message = "Content cannot be blank")
	private String content;

	
}