<?php
$put_array = array();
$saved = file_get_contents('cardata.ser');
if (! empty($saved) ) {
	$put_array = unserialize($saved);
}
$data = json_decode($_POST['data'],true);
$items = $data['Items'];
$detail = array();
foreach($items as $item) {
	$detail[] = $item['Value'];
}
$put_array[$_POST['year']][$_POST['make']] = $detail;
file_put_contents('cardata.ser',serialize($put_array));
