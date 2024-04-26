from const import *
from src.models import UsersTable

class UserInformation(Resource):
    url = "/user/<uid:int>"

    def get(self, uid) -> Response:
        user = UsersTable.query.filter_by(id=uid).first()

        if user:
            return make_response(
                jsonify(
                    subdata=user.to_dict()
                ), 200
            )
        else:
            return make_response(
                jsonify(
                    detail="User not found"
                ), 404
            )