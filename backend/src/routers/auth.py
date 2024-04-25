from const import *


class SignUpRoute(Resource):
    url = "/auth/signup"
    user = get.query().filter_by(username=username).first()
    if user:



    def post(self) -> Response:
        data = request.get_json()
        user = get.query().filter_by(username=username).first()
        email = get.query().filter_by(data["email"]).first()

        if not user:
            if not email:
                new_user = UserTable(**data)
            else:
                return make_response(
                    jsonify(
                        data=''
                    ), 201
                )
        else:
            return make_response(
                jsonify(
                    detail=''
                ), 409
            )





