<?php

function most_similar($input, $list) {
	$input = strtoupper($input);
	$tst_pct  = 0;
	$max_pct = 0;
	$best_match = '';
	foreach($list as $valid) {
		$valid = strtoupper($valid);
		similar_text($valid,$input,$tst_pct);
		if ($txt_pct >= 100) {
			return $valid;
		}
		if ($tst_pct > $max_pct) {
			$best_match = $valid;
			$max_pct = $tst_pct;
		}

	}
	return $best_match;
}
