from random import randrange
import datetime

from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api, reqparse


app = Flask(__name__)
user = 'test-task'
base_name = 'test-task'
pwd = 'test-task-password'
host = 'localhost'

app.config["SQLALCHEMY_DATABASE_URI"] = f'mysql+pymysql://{user}:{pwd}@{host}/{base_name}'
db = SQLAlchemy(app)
api = Api(app)


class GraphTable(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    graph_type = db.Column(db.String(10), nullable=False)
    parameter_1 = db.Column(db.Integer, nullable=False)
    parameter_2 = db.Column(db.Integer, nullable=False)
    parameter_3 = db.Column(db.Integer, nullable=False)
    parameter_4 = db.Column(db.Integer, nullable=False)
    parameter_5 = db.Column(db.Integer, nullable=False)
    created_date = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    def __repr__(self):
        params = [self.parameter_1, self.parameter_2, self.parameter_3, self.parameter_4, self.parameter_4]
        return f'type {self.graph_type}. parameters: {", ".join(params)}'


class Graph(Resource):

    def get(self):
        graphs = [{'id': graph.id,
                   'graph_type': graph.graph_type,
                   'data': [graph.parameter_1,
                            graph.parameter_2,
                            graph.parameter_3,
                            graph.parameter_4,
                            graph.parameter_5]}
                  for graph in GraphTable.query.all()]

        return jsonify({'data': graphs})

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('graph_type', required=True)
        graph_type = parser.parse_args()
        new_graph = GraphTable(graph_type=graph_type['graph_type'],
                               parameter_1=randrange(0, 101, 1),
                               parameter_2=randrange(0, 101, 1),
                               parameter_3=randrange(0, 101, 1),
                               parameter_4=randrange(0, 101, 1),
                               parameter_5=randrange(0, 101, 1))
        db.session.add(new_graph)
        db.session.commit()
        data = [new_graph.parameter_1,
                new_graph.parameter_2,
                new_graph.parameter_3,
                new_graph.parameter_4,
                new_graph.parameter_5]
        return jsonify({'id': new_graph.id, 'graph_type': graph_type, 'data': data})


api.add_resource(Graph, '/')

if __name__ == '__main__':
    app.run(debug=True)
