from . import db, InitialMixin

# todo: Обсудити це з командою потім
class UsersTable(db.Model, InitialMixin):
    """
    Represent the user table
    """
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(60), nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)

    def __init__(self, **kwargs) -> None:
        super().__init__(**kwargs)