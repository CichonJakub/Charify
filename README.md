# Charify
Project for MTP classes at AGH Uni.
![szkic architektury final](https://user-images.githubusercontent.com/68612501/141842883-7c28f495-076b-4b55-a3ae-bd14cb273e0c.png)

React installation:

1.Install node.js: \
  ~/Charify$ sudo apt update \
	~/Charify$ sudo apt install nodejs \
	~/Charify$ sudo apt install npm \
	check: ~/Charify$ nodejs -v \
		if ver => 10.0.0: \
			ok -> 2 \
		else: \
			nodejs.org - download at least v10.0.0 \
			-create directory for the binaries: \
				~/Charify$ sudo mkdir /usr/local/lib/node \
			-unpack the archive in download folder: \
				~/Charify$ sudo tar -xJvf node-v[version][distro].tar.xz (in download folder) \
			-move the binaries to previously created folder: \
				~/Charify$ sudo mv node-v[version][distro] /usr/local/lib/node/nodejs \
			-set environment variables in ~/.profile file (add following lines): \
				# NodeJS \
				~/Charify$ export NODEJS_HOME=/usr/local/lib/node/nodejs \
				~/Charify$ export PATH=$NODEJS_HOME/bin:$PATH \
			-refresh profile: \
				~/Charify$ . ~/.profile \
                
2.No need to create the app using create-react-app, at it is already created in charify-react folder \

3.Install bootstrap: \
	~/Charify$ npm install bootstrap \
    
4.Install axios (for proxy): \
	~/Charify$ npm install axios \
    
5.Run the app	 \
    ~/Charify$ cd charify-react \
	~/Charify/charify-react$ npm start \
    if error with react-scripts: \
        ~/Charify/charify-react$ npm install react-scripts \
    else if any other errors: \
        ~/Charify/charify-react$ npm audit fix [--force] \
        
6.Check operation in browser: \
	http://localhost:3000 or http://<SERVER_IP_ADDR>:3000 \
  
Django installation: \

1.Install python: \
    ~/Charify$ sudo apt install python \
    -check the version if succesfully installed \
        ~/Charify$ python --version \
        
2.Install django package: \
	~/Charify$ pip install django \
	if python version 3.*.* u can use pip3 in this and next steps: \
	~/Charify$ pip3 install django \
    
3.Install additional packages from requirements.txt file: \
    ~/Charify$ pip install -r requirements.txt \
    if any problems with Pillow: \
        ~/Charify$ pip install pillow \
        
4.Run the server : \
	~/Charify/charify_django$ python manage.py runserver \
    if any problems with migrations: \
        ~/Charify/charify_django$ python manage.py makemigrations \
        ~/Charify/charify_django$ python manage.py migrate
        
5.Check operation in browser: \
	http://localhost:8000/api/events or http://<SERVER_IP_ADDR>:8000/api/events \
    
6.Check admin site operation in browser \
    http://localhost:8000/admin/events or http://<SERVER_IP_ADDR>:8000/admin/events
