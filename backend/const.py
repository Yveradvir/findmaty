from flask import (
    Request, Response, Flask,
    jsonify, make_response, request
)

from flask_restful import Api, Resource
from flask_jwt_extended import (
    create_access_token, create_refresh_token,
    set_access_cookies, set_refresh_cookies,
    JWTManager, current_user, decode_token
)

from flask_cors import CORS

from datetime import datetime, timedelta, timezone
from os import path, environ
from dotenv import load_dotenv

load_dotenv(path.join(path.dirname(__file__), ".env"))
_g = lambda key: environ.get(key.upper(), default=None)

jwtmanager = JWTManager()

access_max_age = timedelta(minutes=49)
refresh_max_age = timedelta(hours=4)

from src.models import db