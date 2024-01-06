from flask import jsonify


def hello_world(request):
    return jsonify(
        {
            "message": "Hello World!"
        }
    )