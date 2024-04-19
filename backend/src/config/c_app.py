from const import Flask, _g, access_max_age, refresh_max_age
from src.routers import *

def config_app(app: Flask):    
    app.config["SQLALCHEMY_DATABASE_URI"] = f"postgresql://{_g('db_user')}:{_g('db_password')}@{_g('db_host')}/{_g('db_name')}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    app.config["SECRET_KEY"] = _g("secret_key")

    app.config["JWT_SECRET_KEY"] = _g("secret_key")
    app.config["JWT_TOKEN_LOCATION"] = ["cookies"]

    app.config["JWT_ACCESS_COOKIE_NAME"] = "access"
    app.config["JWT_ACCESS_CSRF_COOKIE_NAME"] = "access_csrf"
    app.config["JWT_ACCESS_TOKEN_EXPIRES"]  = access_max_age

    app.config["JWT_REFRESH_COOKIE_NAME"] = "refresh"
    app.config["JWT_REFRESH_CSRF_COOKIE_NAME"] = "refresh_csrf"
    app.config["JWT_REFRESH_TOKEN_EXPIRES"] = refresh_max_age

