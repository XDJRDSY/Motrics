
<!DOCTYPE html>

<html>

	<body>
	
		<script>
			
			//html.match("$[ ]*[0-9]+")
			
			html_retrieval(2€95, "EUR", "USD")
			
		</script>
	
	</body>

</html>


function html_retrieval(price, from_cur, to_cur) {

	var conversion = -1;

	$.ajax({
	   type: 'GET',
	   url: 'https://www.google.com/finance/converter?a' + price + '&from=' + from_cur + '&to=' + to_cur + '&meta=ei%3Dx5y_Vqn1GtSTmAHRzJbwDA',
	   success: function(html) {
		conversion = scrape_conversion(html);
	   }
	});	
	
	return conversion;
}

function tab_retrieval(){
	chrome.tabs.getSelected(null, function(tab)){
		d = document;
	}
}

function scrape_conversion()
	var x = document.getElementsByClassName("bld");
	return x;
}

function 