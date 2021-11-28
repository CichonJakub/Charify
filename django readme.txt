1.Install python
    Check the version and if succesfully installed.
    >python --version
2.Install django package
	>pip install django
	If u have python version 3.*.* u can install by pip3
	>pip3 install django
3.Run the server on port 8080
	\charify_django>python manage.py runserver 8080
4.Check operation in browser
	http://localhost:8000/events or http://<SERVER_IP_ADDR>:8000/events
5.Admin site
    \charify_django>python manage.py migrate
    \charify_django>python manage.py createsuperuser
    in browser:
    http://localhost:8000/admin