"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import datetime

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/log_in', methods=['POST'])
def handleLogIn():

    email = request.json.get('email')
    password = request.json.get('password')
    user = User.query.filter_by(email = email)
    if not user:
        return jsonify("User does not exist")
    
    if user.password != password:
        return jsonify("Incorrect password")
    # creating token
    expiration = datetime.timedelta(days = 3)
    access_token = create_access_token(identity = user.id, expires_delta = expiration)
    return jsonify({"message": "User logged in successfully", "token": access_token})
