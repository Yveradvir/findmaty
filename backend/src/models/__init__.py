import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class InitialMixin(object):
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated = db.Column(db.DateTime, onupdate=datetime.datetime.utcnow)

    def to_dict(self):
        """Return a dictionary representation of the object."""
        model_dict = {}
        for column in self.__table__.columns:
            model_dict[column.name] = getattr(self, column.name)
        return model_dict

from .badTokens import BadTokensTable
from .user import UsersTable