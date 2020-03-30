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
                  <li key={newInfo._id} onClick={() => deleteNewInfo(newInfo._id)}><div>{newInfo.information}</div></li>
                )
              })
            )
            :
            (
              <li>Nada partilhado</li>
            )
      }
    </ul>
  )
}

export default ListNewInfo;