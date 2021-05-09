
web: daphne AINOTE.asgi:application --port $PORT --bind 0.0.0.0
worker: gunicorn --pythonpath finaicial_robot finaicial_robot.wsgi --log-file -