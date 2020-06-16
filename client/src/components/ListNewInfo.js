import React from 'react';

const ListNewInfo = ({ newInfos, deleteNewInfo }) => {

  return (
    <ul>
      <li id='title'><div>Informações</div></li>
      {
        newInfos &&
          newInfos.length > 0 ?
            (
              newInfos.map(newInfo => {
                return (
                  <li key={newInfo._id}>
                    <div className='bigWidth'><a href={newInfo.information} target="_blank" rel="noopener noreferrer">{newInfo.information}</a></div>
                    <div className='smallWidth'>
                      <button className='delete' onClick={() => deleteNewInfo(newInfo._id)}>Delete</button>
                    </div>
                  </li>
                )
              })
            )
            :
            (
              <li><div>Nada partilhado</div></li>
            )
      }
    </ul>
  )
}

export default ListNewInfo;