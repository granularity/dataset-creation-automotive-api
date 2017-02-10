var years=['1989','1990','1991','1992','1993','1994',
				   '1995','1996','1997','1998','1999','2000',
					 '2001','2002','2003','2004','2005','2006',
					 '2007','2007','2008','2009','2010','2011',
					 '2012','2013','2014','2015','2016','2017'
				    ];

var makes = ['ford','hyundai','honda'];
var num_years = years.length;
var num_makes =  makes.length;
var i = 0;
var j = 0;

function build_list(year, make) {
	var url_base='http://automotive.bestquotes.com/ajax/vehicle/polk';
	var full_url = url_base + '?year='+year+'&make='+make;
	$.get(full_url, function(data, status) {
		$.post('save-ajax.php',{'data':data,'year':year,'make':make},function() {
			++j;
			if ( j >= num_makes ) {
				j = 0;
				++i;
			}
			if (i < num_years) {
				build_list(years[i],makes[j]);
			}
		});
	} );

}

build_list(years[i],num_makes[j]);
