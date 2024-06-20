import React from 'react';

function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="ENTER YOUR NAME" className="form-control" />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-primary btn-lg">ADD</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

