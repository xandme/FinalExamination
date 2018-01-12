/**
 * 
 */
$(document)
		.ready(
				function() {
					$
							.get(
									"/FinalExamination/list",
									function(data) {
										$('#stutable')
												.append(
														"<tr><th>学号</th><th>姓名</th><th>性别</th><th>专业</th><th>方向</th><th>技术</th><th>能力</th></tr>");
										for (i = 0; i < data.length; i++) {
											$('#stutable').append("<tr>");
											$('#stutable').append(
													"<td>" + data[i].stuNo
															+ "</td>");
											$('#stutable')
													.append(
															"<td>"
																	+ data[i].studentname
																	+ "</td>");
											$('#stutable').append(
													"<td>" + data[i].gender
															+ "</td>");
											$('#stutable').append(
													"<td>" + data[i].profession
															+ "</td>");
											$('#stutable').append(
													"<td>" + data[i].direction
															+ "</td>");
											$('#stutable').append(
													"<td>" + data[i].technology
															+ "</td>");
											$('#stutable').append(
													"<td>" + data[i].ability
															+ "</td>");
											$('#stutable').append("/<tr>");
										}
									});
					$('.Gender')
							.on(
									'click',
									function() {
										var a = $(this).attr("value");
										$
												.post(
														"/FinalExamination/Gen",
														{
															"gender" : a
														},
														function(data) {
															$('#stutable')
																	.empty();
															$('#stutable')
																	.append(
																			"<tr><th>学号</th><th>姓名</th><th>性别</th><th>专业</th><th>方向</th><th>技术</th><th>能力</th></tr>");
															for (i = 0; i < data.length; i++) {
																$('#stutable')
																		.append(
																				"<tr>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].stuNo
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].studentname
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].gender
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].profession
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].direction
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].technology
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].ability
																						+ "</td>");
																$('#stutable')
																		.append(
																				"/<tr>");
															}
														}, "json")
									})
					$('.Direction')
							.on(
									'click',
									function() {
										var a = $(this).attr("value");
										$
												.post(
														"/FinalExamination/Dir",
														{
															"direction" : a
														},
														function(data) {
															$('#stutable')
																	.empty();
															$('#stutable')
																	.append(
																			"<tr><th>学号</th><th>姓名</th><th>性别</th><th>专业</th><th>方向</th><th>技术</th><th>能力</th></tr>");
															for (i = 0; i < data.length; i++) {
																$('#stutable')
																		.append(
																				"<tr>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].stuNo
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].studentname
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].gender
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].profession
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].direction
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].technology
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].ability
																						+ "</td>");
																$('#stutable')
																		.append(
																				"/<tr>");
															}
														}, "json");
									})
					$('.findAll')
							.on(
									'click',
									function() {
										$
												.get(
														"/FinalExamination/list",
														function(data) {
															$('#stutable')
																	.empty();
															$('#stutable')
																	.append(
																			"<tr><th>学号</th><th>姓名</th><th>性别</th><th>专业</th><th>方向</th><th>技术</th><th>能力</th></tr>");
															for (i = 0; i < data.length; i++) {
																$('#stutable')
																		.append(
																				"<tr>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].stuNo
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].studentname
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].gender
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].profession
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].direction
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].technology
																						+ "</td>");
																$('#stutable')
																		.append(
																				"<td>"
																						+ data[i].ability
																						+ "</td>");
																$('#stutable')
																		.append(
																				"/<tr>");
															}
														}, "json");
									})
				})
