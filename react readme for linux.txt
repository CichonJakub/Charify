1.Install node.js
	sudo apt update
	sudo apt install nodejs
	sudo apt install npm
	check: nodejs -v:
		if ver => 10.0.0: 
			ok -> 2
		else:
			nodejs.org - download at least v10.0.0
			>create directory for the binaries:
				sudo mkdir /usr/local/lib/node
			>unpack the archive in download folder
				sudo tar -xJvf node-v[version][distro].tar.xz (in download folder)
			>move the binaries to previously created folder
				sudo mv node-v[version][distro] /usr/local/lib/node/nodejs
			>set environment variables in ~/.profile file (add following lines)
				# NodeJS
				export NODEJS_HOME=/usr/local/lib/node/nodejs
				export PATH=$NODEJS_HOME/bin:$PATH
			>refresh profile
				. ~/.profile
2.Create the app using create-react-app
	npx create-react-app charify-react
	if any errors:
		npm audit fix [--force]
3.Run the app	
	cd charify-react
	npm start
4.Check operation in browser
	http://localhost:3000 or http://<SERVER_IP_ADDR>:3000
5.Install bootstrap
	npm install bootstrap
6.Install axios (for proxy)
	npm install axios
