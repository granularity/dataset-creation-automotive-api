# Automotive make/model dataset creation from Polk API

The original project needed to build an interface with various makes and automotive models. The provided API endpoints only allowed for data from a web browser. This solution allows for the collection of the necessary data via the index.php.

## Usage
From either localhost or a webserver load index.php which will load the getCarInfo.js script and build a list from relevant variables.
```php
var years=['1989','1990','1991','1992','1993','1994',
...

var makes = ['acura','alfa romeo','am general','amc', 
...
```

At the completion of the script, it will post the serialized data via save-ajax.php
```php
$put_array = array();
$saved = file_get_contents('cardata.ser');
...
$put_array[$_POST['year']][$_POST['make']] = $detail;
file_put_contents('cardata.ser',serialize($put_array));
```

### Example output
Unserialized:
```php
[audi] => Array
    (
        [0] => 100
        [1] => 100 E
        [2] => 100 quattro
        [3] => 200 quattro Turbo
        [4] => 200 Turbo
        [5] => 80
        [6] => 80 quattro
        [7] => 90
        [8] => 90 quattro
    )

[bmw] => Array
    (
        [0] => 3 Series 325I
        [1] => 3 Series 325is
        [2] => 3 Series 325iX
        [3] => 5 Series 525i
        [4] => 5 Series 535i
        [5] => 6 Series 633CSi
        [6] => 7 Series 735i
        [7] => 7 Series 735iL
        [8] => 7 Series 750iL
        [9] => M3
    )
```

Serialized:
```php
... s:4:"audi";a:9:{i:0;s:3:"100";i:1;s:5:"100 E";i:2;s:11:"100 quattro";i:3;s:17:"200 quattro Turbo";i:4;s:9:"200 Turbo";i:5;s:2:"80";i:6;s:10:"80 quattro";i:7;s:2:"90";i:8;s:10:"90 quattro";}s:3:"bmw";a:10:{i:0;s:13:"3 Series 325I";i:1;s:14:"3 Series 325is";i:2;s:14:"3 Series 325iX";i:3;s:13:"5 Series 525i";i:4;s:13:"5 Series 535i";i:5;s:15:"6 Series 633CSi";i:6;s:13:"7 Series 735i";i:7;s:14:"7 Series 735iL";i:8;s:14:"7 Series 750iL";i:9;s:2:"M3";} ...
```
