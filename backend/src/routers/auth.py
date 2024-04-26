from const import *
from werkzeug.security import check_password_hash, generate_password_hash
from src.models import UsersTable

class SignUpRoute(Resource):
    url = "/auth/signup"

    def post(self) -> Response:
        data = request.get_json()
        user = db.query().filter_by(username=data["username"]).first()
        email = db.query().filter_by(data["email"]).first()

        if not user:
            if not email:
                data["password"] = generate_password_hash(data["password"])
                
                new_user = UsersTable(**data)
                uid = str(new_user.id)

                response = make_response(
                    jsonify(
                        uid=uid
                    ), 201
                )

                set_access_cookies(response, create_access_token(uid), access_max_age.seconds)
                set_access_cookies(response, create_refresh_token(uid), refresh_max_age.seconds)

                return response
            else:
                return make_response(
                    jsonify(
                        detail='Email has taken'
                    ), 409
                )
        else:
            return make_response(
                jsonify(
                    detail='User arleady exists'
                ), 409
            )





