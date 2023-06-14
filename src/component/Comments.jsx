import React, { useContext } from 'react'
import { DataContext } from '../Context'

function Comments() {
  const context = useContext(DataContext)
  const [comments] = context.commentApi.comments
  
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Comments</h3>
        </div>
      </div>
      <div className="row">
        {
          comments && comments.map((item,index) =>{
            return (
              <div className="col-md-4 mt-2mb-2" key={index}>
                <div className="card">
                  <div className="card-header">
                    <h4 className="text-success text-center">{item.name}</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Name</strong>
                        <span className="text-success float-end">{item.name}</span>
                      </li>
                      <li className="list-group-item">
                        <strong>email</strong>
                        <span className="text-success float-end">{item.email}</span>
                      </li>
                      <li className="list-group-item">
                        <strong>Id</strong>
                        <span className="text-success float-end">{item.id}</span>
                      </li>
                      <li className="list-group-item">
                        <strong>Body</strong>
                        <span className="text-success float-end">{item.body}</span>
                      </li>
                      
                     
                    </ul>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Comments
