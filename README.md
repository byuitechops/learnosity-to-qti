# how to install just php
- go here : http://windows.php.net/download
- get the 5.6 one - not sure about the threrads
- unzip
- find the php.ini-development or production (i did development)
- copy and rename to just php.ini
- then edit that file
	- uncomment 734
		- extension_dir = "ext"
	- uncomment line 903
		- extension=php_openssl.dll
- add php folder to path
- cli vs cgi? 
	- http://stackoverflow.com/questions/15597067/how-to-run-php-from-windows-command-line
	- http://php.net/manual/en/features.commandline.php
	- http://php.net/manual/en/features.commandline.introduction.php

# first program
- http://php.net/manual/en/tutorial.firstpage.php
````
<?php 
echo '<p>Hello World</p>'; 
?> 
````

# install composer
- go to https://getcomposer.org/download/
- get Windows installer
- run it will ask for php location
	- well maybe it wont if you added php to the path already
# using composer installed packages
- example here
	- https://dzone.com/articles/including-php-libraries
- need this in your file
	- `require_once 'vendor/.composer/autoload.php';`
# learnousity and canvas qti
- https://community.canvaslms.com/ideas/8263-strengthen-canvas-import-ability-with-qti-files
- https://community.canvaslms.com/docs/DOC-10070
- https://github.com/Learnosity/learnosity-sdk-nodejs
- https://github.com/Learnosity/learnosity-qti
- https://docs.learnosity.com/authoring/qti/quickstart
- https://docs.learnosity.com/authoring/qti/demo
- https://docs.learnosity.com/analytics/data/index#
- https://docs.learnosity.com/authoring/qti/developerdocumentation/learnositytoqti